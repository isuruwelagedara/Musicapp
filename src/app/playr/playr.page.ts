import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-playr',
  templateUrl: './playr.page.html',
  styleUrls: ['./playr.page.scss'],
})


export class PlayrPage implements OnInit {

  stu:any;
  audiofile:MediaObject = this.media.create("assets/song.mp3")



  constructor(private media: Media, private file: File){}


  ngOnInit() {
    this.audiofile.play();
    console.log("Asfasfa")
  }



}

