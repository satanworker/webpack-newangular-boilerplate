import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Router, ROUTER_DIRECTIVES,Routes} from '@angular/router';
// import './styl/test.styl';
import {ROUTER_PROVIDERS} from "@angular/router";
import {AppComponent} from "./app.component/app.component";
import {DataService} from "./common/data.service";
import {GlobalService} from "./common/global.service";

bootstrap( <any> AppComponent, [
    ROUTER_DIRECTIVES,
    DataService,
    GlobalService,
    ROUTER_PROVIDERS
]);
