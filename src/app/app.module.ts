import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule } from '@angular/forms';

import { UpdateEventComponent } from './update-event/update-event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEComponent } from './add-e/add-e.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AddEventComponent,

    UpdateEventComponent,
    FooterComponent,
    NavbarComponent,
    EspaceadminComponent,
    HomepageComponent,
    AddEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
