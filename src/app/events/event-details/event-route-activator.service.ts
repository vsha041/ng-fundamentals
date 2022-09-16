import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
  constructor(private eventService: EventService, private router: Router) {

  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists){
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
