import { Component } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  list = [
    {
        number: '01',
        name: 'My heart will go on',
        image: 'assets/images/06.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-home',
        target: 'pills-home-tab'
    },
    {
        number: '02',
        name: 'Another Song',
        image: 'assets/images/04.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-home',
        target: 'pills-home-tab'
    },
    {
        number: '03',
        name: 'My Confessions',
        image: 'assets/images/05.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-home',
        target: 'pills-home-tab'
    },
    {
        number: '04',
        name: 'My heart will go on',
        image: 'assets/images/09.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-profile',
        target: 'pills-profile-tab'
    },
    {
        number: '05',
        name: 'Another song',
        image: 'assets/images/08.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-profile',
        target: 'pills-profile-tab'
    },
    {
        number: '06',
        name: 'My Confessions',
        image: 'assets/images/10.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-profile',
        target: 'pills-profile-tab'
    },
    {
        number: '07',
        name: 'Hello',
        image: 'assets/images/12.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    },
    {
        number: '08',
        name: 'My heart will go on',
        image: 'assets/images/06.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    },
    {
        number: '09',
        name: 'Another Song',
        image: 'assets/images/04.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    },
    {
        number: '10',
        name: 'My Confessions',
        image: 'assets/images/05.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    },
    {
        number: '11',
        name: 'Hey there babe',
        image: 'assets/images/14.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    },
    {
        number: '12',
        name: 'John Banda',
        image: 'assets/images/11.jpg',
        description: 'Song description',
        duration: '5:00',
        id: 'pills-contact',
        target: 'pills-contact-tab'
    }
  ];
}



