import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('title', { static: true }) title: ElementRef;

  @HostListener('window:scroll', ['$event'])
  windowScroll($event) {
    const topScroll = this.title.nativeElement.getBoundingClientRect().top;
    if (topScroll < 750) {
      this.bodyEl.classList.add('contact_bg');
    } else {
      this.bodyEl.classList.remove('contact_bg');
    }
  }

  private bodyEl: HTMLBodyElement;

  constructor() { }

  ngOnInit() {
    this.bodyEl = document.getElementsByTagName('body')[0];
  }

}
