import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['/header.scss'],
  templateUrl: './header.html'
})


export class HeaderComponent {
  @Input() logoTitle: string = 'Logo';

  @Output() logoClick: EventEmitter<string> = new EventEmitter();

  onLogoClick(): void {
    console.log('HELLO WORLD');
    this.logoClick.emit('HEADER CLICK');
  }
}
