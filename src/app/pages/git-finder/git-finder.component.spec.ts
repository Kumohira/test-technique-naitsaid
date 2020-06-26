import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFinderComponent } from './git-finder.component';

describe('GitFinderComponent', () => {
  let component: GitFinderComponent;
  let fixture: ComponentFixture<GitFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
