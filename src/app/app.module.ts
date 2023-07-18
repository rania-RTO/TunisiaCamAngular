import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule } from '@angular/forms';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AddEventComponent,
    DeleteEventComponent,
    UpdateEventComponent,
    FooterComponent,
    NavbarComponent,
    EspaceadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
