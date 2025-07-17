import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css'
})
export class SiteHeader {

}
