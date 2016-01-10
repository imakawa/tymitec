import {Component, OnInit} from 'angular2/core';
import {Hero} from './interface/hero/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {NavbarComponent} from './navbar.components';

@Component({
  selector: 'my-app',
  template:`
  <navbar></navbar>
  `,
  directives: [NavbarComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
