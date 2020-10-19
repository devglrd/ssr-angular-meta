import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../http.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {

  constructor(private meta: Meta, private http: HttpClient, private httpService: HttpService) {
  }


  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data: any) => {
    //   console.log(data, 'desc');
    //
    //   this.meta.updateTag({name: 'og:description', content: data.title});
    //
    //
    //   // this.meta.addTag({name: 'og:description', content: this.pipe.transform(this.chapter.intro)});
    //   // this.meta.addTag({name: 'og:url', content: window.location.href});
    //
    //
    // }, err => {
    //   console.log(err);
    // });

  }
}
