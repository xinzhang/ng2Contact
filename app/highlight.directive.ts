import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({selector: '[highlight]'})
export class HighlightDirective {
    constructor(render: Renderer, el: ElementRef) {
        render.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
        console.log('set highlight color');
    }
}