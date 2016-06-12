animations = {
  bounce: function (iterations, duration) {
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
    return {keyframes, timing};
  },
  bounceIn: function (iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
     {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
     {transform: 'scale3d(.9, .9, .9)', offset: 0.4},
     {transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6},
     {transform: 'scale3d(.97, .97, .97)', offset: 0.8},
     {transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return {keyframes, timing};
  },
  bounceOut: function (iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
     {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
     {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
     {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  bounceInDown: function (iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(0, -100px, 0)', offset: 0.75},
     {transform: 'translate3d(0, 5px, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return {keyframes, timing};
 },
 bounceOutDown: function (iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
 bounceInUp: function (iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(0, 100px, 0)', offset: 0.75},
     {transform: 'translate3d(0, -5px, 0)', offset: 0.9},
     {transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return {keyframes, timing};
 },
  bounceOutUp: function (iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
bounceInLeft: function (iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'translate3d(-100px, 0, 0)', offset: 0.75},
     {transform: 'translate3d(5px, 0, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return {keyframes, timing};
 },
  bounceOutLeft: function (iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
  },
 bounceInRight: function(iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0},
     {transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6},
     { transform: 'translate3d(100px, 0, 0)', offset: 0.75},
     {transform: 'translate3d(-5px, 0, 0)', offset: 0.9},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
   return {keyframes, timing};
  },
  bounceOutRight: function(iterations, duration) {
   var keyframes = [
     {transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
     {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
     {transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
  },
  flip: function(iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0},
     {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4},
     {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5},
     {transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8},
     {transform: 'perspective(400px)', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return {keyframes, timing};
  },
  flipInX: function(iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8},
     {transform: 'perspective(400px)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return {keyframes, timing};
 },
  flipOutX: function(iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px)', opacity: '1', offset: 0},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3},
     {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  flipInY: function(iterations, duration) {
//   var animationTimingFunction = elem.style['animation-timing-function'];
   var keyframes = [
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8},
     {transform: 'perspective(400px)', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'ease-in'};
   return {keyframes, timing};
 },
  flipOutY: function(iterations, duration) {
   var keyframes = [
     {transform: 'perspective(400px)', opacity: '1', offset: 0},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3},
     {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  flash: function(iterations, duration) {
   var keyframes = [
     {opacity: '1', offset: 0},
     {opacity: '0', offset: 0.25},
     {opacity: '1', offset: 0.5},
     {opacity: '0', offset: 0.75},
     {opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
   pulse: function (iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(1, 1, 1)', offset: 0},
     {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5},
     {transform: 'scale3d(1, 1, 1)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rubberBand: function(iterations, duration) {
   var keyframes = [
     {transform: 'scale3d(1, 1, 1)', offset: 0},
     {transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3},
     {transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4},
     {transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5},
     {transform: 'scale3d(.95, 1.05, 1)', offset: 0.65},
     {transform: 'scale3d(1.05, .95, 1)', offset: 0.75},
     {transform: 'scale3d(1, 1, 1)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  lightSpeedInRight: function(iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
     {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
     {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
     {transform: 'none', opacity: '1 ', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  lightSpeedOutRight: function(iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1 ', offset: 0},
     {transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  lightSpeedInLeft: function(iterations, duration) {
   var keyframes = [
     {transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
     {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
     {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
     {transform: 'none', opacity: '1 ', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  lightSpeedOutLeft: function(iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1 ', offset: 0},
     {transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  shake: function (iterations, duration) {
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
   return {keyframes, timing};
 },
   swing: function(iterations, duration) {
   var keyframes = [
     {transform: 'translate(0%)', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2},
     {transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4},
     {transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6},
     {transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8},
     {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  tada: function(iterations, duration) {
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
   return {keyframes, timing};
 },
  wobble: function (iterations, duration) {
   var keyframes = [
     {transform: 'translate(0%)', offset: 0},
     {transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15},
     {transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45},
     {transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6},
     {transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75},
     {transform: 'translateX(0%)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeIn: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', offset: 0},
     {opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
   fadeOut: function (iterations, duration) {
   var keyframes = [
     {opacity: '1', offset: 0},
     {opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInDown: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutDown: function (iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutUp: function(iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutUpBig: function(iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInUp: function(iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInDownBig: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutDownBig: function (iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInUpBig: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInRightBig: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutLeftBig: function (iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInLeft: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInLeftBig: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeInRight: function (iterations, duration) {
   var keyframes = [
     {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0},
     {opacity: '1', transform: 'none', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutLeft: function (iterations, duration) {
   var keyframes = [{opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutRight: function (iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  fadeOutRightBig: function (iterations, duration) {
   var keyframes = [
     {opacity: '1', transform: 'none', offset: 0},
     {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rollIn: function (iterations, duration) {
   var keyframes = [{transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rollOut: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', offset: 0},
     {transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  zoomIn: function (iterations, duration) {
   var keyframes = [{transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  zoomOutDown: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
     {transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', opacity: '0',  transformOrigin: 'center bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomOutUp: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
     {transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', opacity: '0', transformOrigin: 'center bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomOutRight: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right center', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: '1',  transformOrigin: 'right center', offset: 0.4},
     {transform: 'scale(.1) translate3d(2000px, 0, 0)', opacity: '0', transformOrigin: 'right center', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomOutLeft: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4},
     {transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomInDown: function (iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomInLeft: function (iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  zoomInRight: function (iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomInUp: function (iterations, duration) {
   var keyframes = [{transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0},
     {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6},
     {transform: 'none', opacity: '1', offset: 1}];
   var timing = {duration: duration, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'};
   return {keyframes, timing};
 },
  zoomOut: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', offset: 0},
     {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateIn: function (iterations, duration) {
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateInDownLeft: function (iterations, duration) {
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateInDownRight: function (iterations, duration) {
   var keyframes = [{transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateInUpLeft: function (iterations, duration) {
   var keyframes = [{transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateInUpRight: function (iterations, duration) {
   var keyframes = [{transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
     {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateOutDownLeft: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateOutDownRight: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateOutUpLeft: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateOutUpRight: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
 },
  rotateOut: function (iterations, duration) {
   var keyframes = [{transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0},
     {transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1}];
   var timing = {duration: duration, iterations: iterations};
   return {keyframes, timing};
  }
};
