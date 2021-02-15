import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'interview-app';
  selectedModel = '';
  selectedSize = '';
  selectedStickers = '';
  urlShoes = 'https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5ef38fcbf997dd433b43d714/-473Wx593H-461205998-black-MODEL.jpg';
  modelsArray=[
    'nike',
    'puma',
    'adidas',
    'ft',
    'cerbero',
  ];
  sizeArray=[
    42,
    43,
    44,
    45
    
  ];
  stickersArray=[
    'horse',
    'pig',
    'monkey',
  ]
  
   printShoes=()=>{
    const newObj={
      model:this.selectedModel,
      size:this.selectedSize,
      sticker:this.selectedStickers
    }
    alert("Congratulation! You've just bought "+ newObj.model+ " size: " + newObj.size+" with the sticker: "+ newObj.sticker)
  }
}
