import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../const';
import { insertText, selectAllText } from '../DTO/textDTO';

@Injectable({
  providedIn: 'root'
})
export class ManagerTextPostItService {

  private endpoints = API_ENDPOINTS;

  private postItText = new BehaviorSubject<insertText>({value: "", data: ""});
  allTextPostIt$ = this.postItText.asObservable();

  constructor(private http: HttpClient) { }

  insertNewPostIt(postit: insertText): Observable<insertText>  {
    return this.http.post<insertText>(this.endpoints.insertText(), postit);
  }

  selectAllPostIt(data: selectAllText): Observable<insertText[]>  {
    return this.http.post<insertText[]>(this.endpoints.selectAllText(), data);
  }

}
