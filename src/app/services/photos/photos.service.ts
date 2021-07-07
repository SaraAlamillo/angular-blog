import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PhotoModel } from 'src/app/models/photos.model';

@Injectable()
export class PhotosService {
  private readonly url: string = environment.apiUrl + 'photos';

  constructor(private readonly httpClient: HttpClient) {}

  public getPhotos(): Observable<PhotoModel[]> {
    return this.httpClient
      .get<PhotoModel[]>(this.url)
      .pipe(retry(environment.apiNumRetry));
  }

  public getPhoto(id: number): Observable<PhotoModel> {
    return this.httpClient
      .get<PhotoModel>(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }

  public createPhoto(data: PhotoModel): Observable<PhotoModel> {
    return this.httpClient
      .post<PhotoModel>(this.url, data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updateFullPhoto(id: number, data: PhotoModel): Observable<PhotoModel> {
    return this.httpClient
      .put<PhotoModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }

  public updatePartialPhoto(
    id: number,
    data: PhotoModel
  ): Observable<PhotoModel> {
    return this.httpClient
      .patch<PhotoModel>(this.url + '/' + id.toString(), data)
      .pipe(retry(environment.apiNumRetry));
  }
  /**
   * @todo Complete output model
   */
  public deletePhoto(id: number): Observable<any> {
    return this.httpClient
      .delete(this.url + '/' + id.toString())
      .pipe(retry(environment.apiNumRetry));
  }
}
