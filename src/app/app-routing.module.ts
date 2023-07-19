import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
   {path:'events',component : EventsComponent},
   {path:'addEvent/:id',component : AddEventComponent},
   {path:'deleteevent',component : DeleteEventComponent},
   {path:'updateevent',component : UpdateEventComponent},
   {path:'footer',component : FooterComponent},
   {path:'navbar',component : NavbarComponent},
   {path:'espaceadmin',component : EspaceadminComponent},
   {path:'home',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
