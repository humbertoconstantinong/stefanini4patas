import { Component } from '@angular/core';
import { TopicComponent } from '../../components/topic/topic.component';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [TopicComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
})
export class RulesComponent {
  rules = [
    'Carinho e atenção não pode faltar;',
    'Cuide de pulgas, carrapatos, entre outros parasitas;',
    'Leve ao veterinário regularmente;',
    'Mantenha as vacinas em dia, é importante para ele(a) e para você.',
    'A castração é importante para prevenir doenças e a procriação.',
  ];
}
