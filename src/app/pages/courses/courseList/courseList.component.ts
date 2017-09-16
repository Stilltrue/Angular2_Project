import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';

export interface CourseItem {
  id: string;
  link?: string;
  author?: string;
  name: string;
  duration: number;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-courselist',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['./courselist.scss'],
  templateUrl: './courselist.html'
})


export class CourseComponent {
  @Input() public courseList: CourseItem[] =
    [{
      id: '1',
      name: 'Lesson 1',
      duration: 45,
      date: new Date(),
      description: 'description 1'
    }, {
      id: '2',
      name: 'Lesson 2',
      duration: 45,
      date: new Date(),
      description: 'description 2'
    }, {
      id: '3',
      name: 'Lesson 3',
      duration: 45,
      date: new Date(),
      description: 'description 3'
    }];

  editButtonText: string = "Edit Course";
  editClasses: string = "btn btn-primary pull-right edit-button";

  deleteButtonText: string = "Delete course";
  deleteClasses: string = "btn btn-primary pull-right btn-danger delete-button";

  constructor(){}

  onButtonClick(buttonString: string): void {
    console.log('Courses component', buttonString);
  }
}
