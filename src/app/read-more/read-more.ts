import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'read-more',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './read-more.html',
  styleUrl: './read-more.css'
})
export class ReadMore {
  @Input() text: string = '';
  @Input() maxLength: number = 100;
  
  @Input() isExpanded: boolean = false;
  
  constructor(private cdr: ChangeDetectorRef) {}
  

}
