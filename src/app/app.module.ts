import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsTableComponent } from './components/lessons-table/lessons-table.component';
import { LessonsCounterComponent } from './components/lessons-counter/lessons-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    LessonsTableComponent,
    LessonsCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
