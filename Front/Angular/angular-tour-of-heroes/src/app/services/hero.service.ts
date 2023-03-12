import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/heros';
import { HEROES } from '../models/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: HttpClient,) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
  }
}
