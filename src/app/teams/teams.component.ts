import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TeamsServiceService } from '../shared/teams-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    name;
    university;

    @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private teamService: TeamsServiceService, public router: Router) {
  }

  ngOnInit() {
  }

  add(name, university) {
    this.change.emit(name);
    this.change.emit(university);
  }




}
