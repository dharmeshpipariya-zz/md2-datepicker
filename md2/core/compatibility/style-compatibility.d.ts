import { ModuleWithProviders, Renderer, ElementRef } from '@angular/core';
/** Selector that matches all elements that may have style collisions with material1. */
export declare const ELEMENTS_SELECTOR: string;
/**
 * Directive to apply to datepicker component that use the same element name as a
 * component in md2-datepicker. It does two things:
 * 1) Adds the css class "md2" to the host element so that material1 can use this class with a
 *    :not() in order to avoid affecting md2-datepicker elements.
 * 2) Adds a css class to the element that is identical to the element's tag. E.g., the element
 *    only these classes instead of defining element rules that would affect material1 components.
 */
export declare class StyleCompatibility {
    constructor(renderer: Renderer, elementRef: ElementRef);
}
export declare class StyleCompatibilityModule {
    static forRoot(): ModuleWithProviders;
}
