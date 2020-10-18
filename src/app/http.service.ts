import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) {
  }

  public getData() {
    return ;
  }
}
