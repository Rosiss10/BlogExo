import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  lastUpdate =  new Date();
  @Input()
  postTitle: string;
  @Input()
  postContent: string;
  @Input()
  loveIts: number;
  constructor() { }

  ngOnInit() {
  }

  onDonotloveIts(){
    this.loveIts = - 1;
    console.log(this.loveIts);
  }

  onloveIts(){
    this.loveIts = + 1;
    console.log(this.loveIts);
  }

}
