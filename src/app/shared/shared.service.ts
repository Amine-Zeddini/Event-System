import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly studentsKey = 'numberOfStudents';
  private readonly teachersKey = 'numberOfTeachers';

  private numberOfStudentsSubject: BehaviorSubject<number>;
  private numberOfTeachersSubject: BehaviorSubject<number>;

  constructor() {
    const storedStudents = localStorage.getItem(this.studentsKey);
    const storedTeachers = localStorage.getItem(this.teachersKey);

    this.numberOfStudentsSubject = new BehaviorSubject<number>(storedStudents ? +storedStudents : 0);
    this.numberOfTeachersSubject = new BehaviorSubject<number>(storedTeachers ? +storedTeachers : 0);
  }

  get numberOfStudents() {
    return this.numberOfStudentsSubject.asObservable();
  }

  get numberOfTeachers() {
    return this.numberOfTeachersSubject.asObservable();
  }

  incrementStudents() {
    this.numberOfStudentsSubject.next(this.numberOfStudentsSubject.value + 1);
    localStorage.setItem(this.studentsKey, String(this.numberOfStudentsSubject.value));
  }

  decrementStudents() {
    const currentValue = this.numberOfStudentsSubject.value;
    if (currentValue > 0) {
      this.numberOfStudentsSubject.next(currentValue - 1);
      localStorage.setItem(this.studentsKey, String(currentValue - 1));
    }
  }

  incrementTeachers() {
    this.numberOfTeachersSubject.next(this.numberOfTeachersSubject.value + 1);
    localStorage.setItem(this.teachersKey, String(this.numberOfTeachersSubject.value));
  }

  decrementTeachers() {
    const currentValue = this.numberOfTeachersSubject.value;
    if (currentValue > 0) {
      this.numberOfTeachersSubject.next(currentValue - 1);
      localStorage.setItem(this.teachersKey, String(currentValue - 1));
    }
  }
}



