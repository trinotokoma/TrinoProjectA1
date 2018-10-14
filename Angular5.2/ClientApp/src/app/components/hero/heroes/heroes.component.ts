import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { fadeInOut } from '../../../services/animations';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.services';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  animations: [fadeInOut]
})

export class HeroesComponent implements OnInit {
  private heroes: Hero[];
  public nameBinding: string;
  public masterNameBinding: string;
  private heroesShared: Hero[];

  constructor(private heroService: HeroService, private shareService: ShareService) { }

  ngOnInit() {
    this.nameBinding = "Ejemplo";
    this.masterNameBinding = "Ejemplo Master";
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

    this.shareService.listHero$.subscribe(newListHero => console.log(newListHero));
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onClick() {
    this.shareService.listHero.next(this.heroes);
  }
}
