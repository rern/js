<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RoundSlider</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no" />
<link rel="stylesheet" href="assets/css/roundslider.min.css">
<style>
body {
	background: #000000;
}
.rslider {
	margin-top: 20px;
	margin-left: 20px;
}

.rs-container {
	box-shadow: #555555 0 0 8px 2px;
	border-radius: 50%;
}
.rs-border {
	border: none;
}
.rs-range-color,
.rs-path-color {
	background: #34495e;
}
.rs-tooltip {
	left: 20% !important;
	top: 40% !important;
	width: 60%;
	height: 50px;
	margin: 0 !important;
	font-family: "Lato";
	font-weight: 300;
	font-size: 38px !important;
	color: #e0e7ee;
}

#time .rs-range-color {
	background: #0095d8;
}
#time .rs-handle {
	opacity: 0;
}
#volume .rs-path-color {
	background: linear-gradient( #333333, #000000 );
}
#volume .rs-handle {
	border: 1px solid #333333;
	background: #0095d8;
	box-shadow: inset #34495e 0 5px 5px;
}
/* highlight */
.rs-outer {
	position: relative;
}
.rs-outer:before {
	width: 220px;
	height: 220px;
}
.rs-outer:before,
#time .rs-inner:before {
	position: absolute;
	content: '';
	top: 5px;
	left: 5px;
	background-color: #000000;
	border-radius: 50%;
	z-index: 5;
}
#time .rs-outer:before {
	background: none;
}
.rs-outer:after {
	position: absolute;
	content: '';
	border-radius: 50%;
	background: -webkit-radial-gradient(70% -50%, 160% 200%, hsla(0,0%,100%,0.15) 50%, hsla(0,0%,100%,0) 50%);
	background: radial-gradient(160% 100% at 75% 0% ,hsla(0,0%,100%,.15) 50%,hsla(0,0%,100%,0) 50%);
	z-index: 6;
}
#time .rs-outer:after {
	top: 30px;
	left: 30px;
	width: 170px;
	height: 170px;
}
#time .rs-inner:before {
	width: 160px;
	height: 160px;
}
#time .rs-inner {
	position: relative;
	background: linear-gradient( #333333, #000000 );
}
#volume .rs-outer:after {
	top: 0;
	left: 0;
	width: 230px;
	height: 230px;
}

/* volume up-down */
.rscontainer,
#volume {
	position: relative;
}
#volup,
#voldn {
	position: absolute;
	display: block;
	height: 40px;
	width: 50px;
    left: 110px;
	z-index: 10;
}
#volup {
	top: 50px;
}
#voldn {
	top: 140px;
}
.rs-animation .rs-transition  {
    /*transition-timing-function: cubic-bezier(1.000, -0.530, 0.405, 1.425);*/
    /*transition-duration: 2s;*/
}
</style>
</head>
<body>

<div id="time" class="rslider"></div>
<div class="rscontainer">
	<div id="volume" class="rslider"></div>
	<div id="volup"></div>
	<div id="voldn"></div>
</div>

<script src="assets/js/vendor/jquery-2.1.0.min.js"></script>
<script src="assets/js/vendor/roundslider.min.js"></script>
<script>
$( '#time' ).roundSlider( {
	sliderType: "min-range",
	value: 500,
	max: 1000,
	radius: 115,
	width: 30,
	startAngle: 90,
	endAngle: 450,
	editableTooltip: false
} );

$( '#volume' ).roundSlider( {
	sliderType: 'default',
	value: 50,
	radius: 115,
	width: 50,
	handleSize: '-25',
	startAngle: -50,
	endAngle: 230,
	editableTooltip: false,
	beforCreat: function() {
		this.control.find( '.rs-handle' ).css( 'transform', 'rotate( 25deg )' );
	},
	create: function () {
		this.control.find( '.rs-handle' )
			.addClass( 'rs-transition' ).eq( 0 )
			.rsRotate( - this._handle1.angle );
	},
	start: function( e ) {
		// restore handle color immediately on start drag
		$( '#volume .rs-handle' ).css( 'background', '#0095d8' );
	},
	drag: function ( e ) {
		$( e.handle.element ).rsRotate( - e.handle.angle );
	},
	stop: function( e ) {
		if ( e.value === 0 ) unmutevol = 0;
	},
	change: function( e ) {
		$( e.handle.element ).rsRotate( - e.handle.angle );
	}
} );

$( '#volume .rs-tooltip' ).click( function() {
	var obj = $( '#volume' ).data( 'roundSlider' );
	vol = obj.getValue();
	if ( vol ) unmutevol = vol;
	var val = vol == 0 ? unmutevol : 0;

	obj.setValue( val );
	$( '#volume .rs-handle' ).rsRotate( - obj._handle1.angle );
	// change color after rotate finish
	$( '#volume .rs-first' ).one( 'transitionend webkitTransitionEnd mozTransitionEnd', function() {
		if ( obj.getValue() == 0 ) $( '#volume .rs-handle' ).css( 'background', '#587ca0' );
	} );
	// restore color immediately on click
	if ( vol == 0 ) $( '#volume .rs-handle' ).css( 'background', '#0095d8' );
} );

$( '#volup, #voldn' ).click( function( e ) {
	var obj = $( '#volume' ).data( 'roundSlider' );
	var vol = obj.getValue();
	
	obj.setValue( this.id == 'volup' ? vol + 1 : vol - 1 );
	$( '#volume .rs-handle' ).rsRotate( - obj._handle1.angle ).css( 'background', '#0095d8' );
} );
</script>
</body>
</html>
