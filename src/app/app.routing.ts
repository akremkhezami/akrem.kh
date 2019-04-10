import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { MatchComponent } from './match/match.component';
import { FormjuniorComponent } from './formjunior/formjunior.component';
import { FormltcrComponent } from './formltcr/formltcr.component';
import { CreategameComponent } from './creategame/creategame.component';
import { SteadyComponent } from './status/steady/steady.component';
import { IngameComponent } from './status/ingame/ingame.component';
import { GettingreadyComponent } from './status/gettingready/gettingready.component';
import { DoneComponent } from './status/done/done.component';
import { ValidatedComponent } from './status/validated/validated.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'sumoteam',
    component: FormComponent
  },
  { 
    path: 'validated',
    component: ValidatedComponent
  },
  {
    path: 'creategame',
    component: CreategameComponent
  },
  {
  path: 'juniorteam',
    component: FormjuniorComponent
  },
  {
    path: 'ltcrteam',
      component: FormltcrComponent
    },
    {
      path: 'steady',
        component: SteadyComponent
      },
      { 
        path: 'ingame',
          component: IngameComponent
        },
          { 
            path: 'gettingready',
              component: GettingreadyComponent
            },
            { 
              path: 'done',
                component: DoneComponent
              },
           {
    
    path: 'currentmatch',
    component: MatchComponent
       }
  ,{
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
