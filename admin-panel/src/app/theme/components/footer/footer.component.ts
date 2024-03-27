import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  template: `
    <span class="created-by">
      Created by
      <b><a href="https://github.com/FellipeToledo" target="_blank">Fellipe Toledo</a></b>
      2024. Made with
      <b><a href="https://akveo.github.io/nebular/" target="_blank">Nebular</a></b>
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {}
