import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent {
  public pdfSrc:string|SafeResourceUrl = '';
  constructor(private router: Router , private route: ActivatedRoute,private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      console.log(params); 
      console.log(this.route.url);
      this.pdfSrc = `http://localhost:3000/api/user/view-pdf?phoneNumber=${params.id}`;
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc as string);
    });
  }

  navigateToHomedPage() {
    this.router.navigate(['']);
  }

}
