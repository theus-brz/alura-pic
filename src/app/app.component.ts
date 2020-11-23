import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:
        'https://exitoina.uol.com.br/media/_versions/lion-3372731_1920_widelg.jpg',
      description: 'Leão',
    },
    {
      url:
        'https://s2.glbimg.com/awP2KnJnzIYEWAVOYLFL4d2nG0I=/0x0:2400x1599/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/a/m/0T0EZ4QZqcrtzp9ZwNeg/2018-10-21t152242z-534837741-rc174f509210-rtrmadp-3-usa-zoo-lions.jpg',
      description: 'Leoa',
    },
  ];
}
