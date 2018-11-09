import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenericOneComponent } from './page-generic-one.component';

describe('PageGenericOneComponent', () => {
  let component: PageGenericOneComponent;
  let fixture: ComponentFixture<PageGenericOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenericOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenericOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
