import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id + '',
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //noinspection TypeScriptUnresolvedFunction
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    //noinspection TypeScriptUnresolvedFunction
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}


