import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSessionTimeoutComponent } from './session-timeout.component';
import '@angular/localize/init';
import { ChangeDetectorRef, NgZone, NO_ERRORS_SCHEMA } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CustomSessionTimeoutService } from './session-timeout.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomSessionTimeoutComponent', () => {
  let component: CustomSessionTimeoutComponent;
  let fixture: ComponentFixture<CustomSessionTimeoutComponent>;
  let sessionTimeoutService;
  let ngZone: NgZone;
  const changeDetectorRefStub = { detectChanges: () => ({}) };
  beforeEach(() => {
    const sessionOutService = {
      logout: () => {
        return Promise.resolve('test');
      },
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, OAuthModule.forRoot(), HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CustomSessionTimeoutComponent],
      providers: [{ provide: ChangeDetectorRef, useValue: changeDetectorRefStub }],
    });
  });
  it('should be created', () => {
    fixture = TestBed.createComponent(CustomSessionTimeoutComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.overrideProvider(CustomSessionTimeoutService, {
      useValue: {
        logout: () => {
          return Promise.resolve('');
        },
        registerCountdown: () => {
          return null;
        },
        refresh: () => {
          return null;
        },
      },
    });
    fixture = TestBed.createComponent(CustomSessionTimeoutComponent);
    component = fixture.componentInstance;
    sessionTimeoutService = TestBed.inject(CustomSessionTimeoutService);
    ngZone = TestBed.inject(NgZone);
  });
  it('ngOnInit', () => {
    component.ngOnInit();
    const result = component.logout();
    expect(result).toBeDefined();
  });

  it('onStart', () => {
    component['onStart']();
    expect(component.isOpen).toEqual(true);
  });

  it('closeModal', () => {
    component['closeModal']();
    expect(component.isOpen).toEqual(false);
  });

  it('onTick', () => {
    component['onTick'](59);
    expect(component.minutesRemaining).toEqual(0);

    component['onTick'](60);
    expect(component.minutesRemaining).toEqual(1);

    component['onTick'](121);
    expect(component.minutesRemaining).toEqual(2);
  });

  it('onReset', () => {
    spyOn<any>(component, 'closeModal');
    component['onReset']();
    expect(component['closeModal']).toBeDefined();
  });

  it('onEnd', () => {
    spyOn<any>(component, 'closeModal');
    component['onEnd']();
    expect(component['closeModal']).toBeDefined();
  });
});
