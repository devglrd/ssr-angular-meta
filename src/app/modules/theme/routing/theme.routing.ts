import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ButtonsComponent, CardsComponent, FormsComponent, IconsComponent, ThemeComponent, TypographyComponent} from '../components';

const routes: Routes = [
  {
    path: '', component: ThemeComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'buttons'},
      {path: 'buttons', component: ButtonsComponent},
      {path: 'typography', component: TypographyComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'icons', component: IconsComponent},
      {path: 'cards', component: CardsComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ThemeRouting {
}
