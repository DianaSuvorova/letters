animations = {
  bounce: function (elem, iterations, duration) {
    var keyframes = [
     {transform: 'translate3d(0,0,0)', offset: 0},
     {transform: 'translate3d(0,0,0)', offset: 0.2},
     {transform: 'translate3d(0,-30px,0)', offset: 0.4},
     {transform: 'translate3d(0,-30px,0)', offset: 0.43},
     {transform: 'translate3d(0,0,0)', offset: 0.53},
     {transform: 'translate3d(0,-15px,0)', offset: 0.7},
     {transform: 'translate3d(0,0,0)', offset: 0.8},
     {transform: 'translate3d(0,-15px,0)', offset: 0.9},
     {transform: 'translate3d(0,0,0)', offset: 1}];
    var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
    return elem.animate(keyframes, timing);
  },
  bounceIn: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
     {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
     {transform: 'scale3d(.9, .9, .9)', offset: 0.4},
     {transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6},
     {transform: 'scale3d(.97, .97, .97)', offset: 0.8},
     {transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return elem.animate(keyframes, timing);
  },
  bounceOut: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
     {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
     {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
     {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  bounceInDown: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(0, -100px, 0)', offset: 0.75},
     {transform: 'translate3d(0, 5px, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return elem.animate(keyframes, timing);
 },
 bounceOutDown: function (elem, iterations, duration) {
   var transitingTimingFunction = elem.style['transition-timing-function'];
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
 bounceInUp: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(0, 100px, 0)', offset: 0.75},
     {transform: 'translate3d(0, -5px, 0)', offset: 0.9},
     {transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return elem.animate(keyframes, timing);
 },
  bounceOutUp: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
bounceInLeft: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(-100px, 0, 0)', offset: 0.75},
     {transform: 'translate3d(5px, 0, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return elem.animate(keyframes, timing);
 },
  bounceOutLeft: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
  },
 bounceInRight: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6},
     { transform: 'translate3d(100px, 0, 0)', offset: 0.75},
     {transform: 'translate3d(-5px, 0, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return elem.animate(keyframes, timing);
  },
  bounceOutRight: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
  },
  flip: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0},
     {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4},
     {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5},
     {transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8},
     {transform: 'perspective(400px)', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return elem.animate(keyframes, timing);
  },
  flipInX: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8},
     {transform: 'perspective(400px)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return elem.animate(keyframes, timing);
 },
  flipOutX: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px)', opacity: '1', offset: 0},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  flipInY: function(elem, iterations, duration) {
   var animationTimingFunction = elem.style['animation-timing-function'];
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8},
     {transform: 'perspective(400px)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return elem.animate(keyframes, timing);
 },
  flipOutY: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px)', opacity: '1', offset: 0},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  flash: function(elem, iterations, duration) {
   var keyframes = [
     {opacity: '1', offset: 0},
     {opacity: '0', offset: 0.25},
     {opacity: '1', offset: 0.5},
     {opacity: '0', offset: 0.75},
     {opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
   pulse: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(1, 1, 1)', offset: 0},
     {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5},
     {transform: 'scale3d(1, 1, 1)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rubberBand: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(1, 1, 1)', offset: 0},
     {transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3},
     {transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4},
     {transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5},
     {transform: 'scale3d(.95, 1.05, 1)', offset: 0.65},
     {transform: 'scale3d(1.05, .95, 1)', offset: 0.75},
     {transform: 'scale3d(1, 1, 1)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  lightSpeedInRight: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
     {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
     {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
     {transform: 'none', opacity: '1 ', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  lightSpeedOutRight: function(elem, iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1 ', offset: 0},
     {transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  lightSpeedInLeft: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
     {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
     {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
     {transform: 'none', opacity: '1 ', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  lightSpeedOutLeft: function(elem, iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1 ', offset: 0},
     {transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  shake: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(0, 0, 0)', offset: 0},
     {transform: 'translate3d(-10px, 0, 0)', offset: 0.1},
     {transform: 'translate3d(10px, 0, 0)', offset: 0.2},
     {transform: 'translate3d(-10px, 0, 0)', offset: 0.3},
     {transform: 'translate3d(10px, 0, 0)', offset: 0.4},
     {transform: 'translate3d(-10px, 0, 0)', offset: 0.5},
     {transform: 'translate3d(10px, 0, 0)', offset: 0.6},
     {transform: 'translate3d(-10px, 0, 0)', offset: 0.7},
     {transform: 'translate3d(10px, 0, 0)', offset: 0.8},
     {transform: 'translate3d(-10px, 0, 0)', offset: 0.9},
     {transform: 'translate3d(0, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
   swing: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate(0%)', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2},
     {transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4},
     {transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6},
     {transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8},
     {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  tada: function(elem, iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(1, 1, 1)', offset: 0},
     {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1},
     {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8},
     {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9},
     {transform: 'scale3d(1, 1, 1)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  wobble: function (elem, iterations, duration) {
   var keyframes = [
     {transform: 'translate(0%)', offset: 0},
     {transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15},
     {transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45},
     {transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6},
     {transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75},
     {transform: 'translateX(0%)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeIn: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', offset: 0},
     {opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
   fadeOut: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '1', offset: 0},
     {opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInDown: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutDown: function (elem, iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutUp: function(elem, iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutUpBig: function(elem, iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInUp: function(elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInDownBig: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutDownBig: function (elem, iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInUpBig: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInRightBig: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutLeftBig: function (elem, iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInLeft: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInLeftBig: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeInRight: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutLeft: function (elem, iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutRight: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  fadeOutRightBig: function (elem, iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rollIn: function (elem, iterations, duration) {
   var keyframes = [{transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rollOut: function (elem, iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  zoomIn: function (elem, iterations, duration) {
   var keyframes = [{transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  zoomOutDown: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
     {transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', opacity: '0',  transformOrigin: 'center bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomOutUp: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
     {transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', opacity: '0', transformOrigin: 'center bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomOutRight: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right center', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: '1',  transformOrigin: 'right center', offset: 0.4},
     {transform: 'scale(.1) translate3d(2000px, 0, 0)', opacity: '0', transformOrigin: 'right center', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomOutLeft: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4},
     {transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomInDown: function (elem, iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomInLeft: function (elem, iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  zoomInRight: function (elem, iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomInUp: function (elem, iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return elem.animate(keyframes, timing);
 },
  zoomOut: function (elem, iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', offset: 0},
     {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateIn: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateInDownLeft: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateInDownRight: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateInUpLeft: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateInUpRight: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateOutDownLeft: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateOutDownRight: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateOutUpLeft: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateOutUpRight: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
 },
  rotateOut: function (elem, iterations, duration) {
   var transformOrigin = elem.style['transform-origin'];
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return elem.animate(keyframes, timing);
  }
};
