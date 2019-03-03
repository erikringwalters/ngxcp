import {
    trigger,
    style,
    animate,
    transition,
    query,
    group,
    // ...
  } from '@angular/animations';

export const slideInAnimation = [
    trigger('routerTransition', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({transform: 'translateX({{offsetEnter}}%)'}),
            animate('0.4s ease-in-out', style({transform: 'translateX(0%)'}))
          ], {optional: true}),
          query(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.4s ease-in-out', style({transform: 'translateX({{offsetLeave}}%)'}))
          ], {optional: true}),
        ])
      ]),
    ])
];