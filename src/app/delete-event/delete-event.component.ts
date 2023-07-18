import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  eventId!: number;
  msg !: string;
  constructor(private http: HttpClient) {}

  supprimerEvenement(): void {
    if (!this.eventId) {
      console.error('Veuillez entrer l\'ID de l\'événement à supprimer.');
      return;
    }

    const url = `http://localhost:8040/delete_event/${this.eventId}`;

    this.http.post(url, null)
      .subscribe(
        () => {
          console.log('Événement supprimé avec succès.');
          this.msg=('Événement supprimé avec succès.');
          
        },
        error => {
          console.error('Une erreur s\'est produite lors de la suppression de l\'événement :', error);
          this.msg=('Une erreur s\'est produite lors de la suppression de l\'événement :');
        }
      );
  }
}
