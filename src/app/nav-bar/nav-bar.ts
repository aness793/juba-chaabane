import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'nav-bar',
  imports: [CommonModule, ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class  NavBar implements OnInit {
  constructor( ) {
  
  }
  ngOnInit(): void {
          this.selected.set(window.location.hash);

  }
  selected =signal('')
  path() {
    setTimeout(() => {
    this.selected.set(window.location.hash);
    console.log('Current hash:', window.location.hash);
    },10);

  }
}
