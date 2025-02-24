import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() errorMessage!: string;
  @Output() clearMessage = new EventEmitter<void>();

  clearErrorMessage() {
    this.clearMessage.emit();
  }
}
