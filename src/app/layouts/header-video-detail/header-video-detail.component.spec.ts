import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVideoDetailComponent } from './header-video-detail.component';

describe('HeaderVideoDetailComponent', () => {
  let component: HeaderVideoDetailComponent;
  let fixture: ComponentFixture<HeaderVideoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderVideoDetailComponent]
    });
    fixture = TestBed.createComponent(HeaderVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
