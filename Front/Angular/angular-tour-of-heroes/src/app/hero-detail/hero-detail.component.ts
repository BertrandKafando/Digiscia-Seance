import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/heros';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Output() delete = new EventEmitter<Hero>();

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('idHero'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onDelete() {
    console.log('delete');
    this.delete.emit(this.hero);
  }

}
