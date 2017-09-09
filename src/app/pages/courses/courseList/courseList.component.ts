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
  //styleUrls: ['/courselist.scss'],
  templateUrl: './courselist.html'
})


export class CourseComponent {
  @Input() public courseList: CourseItem[] =
    [{
      id: '1',
      name: 'name 1',
      duration: 5000,
      date: new Date(),
      description: 'description 1'
    }, {
      id: '2',
      name: 'name 2',
      duration: 5000,
      date: new Date(),
      description: 'description 2'
    }, {
      id: '3',
      name: 'name 3',
      duration: 5000,
      date: new Date(),
      description: 'description 3'
    }];

  constructor(){}
}
