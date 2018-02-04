import { Component } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Books SPA';
  books: any[] = [
      {
        id: 'level',
        value: 'high'
      },
      {
        id: 'Color',
        value: 'Red'
      },
      {
        id: 'Name',
        value: 'Serj'
      }
  ];

  constructor() {
    console.log(localStorage);
     // localStorage.setItem('Love','Skydive');
     // localStorage.setItem('Jumps','3');
     this.showTasks();
  }

  showTasks(){
    var lsLen = localStorage.length;
    console.log('localStorage.length', localStorage.length);
    if (lsLen > 0) {
      this.books.length = 0;
      for(var i = 0; i < lsLen; i++) {
        // var key = localStorage.key(i);
        // localStorage.removeItem(localStorage.key(i));
        // console.log(i);
        this.books.push({id: localStorage.key(i), value: localStorage.getItem(localStorage.key(i))});
        // console.log(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
      }
    }
  }

  //https://loftblog.ru/material/html5-localstorage-kak-soxranit-dannye-na-kliente/

}
