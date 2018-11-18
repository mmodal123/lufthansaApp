import { Component, OnInit } from '@angular/core';
import { FlightSchedule } from '../flight-schedule';
import { LufthansaDataService } from '../lufthansa-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private dataService: LufthansaDataService) { }

  flightSchedule = new FlightSchedule('', '', '', '');

  ngOnInit() {  }

  clear() {

  }

  onSubmit() {

    this.dataService.getInformation(this.flightSchedule).subscribe(data => console.log(data));
  console.log(this.flightSchedule);

  }

}
