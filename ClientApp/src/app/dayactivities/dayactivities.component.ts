import { Component } from '@angular/core';

@Component({
  selector: 'app-dayactivities-component',
  templateUrl: './dayactivities.component.html',
  styleUrls: ['./dayactivities.component.css']
})
export class DayActivitiesComponent {
  public currentCount = 0;
  public date = new Intl.DateTimeFormat('en');

  public activities = [
  {
      start: "09:30",
      end: "16:30",
      activity: "Wild Daze",
      discipline: "Soupin",
      num: "12",
      owner: "Tanya Lee",
      instructors: "JP, Chris Clarke",
      status: "Ready to Start"
  },
  {
      start: "13:30",
      end: "16:30",
      activity: "Wild Daze",
      discipline: "Yakin",
      num: "12",
      owner: "Tanya Lee",
      instructors: "JP, Nicky",
      status: "Confirmed"
    },
    {
      start: "13:30",
      end: "16:30",
      activity: "Daze Of Wild",
      discipline: "SUPPER",
      num: "10",
      owner: "Tanya Lee",
      instructors: "Nice Instructor, Nasty Instructor",
      status: "Confirmed"
    },
    {
      start: "09:30",
      end: "13:30",
      activity: "Wild Days",
      discipline: "Bushy",
      num: "5",
      owner: "Nicky",
      instructors: "Nicky",
      status: "2 not checked-in"
    },
    {
      start: "09:30",
      end: "17:00",
      activity: "Level-1",
      discipline: "Sailing",
      num: "5",
      owner: "Jack",
      instructors: "Soph",
      status: "1 Person Late Checking-In"
    },
    {
      start: "09:30",
      end: "17:00",
      activity: "Level-2",
      discipline: "Sailing",
      num: "5",
      owner: "Jack",
      instructors: "Chris I",
      status: "Good to Go"
    },
    {
      start: "09:30",
      end: "17:00",
      activity: "Level-3",
      discipline: "Sailing",
      num: "5",
      owner: "Jack",
      instructors: "Tanya",
      status: "Good to Go"
    }
  ];

  public incrementCounter() {
    this.currentCount++;
  }
}
