import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe((data) => {
        this.heroes = data;
      });
  }
}
