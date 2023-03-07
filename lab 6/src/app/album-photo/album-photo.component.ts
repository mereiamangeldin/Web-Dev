import {Component, OnInit} from '@angular/core';
import {Item, ItemPhoto} from "../models";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit{
  photos: ItemPhoto[];
  albumId: number;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {
    this.photos = [];
    this.loaded = true;
    this.albumId = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.albumId = id;
        this.loaded = false;
        this.albumsService.getAlbumPhotos(id).subscribe((photos)=>{
          this.photos = photos;
          this.loaded = true;
        });
      }
    });
  }

}
