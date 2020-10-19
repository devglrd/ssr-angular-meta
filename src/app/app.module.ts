import {BrowserModule, Meta} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function initApp(http: HttpClient, meta: Meta) {
  return () => {
    meta.addTag({name: 'og:desc', content: 'custom'});
    return http.get('https://api.be-u.ingies.net/api/home/news/face-a-la-situation-exceptionnelle-les-m2-de-kedge-peuvent-refaire-un-stage').toPromise().then((res: { data: any }) => {
      console.log(res);
      const article = res.data;
      meta.addTag({name: 'og:title', content: article.title.fr});
      meta.addTag({name: 'og:description', content: article.intro.fr.replace(/<[^>]*>/g, '').replace('&amp;nbsp;', '')});
      meta.addTag({name: 'og:image', content: article.get_file.file});
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'ssr-meta'}),
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [HttpClient, Meta]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


