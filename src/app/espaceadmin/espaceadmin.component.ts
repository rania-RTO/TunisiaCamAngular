  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { PopupService } from '../service/popup.service';

import { ElementRef } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { event } from '../model/event';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-espaceadmin',
    templateUrl: './espaceadmin.component.html',
    styleUrls: ['./espaceadmin.component.css']
  })
  export class EspaceadminComponent implements OnInit {

    events!: event[];

 
     event: event= new event();
  

  
    msg !: string;
    ide!: number;


    public isPopupOpen !: boolean; 
    
    constructor(private http: HttpClient, private crudService : CrudService, private elementRef: ElementRef,  private router: Router) { }

    ngOnInit(): void {
      this.crudService.getevents().subscribe(
        (data: event[]) => this.events = data)
      console.log(this.isPopupOpen);
      
    }

    addEvent(id: number) {
      this.crudService.id = id;
      this.router.navigate(['/details/' + id]);
    }


    /*
    openPopup(ide: number): void {
      this.isPopupOpen = true;
      this.ide = ide;
    this.crudService.getevent(ide)
    
      this.http.get<any>(`http://localhost:8040/events/${ide}`).subscribe(
        response => {
          // Assigner les valeurs récupérées aux variables
          this.nomEvenement = response.nomEvenement;
          this.description = response.description;
          this.place = response.place;
          this.dateEvenement = response.dateEvenement;
        },
        error => {
          console.log("Une erreur s'est produite lors de la récupération des détails de l'événement :", error);
        }
      );
    }
    */

    update(e: event) {
      this.crudService.updateEvent(e).subscribe(
        (data:event) => {
          this.event = data;
          console.log('Données du campsite :', this.event);
        },
        error => {
          console.error('Erreur lors de la récupération des données du campsite :', error);
        }
      );
    }
  
    
    updating(event : event) {
      if (confirm('Are you sure you want to update ' + event.nomEvenement + ' ?')) {
        this.crudService.updateEvent(event).subscribe(
          (event : event) => {
            alert('Campsite updated successfully');
            this.crudService.getevents().subscribe(
              (data:event[]) => this.events = data)
          },
          error => {
            console.error('Erreur lors de la mise à jour du evenement :', error);
  
          }
        );
      }
    }

    closePopup(): void {
      this.isPopupOpen = false;
      this.getEvents();
    }


  
    add(){
      this.router.navigate(['/adde']);
    }
  




    getEvents() {
      console.log('test');
      this.crudService.getevents();
    }

    supprimerEvenement(e : event) {
    if (confirm('Are you sure you want to delete ' + e.nomEvenement + ' ?')) {
      this.crudService.deleteEvent(e).subscribe({
        next: (val: any) => {
          alert('Campsite deleted successfully');
          this.crudService.getevents().subscribe(
            (data: event[]) => this.events = data)

        },
        error: (err: any) => {
          console.error(err);
        }
      }
      );
    }
  }

/*
    modifierEvenement(): void {
      if (!this.ide) {
        console.error(this.ide);
        return;
      }

      const url = `http://localhost:8040/update_event/${this.ide}`;

      const eventData = {
        nomEvenement: this.nomEvenement,
        description: this.description,
        place: this.place,
        dateEvenement: this.dateEvenement
      };

      this.http.put(url, eventData)
        .subscribe(
          (response) => {
            console.log('Événement modifié avec succès :', response);
            // Réinitialiser les champs de formulaire
          
            this.nomEvenement = '';
            this.description = '';
            this.place = '';
            this.dateEvenement = '';
          },
          error => {
            console.error('Une erreur s\'est produite lors de la modification de l\'événement :', error);
          }
        );
    }
    */
  
  }
