import { Directive } from '@angular/core';

@Directive({
  selector: '[sodText]',
  host: {
    class: 'text'
  }
})
export class TextDirective {}
