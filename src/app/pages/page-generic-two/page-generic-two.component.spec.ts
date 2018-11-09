import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenericTwoComponent } from './page-generic-two.component';

describe('PageGenericTwoComponent', () => {
  let component: PageGenericTwoComponent;
  let fixture: ComponentFixture<PageGenericTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenericTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenericTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
