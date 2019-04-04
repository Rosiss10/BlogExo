import { Component } from '@angular/core';
import {reject, resolve} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 Posts = [
   {
     title: 'Mon premier post',
     content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant ' +
       'impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, ',
     loveIts: 5,
     created_at: Date
   },
   {
     title: 'Mon Deuxième post',
     content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant ' +
       'impression. Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, ',
     loveIts: 0,
     created_at: Date
   },
   {
     title: 'Mon Troisième post',
     content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant ' +
       'impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, ',
     loveIts: 0,
     created_at: Date
   }
 ];
}
