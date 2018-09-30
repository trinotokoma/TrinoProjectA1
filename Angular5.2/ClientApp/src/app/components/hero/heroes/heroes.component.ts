import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { fadeInOut } from '../../../services/animations';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.services';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  animations: [fadeInOut]
})

export class HeroesComponent implements OnInit {
  private heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
