import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  info = {
    nom: "Bertrand",
    email: "digiscia@tech.net",
    tel: "0661326837"
  };

  comments: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  addComment(value: string) {
    if (value != '') {
      this.comments.push(value);
    }
  }





}
