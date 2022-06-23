import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Books-app';
  public cards:Array<any>=[]

  ngOnInit(): void
  {
    this.cards=
    [
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      },
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      },
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      },
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      },
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      },
      {
        title:'Libro 1',
        subtitle:'Subtitle 1'
      }
    ]

  }
}
