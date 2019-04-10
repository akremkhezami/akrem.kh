import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  @Input() teams ;
  @Output() deleteTeam: EventEmitter<any> = new EventEmitter();
  @Output() updateTeam: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) {
   }

   ngOnInit() {
   }


   delete(id) {
    this.deleteTeam.emit(id);
   }

   update(team) {
    this.updateTeam.emit(team);
  }

}
