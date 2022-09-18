import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [style.color]="event?.time === '8:00 am' ? '#003300': '#bbb'"
           [ngStyle] = "{'font-style': event?.time === '8:00 am' ? 'italic' : 'oblique', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}"
           [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <div>
          <span>Location: {{event?.location?.address}}</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
  </div>
  `,
  styles: [
    `
      .green {color: #003300 !important;}
      .bold {font-weight: bold;}
      .thumbnail{min-height: 210px;}
      .pad-left {margin-left: 10px;}
      .well div{color: #bbb;}
    `
  ]
})

export class EventThumbnailComponent{
  @Input() event: IEvent;

  getStartTimeClass(): any{
    /*if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
      return ['green', 'bold'];
    }
    return '';
    return [];
    */
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {bold: isEarlyStart};
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
