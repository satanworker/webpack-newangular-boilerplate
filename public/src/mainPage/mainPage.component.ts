import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CORE_DIRECTIVES} from "@angular/common";

@Component({
    selector: 'mainPage',
    template: require('./mainPage.template.html'),
    directives: [ROUTER_DIRECTIVES],
})
export class MainPageComponent {
    constructor(){
        console.log('main here');
    }
}