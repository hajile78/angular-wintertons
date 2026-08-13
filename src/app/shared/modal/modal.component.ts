import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() title: string = '';
  @Input() contentTpl?: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  onOverlayClick() {
    this.closed.emit();
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  close() {
    this.closed.emit();
  }
}
