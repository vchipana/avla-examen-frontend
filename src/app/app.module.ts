import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from './views/login/login.component';
import { TareasComponent } from './views/tareas/tareas.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    TareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
