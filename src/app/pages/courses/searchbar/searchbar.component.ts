import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['/searchbar.scss'],
  templateUrl: './searchbar.html'
})


export class SearchbarComponent {
  findText: string = 'Find';
  addLessonButtonText: string = "Add course";
  addNewLessonClasses: string = "btn btn-success button-create-task"
}
