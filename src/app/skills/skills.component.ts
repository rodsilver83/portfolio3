import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild('title', { static: true }) title: ElementRef;

  @HostListener('window:scroll', ['$event'])
  windowScroll($event) {
    const topScroll = this.title.nativeElement.getBoundingClientRect().top;
    if (topScroll < 450) {
      this.bodyEl.classList.add('skills_bg');
    } else {
      this.bodyEl.classList.remove('skills_bg');
    }
  }

  private bodyEl: HTMLBodyElement;

  constructor() { }

  ngOnInit() {
    this.bodyEl = document.getElementsByTagName('body')[0];
  }

}
