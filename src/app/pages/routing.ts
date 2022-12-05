import { Routes } from '@angular/router';
import { MasterBusinessRuleSearchComponent } from './master/master-business-rule/master-business-rule-search/master-business-rule-search.component';
import { MasterListSearchComponent } from './master/master-list/master-list-search/master-list-search.component';
import { MasterParametersSearchComponent } from './master/master-parameters/master-parameters-search/master-parameters-search.component';
import { MasterRouteNewComponent } from './master/master-route/master-route-new/master-route-new.component';
import { MasterItemSearchComponent } from './master/master-item/master-item-search/master-item-search.component';
import { MasterRouteSearchComponent } from './master/master-route/master-route-search/master-route-search.component';
import { MasterRouteUpdateComponent } from './master/master-route/master-route-update/master-route-update.component';
import { MasterTemplateSearchComponent } from './master/master-template/master-template-search/master-template-search.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cgr-master/pages/list/search',
    component: MasterListSearchComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cgr-master/pages/item/search',
    component: MasterListSearchComponent,
    data: { layout: 'light-sidebar' },
  },
  { 
    path: 'cgr-master/pages/route/search',
    component: MasterRouteSearchComponent,
    data: { layout: 'light-sidebar' }
  },
  { 
    path: 'cgr-master/pages/route/new',
    component: MasterRouteNewComponent,
    data: { layout: 'light-sidebar' }
  },
  { 
    path: 'cgr-master/pages/route/update/:cu',
    component: MasterRouteUpdateComponent,
    data: { layout: 'light-sidebar' }
  },
  { 
    path: 'cgr-master/pages/business-rule/search',
    component: MasterBusinessRuleSearchComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cgr-master/pages/parameters/search',
    component: MasterParametersSearchComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cgr-master/pages/template/search',
    component: MasterTemplateSearchComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
