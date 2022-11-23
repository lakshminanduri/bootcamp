import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { StepUpInterceptor } from '@backbase/identity-auth/step-up';
import { NOTIFICATIONS_BADGE_NOTIFICATIONS_BASE_PATH } from '@backbase/notifications-ang';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { environment } from '../environments/environment';
import { appModuleImports } from './app-module-imports';
import { AppComponent } from './app.component';
import { RetailAppRemoteConfig } from './remote-config/remote-config';
import { APP_NOTIFICATIONS_BASE_PATH, ServicePathsModule } from './service-paths.module';

export function applicationInitializer(remoteConfig: RemoteConfigService<RetailAppRemoteConfig>) {
  return () => remoteConfig.fetchAndActivate();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    ServicePathsModule,
    ...appModuleImports,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializer,
      multi: true,
      deps: [RemoteConfigService],
    },
    TemplateRegistry,
    {
      provide: NOTIFICATIONS_BADGE_NOTIFICATIONS_BASE_PATH,
      useExisting: APP_NOTIFICATIONS_BASE_PATH,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StepUpInterceptor,
      multi: true,
    },
    ...(environment.production ? [] : environment.mockProviders),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
