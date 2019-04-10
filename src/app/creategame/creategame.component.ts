import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.scss']
})
export class CreategameComponent implements OnInit {

  game = [
    { id: 1, teamname: 'insat' , university: 'insat', competition: 'sumo'},
    { id: 2, teamname: 'insat' , university: 'insat', competition: 'ltcr '},
    { id: 3, teamname: 'insat' , university: 'insat', competition: 'junior'},
    { id: 4, teamname: 'insat' , university: 'insat', competition: 'ltcr'},
    { id: 5, teamname: 'insat' , university: 'insat', competition: 'sumo'},
    { id: 6, teamname: 'insat' , university: 'insat', competition: 'junior'}

  ];

  @Input() games;

  constructor() { }

  ngOnInit() {
  }

  // delete(id) {
  //   this.deleteGame.emit(id);
  //  }




}
