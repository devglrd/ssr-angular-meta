import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ThemeRouting} from './routing/theme.routing';
import {COMPONENTS} from './components';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ThemeRouting,
  ],
  declarations: [...COMPONENTS],
})
export class ThemeModule {
}
