
import { AuthGuard } from './guard/auth.guard';
import { RoleGuardService } from './guard/role-guard.service'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { UserManagementComponent } from './page/user-module/user-management/user-management.component';
import { DataEntryHeadComponent } from './page/data-entry-module/data-entry-head/data-entry-head.component';
import { InstitutionalComponent } from './page/data-entry-module/institutional/institutional.component';
import { GirlChildSurvivalComponent } from './page/data-entry-module/girl-child-survival/girl-child-survival.component';
import { Exception404Component } from './page/exception404/exception404.component';
import { LoggedinGuardService } from './guard/loggedin-guard.service';
import { ChangePasswordComponent } from './page/user-module/change-password/change-password.component';
import { TrainingComponent } from './page/data-entry-module/training/training.component';
import { AwarenessComponent } from './page/data-entry-module/awareness/awareness.component';
import { ObjIteratePipe } from './filters/obj-iterate.pipe';
import { DataEntrySelectionComponent} from './page/data-entry-module/data-entry-selection/data-entry-selection.component'
import { DraftsComponent } from './page/drafts/drafts.component';
import { ResetPasswordComponent } from './page/user-module/reset-password/reset-password.component';
import { TermsofuseComponent } from './page/static-page/termsofuse/termsofuse.component';
import { SitemapComponent } from './page/static-page/sitemap/sitemap.component';
import { DisclaimerComponent } from './page/static-page/disclaimer/disclaimer.component';
import { PrivacyComponent } from './page/static-page/privacy/privacy.component';
const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    pathMatch: 'full' 
  },
  { path: 'login', 
    component: LoginComponent, 
    pathMatch: 'full',
    canActivate: [LoggedinGuardService]
  },
  {
    path: 'data-entry-selection',
    component: DataEntrySelectionComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'data-entry',
    component: InstitutionalComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'data-entry-survival',
    component: GirlChildSurvivalComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'data-entry-training',
    component: TrainingComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'data-entry-awareness',
    component: AwarenessComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'drafts',
    component: DraftsComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'DISTRICT'
    }
  },
  {
    path: 'user-management',
    component: UserManagementComponent,
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'ADMIN'
    }
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
    pathMatch: 'full',
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'ADMIN'
    }
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
  },

  { path: '**', redirectTo: 'exception' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule {}