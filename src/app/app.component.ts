import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponentComponent} from "./dashboard/server-status-component/server-status-component.component";
import {ServerTrafficComponentComponent} from "./dashboard/server-traffic-component/server-traffic-component.component";
import {SupportTicketComponentComponent} from "./dashboard/support-ticket-component/support-ticket-component.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponentComponent,
    ServerTrafficComponentComponent,
    SupportTicketComponentComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {


}
