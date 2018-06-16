import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';



import { AppComponent } from './app.component';
import { HeaderComponent } from './page/fragments/header/header.component';
import { FooterComponent } from './page/fragments/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { User } from './interface/form-model';
import { AppRoutingModule } from './/app-routing.module';
import { AppService } from './app.service';
import { UserService } from './service/user/user.service';
import { InlineFormComponent } from './page/fragments/allUIComponents/inline-form/inline-form.component';
import { SliderComponent } from './page/fragments/allUIComponents/slider/slider.component';
import { RemoveElementPipe } from './filters/remove-from-array/remove-element.pipe';
import { FormControlService } from './service/form-control.service';
import { DynamicFormComponent } from './page/fragments/allUIComponents/dynamic-form/dynamic-form.component';
import { FormFieldsService } from './service/form-fields.service';
import { PouchdbService } from './service/pouchdb.service';
import { DataEntryHeadComponent } from './page/data-entry-module/data-entry-head/data-entry-head.component';
import { InstitutionalComponent } from './page/data-entry-module/institutional/institutional.component';
import { GirlChildSurvivalComponent } from './page/data-entry-module/girl-child-survival/girl-child-survival.component';
import { UserManagementComponent } from './page/user-module/user-management/user-management.component';
import { RoleGuardService } from './guard/role-guard.service';
import { Exception404Component } from './page/exception404/exception404.component';
import { LoggedinGuardService } from './guard/loggedin-guard.service';
import { ChangePasswordComponent } from './page/user-module/change-password/change-password.component';
import { TrainingComponent } from './page/data-entry-module/training/training.component';
import { AwarenessComponent } from './page/data-entry-module/awareness/awareness.component';
import { ObjIteratePipe } from './filters/obj-iterate.pipe';
import { FormDataSaveService } from './service/form-data-save.service';
import { DataEntrySelectionComponent } from './page/data-entry-module/data-entry-selection/data-entry-selection.component';
import { DraftsComponent } from './page/drafts/drafts.component';
import { AreaFilterPipe } from './filters/area-filter.pipe';
import { ResetPasswordComponent } from './page/user-module/reset-password/reset-password.component';
import { UploadingModalComponent } from './page/fragments/uploading-modal/uploading-modal.component';
import { UserSideMenuComponent } from './page/user-module/user-side-menu/user-side-menu.component';
import { TermsofuseComponent } from './page/static-page/termsofuse/termsofuse.component';
import { SitemapComponent } from './page/static-page/sitemap/sitemap.component';
import { DisclaimerComponent } from './page/static-page/disclaimer/disclaimer.component';
import { PrivacyComponent } from './page/static-page/privacy/privacy.component';
import {Constants} from './constants'

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-entry-selection',
    component: DataEntrySelectionComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-entry',
    component: InstitutionalComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-entry-survival',
    component: GirlChildSurvivalComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-entry-training',
    component: TrainingComponent,
    pathMatch: 'full'
  },
  {
    path: 'drafts',
    component: DraftsComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-entry-awareness',
    component: AwarenessComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-management',
    component: UserManagementComponent,
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    pathMatch: 'full'
  },
  { path: 'exception', 
    component: Exception404Component, 
    pathMatch: 'full'
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
    pathMatch: 'full'
  },
  {
    path: 'terms-of-use',
    component: TermsofuseComponent,
    pathMatch: 'full'
  },
  {
    path: 'privacy-policy',
    component: PrivacyComponent,
    pathMatch: 'full'
  },
  {
    path: 'sitemap',
    component: SitemapComponent,
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    InlineFormComponent,
    SliderComponent,
    RemoveElementPipe,
    DynamicFormComponent,
    DataEntryHeadComponent,
    InstitutionalComponent,
    UserManagementComponent,
    GirlChildSurvivalComponent,
    Exception404Component,
    ChangePasswordComponent,
    TrainingComponent,
    AwarenessComponent,
    ObjIteratePipe,
    DataEntrySelectionComponent,
    DraftsComponent,
    AreaFilterPipe,
    ResetPasswordComponent,
    UploadingModalComponent,
    UserSideMenuComponent,
    TermsofuseComponent,
    SitemapComponent,
    DisclaimerComponent,
    PrivacyComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot() 
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, AppService, UserService, AuthGuard, User, HttpClientModule, FormControlService, FormFieldsService, PouchdbService, RoleGuardService, LoggedinGuardService, FormDataSaveService,
  AreaFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
