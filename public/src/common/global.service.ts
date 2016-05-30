import {Injectable, EventEmitter} from "@angular/core";
@Injectable()

export class GlobalService{
    public clickPortfolioItem: EventEmitter<any> = new EventEmitter();
    constructor(){

    }
}