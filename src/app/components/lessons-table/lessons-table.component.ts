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
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.initTable();
  }

  private initTable() {
    this.scheduleService.getSchedule().subscribe((response: IResponse) => {
      if (response.status) {
        const schedule = response.schedule;

        schedule.forEach((item, idx) => {
          const hour = +schedule[idx].start.slice(0, 2);
          const day = +schedule[idx].day;

          this.lessons[hour - 1][day - 1] = schedule[idx];
        });
      }
    });
  }

  public changeStatus(event: Event, hour: ISchedule): void {
    if (hour.status === 'empty') {
      hour.status = 'free';
    }else if (hour.status === 'free')  {
      hour.status = 'busy';
    } else {
      hour.status = 'empty';
    }
  }
}
