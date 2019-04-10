import { Component, OnInit, Input } from '@angular/core';
import { TeamsjuniorService } from '../shared/teams-junior.service';


@Component  ({
  selector: 'app-formltcr',
  templateUrl: './formltcr.component.html',
  styleUrls: ['./formltcr.component.scss']
})

export class FormltcrComponent implements OnInit {
  team = [
    { id: 1, name: 'ltcr' , university: 'insat', state: 'ready'}

  ];

  constructor(private teamsService: TeamsjuniorService) { }


  ngOnInit() {
  //   this.teamsService.getTeams().subscribe(data => {
  //     this.teams.push(data);
  //   },err => console.log(err));
  }

  delete(id) {
     this.teamsService.deleteTeams(id).subscribe(data => console.log(data));
   console.log(id);
  }
  addltcr(team) {
    console.log(team);
     this.teamsService.addTeam(team).subscribe();
  }

  sendTeam(team) {
    if (team.name) {
      this.team.push(team);
    }
  }
  updateltcr(team) {
    this.teamsService.updateTeams(team).subscribe(
      (error) => {
        return console.log(error);
      });
  }



}
