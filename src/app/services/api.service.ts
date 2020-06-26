import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from './app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject(APP_CONFIG) public readonly config: any,
    private http: HttpClient
  ) { }

  getGitUser(userName: string) {
    return this.http.get(this.config.GET_USER_API + userName);
  }

  shorten(body) {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.config.URL_SHORTENER_TOKEN)
    };

    return this.http.post(this.config.URL_SHORTENER_API, body, httpOptions);
  }
}
