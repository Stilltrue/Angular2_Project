import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

//export interface ButtonItem {
//  text: string;
//  className: string;
//  link?: string;
//  author?: string;
//}

@Component({
  selector: 'app-button',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['/button.scss'],
  templateUrl: './button.html'
})


export class ButtonComponent {
  //@Input() buttonList: ButtonItem[] = [
  //  {
  //    text: 'Edit course',
  //    className: 'edit-button'
  //  },
  //  {
  //    text: 'Delete',
  //    className: 'btn-danger delete-button'
  //  },
  //];

  @Input() buttonText: string = 'Button';
  @Input() buttonClasses: string = 'btn btn-primary';


  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  onButtonClick(): void {
    console.log('Button.component.ts');
    this.buttonClick.emit('Button click');
  }

}
