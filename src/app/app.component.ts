import { Component } from '@angular/core';
// import { NGB_DIRECTIVES , NGB_PRECOMPILE} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" routerLink="/dashboard">Dashboard</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/heroes">Heroes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/websocket">Websocket</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/swiper">Swiper</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!--<p>
     <ngb-alert [dismissible]="false">
     <strong>Warning!</strong> Better check yourself, you're not looking too good.
     </ngb-alert>
    </p>-->
   <router-outlet></router-outlet>
  `,
  styleUrls:['app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
