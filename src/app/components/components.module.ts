import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamsComponent } from '../teams/teams.component';
import { LoginComponent } from '../login/login.component';
import { TableListComponent } from '../table-list/table-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TeamsComponent,
    LoginComponent,
    TableListComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TeamsComponent,
    LoginComponent,
    TableListComponent

  ]
})
export class ComponentsModule { }
