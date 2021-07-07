import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PostModel } from 'src/app/models/posts.model';

@Injectable()
export class PostsService {
  private readonly url: string = environment.apiUrl + 'posts';

  constructor(private readonly httpClient: HttpClient) {}

  public getPosts(): Observable<PostModel[]> {
    return this.httpClient
      .get<PostModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getPost(id: number): Observable<PostModel> {
    return this.httpClient
      .get<PostModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createPost(data: PostModel): Observable<PostModel> {
    return this.httpClient
      .post<PostModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullPost(id: number, data: PostModel): Observable<PostModel> {
    return this.httpClient
      .put<PostModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialPost(id: number, data: PostModel): Observable<PostModel> {
    return this.httpClient
      .patch<PostModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deletePost(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
