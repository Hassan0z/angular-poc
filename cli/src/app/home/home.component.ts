import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import * as _ from 'lodash';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public message: string;
  public upcomingMatches: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
  	let me = this;
    this.message = 'Home Component content || non api static content';
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.http.post('https://cig-prod-api.azurewebsites.net/api/matches/schedules', {date: null, pageno:0, state:3, type:0}, {headers: headers}).subscribe(function(data: any) {
    	const matches = JSON.parse(data.text());
      let uniqMatches = _.uniqBy(matches, 'md');
      me.upcomingMatches = _.map(uniqMatches, function(match, index) {
        let resultObj = {date: '', matches: []};
        resultObj.date = match.md;
        resultObj.matches = _.filter(matches, {md: match.md});
        return resultObj;
      });
      console.log(me.upcomingMatches);
    });
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Token HHiQLYvZnkGqfD5xzxr/Sw'); 
  }

  getFlag(teamName) {
    let flagStr = ''
    if (teamName === 'PAK') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/pakistan.png';
    else if(teamName === 'SL') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/srilanka.png';
    else if(teamName === 'SA') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/southafrica.png';
    else if(teamName === 'AUS') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/australia.png';
    else if(teamName === 'BAN') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/bangladesh.png';
    else if(teamName === 'WI') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/westindies.png';
    else if(teamName === 'NZ') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/newzealand.png';
    else if(teamName === 'ENG') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/england.png';
    else if(teamName === 'IND') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/india.png';
    else if(teamName === 'ZIM') flagStr = 'https://s3-ap-southeast-1.amazonaws.com/cig-assets/Images/flags2.0/100x100/zimbawe.png';

    return flagStr;
  }
}