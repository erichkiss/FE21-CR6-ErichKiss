import { Component, OnInit } from '@angular/core';
import { travels } from '../travels'

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
  listTravels = travels;
  constructor() { }

  ngOnInit(): void {
  }

}
