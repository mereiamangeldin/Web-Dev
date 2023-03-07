import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item, ItemPhoto} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Item[]>{
    return this.client.get<Item[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(id: number): Observable<Item>{
    return this.client.get<Item>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getAlbumPhotos(id: number): Observable<ItemPhoto[]>{
    return this.client.get<ItemPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
