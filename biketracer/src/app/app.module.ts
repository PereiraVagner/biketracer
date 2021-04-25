import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudModule } from './crud/crud.module';

import { environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbIconModule, NbActionsModule, NbSearchModule, NbContextMenuModule, NbMenuService, NbMenuModule } from '@nebular/theme';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, FormsModule,
    CrudModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbIconModule,
    NbActionsModule,
    NbContextMenuModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
