import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events!: any[];
  panier: any[] = [];
  item!: any[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEvents();
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

  


  ajouterAuPanier(event: any) {
    this.panier.push(event);

    console.log('pannier ajouté')
  }
  

  supprimerDuPanier(event: any) {
    const index = this.panier.indexOf(event);
    if (index > -1) {
      this.panier.splice(index, 1);
    }
  }
  
  confirmer(panier: any){
    console.log(panier)
    ;

  }
}
