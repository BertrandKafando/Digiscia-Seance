import { HttpClient } from '@angular/common/http';
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
  commentsFromBackend: string[] = [];

  constructor(private httpClientModule: HttpClient) { }

  ngOnInit(): void {

  }

  addComment(value: string) {
    if (value != '') {
      this.comments.push(value);
    }
  }


  getAllComments() {

    this.httpClientModule.get('http://localhost:8082/localhost:8082/prepSign/all')
      .subscribe(
        (response) => {
          console.log(response);
          this.commentsFromBackend = response as string[];
        }
      );

  }








}
