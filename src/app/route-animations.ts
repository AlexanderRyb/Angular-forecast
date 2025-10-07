import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
      }),
    ], { optional: true }),
    query(':enter', [style({ transform: 'translateX(100%)' })], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
    ]),
  ]),
]);