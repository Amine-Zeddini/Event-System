import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  numberOfStudents: Observable<number> | undefined;
  numberOfTeachers: Observable<number> | undefined;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.numberOfStudents = this.sharedService.numberOfStudents;
    this.numberOfTeachers= this.sharedService.numberOfTeachers;
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

}
