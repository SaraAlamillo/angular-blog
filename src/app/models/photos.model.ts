import { AlbumModel } from './albums.model';

export interface PhotoModel {
  albumId: number;
  album?: AlbumModel;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
