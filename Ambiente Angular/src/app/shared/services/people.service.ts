import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople() : Observable<any>{
    let peopleArray= [{
      firstName: 'Rodrigo',
      lastName:'Xavier',
      age: 26
    },{
      firstName: 'João',
      lastName:'Silva',
      age: 28
    },{
      firstName: 'Maria',
      lastName:'Pereira',
      age: 22
    },{
      firstName: 'Mayara',
      lastName:'Santos',
      age: 27
    }];
    return of(peopleArray);
  }
}
