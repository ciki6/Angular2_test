import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';
import { SwiperModule } from 'angular2-swiper-wrapper';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';


import { HeroService } from './hero.service';
import { HeroesComponent} from './heroes.component';
import { AppComponent} from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent  } from './dashboard.component';
import { HeroSearchComponent  } from './hero-search.component';
import { WebSocketComponent  } from './websocket.component';
import { SwiperComponent  } from './swiper.component';
import { AppRoutingModule }     from './app-routing.module';
import './rxjs-extensions';
import '../test.js';
require('!style-loader!css-loader!../styles.css');
require('!style-loader!css-loader!../../node_modules/bootstrap/dist/css/bootstrap.css');



const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    WebSocketComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SwiperModule.forRoot(SWIPER_CONFIG),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]

})

export class AppModule { }
