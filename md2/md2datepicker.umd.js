(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', '@angular/forms', '@angular/common'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.md2 = global.ng.md2 || {}),global.ng.core,global.Rx,global.ng.forms,global.ng.common));
}(this, (function (exports,_angular_core,rxjs_Subject,_angular_forms,_angular_common) { 'use strict';

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MdLine) query, then
 * counted by checking the query list's length.
 */
var MdLine = (function () {
    function MdLine() {
    }
    MdLine = __decorate$1([
        _angular_core.Directive({ selector: '[md-line]' }), 
        __metadata$1('design:paramtypes', [])
    ], MdLine);
    return MdLine;
}());
/* Helper that takes a query list of lines and sets the correct class on the host */
var MdLineSetter = (function () {
    function MdLineSetter(_lines, _renderer, _element) {
        var _this = this;
        this._lines = _lines;
        this._renderer = _renderer;
        this._element = _element;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(function () {
            _this._setLineClass(_this._lines.length);
        });
    }
    MdLineSetter.prototype._setLineClass = function (count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass("md-" + count + "-line", true);
        }
        else if (count > 3) {
            this._setClass("md-multi-line", true);
        }
    };
    MdLineSetter.prototype._resetClasses = function () {
        this._setClass('md-2-line', false);
        this._setClass('md-3-line', false);
        this._setClass('md-multi-line', false);
    };
    MdLineSetter.prototype._setClass = function (className, bool) {
        this._renderer.setElementClass(this._element.nativeElement, className, bool);
    };
    return MdLineSetter;
}());
var MdLineModule = (function () {
    function MdLineModule() {
    }
    MdLineModule = __decorate$1([
        _angular_core.NgModule({
            exports: [MdLine],
            declarations: [MdLine],
        }), 
        __metadata$1('design:paramtypes', [])
    ], MdLineModule);
    return MdLineModule;
}());

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to listen to changes of direction of part of the DOM.
 *
 * Applications should use this directive instead of the native attribute so that Material
 * components can listen on changes of direction.
 */
var Dir = (function () {
    function Dir() {
        this._dir = 'ltr';
        this.dirChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (v) {
            var old = this._dir;
            this._dir = v;
            if (old != this._dir) {
                this.dirChange.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        get: function () { return this.dir; },
        set: function (v) { this.dir = v; },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        _angular_core.Input('dir'), 
        __metadata$2('design:type', String)
    ], Dir.prototype, "_dir", void 0);
    __decorate$2([
        _angular_core.Output(), 
        __metadata$2('design:type', Object)
    ], Dir.prototype, "dirChange", void 0);
    __decorate$2([
        _angular_core.HostBinding('attr.dir'), 
        __metadata$2('design:type', String)
    ], Dir.prototype, "dir", null);
    Dir = __decorate$2([
        _angular_core.Directive({
            selector: '[dir]',
            // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
            exportAs: '$implicit'
        }), 
        __metadata$2('design:paramtypes', [])
    ], Dir);
    return Dir;
}());
var RtlModule = (function () {
    function RtlModule() {
    }
    RtlModule.forRoot = function () {
        return {
            ngModule: RtlModule,
            providers: []
        };
    };
    RtlModule = __decorate$2([
        _angular_core.NgModule({
            exports: [Dir],
            declarations: [Dir]
        }), 
        __metadata$2('design:paramtypes', [])
    ], RtlModule);
    return RtlModule;
}());

/** TODO: internal */
var ForegroundRippleState;
(function (ForegroundRippleState) {
    ForegroundRippleState[ForegroundRippleState["NEW"] = 0] = "NEW";
    ForegroundRippleState[ForegroundRippleState["EXPANDING"] = 1] = "EXPANDING";
    ForegroundRippleState[ForegroundRippleState["FADING_OUT"] = 2] = "FADING_OUT";
})(ForegroundRippleState || (ForegroundRippleState = {}));
/**
 * Wrapper for a foreground ripple DOM element and its animation state.
 * TODO: internal
 */
var ForegroundRipple = (function () {
    function ForegroundRipple(rippleElement) {
        this.rippleElement = rippleElement;
        this.state = ForegroundRippleState.NEW;
    }
    return ForegroundRipple;
}());
var RIPPLE_SPEED_PX_PER_SECOND = 1000;
var MIN_RIPPLE_FILL_TIME_SECONDS = 0.1;
var MAX_RIPPLE_FILL_TIME_SECONDS = 0.3;
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
var distanceToFurthestCorner = function (x, y, rect) {
    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
};
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * TODO: internal
 */
var RippleRenderer = (function () {
    function RippleRenderer(_elementRef, _eventHandlers) {
        this._eventHandlers = _eventHandlers;
        this._rippleElement = _elementRef.nativeElement;
        // It might be nice to delay creating the background until it's needed, but doing this in
        // fadeInRippleBackground causes the first click event to not be handled reliably.
        this._backgroundDiv = document.createElement('div');
        this._backgroundDiv.classList.add('md-ripple-background');
        this._rippleElement.appendChild(this._backgroundDiv);
    }
    /**
     * Installs event handlers on the given trigger element, and removes event handlers from the
     * previous trigger if needed.
     */
    RippleRenderer.prototype.setTriggerElement = function (newTrigger) {
        var _this = this;
        if (this._triggerElement !== newTrigger) {
            if (this._triggerElement) {
                this._eventHandlers.forEach(function (eventHandler, eventName) {
                    _this._triggerElement.removeEventListener(eventName, eventHandler);
                });
            }
            this._triggerElement = newTrigger;
            if (this._triggerElement) {
                this._eventHandlers.forEach(function (eventHandler, eventName) {
                    _this._triggerElement.addEventListener(eventName, eventHandler);
                });
            }
        }
    };
    /**
     * Installs event handlers on the host element of the md-ripple directive.
     */
    RippleRenderer.prototype.setTriggerElementToHost = function () {
        this.setTriggerElement(this._rippleElement);
    };
    /**
     * Removes event handlers from the current trigger element if needed.
     */
    RippleRenderer.prototype.clearTriggerElement = function () {
        this.setTriggerElement(null);
    };
    /**
     * Creates a foreground ripple and sets its animation to expand and fade in from the position
     * given by rippleOriginLeft and rippleOriginTop (or from the center of the <md-ripple>
     * bounding rect if centered is true).
     */
    RippleRenderer.prototype.createForegroundRipple = function (rippleOriginLeft, rippleOriginTop, color, centered, radius, speedFactor, transitionEndCallback) {
        var parentRect = this._rippleElement.getBoundingClientRect();
        // Create a foreground ripple div with the size and position of the fully expanded ripple.
        // When the div is created, it's given a transform style that causes the ripple to be displayed
        // small and centered on the event location (or the center of the bounding rect if the centered
        // argument is true). Removing that transform causes the ripple to animate to its natural size.
        var startX = centered ? (parentRect.left + parentRect.width / 2) : rippleOriginLeft;
        var startY = centered ? (parentRect.top + parentRect.height / 2) : rippleOriginTop;
        var offsetX = startX - parentRect.left;
        var offsetY = startY - parentRect.top;
        var maxRadius = radius > 0 ? radius : distanceToFurthestCorner(startX, startY, parentRect);
        var rippleDiv = document.createElement('div');
        this._rippleElement.appendChild(rippleDiv);
        rippleDiv.classList.add('md-ripple-foreground');
        rippleDiv.style.left = (offsetX - maxRadius) + "px";
        rippleDiv.style.top = (offsetY - maxRadius) + "px";
        rippleDiv.style.width = 2 * maxRadius + "px";
        rippleDiv.style.height = rippleDiv.style.width;
        // If color input is not set, this will default to the background color defined in CSS.
        rippleDiv.style.backgroundColor = color;
        // Start the ripple tiny.
        rippleDiv.style.transform = "scale(0.001)";
        var fadeInSeconds = (1 / (speedFactor || 1)) * Math.max(MIN_RIPPLE_FILL_TIME_SECONDS, Math.min(MAX_RIPPLE_FILL_TIME_SECONDS, maxRadius / RIPPLE_SPEED_PX_PER_SECOND));
        rippleDiv.style.transitionDuration = fadeInSeconds + "s";
        // https://timtaubert.de/blog/2012/09/css-transitions-for-dynamically-created-dom-elements/
        window.getComputedStyle(rippleDiv).opacity;
        rippleDiv.classList.add('md-ripple-fade-in');
        // Clearing the transform property causes the ripple to animate to its full size.
        rippleDiv.style.transform = '';
        var ripple = new ForegroundRipple(rippleDiv);
        ripple.state = ForegroundRippleState.EXPANDING;
        rippleDiv.addEventListener('transitionend', function (event) { return transitionEndCallback(ripple, event); });
    };
    /**
     * Fades out a foreground ripple after it has fully expanded and faded in.
     */
    RippleRenderer.prototype.fadeOutForegroundRipple = function (ripple) {
        ripple.classList.remove('md-ripple-fade-in');
        ripple.classList.add('md-ripple-fade-out');
    };
    /**
     * Removes a foreground ripple from the DOM after it has faded out.
     */
    RippleRenderer.prototype.removeRippleFromDom = function (ripple) {
        ripple.parentElement.removeChild(ripple);
    };
    /**
     * Fades in the ripple background.
     */
    RippleRenderer.prototype.fadeInRippleBackground = function (color) {
        this._backgroundDiv.classList.add('md-ripple-active');
        // If color is not set, this will default to the background color defined in CSS.
        this._backgroundDiv.style.backgroundColor = color;
    };
    /**
     * Fades out the ripple background.
     */
    RippleRenderer.prototype.fadeOutRippleBackground = function () {
        if (this._backgroundDiv) {
            this._backgroundDiv.classList.remove('md-ripple-active');
        }
    };
    return RippleRenderer;
}());

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdRipple = (function () {
    function MdRipple(_elementRef) {
        var _this = this;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.maxRadius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
         * setting it to 0.5 will cause the animations to take twice as long.
         */
        this.speedFactor = 1;
        // These event handlers are attached to the element that triggers the ripple animations.
        var eventHandlers = new Map();
        eventHandlers.set('mousedown', function (event) { return _this._mouseDown(event); });
        eventHandlers.set('click', function (event) { return _this._click(event); });
        eventHandlers.set('mouseleave', function (event) { return _this._mouseLeave(event); });
        this._rippleRenderer = new RippleRenderer(_elementRef, eventHandlers);
    }
    /** TODO: internal */
    MdRipple.prototype.ngOnInit = function () {
        // If no trigger element was explicity set, use the host element
        if (!this.trigger) {
            this._rippleRenderer.setTriggerElementToHost();
        }
    };
    /** TODO: internal */
    MdRipple.prototype.ngOnDestroy = function () {
        // Remove event listeners on the trigger element.
        this._rippleRenderer.clearTriggerElement();
    };
    /** TODO: internal */
    MdRipple.prototype.ngOnChanges = function (changes) {
        // If the trigger element changed (or is being initially set), add event listeners to it.
        var changedInputs = Object.keys(changes);
        if (changedInputs.indexOf('trigger') !== -1) {
            this._rippleRenderer.setTriggerElement(this.trigger);
        }
    };
    /**
     * Responds to the start of a ripple animation trigger by fading the background in.
     */
    MdRipple.prototype.start = function () {
        this._rippleRenderer.fadeInRippleBackground(this.backgroundColor);
    };
    /**
     * Responds to the end of a ripple animation trigger by fading the background out, and creating a
     * foreground ripple that expands from the event location (or from the center of the element if
     * the "centered" property is set or forceCenter is true).
     */
    MdRipple.prototype.end = function (left, top, forceCenter) {
        var _this = this;
        if (forceCenter === void 0) { forceCenter = true; }
        this._rippleRenderer.createForegroundRipple(left, top, this.color, this.centered || forceCenter, this.maxRadius, this.speedFactor, function (ripple, e) { return _this._rippleTransitionEnded(ripple, e); });
        this._rippleRenderer.fadeOutRippleBackground();
    };
    MdRipple.prototype._rippleTransitionEnded = function (ripple, event) {
        if (event.propertyName === 'opacity') {
            // If the ripple finished expanding, start fading it out. If it finished fading out,
            // remove it from the DOM.
            switch (ripple.state) {
                case ForegroundRippleState.EXPANDING:
                    this._rippleRenderer.fadeOutForegroundRipple(ripple.rippleElement);
                    ripple.state = ForegroundRippleState.FADING_OUT;
                    break;
                case ForegroundRippleState.FADING_OUT:
                    this._rippleRenderer.removeRippleFromDom(ripple.rippleElement);
                    break;
            }
        }
    };
    /**
     * Called when the trigger element receives a mousedown event. Starts the ripple animation by
     * fading in the background.
     */
    MdRipple.prototype._mouseDown = function (event) {
        if (!this.disabled && event.button === 0) {
            this.start();
        }
    };
    /**
     * Called when the trigger element receives a click event. Creates a foreground ripple and
     * runs its animation.
     */
    MdRipple.prototype._click = function (event) {
        if (!this.disabled && event.button === 0) {
            // If screen and page positions are all 0, this was probably triggered by a keypress.
            // In that case, use the center of the bounding rect as the ripple origin.
            // FIXME: This fails on IE11, which still sets pageX/Y and screenX/Y on keyboard clicks.
            var isKeyEvent = (event.screenX === 0 && event.screenY === 0 && event.pageX === 0 && event.pageY === 0);
            this.end(event.pageX, event.pageY, isKeyEvent);
        }
    };
    /**
     * Called when the trigger element receives a mouseleave event. Fades out the background.
     */
    MdRipple.prototype._mouseLeave = function (event) {
        // We can always fade out the background here; It's a no-op if it was already inactive.
        this._rippleRenderer.fadeOutRippleBackground();
    };
    __decorate$3([
        _angular_core.Input('md-ripple-trigger'), 
        __metadata$3('design:type', Object)
    ], MdRipple.prototype, "trigger", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-centered'), 
        __metadata$3('design:type', Boolean)
    ], MdRipple.prototype, "centered", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-disabled'), 
        __metadata$3('design:type', Boolean)
    ], MdRipple.prototype, "disabled", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-max-radius'), 
        __metadata$3('design:type', Number)
    ], MdRipple.prototype, "maxRadius", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-speed-factor'), 
        __metadata$3('design:type', Number)
    ], MdRipple.prototype, "speedFactor", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-color'), 
        __metadata$3('design:type', String)
    ], MdRipple.prototype, "color", void 0);
    __decorate$3([
        _angular_core.Input('md-ripple-background-color'), 
        __metadata$3('design:type', String)
    ], MdRipple.prototype, "backgroundColor", void 0);
    __decorate$3([
        _angular_core.HostBinding('class.md-ripple-focused'),
        _angular_core.Input('md-ripple-focused'), 
        __metadata$3('design:type', Boolean)
    ], MdRipple.prototype, "focused", void 0);
    __decorate$3([
        _angular_core.HostBinding('class.md-ripple-unbounded'),
        _angular_core.Input('md-ripple-unbounded'), 
        __metadata$3('design:type', Boolean)
    ], MdRipple.prototype, "unbounded", void 0);
    MdRipple = __decorate$3([
        _angular_core.Directive({
            selector: '[md-ripple]',
        }), 
        __metadata$3('design:paramtypes', [_angular_core.ElementRef])
    ], MdRipple);
    return MdRipple;
}());
var MdRippleModule = (function () {
    function MdRippleModule() {
    }
    MdRippleModule.forRoot = function () {
        return {
            ngModule: MdRippleModule,
            providers: []
        };
    };
    MdRippleModule = __decorate$3([
        _angular_core.NgModule({
            exports: [MdRipple],
            declarations: [MdRipple],
        }), 
        __metadata$3('design:paramtypes', [])
    ], MdRippleModule);
    return MdRippleModule;
}());

