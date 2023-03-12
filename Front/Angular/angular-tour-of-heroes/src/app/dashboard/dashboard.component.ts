import { Component } from '@angular/core';
import { Hero } from '../models/heros';
import { HeroService } from '../services/hero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [];
  test: any;
  constructor(private heroService: HeroService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getApiData();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getApiData() {
    this.http.get('https://randomuser.me/api').subscribe((data) => {
      console.log(data);
      this.test = data;
    });
  }
}
