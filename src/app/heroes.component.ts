import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl : 'heroes.component.html',

  styleUrls: [ 'heroes.component.css' ]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heros';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
                private router: Router) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    //noinspection TypeScriptUnresolvedFunction
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}


