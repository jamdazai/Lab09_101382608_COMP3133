/**
 * Lab 09 - Full Stack Development II
 * @author: Jam Furaque
 */

import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `<h2>{{ getTitle() }}</h2>`
})
export class StudentsComponent {
  title = 'My List of Students';

  getCurrentDate() {
    return new Date().toLocaleDateString();
  }

  getTitle() {
    return `${this.title} - ${this.getCurrentDate()}`;
  }
}
