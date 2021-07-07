import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { PostsComponent } from './components/posts/posts.component';

import { AlbumsService } from './services/albums/albums.service';
import { CommentsService } from './services/comments/comments.service';
import { PhotosService } from './services/photos/photos.service';
import { PostsService } from './services/posts/posts.service';
import { TodosService } from './services/todos/todos.service';
import { UsersService } from './services/users/users.service';
@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AlbumsService,
    CommentsService,
    PhotosService,
    PostsService,
    TodosService,
    UsersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
