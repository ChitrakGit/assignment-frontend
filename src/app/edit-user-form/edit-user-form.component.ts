import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {
  public users:{name:string,phoneNumber:string,address:NamedCurve,email:string}[] = [];
  public user: {name:string,phoneNumber:string,address:NamedCurve,email:string} = {
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
  };
  public phoneNumber:string = ''
  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(async(params: any) => {
      console.log(params); 
      this.phoneNumber = params.id
    });
    if(this.phoneNumber)
      await this.getUserData()
  }

  getUserData(){
    console.log("--")
    this.http.get(`http://localhost:3000/api/user/info?phoneNumber=${this.phoneNumber}`).subscribe((response:any) => {
      // Handle success
      if(response.success){
        delete response.users[0]['_id']
        this.user = response.users[0]
      }
    }, error => {
      // Handle error
    });
  }

 async onSubmit() {
    console.log(this.user)
    if(this.phoneNumber)
      await this.editUser();
    else
      await this.addUser()
  }

  editUser(){
    this.http.post('http://localhost:3000/api/user/edit-info', this.user).subscribe((response:any) => {
      // Handle success
      if(response.success){
        this.router.navigate(['']);
      }
    }, error => {
      // Handle error
    });
  }

  addUser(){
    this.http.post('http://localhost:3000/api/user/add-info', this.user).subscribe((response:any) => {
      // Handle success
      if(response.success){
        this.router.navigate(['']);
      }
    }, error => {
      // Handle error
    });
  }

  onSubmitAdd() {
    console.log(this.user)
    
  }


}
