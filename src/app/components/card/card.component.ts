import { Component, Input } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() profesionalPadre: Profesional;
}
