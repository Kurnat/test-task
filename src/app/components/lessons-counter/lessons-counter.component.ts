import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISchedule } from 'src/app/shared/intefaces/interfaces';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit {

  @Input() counter: number;

  constructor() { }

  ngOnInit(): void {

  }


}
