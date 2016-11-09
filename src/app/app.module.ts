import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';


import { HeroService } from './hero.service';
import { HeroesComponent} from './heroes.component';
import { AppComponent} from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent  } from './dashboard.component';
import { HeroSearchComponent  } from './hero-search.component';

import './rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]

})

export class AppModule { }
