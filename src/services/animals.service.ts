import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from '../app/models/animals';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/animals';

  getAnimals(): Observable<Animals[]> {
    return this.httpClient.get<Animals[]>(this.apiUrl);
  }
}
