import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {CORE_DIRECTIVES} from "@angular/common";
@Component(
    {
        selector: 'header',
        template: require('./header.template.html'),
        directives: <any> [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    }
)

export class HeaderComponent {
    constructor() {
        console.log('header here');
    }
}