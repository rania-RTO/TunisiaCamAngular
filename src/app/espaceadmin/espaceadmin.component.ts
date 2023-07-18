  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { PopupService } from '../service/popup.service';
import { log } from 'console';

  @Component({
    selector: 'app-espaceadmin',
    templateUrl: './espaceadmin.component.html',
    styleUrls: ['./espaceadmin.component.css']
  })
  export class EspaceadminComponent implements OnInit {
    events!: any[];
  
    msg !: string;
    ide!: number;
    id!: number;
    nomEvenement!: string;
    description!: string;
    place!: string;
    dateEvenement!: string;


    public isPopupOpen !: boolean; 
    
    constructor(private http: HttpClient, private popupService: PopupService) { }

    ngOnInit(): void {
      this.getEvents();
      console.log(this.isPopupOpen);
      
    }

    openPopup(ide: number): void {
      this.isPopupOpen = true;
      this.ide=ide;
      console.log(ide);
      console.log(this.isPopupOpen);

    }
    
    closePopup(): void {
      this.isPopupOpen = false;
    }


    getEvents() {
      console.log('test');
      this.http.get<any[]>('http://localhost:8040/events').subscribe(
        response => {
          this.events = response;
          console.log(this.events);
        },
        error => {
          console.log('Une erreur s\'est produite lors de la récupération des événements:', error);
        }
      );
    }

    supprimerEvenement(eventId: number): void {
      if (!eventId) {
        console.log(eventId);
        console.error("Veuillez entrer l'ID de l'événement à supprimer.");
        return;
      }
    
      const url = `http://localhost:8040/delete_event/${eventId}`;
    
      this.http.post(url, null).subscribe(
        () => {
          console.log("Événement supprimé avec succès.");
          this.msg = "Événement supprimé avec succès.";
          this.getEvents();
        },
        error => {
          console.error("Une erreur s'est produite lors de la suppression de l'événement :", error);
          this.msg = "Une erreur s'est produite lors de la suppression de l'événement :";
        }
        
      );
    }


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
    

  }
