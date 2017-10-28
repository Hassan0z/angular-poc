import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'friend',
  templateUrl: 'friend.component.html'
})
export class FriendComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    console.log('Helloo');
    this.message = 'Friend';
  }
}