// TODO(kara): Revisit why error messages are not being properly set.
var __extends$3 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wrapper around Error that sets the error message.
 */
var MdError = (function (_super) {
    __extends$3(MdError, _super);
    function MdError(value) {
        _super.call(this);
        this.message = value;
    }
    return MdError;
}(Error));

var __extends$2 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** Exception thrown when attempting to attach a null portal to a host. */
var MdNullPortalError = (function (_super) {
    __extends$2(MdNullPortalError, _super);
    function MdNullPortalError() {
        _super.call(this, 'Must provide a portal to attach');
    }
    return MdNullPortalError;
}(MdError));
/** Exception thrown when attempting to attach a portal to a host that is already attached. */
var MdPortalAlreadyAttachedError = (function (_super) {
    __extends$2(MdPortalAlreadyAttachedError, _super);
    function MdPortalAlreadyAttachedError() {
        _super.call(this, 'Host already has a portal attached');
    }
    return MdPortalAlreadyAttachedError;
}(MdError));
/** Exception thrown when attempting to attach a portal to an already-disposed host. */
var MdPortalHostAlreadyDisposedError = (function (_super) {
    __extends$2(MdPortalHostAlreadyDisposedError, _super);
    function MdPortalHostAlreadyDisposedError() {
        _super.call(this, 'This PortalHost has already been disposed');
    }
    return MdPortalHostAlreadyDisposedError;
}(MdError));
/** Exception thrown when attempting to attach an unknown portal type. */
var MdUnknownPortalTypeError = (function (_super) {
    __extends$2(MdUnknownPortalTypeError, _super);
    function MdUnknownPortalTypeError() {
        _super.call(this, 'Attempting to attach an unknown Portal type. ' +
            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
    }
    return MdUnknownPortalTypeError;
}(MdError));
/** Exception thrown when attempting to attach a portal to a null host. */
var MdNullPortalHostError = (function (_super) {
    __extends$2(MdNullPortalHostError, _super);
    function MdNullPortalHostError() {
        _super.call(this, 'Attempting to attach a portal to a null PortalHost');
    }
    return MdNullPortalHostError;
}(MdError));
/** Exception thrown when attempting to detach a portal that is not attached. */
var MdNoPortalAttachedError = (function (_super) {
    __extends$2(MdNoPortalAttachedError, _super);
    function MdNoPortalAttachedError() {
        _super.call(this, 'Attempting to detach a portal that is not attached to a host');
    }
    return MdNoPortalAttachedError;
}(MdError));

var __extends$1 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
var Portal = (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            throw new MdNullPortalHostError();
        }
        if (host.hasAttached()) {
            throw new MdPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            throw new MdNoPortalAttachedError();
        }
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detatch()`.
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function (_super) {
    __extends$1(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        if (viewContainerRef === void 0) { viewContainerRef = null; }
        if (injector === void 0) { injector = null; }
        _super.call(this);
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = (function (_super) {
    __extends$1(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef) {
        _super.call(this);
        /**
         * Additional locals for the instantiated embedded view.
         * These locals can be seen as "exports" for the template, such as how ngFor has
         * index / event / odd.
         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
         */
        this.locals = new Map();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    TemplatePortal.prototype.attach = function (host, locals) {
        this.locals = locals == null ? new Map() : locals;
        return _super.prototype.attach.call(this, host);
    };
    TemplatePortal.prototype.detach = function () {
        this.locals = new Map();
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    BasePortalHost.prototype.hasAttached = function () {
        return this._attachedPortal != null;
    };
    BasePortalHost.prototype.attach = function (portal) {
        if (portal == null) {
            throw new MdNullPortalError();
        }
        if (this.hasAttached()) {
            throw new MdPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throw new MdPortalHostAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throw new MdUnknownPortalTypeError();
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._isDisposed = true;
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 *
 * Usage:
 * <template portal #greeting>
 *   <p> Hello {{name}} </p>
 * </template>
 */
var TemplatePortalDirective = (function (_super) {
    __extends(TemplatePortalDirective, _super);
    function TemplatePortalDirective(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    TemplatePortalDirective = __decorate$4([
        _angular_core.Directive({
            selector: '[portal]',
            exportAs: 'portal',
        }), 
        __metadata$4('design:paramtypes', [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
    ], TemplatePortalDirective);
    return TemplatePortalDirective;
}(TemplatePortal));
/**
 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * <template [portalHost]="greeting"></template>
 */
var PortalHostDirective = (function (_super) {
    __extends(PortalHostDirective, _super);
    function PortalHostDirective(_componentFactoryResolver, _viewContainerRef) {
        _super.call(this);
        this._componentFactoryResolver = _componentFactoryResolver;
        this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(PortalHostDirective.prototype, "portal", {
        get: function () {
            return this._portal;
        },
        set: function (p) {
            this._replaceAttachedPortal(p);
        },
        enumerable: true,
        configurable: true
    });
    PortalHostDirective.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    /** Attach the given ComponentPortal to this PortalHost using the ComponentFactoryResolver. */
    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalHost.
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        this.setDisposeFn(function () { return ref.destroy(); });
        return ref;
    };
    /** Attach the given TemplatePortal to this PortlHost as an embedded View. */
    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        this._viewContainerRef.createEmbeddedView(portal.templateRef);
        this.setDisposeFn(function () { return _this._viewContainerRef.clear(); });
        // TODO(jelbourn): return locals from view
        return new Map();
    };
    /** Detatches the currently attached Portal (if there is one) and attaches the given Portal. */
    PortalHostDirective.prototype._replaceAttachedPortal = function (p) {
        if (this.hasAttached()) {
            this.detach();
        }
        if (p) {
            this.attach(p);
            this._portal = p;
        }
    };
    PortalHostDirective = __decorate$4([
        _angular_core.Directive({
            selector: '[portalHost]',
            inputs: ['portal: portalHost']
        }), 
        __metadata$4('design:paramtypes', [_angular_core.ComponentFactoryResolver, _angular_core.ViewContainerRef])
    ], PortalHostDirective);
    return PortalHostDirective;
}(BasePortalHost));
var PortalModule = (function () {
    function PortalModule() {
    }
    PortalModule.forRoot = function () {
        return {
            ngModule: PortalModule,
            providers: []
        };
    };
    PortalModule = __decorate$4([
        _angular_core.NgModule({
            exports: [TemplatePortalDirective, PortalHostDirective],
            declarations: [TemplatePortalDirective, PortalHostDirective],
        }), 
        __metadata$4('design:paramtypes', [])
    ], PortalModule);
    return PortalModule;
}());

/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
var OverlayState = (function () {
    function OverlayState() {
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop **/
        this.backdropClass = 'md-overlay-dark-backdrop';
        /** The direction of the text in the overlay panel. */
        this.direction = 'ltr';
    }
    return OverlayState;
}());

var __extends$4 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends$4(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        _super.call(this);
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
    }
    /** Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver. */
    DomPortalHost.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not yet published
            // in Angular core. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.
            //
            // See https://github.com/angular/angular/pull/12674
            var changeDetectorRef_1 = componentRef.changeDetectorRef;
            this._appRef.registerChangeDetector(changeDetectorRef_1);
            this.setDisposeFn(function () {
                _this._appRef.unregisterChangeDetector(changeDetectorRef_1);
                // Normally the ViewContainer will remove the component's nodes from the DOM.
                // Without a ViewContainer, we need to manually remove the nodes.
                var componentRootNode = _this._getComponentRootNode(componentRef);
                if (componentRootNode.parentNode) {
                    componentRootNode.parentNode.removeChild(componentRootNode);
                }
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var viewContainer = portal.viewContainerRef;
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var index = viewContainer.indexOf(viewRef);
            if (index != -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return new Map();
    };
    DomPortalHost.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _state) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._backdropElement = null;
        this._backdropClick = new rxjs_Subject.Subject();
    }
    OverlayRef.prototype.attach = function (portal) {
        if (this._state.hasBackdrop) {
            this._attachBackdrop();
        }
        var attachResult = this._portalHost.attach(portal);
        this.updateSize();
        this.updateDirection();
        this.updatePosition();
        return attachResult;
    };
    OverlayRef.prototype.detach = function () {
        this._detatchBackdrop();
        return this._portalHost.detach();
    };
    OverlayRef.prototype.dispose = function () {
        this._detatchBackdrop();
        this._portalHost.dispose();
    };
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    OverlayRef.prototype.backdropClick = function () {
        return this._backdropClick.asObservable();
    };
    /** Gets the current state config of the overlay. */
    OverlayRef.prototype.getState = function () {
        return this._state;
    };
    /** Updates the position of the overlay based on the position strategy. */
    OverlayRef.prototype.updatePosition = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    };
    /** Updates the text direction of the overlay panel. **/
    OverlayRef.prototype.updateDirection = function () {
        this._pane.setAttribute('dir', this._state.direction);
    };
    /** Updates the size of the overlay based on the overlay config. */
    OverlayRef.prototype.updateSize = function () {
        if (this._state.width || this._state.width === 0) {
            this._pane.style.width = formatCssUnit(this._state.width);
        }
        if (this._state.height || this._state.height === 0) {
            this._pane.style.height = formatCssUnit(this._state.height);
        }
    };
    /** Attaches a backdrop for this overlay. */
    OverlayRef.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = document.createElement('div');
        this._backdropElement.classList.add('md-overlay-backdrop');
        this._backdropElement.classList.add(this._state.backdropClass);
        this._pane.parentElement.appendChild(this._backdropElement);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function () {
            _this._backdropClick.next(null);
        });
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(function () {
            _this._backdropElement.classList.add('md-overlay-backdrop-showing');
        });
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    OverlayRef.prototype._detatchBackdrop = function () {
        var _this = this;
        var backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            backdropToDetach.classList.remove('md-overlay-backdrop-showing');
            backdropToDetach.classList.remove(this._state.backdropClass);
            backdropToDetach.addEventListener('transitionend', function () {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            });
        }
    };
    return OverlayRef;
}());
function formatCssUnit(value) {
    return typeof value === 'string' ? value : value + "px";
}

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Simple utility for getting the bounds of the browser viewport.
 * TODO: internal
 */
var ViewportRuler = (function () {
    function ViewportRuler() {
    }
    // TODO(jelbourn): cache the document's bounding rect and only update it when the window
    // is resized (debounced).
    /** Gets a ClientRect for the viewport's bounds. */
    ViewportRuler.prototype.getViewportRect = function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var documentRect = document.documentElement.getBoundingClientRect();
        var scrollPosition = this.getViewportScrollPosition(documentRect);
        var height = window.innerHeight;
        var width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param documentRect
     */
    ViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
        if (documentRect === void 0) { documentRect = document.documentElement.getBoundingClientRect(); }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var top = documentRect.top < 0 && document.body.scrollTop == 0 ?
            -documentRect.top :
            document.body.scrollTop;
        var left = documentRect.left < 0 && document.body.scrollLeft == 0 ?
            -documentRect.left :
            document.body.scrollLeft;
        return { top: top, left: left };
    };
    ViewportRuler = __decorate$8([
        _angular_core.Injectable(), 
        __metadata$8('design:paramtypes', [])
    ], ViewportRuler);
    return ViewportRuler;
}());

/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */
function applyCssTransform(element, transformValue) {
    // It's important to trim the result, because the browser will ignore the set operation
    // if the string contains only whitespace.
    var value = transformValue.trim();
    element.style.transform = value;
    element.style.webkitTransform = value;
}

/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = (function () {
    function ConnectionPositionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = (function () {
    function ConnectedPositionStrategy(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
        this._connectedTo = _connectedTo;
        this._originPos = _originPos;
        this._overlayPos = _overlayPos;
        this._viewportRuler = _viewportRuler;
        this._dir = 'ltr';
        /** The offset in pixels for the overlay connection point on the x-axis */
        this._offsetX = 0;
        /** The offset in pixels for the overlay connection point on the y-axis */
        this._offsetY = 0;
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * TODO: internal
     */
    ConnectedPositionStrategy.prototype.apply = function (element) {
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var originRect = this._origin.getBoundingClientRect();
        var overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        var viewportRect = this._viewportRuler.getViewportRect();
        var firstOverlayPoint = null;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var originPoint = this._getOriginConnectionPoint(originRect, pos);
            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            firstOverlayPoint = firstOverlayPoint || overlayPoint;
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (this._willOverlayFitWithinViewport(overlayPoint, overlayRect, viewportRect)) {
                this._setElementPosition(element, overlayPoint);
                return Promise.resolve(null);
            }
        }
        // TODO(jelbourn): fallback behavior for when none of the preferred positions fit on-screen.
        // For now, just stick it in the first position and let it go off-screen.
        this._setElementPosition(element, firstOverlayPoint);
        return Promise.resolve(null);
    };
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
        return this;
    };
    /** Sets the layout direction so the overlay's position can be adjusted to match. */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        this._dir = dir;
        return this;
    };
    /** Sets an offset for the overlay's connection point on the x-axis */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._offsetX = offset;
        return this;
    };
    /** Sets an offset for the overlay's connection point on the y-axis */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getStartX = function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getEndX = function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param originRect
     * @param pos
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = function (originRect, pos) {
        var originStartX = this._getStartX(originRect);
        var originEndX = this._getEndX(originRect);
        var x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param originPoint
     * @param overlayRect
     * @param pos
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        return {
            x: originPoint.x + overlayStartX + this._offsetX,
            y: originPoint.y + overlayStartY + this._offsetY
        };
    };
    /**
     * Gets whether the overlay positioned at the given point will fit on-screen.
     * @param overlayPoint The top-left coordinate of the overlay.
     * @param overlayRect Bounding rect of the overlay, used to get its size.
     * @param viewportRect The bounding viewport.
     */
    ConnectedPositionStrategy.prototype._willOverlayFitWithinViewport = function (overlayPoint, overlayRect, viewportRect) {
        // TODO(jelbourn): probably also want some space between overlay edge and viewport edge.
        return overlayPoint.x >= viewportRect.left &&
            overlayPoint.x + overlayRect.width <= viewportRect.right &&
            overlayPoint.y >= viewportRect.top &&
            overlayPoint.y + overlayRect.height <= viewportRect.bottom;
    };
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param element
     * @param overlayPoint
     */
    ConnectedPositionStrategy.prototype._setElementPosition = function (element, overlayPoint) {
        var scrollPos = this._viewportRuler.getViewportScrollPosition();
        var x = overlayPoint.x + scrollPos.left;
        var y = overlayPoint.y + scrollPos.top;
        // TODO(jelbourn): we don't want to always overwrite the transform property here,
        // because it will need to be used for animations.
        applyCssTransform(element, "translateX(" + x + "px) translateY(" + y + "px)");
    };
    return ConnectedPositionStrategy;
}());

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport.
 */
var GlobalPositionStrategy = (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'absolute';
        this._top = '';
        this._bottom = '';
        this._left = '';
        this._right = '';
        /** Array of individual applications of translateX(). Currently only for centering. */
        this._translateX = [];
        /** Array of individual applications of translateY(). Currently only for centering. */
        this._translateY = [];
    }
    /** Sets the element to use CSS position: fixed */
    GlobalPositionStrategy.prototype.fixed = function () {
        this._cssPosition = 'fixed';
        return this;
    };
    /** Sets the element to use CSS position: absolute. This is the default. */
    GlobalPositionStrategy.prototype.absolute = function () {
        this._cssPosition = 'absolute';
        return this;
    };
    /** Sets the top position of the overlay. Clears any previously set vertical position. */
    GlobalPositionStrategy.prototype.top = function (value) {
        this._bottom = '';
        this._translateY = [];
        this._top = value;
        return this;
    };
    /** Sets the left position of the overlay. Clears any previously set horizontal position. */
    GlobalPositionStrategy.prototype.left = function (value) {
        this._right = '';
        this._translateX = [];
        this._left = value;
        return this;
    };
    /** Sets the bottom position of the overlay. Clears any previously set vertical position. */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        this._top = '';
        this._translateY = [];
        this._bottom = value;
        return this;
    };
    /** Sets the right position of the overlay. Clears any previously set horizontal position. */
    GlobalPositionStrategy.prototype.right = function (value) {
        this._left = '';
        this._translateX = [];
        this._right = value;
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = '0px'; }
        this._left = '50%';
        this._right = '';
        this._translateX = ['-50%', offset];
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = '0px'; }
        this._top = '50%';
        this._bottom = '';
        this._translateY = ['-50%', offset];
        return this;
    };
    /**
     * Apply the position to the element.
     * TODO: internal
     */
    GlobalPositionStrategy.prototype.apply = function (element) {
        element.style.position = this._cssPosition;
        element.style.top = this._top;
        element.style.left = this._left;
        element.style.bottom = this._bottom;
        element.style.right = this._right;
        // TODO(jelbourn): we don't want to always overwrite the transform property here,
        // because it will need to be used for animations.
        var tranlateX = this._reduceTranslateValues('translateX', this._translateX);
        var translateY = this._reduceTranslateValues('translateY', this._translateY);
        applyCssTransform(element, tranlateX + " " + translateY);
        return Promise.resolve(null);
    };
    /** Reduce a list of translate values to a string that can be used in the transform property */
    GlobalPositionStrategy.prototype._reduceTranslateValues = function (translateFn, values) {
        return values.map(function (t) { return (translateFn + "(" + t + ")"); }).join(' ');
    };
    return GlobalPositionStrategy;
}());

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Builder for overlay position strategy. */
var OverlayPositionBuilder = (function () {
    function OverlayPositionBuilder(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /** Creates a global position strategy. */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /** Creates a relative position strategy. */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    };
    OverlayPositionBuilder = __decorate$7([
        _angular_core.Injectable(), 
        __metadata$7('design:paramtypes', [ViewportRuler])
    ], OverlayPositionBuilder);
    return OverlayPositionBuilder;
}());

/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns {HTMLElement} the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'md-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('md-overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Next overlay unique ID. */
var nextUniqueId = 0;
/** The default state for newly created overlays. */
var defaultState = new OverlayState();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
    }
    /**
     * Creates an overlay.
     * @param state State to apply to the overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (state) {
        if (state === void 0) { state = defaultState; }
        return this._createOverlayRef(this._createPaneElement(), state);
    };
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Promise resolving to the created element.
     */
    Overlay.prototype._createPaneElement = function () {
        var pane = document.createElement('div');
        pane.id = "md-overlay-" + nextUniqueId++;
        pane.classList.add('md-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     * @param state
     * @returns {OverlayRef}
     */
    Overlay.prototype._createOverlayRef = function (pane, state) {
        return new OverlayRef(this._createPortalHost(pane), pane, state);
    };
    Overlay = __decorate$6([
        _angular_core.Injectable(), 
        __metadata$6('design:paramtypes', [OverlayContainer, _angular_core.ComponentFactoryResolver, OverlayPositionBuilder, _angular_core.ApplicationRef, _angular_core.Injector])
    ], Overlay);
    return Overlay;
}());
/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    ViewportRuler,
    OverlayPositionBuilder,
    Overlay,
    OverlayContainer,
];

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
var defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var OverlayOrigin = (function () {
    function OverlayOrigin(_elementRef) {
        this._elementRef = _elementRef;
    }
    Object.defineProperty(OverlayOrigin.prototype, "elementRef", {
        get: function () {
            return this._elementRef;
        },
        enumerable: true,
        configurable: true
    });
    OverlayOrigin = __decorate$5([
        _angular_core.Directive({
            selector: '[overlay-origin]',
            exportAs: 'overlayOrigin',
        }), 
        __metadata$5('design:paramtypes', [_angular_core.ElementRef])
    ], OverlayOrigin);
    return OverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var ConnectedOverlayDirective = (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function ConnectedOverlayDirective(_overlay, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._open = false;
        this._hasBackdrop = false;
        /** The offset in pixels for the overlay connection point on the x-axis */
        this.offsetX = 0;
        /** The offset in pixels for the overlay connection point on the y-axis */
        this.offsetY = 0;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new _angular_core.EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    }
    Object.defineProperty(ConnectedOverlayDirective.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: function () {
            return this._hasBackdrop;
        },
        // TODO: move the boolean coercion logic to a shared function in core
        set: function (value) {
            this._hasBackdrop = value != null && "" + value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            value ? this._attachOverlay() : this._detachOverlay();
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "overlayRef", {
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "dir", {
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    ConnectedOverlayDirective.prototype.ngOnDestroy = function () {
        this._destroyOverlay();
    };
    /** Creates an overlay */
    ConnectedOverlayDirective.prototype._createOverlay = function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /** Builds the overlay config based on the directive's inputs */
    ConnectedOverlayDirective.prototype._buildConfig = function () {
        var overlayConfig = new OverlayState();
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        overlayConfig.hasBackdrop = this.hasBackdrop;
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        overlayConfig.positionStrategy = this._createPositionStrategy();
        overlayConfig.direction = this.dir;
        return overlayConfig;
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    ConnectedOverlayDirective.prototype._createPositionStrategy = function () {
        var pos = this.positions[0];
        var originPoint = { originX: pos.originX, originY: pos.originY };
        var overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        return this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withDirection(this.dir)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._attachOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
                _this.backdropClick.emit();
            });
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
    };
    /** Destroys the overlay created by this directive. */
    ConnectedOverlayDirective.prototype._destroyOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
    };
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', OverlayOrigin)
    ], ConnectedOverlayDirective.prototype, "origin", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Array)
    ], ConnectedOverlayDirective.prototype, "positions", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Number)
    ], ConnectedOverlayDirective.prototype, "offsetX", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Number)
    ], ConnectedOverlayDirective.prototype, "offsetY", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Object)
    ], ConnectedOverlayDirective.prototype, "width", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Object)
    ], ConnectedOverlayDirective.prototype, "height", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', String)
    ], ConnectedOverlayDirective.prototype, "backdropClass", void 0);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Object)
    ], ConnectedOverlayDirective.prototype, "hasBackdrop", null);
    __decorate$5([
        _angular_core.Input(), 
        __metadata$5('design:type', Object)
    ], ConnectedOverlayDirective.prototype, "open", null);
    __decorate$5([
        _angular_core.Output(), 
        __metadata$5('design:type', Object)
    ], ConnectedOverlayDirective.prototype, "backdropClick", void 0);
    ConnectedOverlayDirective = __decorate$5([
        _angular_core.Directive({
            selector: '[connected-overlay]',
            exportAs: 'connectedOverlay'
        }),
        __param(3, _angular_core.Optional()), 
        __metadata$5('design:paramtypes', [Overlay, _angular_core.TemplateRef, _angular_core.ViewContainerRef, Dir])
    ], ConnectedOverlayDirective);
    return ConnectedOverlayDirective;
}());
var OverlayModule = (function () {
    function OverlayModule() {
    }
    OverlayModule.forRoot = function () {
        return {
            ngModule: OverlayModule,
            providers: OVERLAY_PROVIDERS,
        };
    };
    OverlayModule = __decorate$5([
        _angular_core.NgModule({
            imports: [PortalModule],
            exports: [ConnectedOverlayDirective, OverlayOrigin],
            declarations: [ConnectedOverlayDirective, OverlayOrigin],
        }), 
        __metadata$5('design:paramtypes', [])
    ], OverlayModule);
    return OverlayModule;
}());

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 *
 * NOTE: Currently does not capture any special element behaviors, browser quirks, or edge cases.
 * This is a basic/naive starting point onto which further behavior will be added.
 *
 * This class uses instance methods instead of static functions so that alternate implementations
 * can be injected.
 *
 * TODO(jelbourn): explore using ally.js directly for its significantly more robust
 * checks (need to evaluate payload size, performance, and compatibility with tree-shaking).
 */
var InteractivityChecker = (function () {
    function InteractivityChecker() {
    }
    /** Gets whether an element is disabled. */
    InteractivityChecker.prototype.isDisabled = function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     */
    InteractivityChecker.prototype.isVisible = function (element) {
        // There are additional special cases that this does not capture, but this will work for
        // the most common cases.
        // Use logic from jQuery to check for `display: none`.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        if (!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)) {
            return false;
        }
        // Check for css `visibility` property.
        // TODO(jelbourn): do any browsers we support return an empty string instead of 'visible'?
        return getComputedStyle(element).getPropertyValue('visibility') == 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     */
    InteractivityChecker.prototype.isTabbable = function (element) {
        // Again, naive approach that does not capture many special cases and browser quirks.
        return element.tabIndex >= 0;
    };
    /** Gets whether an element can be focused by the user. */
    InteractivityChecker.prototype.isFocusable = function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker = __decorate$11([
        _angular_core.Injectable(), 
        __metadata$11('design:paramtypes', [])
    ], InteractivityChecker);
    return InteractivityChecker;
}());
/** Gets whether an element's  */
function isNativeFormElement(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an <input type="hidden">. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive for trapping focus within a region.
 *
 * NOTE: This directive currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
var FocusTrap = (function () {
    function FocusTrap(_checker) {
        this._checker = _checker;
    }
    /** Focuses the first tabbable element within the focus trap region. */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var redirectToElement = this._getFirstTabbableElement(this.trappedContent.nativeElement);
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Focuses the last tabbable element within the focus trap region. */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var redirectToElement = this._getLastTabbableElement(this.trappedContent.nativeElement);
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order.
        var childCount = root.children.length;
        for (var i = 0; i < childCount; i++) {
            var tabbableChild = this._getFirstTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        for (var i = root.children.length - 1; i >= 0; i--) {
            var tabbableChild = this._getLastTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    __decorate$10([
        _angular_core.ViewChild('trappedContent'), 
        __metadata$10('design:type', _angular_core.ElementRef)
    ], FocusTrap.prototype, "trappedContent", void 0);
    FocusTrap = __decorate$10([
        _angular_core.Component({selector: 'focus-trap',
            // TODO(jelbourn): move this to a separate file.
            template: "\n  <div tabindex=\"0\" (focus)=\"focusLastTabbableElement()\"></div>\n  <div #trappedContent><ng-content></ng-content></div>\n  <div tabindex=\"0\" (focus)=\"focusFirstTabbableElement()\"></div>",
            encapsulation: _angular_core.ViewEncapsulation.None,
        }), 
        __metadata$10('design:paramtypes', [InteractivityChecker])
    ], FocusTrap);
    return FocusTrap;
}());

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core.OpaqueToken('mdLiveAnnouncerElement');
var MdLiveAnnouncer = (function () {
    function MdLiveAnnouncer(elementToken) {
        // We inject the live element as `any` because the constructor signature cannot reference
        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
        // causes TypeScript to preserve the constructor signature types.
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element.
     */
    MdLiveAnnouncer.prototype.announce = function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        setTimeout(function () { return _this._liveElement.textContent = message; }, 100);
    };
    /** Removes the aria-live element from the DOM. */
    MdLiveAnnouncer.prototype._removeLiveElement = function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    MdLiveAnnouncer.prototype._createLiveElement = function () {
        var liveEl = document.createElement('div');
        liveEl.classList.add('md-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveEl);
        return liveEl;
    };
    MdLiveAnnouncer = __decorate$12([
        _angular_core.Injectable(),
        __param$1(0, _angular_core.Optional()),
        __param$1(0, _angular_core.Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)), 
        __metadata$12('design:paramtypes', [Object])
    ], MdLiveAnnouncer);
    return MdLiveAnnouncer;
}());

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var A11Y_PROVIDERS = [MdLiveAnnouncer, InteractivityChecker];
var A11yModule = (function () {
    function A11yModule() {
    }
    A11yModule.forRoot = function () {
        return {
            ngModule: A11yModule,
            providers: A11Y_PROVIDERS,
        };
    };
    A11yModule = __decorate$9([
        _angular_core.NgModule({
            declarations: [FocusTrap],
            exports: [FocusTrap],
        }), 
        __metadata$9('design:paramtypes', [])
    ], A11yModule);
    return A11yModule;
}());

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var MdUniqueSelectionDispatcher = (function () {
    function MdUniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /** Notify other items that selection for the given name has been set. */
    MdUniqueSelectionDispatcher.prototype.notify = function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /** Listen for future changes to item selection. */
    MdUniqueSelectionDispatcher.prototype.listen = function (listener) {
        this._listeners.push(listener);
    };
    MdUniqueSelectionDispatcher = __decorate$13([
        _angular_core.Injectable(), 
        __metadata$13('design:paramtypes', [])
    ], MdUniqueSelectionDispatcher);
    return MdUniqueSelectionDispatcher;
}());

// Due to a bug in the ChromeDriver, Angular 2 keyboard events are not triggered by `sendKeys`
// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
// we are temporarily using a single (keydown) handler.
// See: https://github.com/angular/angular/issues/9419
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Selector that matches all elements that may have style collisions with material1. */
var ELEMENTS_SELECTOR = "\n  md-card,\n  md-card-actions,\n  md-card-content,\n  md-card-footer,\n  md-card-header,\n  md-card-subtitle,\n  md-card-title,\n  md-card-title-group,\n  md-checkbox,\n  md-dialog-container,\n  md-divider,\n  md-grid-list,\n  md-grid-tile,\n  md-grid-tile-footer,\n  md-grid-tile-header,\n  md-hint,\n  md-icon,\n  md-ink-bar,\n  md-input,\n  md-list,\n  md-list-item,\n  md-menu,\n  md-nav-list,\n  md-option,\n  md-placeholder,\n  md-progress-bar,\n  md-progress-circle,\n  md-radio-button,\n  md-radio-group,\n  md-select,\n  md-sidenav,\n  md-slider,\n  md-spinner,\n  md-tab,\n  md-toolbar\n";
/**
 * Directive to apply to datepicker component that use the same element name as a
 * component in md2-datepicker. It does two things:
 * 1) Adds the css class "md2" to the host element so that material1 can use this class with a
 *    :not() in order to avoid affecting md2-datepicker elements.
 * 2) Adds a css class to the element that is identical to the element's tag. E.g., the element
 *    only these classes instead of defining element rules that would affect material1 components.
 */
var StyleCompatibility = (function () {
    function StyleCompatibility(renderer, elementRef) {
        var element = elementRef.nativeElement;
        renderer.setElementClass(element, 'md2', true);
        renderer.setElementClass(element, element.nodeName.toLowerCase(), true);
    }
    StyleCompatibility = __decorate$14([
        _angular_core.Directive({
            selector: ELEMENTS_SELECTOR,
        }), 
        __metadata$14('design:paramtypes', [_angular_core.Renderer, _angular_core.ElementRef])
    ], StyleCompatibility);
    return StyleCompatibility;
}());
var StyleCompatibilityModule = (function () {
    function StyleCompatibilityModule() {
    }
    StyleCompatibilityModule.forRoot = function () {
        return {
            ngModule: StyleCompatibilityModule,
            providers: [],
        };
    };
    StyleCompatibilityModule = __decorate$14([
        _angular_core.NgModule({
            declarations: [StyleCompatibility],
            exports: [StyleCompatibility],
        }), 
        __metadata$14('design:paramtypes', [])
    ], StyleCompatibilityModule);
    return StyleCompatibilityModule;
}());

var AnimationCurves = (function () {
    function AnimationCurves() {
    }
    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    return AnimationCurves;
}());
;
var AnimationDurations = (function () {
    function AnimationDurations() {
    }
    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    return AnimationDurations;
}());
;

/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdCoreModule = (function () {
    function MdCoreModule() {
    }
    MdCoreModule.forRoot = function () {
        return {
            ngModule: MdCoreModule,
            providers: [A11Y_PROVIDERS, OVERLAY_PROVIDERS],
        };
    };
    MdCoreModule = __decorate([
        _angular_core.NgModule({
            imports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule, A11yModule],
            exports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule, A11yModule],
        }), 
        __metadata('design:paramtypes', [])
    ], MdCoreModule);
    return MdCoreModule;
}());

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Md2DateUtil = (function () {
    function Md2DateUtil() {
    }
    /**
     * Gets the first day of the month for the given date's month.
     * @param {Date} date
     * @returns {Date}
     */
    Md2DateUtil.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes());
    };
    /**
     * Gets the number of days in the month for the given date's month.
     * @param date
     * @returns {number}
     */
    Md2DateUtil.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    /**
     * Get an arbitrary date in the month after the given date's month.
     * @param date
     * @returns {Date}
     */
    Md2DateUtil.prototype.getDateInNextMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    };
    /**
     * Get an arbitrary date in the month before the given date's month.
     * @param date
     * @returns {Date}
     */
    Md2DateUtil.prototype.getDateInPreviousMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() - 1, 1, date.getHours(), date.getMinutes());
    };
    /**
     * Gets whether two dates have the same month and year.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    Md2DateUtil.prototype.isSameMonthAndYear = function (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time).
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    Md2DateUtil.prototype.isSameDay = function (d1, d2) {
        return d1.getDate() == d2.getDate() && this.isSameMonthAndYear(d1, d2);
    };
    /**
     * Gets whether a date is in the month immediately after some date.
     * @param {Date} startDate The date from which to compare.
     * @param {Date} endDate The date to check.
     * @returns {boolean}
     */
    Md2DateUtil.prototype.isInNextMonth = function (startDate, endDate) {
        var nextMonth = this.getDateInNextMonth(startDate);
        return this.isSameMonthAndYear(nextMonth, endDate);
    };
    /**
     * Gets whether a date is in the month immediately before some date.
     * @param {Date} startDate The date from which to compare.
     * @param {Date} endDate The date to check.
     * @returns {boolean}
     */
    Md2DateUtil.prototype.isInPreviousMonth = function (startDate, endDate) {
        var previousMonth = this.getDateInPreviousMonth(startDate);
        return this.isSameMonthAndYear(endDate, previousMonth);
    };
    /**
     * Gets the midpoint between two dates.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {Date}
     */
    Md2DateUtil.prototype.getDateMidpoint = function (d1, d2) {
        return this.createDateAtMidnight((d1.getTime() + d2.getTime()) / 2);
    };
    /**
     * Gets the week of the month that a given date occurs in.
     * @param {Date} date
     * @returns {number} Index of the week of the month (zero-based).
     */
    Md2DateUtil.prototype.getWeekOfMonth = function (date) {
        var firstDayOfMonth = this.getFirstDateOfMonth(date);
        return Math.floor((firstDayOfMonth.getDay() + date.getDate() - 1) / 7);
    };
    /**
     * Gets a new date incremented by the given number of minutes. Number of minutes can be negative.
     * @param {Date} date
     * @param {number} numberOfMinutes
     * @returns {Date}
     */
    Md2DateUtil.prototype.incrementMinutes = function (date, numberOfMinutes) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + numberOfMinutes);
    };
    /**
     * Gets a new date incremented by the given number of hours. Number of hours can be negative.
     * @param {Date} date
     * @param {number} numberOfHours
     * @returns {Date}
     */
    Md2DateUtil.prototype.incrementHours = function (date, numberOfHours) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + numberOfHours, date.getMinutes());
    };
    /**
     * Gets a new date incremented by the given number of days. Number of days can be negative.
     * @param {Date} date
     * @param {number} numberOfDays
     * @returns {Date}
     */
    Md2DateUtil.prototype.incrementDays = function (date, numberOfDays) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + numberOfDays, date.getHours(), date.getMinutes());
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     * @param {Date} date
     * @param {number} numberOfMonths
     * @returns {Date}
     */
    Md2DateUtil.prototype.incrementMonths = function (date, numberOfMonths) {
        // If the same date in the target month does not actually exist, the Date object will
        // automatically advance *another* month by the number of missing days.
        // For example, if you try to go from Jan. 30 to Feb. 30, you'll end up on March 2.
        // So, we check if the month overflowed and go to the last day of the target month instead.
        var dateInTargetMonth = new Date(date.getFullYear(), date.getMonth() + numberOfMonths, 1, date.getHours(), date.getMinutes());
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(date.getDate());
        }
        return dateInTargetMonth;
    };
    /**
     * Get the integer distance between two months. This *only* considers the month and year
     * portion of the Date instances.
     *
     * @param {Date} start
     * @param {Date} end
     * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
     *     chronologically, this number will be negative.
     */
    Md2DateUtil.prototype.getMonthDistance = function (start, end) {
        return (12 * (end.getFullYear() - start.getFullYear())) + (end.getMonth() - start.getMonth());
    };
    /**
     * Gets the last day of the month for the given date.
     * @param {Date} date
     * @returns {Date}
     */
    Md2DateUtil.prototype.getLastDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), this.getNumberOfDaysInMonth(date), date.getHours(), date.getMinutes());
    };
    /**
     * Checks whether a date is valid.
     * @param {Date} date
     * @return {boolean} Whether the date is a valid Date.
     */
    Md2DateUtil.prototype.isValidDate = function (date) {
        return date != null && date.getTime && !isNaN(date.getTime());
    };
    /**
     * Sets a date's time to midnight.
     * @param {Date} date
     */
    Md2DateUtil.prototype.setDateTimeToMidnight = function (date) {
        if (this.isValidDate(date)) {
            date.setHours(0, 0, 0, 0);
        }
    };
    /**
     * Creates a date with the time set to midnight.
     * Drop-in replacement for two forms of the Date constructor:
     * 1. No argument for Date representing now.
     * 2. Single-argument value representing number of seconds since Unix Epoch
     * or a Date object.
     * @param {number|Date=} opt_value
     * @return {Date} New date with time set to midnight.
     */
    Md2DateUtil.prototype.createDateAtMidnight = function (opt_value) {
        var date;
        if (!opt_value) {
            date = new Date();
        }
        else {
            date = new Date(opt_value);
        }
        this.setDateTimeToMidnight(date);
        return date;
    };
    /**
     * Checks if a date is within a min and max range, ignoring the time component.
     * If minDate or maxDate are not dates, they are ignored.
     * @param {Date} date
     * @param {Date} minDate
     * @param {Date} maxDate
     */
    Md2DateUtil.prototype.isDateWithinRange = function (date, minDate, maxDate) {
        var dateAtMidnight = this.createDateAtMidnight(date);
        var minDateAtMidnight = this.isValidDate(minDate) ? this.createDateAtMidnight(minDate) : null;
        var maxDateAtMidnight = this.isValidDate(maxDate) ? this.createDateAtMidnight(maxDate) : null;
        return (!minDateAtMidnight || minDateAtMidnight <= dateAtMidnight) &&
            (!maxDateAtMidnight || maxDateAtMidnight >= dateAtMidnight);
    };
    /**
     * Gets a new date incremented by the given number of years. Number of years can be negative.
     * See `incrementMonths` for notes on overflow for specific dates.
     * @param {Date} date
     * @param {number} numberOfYears
     * @returns {Date}
     */
    Md2DateUtil.prototype.incrementYears = function (date, numberOfYears) {
        return this.incrementMonths(date, numberOfYears * 12);
    };
    /**
     * Get the integer distance between two years. This *only* considers the year portion of the
     * Date instances.
     *
     * @param {Date} start
     * @param {Date} end
     * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
     *     chronologically, this number will be negative.
     */
    Md2DateUtil.prototype.getYearDistance = function (start, end) {
        return end.getFullYear() - start.getFullYear();
    };
    /**
     * Clamps a date between a minimum and a maximum date.
     * @param {Date} date Date to be clamped
     * @param {Date=} minDate Minimum date
     * @param {Date=} maxDate Maximum date
     * @return {Date}
     */
    Md2DateUtil.prototype.clampDate = function (date, minDate, maxDate) {
        var boundDate = date;
        if (minDate && date < minDate) {
            boundDate = new Date(minDate.getTime());
        }
        if (maxDate && date > maxDate) {
            boundDate = new Date(maxDate.getTime());
        }
        return boundDate;
    };
    /**
     * Extracts and parses the timestamp from a DOM node.
     * @param  {HTMLElement} node Node from which the timestamp will be extracted.
     * @return {number} Time since epoch.
     */
    Md2DateUtil.prototype.getTimestampFromNode = function (node) {
        if (node && node.hasAttribute('data-timestamp')) {
            return Number(node.getAttribute('data-timestamp'));
        }
    };
    /**
     * Checks if a month is within a min and max range, ignoring the date and time components.
     * If minDate or maxDate are not dates, they are ignored.
     * @param {Date} date
     * @param {Date} minDate
     * @param {Date} maxDate
     */
    Md2DateUtil.prototype.isMonthWithinRange = function (date, minDate, maxDate) {
        var month = date.getMonth();
        var year = date.getFullYear();
        return (!minDate || minDate.getFullYear() < year || minDate.getMonth() <= month) &&
            (!maxDate || maxDate.getFullYear() > year || maxDate.getMonth() >= month);
    };
    Md2DateUtil = __decorate$17([
        _angular_core.Injectable(), 
        __metadata$17('design:paramtypes', [])
    ], Md2DateUtil);
    return Md2DateUtil;
}());

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop = function () { };
var nextId = 0;
var MD_DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return MdDatepicker; }),
    multi: true
};
var MdDatepicker = (function () {
    function MdDatepicker(dateUtil, element) {
        this.dateUtil = dateUtil;
        this.element = element;
        //private mouseMoveListener: any;
        //private mouseUpListener: any;
        this._value = null;
        this._disabled = false;
        this._isInitialized = false;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this.isHoursVisible = true;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.hours = [];
        this.minutes = [];
        this.prevMonth = 1;
        this.currMonth = 2;
        this.nextMonth = 3;
        this.years = [];
        this.dates = [];
        this.today = new Date();
        this._displayDate = null;
        this.selectedDate = null;
        this.displayDay = { year: 0, month: '', date: '', day: '', hour: '', minute: '' };
        this.displayInputDate = '';
        this.clock = {
            dialRadius: 120,
            outerRadius: 99,
            innerRadius: 66,
            tickRadius: 17,
            hand: { x: 0, y: 0 },
            x: 0, y: 0,
            dx: 0, dy: 0,
            moved: false
        };
        this._minDate = null;
        this._maxDate = null;
        this.change = new _angular_core.EventEmitter();
        this.type = 'date';
        this.name = '';
        this.id = 'md-datepicker-' + (++nextId);
        this.format = this.type === 'date' ? 'DD/MM/YYYY' : this.type === 'time' ? 'HH:mm' : this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'DD/MM/YYYY';
        this.tabindex = 0;
        this.getYears();
        this.generateClock();
        //this.mouseMoveListener = (event: MouseEvent) => { this.onMouseMoveClock(event); };
        //this.mouseUpListener = (event: MouseEvent) => { this.onMouseUpClock(event); };
    }
    MdDatepicker.prototype.ngAfterContentInit = function () {
        this._isInitialized = true;
        this.isCalendarVisible = this.type !== 'time' ? true : false;
    };
    Object.defineProperty(MdDatepicker.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "min", {
        set: function (value) {
            this._minDate = new Date(value);
            this._minDate.setHours(0, 0, 0, 0);
            this.getYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "max", {
        set: function (value) {
            this._maxDate = new Date(value);
            this._maxDate.setHours(0, 0, 0, 0);
            this.getYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            if (value && value !== this._value) {
                if (this.dateUtil.isValidDate(value)) {
                    this._value = value;
                }
                else {
                    if (this.type === 'time') {
                        this._value = new Date('1-1-1 ' + value);
                    }
                    else {
                        this._value = new Date(value);
                    }
                }
                this.displayInputDate = this._formatDate(this._value);
                var date = '';
                if (this.type !== 'time') {
                    date += this._value.getFullYear() + '-' + (this._value.getMonth() + 1) + '-' + this._value.getDate();
                }
                if (this.type === 'datetime') {
                    date += ' ';
                }
                if (this.type !== 'date') {
                    date += this._value.getHours() + ':' + this._value.getMinutes();
                }
                if (this._isInitialized) {
                    this._onChangeCallback(date);
                    this.change.emit(date);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "displayDate", {
        get: function () {
            if (this._displayDate && this.dateUtil.isValidDate(this._displayDate)) {
                return this._displayDate;
            }
            else {
                return this.today;
            }
        },
        set: function (date) {
            if (date && this.dateUtil.isValidDate(date)) {
                if (this._minDate && this._minDate > date) {
                    date = this._minDate;
                }
                if (this._maxDate && this._maxDate < date) {
                    date = this._maxDate;
                }
                this._displayDate = date;
                this.displayDay = {
                    year: date.getFullYear(),
                    month: this.months[date.getMonth()],
                    date: this._prependZero(date.getDate() + ''),
                    day: this.days[date.getDay()],
                    hour: this._prependZero(date.getHours() + ''),
                    minute: this._prependZero(date.getMinutes() + '')
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    MdDatepicker.prototype.onClick = function (event) {
        if (this.disabled) {
            event.stopPropagation();
            event.preventDefault();
            return;
        }
    };
    MdDatepicker.prototype.onKeyDown = function (event) {
        if (this.disabled) {
            return;
        }
        if (this.isDatepickerVisible) {
            event.preventDefault();
            event.stopPropagation();
            //switch (event.keyCode) {
            //  case TAB:
            //  case ESCAPE: this.onBlur(); break;
            //}
            var displayDate = this.displayDate;
            if (this.isYearsVisible) {
                switch (event.keyCode) {
                    case ENTER:
                    case SPACE:
                        this.onClickOk();
                        break;
                    case DOWN_ARROW:
                        if (this.displayDate.getFullYear() === (this.today.getFullYear() + 100))
                            break;
                        this.displayDate = this.dateUtil.incrementYears(displayDate, 1);
                        this._scrollToSelectedYear();
                        break;
                    case UP_ARROW:
                        if (this.displayDate.getFullYear() === 1900)
                            break;
                        this.displayDate = this.dateUtil.incrementYears(displayDate, -1);
                        this._scrollToSelectedYear();
                        break;
                }
            }
            else if (this.isCalendarVisible) {
                switch (event.keyCode) {
                    case ENTER:
                    case SPACE:
                        this.setDate(this.displayDate);
                        break;
                    case RIGHT_ARROW:
                        this.displayDate = this.dateUtil.incrementDays(displayDate, 1);
                        break;
                    case LEFT_ARROW:
                        this.displayDate = this.dateUtil.incrementDays(displayDate, -1);
                        break;
                    //case PAGE_DOWN: this.displayDate = this.dateUtil.incrementMonths(displayDate, 1); break;
                    //case PAGE_UP: this.displayDate = this.dateUtil.incrementMonths(displayDate, -1); break;
                    case DOWN_ARROW:
                        this.displayDate = this.dateUtil.incrementDays(displayDate, 7);
                        break;
                    case UP_ARROW:
                        this.displayDate = this.dateUtil.incrementDays(displayDate, -7);
                        break;
                }
                if (!this.dateUtil.isSameMonthAndYear(displayDate, this.displayDate)) {
                    this.generateCalendar();
                }
            }
            else if (this.isHoursVisible) {
                switch (event.keyCode) {
                    case ENTER:
                    case SPACE:
                        this.setHour(this.displayDate.getHours());
                        break;
                    case UP_ARROW:
                        this.displayDate = this.dateUtil.incrementHours(displayDate, 1);
                        this._resetClock();
                        break;
                    case DOWN_ARROW:
                        this.displayDate = this.dateUtil.incrementHours(displayDate, -1);
                        this._resetClock();
                        break;
                }
            }
            else {
                switch (event.keyCode) {
                    case ENTER:
                    case SPACE:
                        this.setMinute(this.displayDate.getMinutes());
                        break;
                    case UP_ARROW:
                        this.displayDate = this.dateUtil.incrementMinutes(displayDate, 1);
                        this._resetClock();
                        break;
                    case DOWN_ARROW:
                        this.displayDate = this.dateUtil.incrementMinutes(displayDate, -1);
                        this._resetClock();
                        break;
                }
            }
        }
        else {
            switch (event.keyCode) {
                case ENTER:
                case SPACE:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showDatepicker();
                    break;
            }
        }
    };
    MdDatepicker.prototype.onBlur = function () {
        this.isDatepickerVisible = false;
        this.isYearsVisible = false;
        this.isCalendarVisible = this.type !== 'time' ? true : false;
        this.isHoursVisible = true;
    };
    /**
     * Display Years
     */
    MdDatepicker.prototype.showYear = function () {
        this.isYearsVisible = true;
        this.isCalendarVisible = true;
        this._scrollToSelectedYear();
    };
    MdDatepicker.prototype.getYears = function () {
        var startYear = this._minDate ? this._minDate.getFullYear() : 1900, endYear = this._maxDate ? this._maxDate.getFullYear() : this.today.getFullYear() + 100;
        this.years = [];
        for (var i = startYear; i <= endYear; i++) {
            this.years.push(i);
        }
    };
    MdDatepicker.prototype._scrollToSelectedYear = function () {
        var _this = this;
        setTimeout(function () {
            var yearContainer = _this.element.nativeElement.querySelector('.md-years'), selectedYear = _this.element.nativeElement.querySelector('.md-year.selected');
            yearContainer.scrollTop = (selectedYear.offsetTop + 20) - yearContainer.clientHeight / 2;
        }, 0);
    };
    /**
     * select year
     * @param year
     */
    MdDatepicker.prototype.setYear = function (year) {
        var date = this.displayDate;
        this.displayDate = new Date(year, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
        this.generateCalendar();
        this.isYearsVisible = false;
        //this.isCalendarVisible = true;
    };
    /**
     * Display Datepicker
     */
    MdDatepicker.prototype.showDatepicker = function () {
        if (this.disabled || this.readonly) {
            return;
        }
        this.isDatepickerVisible = true;
        this.selectedDate = this.value || new Date(1, 0, 1);
        this.displayDate = this.value || this.today;
        this.generateCalendar();
        this._resetClock();
        this.element.nativeElement.focus();
    };
    /**
     * Display Calendar
     */
    MdDatepicker.prototype.showCalendar = function () {
        this.isYearsVisible = false;
        this.isCalendarVisible = true;
    };
    /**
     * Toggle Hour visiblity
     */
    MdDatepicker.prototype.toggleHours = function (value) {
        this.isYearsVisible = false;
        this.isCalendarVisible = false;
        this.isYearsVisible = false;
        this.isHoursVisible = value;
        this._resetClock();
    };
    /**
     * Ok Button Event
     */
    MdDatepicker.prototype.onClickOk = function () {
        if (this.isYearsVisible) {
            this.generateCalendar();
            this.isYearsVisible = false;
            this.isCalendarVisible = true;
        }
        else if (this.isCalendarVisible) {
            this.setDate(this.displayDate);
        }
        else if (this.isHoursVisible) {
            this.isHoursVisible = false;
            this._resetClock();
        }
        else {
            this.value = this.displayDate;
            this.onBlur();
        }
    };
    /**
     * Date Selection Event
     * @param event Event Object
     * @param date Date Object
     */
    MdDatepicker.prototype.onClickDate = function (event, date) {
        event.preventDefault();
        event.stopPropagation();
        if (date.disabled) {
            return;
        }
        if (date.calMonth === this.prevMonth) {
            this.updateMonth(-1);
        }
        else if (date.calMonth === this.currMonth) {
            this.setDate(new Date(date.dateObj.year, date.dateObj.month, date.dateObj.day, this.displayDate.getHours(), this.displayDate.getMinutes()));
        }
        else if (date.calMonth === this.nextMonth) {
            this.updateMonth(1);
        }
    };
    /**
     * Set Date
     * @param date Date Object
     */
    MdDatepicker.prototype.setDate = function (date) {
        if (this.type === 'date') {
            this.value = date;
            this.onBlur();
        }
        else {
            this.selectedDate = date;
            this.displayDate = date;
            this.isCalendarVisible = false;
            this.isHoursVisible = true;
            this._resetClock();
        }
    };
    /**
     * Update Month
     * @param noOfMonths increment number of months
     */
    MdDatepicker.prototype.updateMonth = function (noOfMonths) {
        this.displayDate = this.dateUtil.incrementMonths(this.displayDate, noOfMonths);
        this.generateCalendar();
    };
    /**
     * Check is Before month enabled or not
     * @return boolean
     */
    MdDatepicker.prototype.isBeforeMonth = function () {
        return !this._minDate ? true : this._minDate && this.dateUtil.getMonthDistance(this.displayDate, this._minDate) < 0;
    };
    /**
     * Check is After month enabled or not
     * @return boolean
     */
    MdDatepicker.prototype.isAfterMonth = function () {
        return !this._maxDate ? true : this._maxDate && this.dateUtil.getMonthDistance(this.displayDate, this._maxDate) > 0;
    };
    /**
     * Check the date is enabled or not
     * @param date Date Object
     * @return boolean
     */
    MdDatepicker.prototype._isDisabledDate = function (date) {
        if (this._minDate && this._maxDate) {
            return (this._minDate > date) || (this._maxDate < date);
        }
        else if (this._minDate) {
            return (this._minDate > date);
        }
        else if (this._maxDate) {
            return (this._maxDate < date);
        }
        else {
            return false;
        }
        //if (this.disableWeekends) {
        //  let dayNbr = this.getDayNumber(date);
        //  if (dayNbr === 0 || dayNbr === 6) {
        //    return true;
        //  }
        //}
        //return false;
    };
    /**
     * Generate Month Calendar
     */
    MdDatepicker.prototype.generateCalendar = function () {
        var year = this.displayDate.getFullYear();
        var month = this.displayDate.getMonth();
        this.dates.length = 0;
        var firstDayOfMonth = this.dateUtil.getFirstDateOfMonth(this.displayDate);
        var numberOfDaysInMonth = this.dateUtil.getNumberOfDaysInMonth(this.displayDate);
        var numberOfDaysInPrevMonth = this.dateUtil.getNumberOfDaysInMonth(this.dateUtil.incrementMonths(this.displayDate, -1));
        var dayNbr = 1;
        var calMonth = this.prevMonth;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                var prevMonth = numberOfDaysInPrevMonth - firstDayOfMonth.getDay() + 1;
                for (var j = prevMonth; j <= numberOfDaysInPrevMonth; j++) {
                    var iDate = { year: year, month: month - 1, day: j, hour: 0, minute: 0 };
                    var date = new Date(year, month - 1, j);
                    week.push({
                        date: date,
                        dateObj: iDate,
                        calMonth: calMonth,
                        today: this.dateUtil.isSameDay(this.today, date),
                        disabled: this._isDisabledDate(date)
                    });
                }
                calMonth = this.currMonth;
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    var iDate = { year: year, month: month, day: dayNbr, hour: 0, minute: 0 };
                    var date = new Date(year, month, dayNbr);
                    week.push({
                        date: date,
                        dateObj: iDate,
                        calMonth: calMonth,
                        today: this.dateUtil.isSameDay(this.today, date),
                        disabled: this._isDisabledDate(date)
                    });
                    dayNbr++;
                }
            }
            else {
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > numberOfDaysInMonth) {
                        dayNbr = 1;
                        calMonth = this.nextMonth;
                    }
                    var iDate = { year: year, month: calMonth === this.currMonth ? month : month + 1, day: dayNbr, hour: 0, minute: 0 };
                    var date = new Date(year, iDate.month, dayNbr);
                    week.push({
                        date: date,
                        dateObj: iDate,
                        calMonth: calMonth,
                        today: this.dateUtil.isSameDay(this.today, date),
                        disabled: this._isDisabledDate(date)
                    });
                    dayNbr++;
                }
            }
            this.dates.push(week);
        }
    };
    /**
     * Select Hour
     * @param event Event Object
     * @param hour number of hours
     */
    MdDatepicker.prototype.onClickHour = function (event, hour) {
        event.preventDefault();
        event.stopPropagation();
        this.setHour(hour);
    };
    /**
     * Select Minute
     * @param event Event Object
     * @param minute number of minutes
     */
    MdDatepicker.prototype.onClickMinute = function (event, minute) {
        event.preventDefault();
        event.stopPropagation();
        this.setMinute(minute);
    };
    /**
     * Set hours
     * @param hour number of hours
     */
    MdDatepicker.prototype.setHour = function (hour) {
        var date = this.displayDate;
        this.isHoursVisible = false;
        this.displayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, date.getMinutes());
        this._resetClock();
    };
    /**
     * Set minutes
     * @param minute number of minutes
     */
    MdDatepicker.prototype.setMinute = function (minute) {
        var date = this.displayDate;
        this.displayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), minute);
        this.selectedDate = this.displayDate;
        this.value = this.selectedDate;
        this.onBlur();
    };
    //private onMouseDownClock(event: MouseEvent) {
    //  document.addEventListener('mousemove', this.mouseMoveListener);
    //  document.addEventListener('mouseup', this.mouseUpListener);
    //  //let offset = this.offset(event.currentTarget)
    //  //this.clock.x = offset.left + this.clock.dialRadius;
    //  //this.clock.y = offset.top + this.clock.dialRadius;
    //  //this.clock.dx = event.pageX - this.clock.x;
    //  //this.clock.dy = event.pageY - this.clock.y;
    //  //let z = Math.sqrt(this.clock.dx * this.clock.dx + this.clock.dy * this.clock.dy);
    //  //if (z < this.clock.outerRadius - this.clock.tickRadius || z > this.clock.outerRadius + this.clock.tickRadius) { return; }
    //  //event.preventDefault();
    //  //this.setClockHand(this.clock.dx, this.clock.dy);
    //  ////this.onMouseMoveClock = this.onMouseMoveClock.bind(this);
    //  ////this.onMouseUpClock = this.onMouseUpClock.bind(this);
    //  //document.addEventListener('mousemove', this.onMouseMoveClock);
    //  //document.addEventListener('mouseup', this.onMouseUpClock);
    //}
    //onMouseMoveClock(event: MouseEvent) {
    //  event.preventDefault();
    //  event.stopPropagation();
    //  let x = event.pageX - this.clock.x,
    //    y = event.pageY - this.clock.y;
    //  this.clock.moved = true;
    //  this._setClockHand(x, y);//, false, true
    //  //if (!moved && x === dx && y === dy) {
    //  //  // Clicking in chrome on windows will trigger a mousemove event
    //  //  return;
    //  //}
    //}
    //onMouseUpClock(event: MouseEvent) {
    //  event.preventDefault();
    //  document.removeEventListener('mousemove', this.mouseMoveListener);
    //  document.removeEventListener('mouseup', this.mouseUpListener);
    //  //let space = false;
    //  let x = event.pageX - this.clock.x,
    //    y = event.pageY - this.clock.y;
    //  if ((space || this.clockEvent.moved) && x === this.clockEvent.dx && y === this.clockEvent.dy) {
    //    this.setClockHand(x, y);
    //  }
    //  //if (this.isHoursVisible) {
    //  //  //self.toggleView('minutes', duration / 2);
    //  //} else {
    //  //  //if (options.autoclose) {
    //  //  //  self.minutesView.addClass('clockpicker-dial-out');
    //  //  //  setTimeout(function () {
    //  //  //    self.done();
    //  //  //  }, duration / 2);
    //  //  //}
    //  //}
    //  if ((space || moved) && x === dx && y === dy) {
    //    self.setHand(x, y);
    //  }
    //  if (self.currentView === 'hours') {
    //    self.toggleView('minutes', duration / 2);
    //  } else {
    //    if (options.autoclose) {
    //      self.minutesView.addClass('clockpicker-dial-out');
    //      setTimeout(function () {
    //        self.done();
    //      }, duration / 2);
    //    }
    //  }
    //  plate.prepend(canvas);
    //  // Reset cursor style of body
    //  clearTimeout(movingTimer);
    //  $body.removeClass('clockpicker-moving');
    //}
    /**
     * reser clock hands
     */
    MdDatepicker.prototype._resetClock = function () {
        var hour = this.displayDate.getHours();
        var minute = this.displayDate.getMinutes();
        var value = this.isHoursVisible ? hour : minute, unit = Math.PI / (this.isHoursVisible ? 6 : 30), radian = value * unit, radius = this.isHoursVisible && value > 0 && value < 13 ? this.clock.innerRadius : this.clock.outerRadius, x = Math.sin(radian) * radius, y = -Math.cos(radian) * radius;
        this._setClockHand(x, y);
    };
    /**
     * set clock hand
     * @param x number of x position
     * @param y number of y position
     */
    MdDatepicker.prototype._setClockHand = function (x, y) {
        var radian = Math.atan2(x, y), unit = Math.PI / (this.isHoursVisible ? 6 : 30), z = Math.sqrt(x * x + y * y), inner = this.isHoursVisible && z < (this.clock.outerRadius + this.clock.innerRadius) / 2, radius = inner ? this.clock.innerRadius : this.clock.outerRadius, value = 0;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.isHoursVisible) {
            if (value === 12) {
                value = 0;
            }
            value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
        }
        else {
            if (value === 60) {
                value = 0;
            }
        }
        this.clock.hand = {
            x: Math.sin(radian) * radius,
            y: Math.cos(radian) * radius
        };
    };
    /**
     * render Click
     */
    MdDatepicker.prototype.generateClock = function () {
        this.hours.length = 0;
        for (var i = 0; i < 24; i++) {
            var radian = i / 6 * Math.PI;
            var inner = i > 0 && i < 13, radius = inner ? this.clock.innerRadius : this.clock.outerRadius;
            this.hours.push({
                hour: i === 0 ? '00' : i,
                top: this.clock.dialRadius - Math.cos(radian) * radius - this.clock.tickRadius,
                left: this.clock.dialRadius + Math.sin(radian) * radius - this.clock.tickRadius
            });
        }
        for (var i = 0; i < 60; i += 5) {
            var radian = i / 30 * Math.PI;
            this.minutes.push({
                minute: i === 0 ? '00' : i,
                top: this.clock.dialRadius - Math.cos(radian) * this.clock.outerRadius - this.clock.tickRadius,
                left: this.clock.dialRadius + Math.sin(radian) * this.clock.outerRadius - this.clock.tickRadius
            });
        }
    };
    /**
     * format date
     * @param date Date Object
     * @return string with formatted date
     */
    MdDatepicker.prototype._formatDate = function (date) {
        return this.format
            .replace('YYYY', date.getFullYear() + '')
            .replace('MM', this._prependZero((date.getMonth() + 1) + ''))
            .replace('DD', this._prependZero(date.getDate() + ''))
            .replace('HH', this._prependZero(date.getHours() + ''))
            .replace('mm', this._prependZero(date.getMinutes() + ''))
            .replace('ss', this._prependZero(date.getSeconds() + ''));
    };
    /**
     * Prepend Zero
     * @param value String value
     * @return string with prepend Zero
     */
    MdDatepicker.prototype._prependZero = function (value) {
        return parseInt(value) < 10 ? '0' + value : value;
    };
    /**
     * Get Offset
     * @param element HtmlElement
     * @return top, left offset from page
     */
    MdDatepicker.prototype._offset = function (element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    MdDatepicker.prototype.writeValue = function (value) {
        if (value && value !== this._value) {
            if (this.dateUtil.isValidDate(value)) {
                this._value = value;
            }
            else {
                if (this.type === 'time') {
                    this._value = new Date('1-1-1 ' + value);
                }
                else {
                    this._value = new Date(value);
                }
            }
            this.displayInputDate = this._formatDate(this._value);
            var date = '';
            if (this.type !== 'time') {
                date += this._value.getFullYear() + '-' + (this._value.getMonth() + 1) + '-' + this._value.getDate();
            }
            if (this.type === 'datetime') {
                date += ' ';
            }
            if (this.type !== 'date') {
                date += this._value.getHours() + ':' + this._value.getMinutes();
            }
        }
    };
    MdDatepicker.prototype.registerOnChange = function (fn) { this._onChangeCallback = fn; };
    MdDatepicker.prototype.registerOnTouched = function (fn) { this._onTouchedCallback = fn; };
    __decorate$16([
        _angular_core.Output(), 
        __metadata$16('design:type', _angular_core.EventEmitter)
    ], MdDatepicker.prototype, "change", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Object)
    ], MdDatepicker.prototype, "type", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String)
    ], MdDatepicker.prototype, "name", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String)
    ], MdDatepicker.prototype, "id", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String)
    ], MdDatepicker.prototype, "class", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String)
    ], MdDatepicker.prototype, "placeholder", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String)
    ], MdDatepicker.prototype, "format", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Number)
    ], MdDatepicker.prototype, "tabindex", void 0);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Boolean)
    ], MdDatepicker.prototype, "readonly", null);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Boolean)
    ], MdDatepicker.prototype, "required", null);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Boolean)
    ], MdDatepicker.prototype, "disabled", null);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String), 
        __metadata$16('design:paramtypes', [String])
    ], MdDatepicker.prototype, "min", null);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', String), 
        __metadata$16('design:paramtypes', [String])
    ], MdDatepicker.prototype, "max", null);
    __decorate$16([
        _angular_core.Input(), 
        __metadata$16('design:type', Object)
    ], MdDatepicker.prototype, "value", null);
    __decorate$16([
        _angular_core.HostListener('click', ['$event']), 
        __metadata$16('design:type', Function), 
        __metadata$16('design:paramtypes', [MouseEvent]), 
        __metadata$16('design:returntype', void 0)
    ], MdDatepicker.prototype, "onClick", null);
    __decorate$16([
        _angular_core.HostListener('keydown', ['$event']), 
        __metadata$16('design:type', Function), 
        __metadata$16('design:paramtypes', [KeyboardEvent]), 
        __metadata$16('design:returntype', void 0)
    ], MdDatepicker.prototype, "onKeyDown", null);
    __decorate$16([
        _angular_core.HostListener('blur'), 
        __metadata$16('design:type', Function), 
        __metadata$16('design:paramtypes', []), 
        __metadata$16('design:returntype', void 0)
    ], MdDatepicker.prototype, "onBlur", null);
    MdDatepicker = __decorate$16([
        _angular_core.Component({selector: 'md2-datepicker',
            template: "<div class=\"md2-datepicker-input-container\" (click)=\"showDatepicker()\"> <div class=\"md2-datepicker-calendar-icon\"> <svg *ngIf=\"type==='date'\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path> </svg> <svg *ngIf=\"type==='time'\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path> </svg> <svg *ngIf=\"type==='datetime'\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path> </svg> </div> <div class=\"md2-datepicker-input\"> <span class=\"md2-datepicker-placeholder\" [class.has-value]=\"value\"> {{placeholder}} <span class=\"md2-placeholder-required\" *ngIf=\"required\">*</span> </span> <span class=\"md2-datepicker-input-text\">{{displayInputDate}}</span> <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M7 10l5 5 5-5z\" /> </svg> </div> </div> <div class=\"md2-datepicker-wrapper\" [class.active]=\"isDatepickerVisible\"> <div class=\"md2-datepicker-header\"> <span class=\"md2-datepicker-year\" [class.active]=\"isYearsVisible\" [class.hidden]=\"type==='time'\" (click)=\"showYear()\">{{displayDay.year}}</span> <span class=\"md2-datepicker-date\" [class.active]=\"isCalendarVisible && !isYearsVisible\" [class.hidden]=\"type==='time'\" (click)=\"showCalendar()\">{{displayDay.day.substr(0, 3)}},&nbsp;{{displayDay.month.substr(0, 3)}}&nbsp;{{displayDay.date}}</span> <span class=\"md2-datepicker-time\" [class.active]=\"!isCalendarVisible\" [class.hidden]=\"type==='date'\"> <span class=\"md2-datepicker-hour\" [class.active]=\"isHoursVisible\" (click)=\"toggleHours(true)\">{{displayDay.hour}}</span>:<span class=\"md2-datepicker-minute\" [class.active]=\"!isHoursVisible\" (click)=\"toggleHours(false)\">{{displayDay.minute}}</span> </span> </div> <div class=\"md2-datepicker-body\"> <div class=\"md2-years\" [class.active]=\"isYearsVisible\"> <div class=\"md2-years-wrapper\"> <div *ngFor=\"let y of years\" class=\"md2-year\" [class.selected]=\"y === displayDay.year\" (click)=\"setYear(y)\">{{y}}</div> </div> </div> <div class=\"md2-datepicker-container\" [class.active]=\"!isYearsVisible\"> <div class=\"md2-calendar\" [class.active]=\"isCalendarVisible\"> <div class=\"md2-calendar-controls\"> <div class=\"md2-calendar-prev-month\" [class.disabled]=\"!isBeforeMonth()\" (click)=\"isBeforeMonth() && updateMonth(-1)\"> <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"> <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path> </svg> </div> <div class=\"md2-calendar-next-month\" [class.disabled]=\"!isAfterMonth()\" (click)=\"isAfterMonth() && updateMonth(1)\"> <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"> <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path> </svg> </div> <div class=\"md2-calendar-header\">{{displayDay.month}} {{displayDay.year}}</div> </div> <table class=\"md2-calendar-month\"> <thead><tr><th *ngFor=\"let d of days\">{{d.substr(0, 1)}}</th></tr></thead> <tbody> <tr *ngFor=\"let w of dates\"> <td *ngFor=\"let d of w\"> <div class=\"md2-calendar-day\" [class.today]=\"d.today\" [class.focus]=\"dateUtil.isSameDay(displayDate, d.date)\" [class.selected]=\"dateUtil.isSameDay(selectedDate, d.date)\" [class.disabled]=\"d.disabled\" [class.prev-month]=\"d.calMonth===prevMonth\" [class.curr-month]=\"d.calMonth===currMonth\" [class.next-month]=\"d.calMonth===nextMonth\" (click)=\"onClickDate($event,d)\">{{d.dateObj.day}}</div> </td> </tr> </tbody> </table> </div> <div class=\"md2-clock\" [class.active]=\"!isCalendarVisible\"> <!-- (mousedown)=\"onMouseDownClock($event)\"--> <div class=\"md2-clock-hand\"> <svg class=\"md2-clock-svg\" width=\"240\" height=\"240\"> <g transform=\"translate(120,120)\"> <line x1=\"0\" y1=\"0\" [attr.x2]=\"clock.hand.x\" [attr.y2]=\"clock.hand.y\"></line> <circle class=\"md2-clock-bg\" r=\"17\" [attr.cx]=\"clock.hand.x\" [attr.cy]=\"clock.hand.y\"></circle> <circle class=\"md2-clock-fg\" r=\"3.5\" [attr.cx]=\"clock.hand.x\" [attr.cy]=\"clock.hand.y\"></circle> <circle class=\"md2-clock-center\" cx=\"0\" cy=\"0\" r=\"2\"></circle> </g> </svg> </div> <div class=\"md2-clock-hours\" [class.active]=\"isHoursVisible\"> <div *ngFor=\"let h of hours\" class=\"md2-clock-hour\" [style.top]=\"h.top + 'px'\" [style.left]=\"h.left + 'px'\" (click)=\"onClickHour($event,h.hour)\">{{h.hour}}</div> </div> <div class=\"md2-clock-minutes\" [class.active]=\"!isHoursVisible\"> <div *ngFor=\"let m of minutes\" class=\"md2-clock-minute\" [style.top]=\"m.top + 'px'\" [style.left]=\"m.left + 'px'\" (click)=\"onClickMinute($event,m.minute)\">{{m.minute}}</div> </div> </div> </div> </div> <div class=\"md2-datepicker-footer\"> <div class=\"md2-button\" (click)=\"onBlur()\">Cancel</div> <div class=\"md2-button\" (click)=\"onClickOk()\">Ok</div> </div> </div> ",
            styles: ["md2-datepicker { position: relative; display: block; max-width: 200px; outline: none; -webkit-backface-visibility: hidden; backface-visibility: hidden; } md2-datepicker.md2-datepicker-disabled { pointer-events: none; cursor: default; } .md2-datepicker-input-container { display: block; padding: 18px 0 18px 32px; white-space: nowrap; cursor: pointer; } .md2-datepicker-calendar-icon { position: absolute; top: 21px; left: 0; display: block; height: 24px; width: 24px; vertical-align: middle; fill: currentColor; color: rgba(0, 0, 0, 0.54); } .md2-datepicker-input { position: relative; display: block; height: 30px; padding: 2px 26px 1px 2px; margin: 0; line-height: 26px; color: rgba(0, 0, 0, 0.87); vertical-align: middle; box-sizing: border-box; border-bottom: 1px solid rgba(0, 0, 0, 0.12); } .md2-datepicker-input svg { position: absolute; right: 0; top: 2px; fill: currentColor; color: rgba(0, 0, 0, 0.54); } md2-datepicker.md2-datepicker-disabled .md2-datepicker-input { color: rgba(0, 0, 0, 0.38); border-color: transparent; background-image: linear-gradient(to right, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 33%, transparent 0%); background-position: bottom -1px left 0; background-size: 4px 1px; background-repeat: repeat-x; } .md2-datepicker-placeholder { position: absolute; right: 26px; bottom: 100%; left: 0; color: rgba(0, 0, 0, 0.38); max-width: 100%; padding-left: 3px; padding-right: 0; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; pointer-events: none; z-index: 1; transform: translate3d(0, 26px, 0) scale(1); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transform-origin: left top; } .md2-datepicker-placeholder.has-value, md2-datepicker:focus .md2-datepicker-placeholder { transform: translate3d(0, 6px, 0) scale(0.75); } md2-datepicker:focus .md2-datepicker-placeholder { color: #2196f3; } md2-datepicker:focus .md2-datepicker-placeholder .md2-placeholder-required { color: #f00; } md2-datepicker.md2-datepicker-disabled:focus .md2-datepicker-placeholder, md2-datepicker.md2-datepicker-disabled:focus .md2-datepicker-placeholder .md2-placeholder-required { color: rgba(0, 0, 0, 0.38); } .md2-datepicker-input-text { display: block; font-size: 15px; line-height: 26px; } .md2-datepicker-wrapper { position: absolute; top: 0; left: 0; display: inline-block; width: 300px; border-radius: 2px; background-color: #fff; z-index: 10; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4); transform: scale(0); transform-origin: left top; transition: 150ms; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .md2-datepicker-wrapper.active { transform: scale(1); } .md2-datepicker-header { display: block; padding: 20px; color: #fff; font-size: 28px; line-height: 28px; font-weight: 500; background: #2196f3; box-sizing: border-box; } .md2-datepicker-year { display: block; height: 16px; margin: 0 0 10px; font-size: 16px; line-height: 16px; opacity: 0.7; cursor: pointer; } .md2-datepicker-year.active { opacity: 1; pointer-events: none; } .md2-datepicker-year.hidden { display: none; } .md2-datepicker-date { cursor: pointer; opacity: 0.7; } .md2-datepicker-date.active { opacity: 1; pointer-events: none; } .md2-datepicker-date.hidden { display: none; } .md2-datepicker-time { display: inline-block; padding-left: 10px; cursor: pointer; opacity: 0.7; } .md2-datepicker-time.active { opacity: 1; } .md2-datepicker-time.hidden { display: none; } .md2-datepicker-hour, .md2-datepicker-minute { opacity: 1; } .md2-datepicker-time.active .md2-datepicker-hour, .md2-datepicker-time.active .md2-datepicker-minute { opacity: 0.7; } .md2-datepicker-time.active .md2-datepicker-hour.active, .md2-datepicker-time.active .md2-datepicker-minute.active { opacity: 1; pointer-events: none; } .md2-datepicker-body { position: relative; width: 100%; height: 300px; overflow: hidden; } .md2-datepicker-footer { text-align: right; } .md2-datepicker-footer .md2-button { display: inline-block; min-width: 64px; margin: 4px 8px 8px 0px; padding: 0 12px; font-size: 14px; color: #2196f3; line-height: 36px; text-align: center; text-transform: uppercase; border-radius: 2px; cursor: pointer; box-sizing: border-box; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1); } .md2-datepicker-footer .md2-button:hover { background: #ebebeb; } .md2-years { position: absolute; top: 10px; right: 100%; bottom: 10px; display: block; width: 100%; line-height: 40px; background: #fff; overflow-x: hidden; overflow-y: auto; transition: 300ms; } .md2-years.active { right: 0; } .md2-years .md2-years-wrapper { display: flex; flex-direction: column; justify-content: center; min-height: 100%; } .md2-years .md2-year { position: relative; display: block; margin: 0 auto; padding: 0; font-size: 17px; font-weight: 400; text-align: center; cursor: pointer; } .md2-years .md2-year.selected { color: #2196f3; font-size: 26px; font-weight: 500; } .md2-datepicker-container { position: absolute; top: 0; left: 100%; display: block; width: 100%; transition: 300ms; } .md2-datepicker-container.active { left: 0; } .md2-calendar { position: absolute; right: 100%; display: block; width: 100%; font-size: 12px; font-weight: 400; text-align: center; transition: 300ms; } .md2-calendar.active { right: 0; } .md2-calendar-controls { position: relative; display: block; height: 48px; text-align: left; } .md2-calendar-header { height: 48px; line-height: 48px; font-size: 14px; font-weight: 500; text-align: center; } .md2-calendar-prev-month, .md2-calendar-next-month { position: absolute; display: inline-block; width: 48px; height: 48px; padding: 12px; margin: 0 12px; box-sizing: border-box; cursor: pointer; } .md2-calendar-next-month { right: 0; } .md2-calendar-prev-month.disabled, .md2-calendar-next-month.disabled { opacity: 0.25; cursor: default; pointer-events: none; } .md2-calendar-month { margin: 0 20px; } .md2-calendar-month th { width: 35px; height: 20px; font-weight: 500; line-height: 15px; opacity: 0.5; } .md2-calendar-month td { padding: 0; } .md2-calendar-day { position: relative; display: inline-block; width: 35px; height: 35px; border-radius: 50%; text-align: center; cursor: pointer; line-height: 35px; box-sizing: border-box; } .md2-calendar-day.today { color: #2196f3; } .md2-calendar-day:hover, .md2-calendar-day.focus { background: #e0e0e0; } .md2-calendar-day.selected, .md2-calendar-day.selected:hover { color: #fff; background: #2196f3; } .md2-calendar-day.disabled, .md2-calendar-day.disabled:hover { color: rgba(0, 0, 0, 0.45); background: transparent; pointer-events: none; } .md2-calendar-day.prev-month, .md2-calendar-day.next-month { visibility: hidden; } .md2-clock { position: absolute; left: 100%; display: block; width: 240px; height: 240px; margin: 30px; font-size: 14px; font-weight: 400; text-align: center; background-color: #e0e0e0; border-radius: 50%; transition: 300ms; } .md2-clock.active { left: 0; } .md2-clock-hours, .md2-clock-minutes { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; visibility: hidden; transition: 350ms; transform: scale(1.2); } .md2-clock-minutes { transform: scale(0.8); } .md2-clock-hours.active, .md2-clock-minutes.active { opacity: 1; visibility: visible; transform: scale(1); } .md2-clock-hour, .md2-clock-minute { position: absolute; width: 34px; height: 34px; line-height: 34px; text-align: center; border-radius: 50%; cursor: pointer; } .md2-clock-hour:hover, .md2-clock-minute:hover { background: #5aaced; } .md2-clock-hand { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } .md2-clock-hand line { stroke: #2196f3; stroke-width: 1; stroke-linecap: round; } .md2-clock-bg { fill: #5aaced; } .md2-clock-fg { stroke: none; fill: #2196f3; } .md2-clock-center { stroke: none; fill: #2196f3; } /*# sourceMappingURL=datepicker.css.map */ "],
            providers: [MD_DATEPICKER_CONTROL_VALUE_ACCESSOR],
            host: {
                'role': 'datepicker',
                '[id]': 'id',
                '[class]': 'class',
                '[class.md-datepicker-disabled]': 'disabled',
                '[tabindex]': 'disabled ? -1 : tabindex',
                '[attr.aria-disabled]': 'disabled'
            },
            encapsulation: _angular_core.ViewEncapsulation.None
        }), 
        __metadata$16('design:paramtypes', [Md2DateUtil, _angular_core.ElementRef])
    ], MdDatepicker);
    return MdDatepicker;
}());
var MD_DATEPICKER_DIRECTIVES = [MdDatepicker];
var MdDatepickerModule = (function () {
    function MdDatepickerModule() {
    }
    MdDatepickerModule.forRoot = function () {
        return {
            ngModule: MdDatepickerModule,
            providers: [Md2DateUtil]
        };
    };
    MdDatepickerModule = __decorate$16([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, _angular_forms.FormsModule],
            exports: MD_DATEPICKER_DIRECTIVES,
            declarations: MD_DATEPICKER_DIRECTIVES,
        }), 
        __metadata$16('design:paramtypes', [])
    ], MdDatepickerModule);
    return MdDatepickerModule;
}());

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MD2_MODULES = [
    MdDatepickerModule,
    MdRippleModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    A11yModule,
    StyleCompatibilityModule,
];
var Md2DatepickerRootModule = (function () {
    function Md2DatepickerRootModule() {
    }
    Md2DatepickerRootModule = __decorate$15([
        _angular_core.NgModule({
            imports: [
                MdDatepickerModule.forRoot(),
                MdRippleModule.forRoot(),
                PortalModule.forRoot(),
                RtlModule.forRoot(),
                // These modules include providers.
                A11yModule.forRoot(),
                OverlayModule.forRoot(),
                StyleCompatibilityModule.forRoot(),
            ],
            exports: MD2_MODULES,
        }), 
        __metadata$15('design:paramtypes', [])
    ], Md2DatepickerRootModule);
    return Md2DatepickerRootModule;
}());
var Md2DatepickerModule = (function () {
    function Md2DatepickerModule() {
    }
    Md2DatepickerModule.forRoot = function () {
        return { ngModule: Md2DatepickerRootModule };
    };
    Md2DatepickerModule = __decorate$15([
        _angular_core.NgModule({
            imports: MD2_MODULES,
            exports: MD2_MODULES,
        }), 
        __metadata$15('design:paramtypes', [])
    ], Md2DatepickerModule);
    return Md2DatepickerModule;
}());

exports.MdCoreModule = MdCoreModule;
exports.Dir = Dir;
exports.RtlModule = RtlModule;
exports.Portal = Portal;
exports.BasePortalHost = BasePortalHost;
exports.ComponentPortal = ComponentPortal;
exports.TemplatePortal = TemplatePortal;
exports.PortalHostDirective = PortalHostDirective;
exports.TemplatePortalDirective = TemplatePortalDirective;
exports.PortalModule = PortalModule;
exports.DomPortalHost = DomPortalHost;
exports.Overlay = Overlay;
exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
exports.OverlayContainer = OverlayContainer;
exports.OverlayRef = OverlayRef;
exports.OverlayState = OverlayState;
exports.ConnectedOverlayDirective = ConnectedOverlayDirective;
exports.OverlayOrigin = OverlayOrigin;
exports.OverlayModule = OverlayModule;
exports.MdRipple = MdRipple;
exports.MdRippleModule = MdRippleModule;
exports.MdLiveAnnouncer = MdLiveAnnouncer;
exports.LIVE_ANNOUNCER_ELEMENT_TOKEN = LIVE_ANNOUNCER_ELEMENT_TOKEN;
exports.FocusTrap = FocusTrap;
exports.InteractivityChecker = InteractivityChecker;
exports.A11yModule = A11yModule;
exports.MdUniqueSelectionDispatcher = MdUniqueSelectionDispatcher;
exports.MdLineModule = MdLineModule;
exports.MdLine = MdLine;
exports.MdLineSetter = MdLineSetter;
exports.applyCssTransform = applyCssTransform;
exports.MdError = MdError;
exports.coerceBooleanProperty = coerceBooleanProperty;
exports.ConnectedPositionStrategy = ConnectedPositionStrategy;
exports.ConnectionPositionPair = ConnectionPositionPair;
exports.UP_ARROW = UP_ARROW;
exports.DOWN_ARROW = DOWN_ARROW;
exports.RIGHT_ARROW = RIGHT_ARROW;
exports.LEFT_ARROW = LEFT_ARROW;
exports.ENTER = ENTER;
exports.SPACE = SPACE;
exports.TAB = TAB;
exports.ELEMENTS_SELECTOR = ELEMENTS_SELECTOR;
exports.StyleCompatibility = StyleCompatibility;
exports.StyleCompatibilityModule = StyleCompatibilityModule;
exports.AnimationCurves = AnimationCurves;
exports.AnimationDurations = AnimationDurations;
exports.Md2DatepickerRootModule = Md2DatepickerRootModule;
exports.Md2DatepickerModule = Md2DatepickerModule;
exports.MD_DATEPICKER_CONTROL_VALUE_ACCESSOR = MD_DATEPICKER_CONTROL_VALUE_ACCESSOR;
exports.MdDatepicker = MdDatepicker;
exports.MD_DATEPICKER_DIRECTIVES = MD_DATEPICKER_DIRECTIVES;
exports.MdDatepickerModule = MdDatepickerModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=./md2datepicker.umd.js.map
