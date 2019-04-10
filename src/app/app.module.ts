import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
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


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FormComponent,
    MatchComponent,
    FormjuniorComponent,
    FormltcrComponent,
    CreategameComponent,
    SteadyComponent,
    IngameComponent,
    GettingreadyComponent,
    DoneComponent,
    ValidatedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
