import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss',
})
export class TopicComponent {
  @Input() text: string = '';
}
