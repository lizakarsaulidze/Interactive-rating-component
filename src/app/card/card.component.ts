import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,NgIf, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  btn = [1,2,3,4,5];
  showCard = true;
  selectedNumber = -1;
  toggle(){
    // თუ  რიცხვი ამორჩეულია ანუ ნულზე მეტია (1,2,3,4,5 რომელიმეს ტოლია აქედან) მარტო მაშინ გამოჩნდეს მეორე ქარდის
    if(this.selectedNumber > 0){
      this.showCard = false;
    }

  }
  print(num: number){
    // console.log(num)
    this.selectedNumber = num;
   
  }
}
