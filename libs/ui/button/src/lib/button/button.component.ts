import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@systemsc/typography';

type Variant = 'primary' | 'secondary' | 'tertiary'; 
type Theme = 'blue' | 'violet';

@Component({
  selector: 'dsc-button',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input()
  variant: Variant = 'primary' 

  @Input()
  disabled = false;

  @Input()
  theme: Theme = 'blue';
}
