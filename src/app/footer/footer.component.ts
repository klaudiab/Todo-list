import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
    <p class="text-center">
      &copy; Prawa zastrzeżone
    </p>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
