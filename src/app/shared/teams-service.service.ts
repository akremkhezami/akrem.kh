import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {
  teams: any[];

  constructor(private http: HttpClient) {

  }

  addTeam( team: any) {
    return this.http.post('localhost:8080/api/teams', team);
  }

  getTeams() {
    return this.http.get('localhost:8080/api/teams');
  }

  deleteTeams(id) {
    return this.http.delete('localhost:8080/api/teams/' + id);

  }

  updateTeams(teamUpdated) {
    return this.http.put('localhost:8080/api/teams', teamUpdated);
  }

}
