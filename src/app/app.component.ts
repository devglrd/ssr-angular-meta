import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr-meta-http';
  public data: any;
  public loading = true;

  constructor(private meta: Meta, private http: HttpClient, private httpService: HttpService) {

  }

  ngOnInit() {
    // this.http.get('https://reqres.in/api/users?delay=3').subscribe((data: any) => {
    //   console.log(data, 'title');
    //
    //   this.meta.updateTag({name: 'og:title', content: data.ad.company});
    //   this.meta.updateTag({name: 'og:url', content: data.ad.url});
    //
    //
    // }, err => {
    //   console.log(err);
    // });
    //
    // this.meta.updateTag({name: 'author', content: 'author'});
    // // this.meta.updateTag({name: 'og:desc', content: data.title + '------- from appCompoenent'});
    //
    // this.http.get('https://api.be-u.kedge.edu/api/footer/legal-notices').subscribe((dataset: any) => {
    //   console.log(dataset, 'title');
    //   this.meta.addTag({name: 'og:type', content: 'zadaz'});
    //   // this.meta.updateTag({name: 'og:desc', content: da.intro['fr']});
    //   // this.meta.updateTag({name: 'title', content: da.title['fr']});
    //
    //   // this.meta.updateTag({name: 'og:image', content: da.get_file.file});
    //   // this.meta.updateTag({name: 'og:type', content: 'website'});
    //   // this.meta.updateTag({name: 'og:url', content: 'http://ingies.net:4010/news' + da.slug});
    //
    //
    // }, err => {
    //   console.log(err);
    // });


  }

}
