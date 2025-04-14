import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@systemsc/typography';

@Component({
  selector: 'dsc-modal',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewChecked {
  @Input() isOpen = true;

  @Input() modalTitle = '';

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  ngAfterViewChecked(): void {
    if (this.isOpen) {
      this.modal.nativeElement.showModal();
    } else {
      this.modal.nativeElement.close();
    }
  }
}
