import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeamsltcrService {
  teams: any[];



  constructor(private http: HttpClient) {

  }

  addTeam( team: any) {
    return this.http.post('localhost:8080/api/teamsltcr', team);
  }

  getTeams() {
    return this.http.get('localhost:8080/api/teamsltcr');

  }

  deleteTeams(id) {
    return this.http.delete('localhost:8080/api/teamsltcr' + id);

  }

  updateTeams(teamUpdated) {
    return this.http.put('localhost:8080/api/teamsltcr', teamUpdated);
  }

}
