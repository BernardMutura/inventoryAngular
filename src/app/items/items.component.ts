import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  posts = new Array();

  displayedColumns: string[] = ['id', 'name', 'description', 'state', 'category', 'date', 'tags', 'view'];


  //Subscribing to the post service
  constructor(private service:PostService) { }

  ngOnInit(){
    this.service.getPosts().subscribe(response => {
      this.posts=response;
    });
  }

}
