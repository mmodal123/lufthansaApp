import { Component, OnInit } from '@angular/core';
import { LufthansaDataService } from './lufthansa-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lufthansaApp';

  constructor(private dataService: LufthansaDataService) {
  }

  ngOnInit() {

    this.dataService.getInformation().subscribe(data => console.log(data));

  }
}
