import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { ISchedule, IResponse } from 'src/app/shared/intefaces/interfaces';

@Component({
  selector: 'app-lessons-table',
  templateUrl: './lessons-table.component.html',
  styleUrls: ['./lessons-table.component.scss'],
})
export class LessonsTableComponent implements OnInit {

  lessons: ISchedule[][] | any[][] = [...new Array(24)].map(item => [...new Array(7)].map(i => []));

  dataChecker = false; // Check if is responce from "scheduleService";
  counter; // counter is variable for "<app-lessons-counter>"

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.initTable();
    this.countBusyDays();
  }

  // set data from database to table
  private initTable() {
    this.scheduleService.getSchedule().subscribe((response: IResponse) => {
      if (response.status) {
        this.dataChecker = true;
        const schedule = response.schedule;

        schedule.forEach((item, idx) => {
          const hour = +schedule[idx].start.slice(0, 2);
          const day = +schedule[idx].day;

          this.lessons[hour - 1][day - 1] = schedule[idx];
        });
      }
    });
  }

  public changeStatus(hour: ISchedule): void {
    if (!hour.status || hour.status === 'busy') {
      hour.status = 'free';
    }else {
      hour.status = 'busy';
    }

    this.countBusyDays();
  }

  countBusyDays(): void {
    this.counter = (this.lessons as ISchedule[][]).reduce((acc, item) => (acc += item.reduce((a, i) => {

      return a += (i.status === 'busy') ? 1 : 0;
    }, 0)), 0);
  }


}
