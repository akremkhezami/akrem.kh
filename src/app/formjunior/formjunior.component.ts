import { Component, OnInit, Input } from '@angular/core';
import { TeamsServiceService } from '../shared/teams-service.service';

@Component  ({
  selector: 'app-formjunior',
  templateUrl: './formjunior.component.html',
  styleUrls: ['./formjunior.component.scss']
})
export class FormjuniorComponent implements OnInit {
  team = [
    { id: 1, name: 'junior1' },
    { id: 2, name: 'junior2' },
    { id: 3, name: 'junior3' }
  ];

  constructor(private teamsService: TeamsServiceService) { }


  ngOnInit() {
  //   this.teamsService.getTeams().subscribe(data => {
  //     this.teams.push(data);
  //   },err => console.log(err));
  }

  deletejunior(id) {
     this.teamsService.deleteTeams(id).subscribe(data => console.log(data));
   console.log(id);
  }
  addjunior(team) {
    console.log(team);
     this.teamsService.addTeam(team).subscribe();
  }

  sendTeam(team) {
    if (team.name) {
      this.team.push(team);
    }
  }
  updatejunior(team) {
    this.teamsService.updateTeams(team).subscribe(
      (error) => {
        return console.log(error);
      });
  }

}
