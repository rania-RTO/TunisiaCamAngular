import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  nomEvenement!: string;
  description!: string;
  place!: string;
  nbpersonne!: number;
  dateEvenement!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const event = {
      nomEvenement: this.nomEvenement,
      description: this.description,
      place: this.place,
      nbpersonne: this.nbpersonne,
      dateEvenement: this.dateEvenement
    };

    this.http.post('http://localhost:8040/add_event', event)
      .subscribe(response => {
        console.log('Événement ajouté avec succès:', response);
        // Vous pouvez effectuer d'autres actions ici après l'ajout de l'événement
      }, error => {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'événement:', error);
      });
  }
}
