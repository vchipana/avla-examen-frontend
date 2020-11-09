import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from './views/login/login.component';
import { LoginService } from './views/login/login.service';
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
    FormsModule,
    CommonModule,
    HttpClientModule,
    
    AppRoutingModule,
    
    ModalModule.forRoot(),
  ],
  providers: [LoginService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
