import { Component } from '@angular/core';
import course from '../course';
import { COURSES } from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  course: course = {
    course_title: 'Web Development',
    course_id: 1,
    semester: 'One',
    period: 'Wednesday 4-6pm',
    lecturer: 'Dr. Jian Yu',
  };
  courses = COURSES;
  selectedCourse?: course;

  onSelect(course: course): void {
    this.selectedCourse = course;
  }
}
