import { Component } from '@angular/core';
import { Hero } from '../models/heros';
import { HEROES } from '../models/mock-heros';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getHeroes();
    console.log("finisheds");
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

    console.log(this.heroes);
  }




  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  alert() {
    alert('Hello World!');
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
    this.selectedHero = undefined;
  }

}
