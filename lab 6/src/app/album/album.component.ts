import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../models";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DBService} from "../db.service";


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy{
  items: Item[];
  title: string;
  create: boolean;
  maxId: number;
  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute,
              private router: Router,
              private DB: DBService) {
    this.items = [];
    this.create = false;
    this.title = "";
    this.maxId = 1;
  }

  ngOnDestroy(): void {
    this.DB.setAlbums(this.items);
    }
  ngOnInit():void {
    if(this.DB.getAlbums().length > 0){
      this.items = this.DB.getAlbums();
      this.maxId = this.DB.getAlbums().length;
    }
    else{
      if(this.items.length == 0){
        this.albumsService.getAlbums().subscribe((items)=>{
          this.items = items;
          this.maxId = items.length;
        })
      }
    }
  }


  Create(){
    this.maxId += 1;
    const newItem = {id: this.maxId, title: this.title};
    this.items.push(newItem);
    this.create = false;
  }
}
