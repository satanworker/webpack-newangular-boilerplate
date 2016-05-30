import {Component, OnInit} from "@angular/core";
import {Observable} from 'rxjs/Observable';
require('../assets/materialize/materialize.scss');
import {HeaderComponent} from "../header/header.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {MainPageComponent} from "../mainPage/mainPage.component";


import {Router, ROUTER_DIRECTIVES,Routes, ROUTER_PROVIDERS} from '@angular/router';
import {PortfolioItemComponent} from "../portfolio/portfolioItem/portfolioItem.component";
import {PortfolioItemDetailComponent} from "../portfolio/portfolioItemDetail/portfolioItemDetail.component";

@Routes([
    { path: '/',                   component: MainPageComponent        },
    { path: '/portfolio',          component: PortfolioComponent       },
    { path: '/project/:id',      component: PortfolioItemDetailComponent   }
    // { path: '/gallery/:id/:image', component: Gallery }
])


@Component({
    selector: 'app',
    template: require('./app.template.html'),
    directives: <any> [ROUTER_DIRECTIVES, HeaderComponent, MainPageComponent],
    providers: [HeaderComponent, ROUTER_PROVIDERS]
})
export class AppComponent {
    constructor(private router: Router){
        //this.router.navigate(['/']);
    }
}