import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <div class="nav-back">
      <div class="nav">
        <ul>
          <li><img src="./resources/images/home-icon.png"></li>
          <li>Report an Encounter</li>
          <li>Learn<div class="menu-tab"></div></li>
          <li>Participate<div class="menu-tab"></div></li>
          <li>Individuals<div class="menu-tab"></div></li>
          <li>Encounters<div class="menu-tab"></div></li>
          <li>Sites<div class="menu-tab"></div></li>
          <li>Search<div class="menu-tab"></div></li>
          <li>Contact Us</li>
          <li>Administer<div class="menu-tab"></div></li>
        </ul>
      </div>
    </div>
  `
})

export class NavComponent {

}
