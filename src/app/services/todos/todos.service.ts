import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { TodoModel } from 'src/app/models/todos.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodosService {
  private readonly url: string = environment.apiUrl + 'todos';

  constructor(private readonly httpClient: HttpClient) {}

  public getTodos(): Observable<TodoModel[]> {
    return this.httpClient
      .get<TodoModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getTodo(id: number): Observable<TodoModel> {
    return this.httpClient
      .get<TodoModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createTodo(data: TodoModel): Observable<TodoModel> {
    return this.httpClient
      .post<TodoModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullTodo(id: number, data: TodoModel): Observable<TodoModel> {
    return this.httpClient
      .put<TodoModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialTodo(id: number, data: TodoModel): Observable<TodoModel> {
    return this.httpClient
      .patch<TodoModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deleteTodo(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
