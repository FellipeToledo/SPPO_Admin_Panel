import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class UsersService extends UserData {
  private time: Date = new Date();
  private users = {
    fellipe: { name: 'Fellipe Toledo', picture: 'https://avatars.githubusercontent.com/u/41087162?s=400&u=6fbc8f814202057304ddc2120e91cb5b26447d34&v=4' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.fellipe, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[] = [
    {
      user: this.users.alan,
      type: this.types.home,
      time: this.time.setHours(21, 12),
    },
    {
      user: this.users.eva,
      type: this.types.home,
      time: this.time.setHours(17, 45),
    },
    {
      user: this.users.fellipe,
      type: this.types.mobile,
      time: this.time.setHours(5, 29),
    },
    {
      user: this.users.lee,
      type: this.types.mobile,
      time: this.time.setHours(11, 24),
    },
    {
      user: this.users.jack,
      type: this.types.mobile,
      time: this.time.setHours(10, 45),
    },
    {
      user: this.users.kate,
      type: this.types.work,
      time: this.time.setHours(9, 42),
    },
    {
      user: this.users.kate,
      type: this.types.work,
      time: this.time.setHours(9, 31),
    },
    {
      user: this.users.jack,
      type: this.types.mobile,
      time: this.time.setHours(8, 0),
    },
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
