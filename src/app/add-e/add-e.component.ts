import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { event } from '../model/event';

@Component({
  selector: 'app-add-e',
  templateUrl: './add-e.component.html',
  styleUrls: ['./add-e.component.css']
})
export class AddEComponent implements OnInit {

  
  event: event = new event();

  constructor(private crudService : CrudService, private router: Router) { }

  ngOnInit(): void {
  }
  add() {
    
    this.crudService.postevent(this.event).subscribe(
      {
        next: (val: any) => {
          alert('done');
          this.router.navigate(["/espaceadmin"]);

        },
        error: (err: any) => {
          console.error(err);
        }
      }
    );
    ;
  }
}
