import { Component, VERSION } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private postsService: PostsService) {
    this.postsService.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
