import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {DBService} from "../db.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit, OnDestroy{
  item: Item;
  loaded: boolean;
  edit: boolean;
  title: string;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService,
              private DB: DBService) {
    this.item = {} as Item;
    this.loaded = true;
    this.edit = false;
    this.title = "";
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.loaded = false;
        let temp = this.DB.getAlbum(id);
        if(temp){
          this.item = temp;
          this.loaded = true;
        }
        // this.albumService.getAlbum(id).subscribe((item)=>{
        //   this.item = item;
        //   this.loaded = true;
        // });
      }
    });
  }

  ngOnDestroy(): void {
    this.DB.setAlbum(this.item);
  }
  Save(){
    this.item.title = this.title;
    this.edit = false;
  }
  Delete(){
    this.DB.DeleteAlbum(this.item);
  }
}
