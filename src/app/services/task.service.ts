import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../public/models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly http = inject(HttpClient);
  private url: string = 'models/user1_task.json';

  public getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url); // ✅ Return Observable directly
  }
}
