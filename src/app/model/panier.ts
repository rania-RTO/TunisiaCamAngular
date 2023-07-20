import { event } from "./event";

export class panier {
    id: number;
    events: event[]; // Assumez que vous avez également un modèle Event pour représenter les événements
  
  
    constructor(id: number, events: event[]) {
      this.id = id;
      this.events = events;
      
    }
  }