import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { createApollo } from './graphql/apollo';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from './authentication/services/token.interceptor';
import { AuthService } from './authentication/services/auth.service';
import { AuthGuard } from './authentication/services/authGuard';
import { AuthRoleGuard } from './authentication/services/authRoleGuard';
import { AuthCallbackComponent } from './authentication/components/auth-callback/auth-callback.component';
import { AuthSignoutCallbackComponent } from './authentication/components/auth-signout-callback/auth-signout-callback.component';


export const NB_CORE_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  },
  AuthService
];

@NgModule({
  imports: [
    CoreRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthRoleGuard,
  ],
  exports: [
    RouterModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: [AuthCallbackComponent, AuthSignoutCallbackComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS
      ],
    };
  }

}
