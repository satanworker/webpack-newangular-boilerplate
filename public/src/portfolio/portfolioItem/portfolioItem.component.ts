import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {PortfolioComponent} from "../portfolio.component";
import {GlobalService} from "../../common/global.service";
@Component({
    selector: 'portfolioItem',
    template: require('./portfolioItem.template.html'),
})
export class PortfolioItemComponent {
    @Input()
        item;
    @Output() detailClicked;
    
    constructor(private globalService: GlobalService, private router: Router){
        console.log('portfolioItem here');
        this.detailClicked  = globalService.clickPortfolioItem;
    }
    
    clickPortfolioItem(){
        this.router.navigate(['/project', this.item.id]);

    }
}