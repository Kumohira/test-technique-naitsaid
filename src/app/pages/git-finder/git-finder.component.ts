import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {APP_CONFIG} from '../../services/app.config';

@Component({
  selector: 'app-git-finder',
  templateUrl: './git-finder.component.html',
  styleUrls: ['./git-finder.component.scss']
})
export class GitFinderComponent implements OnInit {

  placeholder = 'kumohira';

  gitUser: any;

  tipedUser = '';

  constructor(
    @Inject(APP_CONFIG) public readonly config: any,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearch(tipedUser) {
    this.getGitUser(tipedUser || this.placeholder);
  }

  getGitUser(user: string) {
    this.apiService.getGitUser(user).subscribe(
      resp => {
        this.gitUser = resp;
      },
      err => {
        this.gitUser = null;
      }
    );
  }

  openNewTab(gitUserUrl: string) {
    window.open(gitUserUrl, '_blank');
  }

  onUrlShortenerPage() {
    this.router.navigate([this.config.URL_SHORTENER_PAGE]);
  }
}
