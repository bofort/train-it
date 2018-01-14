import { Component,OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { Observable } from "rxjs/Observable";
import { Training } from "../../models/training";
import { TrainingService } from "../../services/training-service";

@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./view/app.component.css'],
  providers: [TrainingService]
})
export class AppComponent implements OnInit {
  
  constructor(private _httpService: Http,private _service: TrainingService) { }

  training: Training;

  ngOnInit() {
    var headers = new Headers();
    
    headers.append('Accept', 'application/json;odata=verbose');
    //headers.append('X-RequestDigest', '0x23C388C950894DC4321D541D6309B6555409971E4F4E2218E7E2DBB0A65D7E964EBFE049E77AE1D968BAF4A164B4AECEBC3897F3EFDC02A2CDAD6E53ECBC240E,14 Jan 2018 22:06:13 -0000');

    // this._service.GetToken(headers).subscribe(
    //   (data) => console.log(data._body),
    //   (error) => console.log(error)
    // );

    this._service.GetTrainings(headers).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    
  }

}
