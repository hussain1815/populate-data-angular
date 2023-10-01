import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  information = [
    {
      id: '1',
      Product: "Mobile Phone",
      Price: 500,
      Version: "Lolipop",
      Battery: "60 %",
      img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
   },
    {
      id: '2',
      Product: "IPhone",
      Price: 5000,
      Version: "ios17",
      Battery: "60 %",
      img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"

   },
    {
      id: '3',
      Product: "Matorola Phone",
      Price: 7000,
      Version: "Android",
      Battery: "60 %",
      img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80"

   },
    {
      id: '4',
      Product: "Oppo F71",
      Price: 1000,
      Version: "Android lolly",
      Battery: "60 %",
      img:"https://img.etimg.com/photo/msid-98988587,imgsize-17658/OppoA57.jpg"
    }
 ]
}
