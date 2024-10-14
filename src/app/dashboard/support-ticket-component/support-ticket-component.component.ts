import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./ticket.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-support-ticket-component',
  standalone: true,
  imports: [
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './support-ticket-component.component.html',
  styleUrl: './support-ticket-component.component.css'
})

export class SupportTicketComponentComponent {
  public static counter = 0;
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string, text: string}){
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: (SupportTicketComponentComponent.counter++).toString(),
      status: 'open'
    }
    this.tickets.push(ticket);
  }
  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id){
        return { ...ticket, status: 'closed'}
      }
      return ticket;
    });
  }
}
