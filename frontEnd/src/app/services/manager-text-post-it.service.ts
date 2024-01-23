import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../const';
import { insertText } from '../DTO/textDTO';

@Injectable({
  providedIn: 'root'
})
export class ManagerTextPostItService {

  private endpoints = API_ENDPOINTS;

  constructor(private http: HttpClient) { }

  insertNewPostIt(postit: insertText): Observable<insertText>  {
    return this.http.post<insertText>(this.endpoints.insertText(), postit);
  }

  selectAllPostIt(): Observable<insertText[]>  {
    return this.http.get<insertText[]>(this.endpoints.selectAllText());
  }

}
