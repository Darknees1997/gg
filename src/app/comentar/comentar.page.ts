import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.page.html',
  styleUrls: ['./comentar.page.scss'],
})
export class ComentarPage implements OnInit {
  todos: TaskI[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

}
