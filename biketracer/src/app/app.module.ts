import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudModule } from './crud/crud.module';

import { environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, CrudModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCk5y5ZYJ1vWgKorpw3XnWNypDdaa4PJFk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
