import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HighlightDirective }  from './highlight.directive';
import { routing }             from './hero.routing';

// TODO: Remove in RC 6
import { HeroService }         from './hero.service';

@NgModule({
  imports: [ CommonModule, FormsModule, routing ],
  // TODO: Remove in RC 6
  providers: [ HeroService ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
    HighlightDirective
  ]
})
export class HeroModule { }