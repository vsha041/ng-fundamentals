import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import { appRoutes} from './routes';
import {CreateEventComponent} from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventListResolver} from './events/event-list-resolver.service';
import {AuthService} from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean{
    if (component.isDirty){
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }

    return true;
}
