import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsTableComponent } from './components/lessons-table/lessons-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    LessonsTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
