import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-ticket-component',
  standalone: true,
  imports: [
    NewTicketComponent
  ],
  templateUrl: './support-ticket-component.component.html',
  styleUrl: './support-ticket-component.component.css'
})
export class SupportTicketComponentComponent {

}
