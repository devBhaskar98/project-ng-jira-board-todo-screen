import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../../public/models/task';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  private readonly taskService = inject(TaskService);
  task: Task[] = [];
  todo = ['Get to work'];
  inprogress = ['sleep'];
  done = ['Get up'];


  ngOnInit(){
    this.loadTasks();
  }

  public loadTasks() {
   this.taskService.getTask().subscribe(data => {
      data.forEach(task => {
        if(task.status == 'todo'){
          this.todo.push(task.name);
        } else if (task.status == 'done') {
          this.done.push(task.name)
        } else {
          this.inprogress.push(task.name)
        }
      })    
   })

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
