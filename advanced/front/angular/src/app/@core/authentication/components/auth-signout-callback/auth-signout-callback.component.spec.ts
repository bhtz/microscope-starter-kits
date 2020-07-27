import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignoutCallbackComponent } from './auth-signout-callback.component';

describe('AuthSignoutCallbackComponent', () => {
  let component: AuthSignoutCallbackComponent;
  let fixture: ComponentFixture<AuthSignoutCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignoutCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignoutCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
