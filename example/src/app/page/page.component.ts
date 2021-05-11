import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  Username:any
  Password:any
  text :any
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.Username !== undefined && this.Password !== undefined ){
      this.text = "Welcome to angular"
    }
}

}
