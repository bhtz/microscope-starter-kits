import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/authentication/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  title = 'ClientApp';
  user: any;
  data: any;
  graphData: any;
  
  constructor(private authService: AuthService, private http: HttpClient, private apollo: Apollo){
  }


  ngOnInit(): void {
    debugger;
    this.user = this.authService.user;
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
