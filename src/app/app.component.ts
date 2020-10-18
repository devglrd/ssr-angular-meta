import { HttpClient } from '@angular/common/http';
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

  constructor(private meta: Meta,private http: HttpClient, private httpService: HttpService) {

  }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe((data: any) => {
      console.log(data);
    
      
      this.meta.updateTag({name: 'og:title', content: data.title});
      // this.meta.addTag({name: 'og:description', content: this.pipe.transform(this.chapter.intro)});
      // this.meta.addTag({name: 'og:url', content: window.location.href});


    }, err => {
      console.log(err);
    });
    

  }

}
