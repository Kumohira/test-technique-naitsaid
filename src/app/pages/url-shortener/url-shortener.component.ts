import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../services/app.config';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  placeholder = 'Shorten your link';

  body = {
    long_url: ''
  };

  shortenedUrl: any;

  constructor(
    @Inject(APP_CONFIG) public readonly config: any,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmitUrl(body) {
    if (body.long_url.trim() !== '') {

      this.shorten(body);
    }
  }

  shorten(body) {
    this.apiService.shorten(body).subscribe(
      (resp: any) => {
        this.shortenedUrl = resp.link;
        console.log('shortenedUrl: ', this.shortenedUrl);
      },
      err => {}
    );
  }

}
