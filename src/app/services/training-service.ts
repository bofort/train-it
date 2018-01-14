import { Training } from "../models/training";
import { Http, Headers } from '@angular/http'
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TrainingService {

    constructor(private _httpService: Http) { }

    public GetToken(headers:Headers) : any {
        var url = "https://portal-qascm.arvato.com/sites/MMDev/New Train IT/_api/contextinfo";
        return this._httpService.post(url,{headers:headers})
                .map((res:any) => res);
    }

    public GetTrainings(headers:Headers) : any{
        var url = "https://portal-qascm.arvato.com/sites/MMDev/New Train IT/_api//web/lists/GetByTitle('Trainings')/items";
        return this._httpService.get(url,{headers:headers})
                .map((res:any) => res);
    }

}