import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
 lang: string | undefined;
  ngOnInit(): void {
    this.lang=localStorage.getItem('lang')||'En'
  }
  changLanguage(lang:string) {
  localStorage.setItem('lang',lang);
  window.location.reload();
 }
}
