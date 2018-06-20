import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../_services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let service = AuthService;
  let httpMock: HttpTestingController;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ AuthService ],
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