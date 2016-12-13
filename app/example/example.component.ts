import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Component({
    selector: 'example',
    templateUrl: 'app/example/example.component.html'
})

export class ExampleComponent {
  result:Array<Object>;
  constructor(http: Http) {
    console.log("Friends are being called");
    http.get('friends.json')
    .map(response => response.json())
      .subscribe(result => this.result =result);
    }
}
