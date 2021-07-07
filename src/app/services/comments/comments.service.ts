import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { CommentModel } from 'src/app/models/comments.model';

@Injectable()
export class CommentsService {
  private readonly url: string = environment.apiUrl + 'comments';

  constructor(private readonly httpClient: HttpClient) {}

  public getComments(): Observable<CommentModel[]> {
    return this.httpClient
      .get<CommentModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getComment(id: number): Observable<CommentModel> {
    return this.httpClient
      .get<CommentModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createComment(data: CommentModel): Observable<CommentModel> {
    return this.httpClient
      .post<CommentModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullComment(
    id: number,
    data: CommentModel
  ): Observable<CommentModel> {
    return this.httpClient
      .put<CommentModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialComment(
    id: number,
    data: CommentModel
  ): Observable<CommentModel> {
    return this.httpClient
      .patch<CommentModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deleteComment(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
