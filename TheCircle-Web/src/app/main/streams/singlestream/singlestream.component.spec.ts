import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestreamComponent } from './singlestream.component';

describe('SinglestreamComponent', () => {
  let component: SinglestreamComponent;
  let fixture: ComponentFixture<SinglestreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglestreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
