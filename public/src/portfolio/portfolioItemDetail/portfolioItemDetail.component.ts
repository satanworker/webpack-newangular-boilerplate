import {Component, Input, Output, EventEmitter} from "@angular/core";
import {RouteSegment, Router} from "@angular/router";
import {PortfolioComponent} from "../portfolio.component";
import {GlobalService} from "../../common/global.service";
import {DataService} from "../../common/data.service";
@Component({
    selector: 'portfolioItemDetail',
    template: require('./portfolioItemDetail.template.html'),
})
export class PortfolioItemDetailComponent {
    private curSegment: RouteSegment;
    private item: any;
    routerOnActivate(curr: RouteSegment) {
        this.curSegment = curr;

        let id = +curr.getParam('id');
        this.item = this.dataService.portfolioItems[id];
        console.log(this.item);
    }
    
    constructor(private globalService: GlobalService, private dataService: DataService, private router: Router){
        console.log('portfolioItem here ');
    }

    goBack(){
        this.router.navigate(['/portfolio']);
    }
}