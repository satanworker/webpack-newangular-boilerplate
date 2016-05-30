import {Component, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {PortfolioItemComponent} from "./portfolioItem/portfolioItem.component";
import {DataService} from "../common/data.service";
import {GlobalService} from "../common/global.service";
import {PortfolioItemDetailComponent} from "./portfolioItemDetail/portfolioItemDetail.component";
@Component({
    selector: 'portfolio',
    template: require('./portfolio.template.html'),
    providers: [PortfolioItemComponent],
    directives: [ROUTER_DIRECTIVES, PortfolioItemComponent]
})


export class PortfolioComponent {
    private portfolioItems:any;
    private openedItem: number;

    constructor(private dataService: DataService, private globalService: GlobalService){
        this.portfolioItems = dataService.portfolioItems;
    }

    detailClicked(args){
        console.log('detailClicked', args);
    }
}