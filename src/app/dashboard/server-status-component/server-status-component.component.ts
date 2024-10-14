import {Component, OnDestroy, OnInit, signal} from '@angular/core';
@Component({
  selector: 'app-server-status-component',
  standalone: true,
  imports: [],
  templateUrl: './server-status-component.component.html',
  styleUrl: './server-status-component.component.css'
})
export class ServerStatusComponentComponent implements OnInit, OnDestroy{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online') ;
  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
