import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../service/crud.service';
import { event } from '../model/event';
import { panier } from '../model/panier';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events!: any[];
  panier: panier[] = [];
  item!: any[];
  e!: event;
  id: number= 1;
  panierId:number =1;
  router: any;

  totalEvents: number = 0;
  upcomingEvents: number = 0;
  pastEvents: number = 0;

  
  constructor(private http: HttpClient,  private crudService : CrudService) { }

  ngOnInit() {
    this.getEvents();
    this.getStatistics();
    
  }

  getStatistics(): void {
    this.crudService.getevents().subscribe((events) => {
      this.totalEvents = events.length;
      const today = new Date();
      this.upcomingEvents = events.filter(event => new Date(event.dateEvenement) >= today).length;
      this.pastEvents = events.filter(event => new Date(event.dateEvenement) < today).length;
    });
  }
  addEvent(id: number) {
    this.crudService.id = id;
    this.router.navigate(['/details/' + id]);
  }


    getEvents() {
      console.log('test');
      this.http.get<any[]>('http://localhost:8040/events').subscribe(
        response => {
          this.events = response;
        
        },
        error => {
          console.log('Une erreur s\'est produite lors de la récupération des événements:', error);
        }
      );
    }

    deleteEv(idp : number, ide: number,e:event) {

      if (confirm('Are you sure you want to delete  ?')) {


        this.crudService.deleteE(idp,ide).subscribe({
          next: (val: any) => {
            e.nbplace = e.nbplace+1;
            this.updating(e);
            alert(' deleted successfully');
            this.getEvents();
            this.crudService.getPanier().subscribe(
              (data: panier[]) => this.panier = data)
  
          },
          error: (err: any) => {
            console.error(err);
          }
        }
       
        );
        
      }
    }
  
    updating(event : event) {
      
        this.crudService.updateEvent(event).subscribe();
      
    }

    ajouterEvenementAuPanier(panierId: number, event: event): void {
     

      if (event.nbplace > 0) {
        event.nbplace = event.nbplace - 1;
        console.log(event.nbplace);
    
        this.crudService.ajouterEvenementAuPanier(panierId, event).subscribe(
          (response: panier) => {
            console.log(event);
            console.log('Événement ajouté au panier :', response);
          },
          (error) => {
            console.log(event);
            console.error('Erreur lors de l\'ajout de l\'événement au panier :', error);
          }
        );
      } else {
        alert('No more places available for this event.');
      }
    }

    confirm(e : event){
      e.nbplace--;

    }


    getPanier() {
      this.crudService.getPanier().subscribe(
        (data: panier[]) => {
          this.panier = data;
         // Store the retrieved panier data in the component property
        },
        (error) => {
          console.error('Error while fetching the panier:', error);
          // Handle the error (e.g., show an error message to the user)
        }
      );
    }


    countEventsInPanier(): number {
      if (this.panier) {
        return this.panier.reduce((total, currentPanier) => total + currentPanier.events.length, 0);
      }
      return 0;
    }


    

  }
