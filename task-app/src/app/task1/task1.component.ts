console.log("hey");
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  username: string = '';
  repos: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {}

  getRepositories() {
    if (this.username.trim() === '') {
      // Username is empty, clear the repositories
      this.repos = [];
      return;
    }

    this.githubService.getUserRepositories(this.username).subscribe((repos: any[]) => {
      this.repos = repos;
    });
  }
}
