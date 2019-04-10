import { Component, OnInit, Input } from '@angular/core';
 import { TeamsServiceService } from '../shared/teams-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  team = [
    { id: 1, name: 'sumo' , university: 'insat', state: 'ready'}
  ];

  constructor(private teamsService: TeamsServiceService) { }


  ngOnInit() {
    // this.teamsService.getTeams().subscribe(data => {
    //   this.teams.push(data);
    //  },err => console.log(err));
  }

  deletesumo(id) {
     this.teamsService.deleteTeams(id).subscribe(data => console.log(data));
   console.log(id);
  }
  addsumo(team) {
    console.log(team);
     this.teamsService.addTeam(team).subscribe();
  }

  sendTeam(team) {
    if (team.name) {
      this.team.push(team);
    }
  }

  updatesumo(team) {
    this.teamsService.updateTeams(team).subscribe(
      (error) => {
        return console.log(error);
      });
  }


}
