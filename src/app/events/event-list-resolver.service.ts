import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any>{
  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
