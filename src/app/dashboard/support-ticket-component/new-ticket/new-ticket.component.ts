import {AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //                        .required
  //private form = viewChild<ElementRef<HTMLFormElement>>(ButtonComponent); //SIGNALSSS
  ngOnInit() {
    console.log('on init');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }
  onSubmit(title: string, ticketText: string) {

    console.log(title);
    console.log(ticketText);
    //       ()?
    this.form?.nativeElement.reset();
  }
}
