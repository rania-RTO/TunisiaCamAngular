import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';

import { UpdateEventComponent } from './update-event/update-event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEComponent } from './add-e/add-e.component';


const routes: Routes = [
   {path:'events',component : EventsComponent},
   {path:'adde',component : AddEComponent},
   {path:'details/:id',component : AddEventComponent},

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
