import { ISchedule } from './../../shared/intefaces/interfaces';
import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../../shared/services/schedule.service';


@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  lessons: ISchedule[];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe((response) => {
      this.lessons = response.schedule;

    });
  }

}
