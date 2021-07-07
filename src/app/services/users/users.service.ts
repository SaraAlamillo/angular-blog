import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UserModel } from 'src/app/models/users.model';

@Injectable()
export class UsersService {
  private readonly url: string = environment.apiUrl + 'users';

  constructor(private readonly httpClient: HttpClient) {}

  public getUsers(): Observable<UserModel[]> {
    return this.httpClient
      .get<UserModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getUser(id: number): Observable<UserModel> {
    return this.httpClient
      .get<UserModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createUser(data: UserModel): Observable<UserModel> {
    return this.httpClient
      .post<UserModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullUser(id: number, data: UserModel): Observable<UserModel> {
    return this.httpClient
      .put<UserModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialUser(id: number, data: UserModel): Observable<UserModel> {
    return this.httpClient
      .patch<UserModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deleteUser(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
