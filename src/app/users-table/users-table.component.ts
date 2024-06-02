import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {


  public users: { name: string, phoneNumber: string, address: NamedCurve, email: string }[] = [{
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
  }];
  constructor(private router: Router, private http: HttpClient,private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.getUsers()
  }
 

  getUsers() {
    this.http.get('http://localhost:3000/api/user/info').subscribe((response: any) => {
      // Handle success
      console.log(response)
      this.users = [];
      this.users = response.users
    }, error => {
      // Handle error
    });
  }

  deleteUser(phoneNumber:string) {
    this.http.delete(`http://localhost:3000/api/user/delete?phoneNumber=${phoneNumber}`).subscribe((response: any) => {
      // Handle success
      console.log(response)
      return alert("User deleted");
      
    }, error => {
      // Handle error
    });
  }

  navigateToAddPage() {
    this.router.navigate(['/add']);
  }
  


  async navigateToEdit(event: Event, phoneNumber: string) {
    const eventTarget = event.target as HTMLSelectElement
    console.log(eventTarget.value);
    switch (eventTarget.value) {
      case 'edit':
        this.router.navigate(['/edit/', phoneNumber]);
        break;
      case 'view':
        this.router.navigate(['/view/', phoneNumber]);
        break;
      case 'delete':
        await this.deleteUser(phoneNumber);
        window.location.reload()
        break;
        case 'download':
          await this.downloadPdf(phoneNumber);
          
          break;
      default:
        break;
    }
    
  }


  downloadPdf(phoneNumber: string) {
    const url = `http://localhost:3000/api/user/pdf?phoneNumber=${phoneNumber}`;
    // Create temporary anchor element and trigger download
    const tempLink = document.createElement('a');
    tempLink.href = url ;
    tempLink.setAttribute('download', `${phoneNumber}.pdf`); // Set the download attribute
    document.body.appendChild(tempLink);
    tempLink.click();

    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(tempLink);
    }, 100);
  }

}
