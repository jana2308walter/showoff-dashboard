import { Component, Input } from '@angular/core';

@Component({
  selector: 'sod-card',
  imports: [],
  templateUrl: './card.component.html',
  host: {
    class: 'card'
  }
})
export class CardComponent {
  @Input() title = 'Lorem Ipsum';
  @Input() titleColor: 'mint' | 'blue' | 'grey' = 'grey';
  @Input() subtitle = 'Dolor sit amet';
  @Input() alignment: 'left' | 'center' = 'left';
}
