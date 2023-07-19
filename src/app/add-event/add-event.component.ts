import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { event } from '../model/event';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})



export class AddEventComponent {

  id: number = 0;
  event: event= new event();
 
  constructor(private router: Router, private crudService : CrudService) {}


  ngOnInit() {
    this.id = this.crudService.id;
    this.crudService.getEventById(this.id).subscribe(
      (data: event) => {console.log(data);
        this.event = data;
      
      })





      
    }

}
