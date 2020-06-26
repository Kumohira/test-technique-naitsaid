import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {

  // PAGES
  GIT_FINDER_PAGE: 'git-finder',
  URL_SHORTENER_PAGE: 'url-shortener',

  // APIs
  GET_USER_API: 'https://api.github.com/users/',
  URL_SHORTENER_API: 'https://api-ssl.bitly.com/v4/shorten',

  // VARIABLES
  URL_SHORTENER_TOKEN: '0eafac064f08308fa62b25b46e1ec896d71c7c26',
  MY_GIT: 'https://github.com/Kumohira'
};
