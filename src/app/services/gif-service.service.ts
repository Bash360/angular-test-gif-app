import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class GifService {
  url: string;
  constructor(private httpClient: HttpClient) {
    
  }
  getGifs(query: string): Observable<any> {
    this.url = `https://api.giphy.com/v1/gifs/search?api_key=G62Z8yE5XezI46BaSodbhu730Uf7AL1u&q=${query}&limit=25&offset=0&rating=G&lang=en`;

    return this.httpClient.get(this.url
     ,
      httpOptions
    );

  }
  getGifById(id: string): Observable<any> { 
    this.url = `https://api.giphy.com/v1/gifs/${id}?api_key=G62Z8yE5XezI46BaSodbhu730Uf7AL1u`;
    return this.httpClient.get(this.url, httpOptions);
  }
}
