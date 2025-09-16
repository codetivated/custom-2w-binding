import {
  Component,
  input,
  Input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  @Input({ required: true }) size!: { width: string; height: string };
  @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  onReset() {
    this.size = { width: '100', height: '100' };
    this.sizeChange.emit(this.size);
  }
}
