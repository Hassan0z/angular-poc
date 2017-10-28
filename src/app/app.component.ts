import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<h1>This text is common and should always appear without any delay !!</h1>
  			<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
}
