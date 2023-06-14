import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  time : number = 0;
  interval : any;
  isRunning : boolean = false;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer() {
    if(!this.isRunning) {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
    }
    this.isRunning = true;
  }

  stopTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  resetTimer() {
    this.time = 0;
    this.isRunning = false;
  }
}
