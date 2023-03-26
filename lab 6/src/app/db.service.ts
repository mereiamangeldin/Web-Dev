import {Injectable, OnInit} from '@angular/core';
import {Item} from "./models";
import {AlbumsService} from "./albums.service";

@Injectable({
  providedIn: 'root'
})
export class DBService{
  private albums: Item[];
  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }


  getAlbums():Item[]{
    return this.albums;
  }
  getAlbum(id:number):Item | undefined{
    alert(this.albums.length)
    let i = this.albums.findIndex(x =>x.id === id);
    if(i != -1){
      return this.albums[i];
    }
    return undefined;
  }
  setAlbum(item: Item){
    let i = this.albums.findIndex(x =>x.id === item.id);
    if(i != -1){
      this.albums[i].title = item.title;
    }
  }
  DeleteAlbum(item: Item){
    let i = this.albums.findIndex(x =>x.id === item.id);
    if(i != -1){
      this.albums.splice(i, 1);
    }
  }
  setAlbums(albums:Item[]):void{
    this.albums = albums;
  }
}
