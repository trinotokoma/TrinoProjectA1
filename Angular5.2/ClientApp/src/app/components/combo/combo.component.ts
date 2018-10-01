import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'custom-combo',
  templateUrl: './combo.component.html'
})

export class ComboComponent {
  @Input() name: string;
  @Input() masterName: string;

  @Input() nameBinding: string;
  @Input() masterNameBinding: string;

  @Input() heroes: Hero[];

  constructor() { }
}
