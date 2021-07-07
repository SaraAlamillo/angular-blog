import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { AlbumModel } from 'src/app/models/albums.model';

@Injectable()
export class AlbumsService {
  private readonly url: string = environment.apiUrl + 'albums';

  constructor(private readonly httpClient: HttpClient) {}

  public getAlbums(): Observable<AlbumModel[]> {
    return this.httpClient
      .get<AlbumModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getAlbum(id: number): Observable<AlbumModel> {
    return this.httpClient
      .get<AlbumModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createAlbum(data: AlbumModel): Observable<AlbumModel> {
    return this.httpClient
      .post<AlbumModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullAlbum(id: number, data: AlbumModel): Observable<AlbumModel> {
    return this.httpClient
      .put<AlbumModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialAlbum(
    id: number,
    data: AlbumModel
  ): Observable<AlbumModel> {
    return this.httpClient
      .patch<AlbumModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deleteAlbum(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
