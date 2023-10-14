import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { KanbanComponent } from './kanban/kanban.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { EditTaskComponent } from './tasks-list/edit-task/edit-task.component';
import { NewTaskComponent } from './tasks-list/new-task/new-task.component';
import { TasksFilterComponent } from './tasks-list/tasks-filter/tasks-filter.component';
import { ViewTaskComponent } from './tasks-list/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    SidebarComponent,
    KanbanComponent,
    UserInfoComponent,
    EditTaskComponent,
    NewTaskComponent,
    TasksFilterComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
