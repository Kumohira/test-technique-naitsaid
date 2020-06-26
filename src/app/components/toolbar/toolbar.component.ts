import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../services/app.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    @Inject(APP_CONFIG) public readonly config: any,
  ) { }

  ngOnInit(): void {
  }

  openNewTab() {
    window.open(this.config.MY_GIT, '_blank');
  }
}
