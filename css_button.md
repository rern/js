**button.css**  
```css
/*
<a> - no disabled
<button> - with disabled
*/

.button {
/* button */
	display: inline-block;
	border-radius: 3px; /* rounded corner */
	position: relative;
	height: 20px;
	width: 98px;
	border: none;
	outline: none; /* remove focus border - chrome */
	background: -webkit-radial-gradient(50% -50%, 160% 200%, hsla(0,0%,100%,.3) 50%, hsla(0,0%,100%,0) 55%); /* button highlight - last % for anti-alias edge*/
	background: radial-gradient(160% 100% at 50% 0% ,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 55%); /* (Width% Heigth% at H-center_offset% V-center_offset%, hsla(0,0%,100%,1st-T) 1st-area%, hsla(0,0%,100%,2nd-T) 2nd-area%)) */
	box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.5);  /*  V-offfset, H-Offset, Blur width, Shadow width , Color */
	-webkit-box-shadow: 2px 2px 2px gray;
	-moz-box-shadow: 2px 2px 2px gray;
	margin: 3px 0 2px 0;
/* text */
	padding: 0;
	font-family: DSN_Kamon_75, Icon;
	/*font-size: 1em;*/
	line-height: 18px; /* adjust vertical text position (more = down)*/
	text-align: center;
	text-decoration:none; /* remove underline */
	cursor: default;
	color: #ffffff; /* text color */
	-webkit-touch-callout: none; /* non selectable text to prevent select on hold*/
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.button:focus, .button:-moz-focus-inner { /* ie, firefox */
	border: none; /* remove focus border - ie & firefox */
	outline: none; /* remove focus border - osx */
}

input[type=button] {
	margin: 3px 0 2px 0;
	padding: 0;
	font-size: 1em;
}
input[type=button]:disabled {  /* fix disabled button not grayout in IE */
	opacity: 0.5;
}

.stack {
	margin: 3px 0 2px 0;
}
.w75 {width: 75px;}  /* for button - not work if place before '.button' */

.circular {
	border-radius: 100%;
	height: 35px;
	width: 35px;
	font-size: 1.3em;
	line-height: 33px;
}
/*
.circular.jactive {
	transform: scale(1.2);
	-ms-transform: scale(1.2);
	-webkit-transform: scale(1.2);
	font-size: 1.5em;
}
*/
.mid {
	border-radius: 100%;
	height: 25px;
	width: 25px;
	top: -1px;
	font-size: 1.1em;
	line-height: 26px; /* adjust vertical text position (more = down)*/
}
.midtxt {
	line-height: 21px;
}
.m5 {
	margin: 0 5px;
}
.small {
	border-radius: 100%;
	height: 20px;
	width: 20px;
	font-size: 1em;
	line-height: 20px;
}
.smalltxt {
	line-height: 17px;
	padding-bottom: 2px;
}
.square30 {
	width: 30px;
	height: 30px;
	font-size: 35px;
	line-height: 35px;
}
.square {
	border-radius: 0px;
	height: 22px;
	width: 26px;
	font-size: 0.95em;
	background-image: none;
	background: black;
}
.noshade {box-shadow: none;}
.button:disabled {opacity: 0.5;}

/* must be 'background-color' not 'background' for hightlight */
.black, .blackred, .blackviolet, .blackblue, .blackgreen, .blackyellow, .blackorange, .blackgray {background-color: black;}
.black.jactive {background-color: #888888;}

.red {background-color: #ff0000;}
.red.jactive, .blackred.jactive {background-color: #f26d7d;}

.violet {background-color: #993399;}
.violet.jactive, .blackviolet.jactive {background-color: #ad5cad;}

.blue {background-color: darkblue;}
.blue.jactive, .blackblue.jactive {background-color: #3399ff;}

.blueblue {background-color: #3399ff;}
.blueblue.jactive {background-color: #0101df;}

.green {background-color: #005952;}
.green.jactive, .blackgreen.jactive {background-color: #689d99;}

.yellow {background-color: #ffbf00;}
.yellow.jactive, .blackyellow.jactive {background-color: #f7d358;}

.orange {background-color: #ff5915;}
.orange.jactive, .blackorange.jactive {background-color: #ff8e5f;}

.gray {background-color: #888888;}
.gray.jactive, .blackgray.jactive {background-color: #a8a8a8;}

.lightgray {background-color: #d1d1d1;}
```
