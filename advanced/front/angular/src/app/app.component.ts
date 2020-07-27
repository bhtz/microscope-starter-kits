import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  user: any;
  data: any;
  graphData: any;
  accessToken: any;
  idToken: any;

  constructor(private authService: AuthService, private http: HttpClient, private apollo: Apollo){
      this.user = this.authService.user.profile;
      this.accessToken = this.authService.user.access_token;
      this.idToken = this.authService.user.id_token;
  }

  getData() {
    return this.http.get('https://localhost:5001/api/Storage');
  }

  getHasuraData() {
    var q = this.getQuery();
    this.apollo.query({ query: q }).subscribe(({data}) => {
      this.graphData = data;
    });
  }

  onclick() {
    this.getData().subscribe((data)=> {
      console.log(data);
      this.data = data;
    });
  }

  getQuery(){
    return gql`
      query MyQuery {
        Analytic {
          Id
          Dimension
          Key
        }
      }
    `;
  }
}
