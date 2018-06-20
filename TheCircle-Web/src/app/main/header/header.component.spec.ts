import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../_services/auth.service';

describe('HeaderComponent', () => {
  let service = AuthService;
  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [ AuthService ];
      declarations: [ HeaderComponent ]
    }).compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let component = fixture.componentInstance;
    let AuthSerivce = fixture.debugElement.injector.get(AuthService);
    expect(component).toBeTruthy();
  });
});