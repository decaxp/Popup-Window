jQuery PopupWindow Plugin

This is simple plugin where yo can create your windows. You can customise some parametres:
	- draggind window( true or false)
	- animation speed
	- modal window or not( it`s customizes by option background- true or fasle)
	- canScroll window at openning window or not
	- window location: left and top params
	
Plugin 	realise only simlple javascript logic, so you have to create your element (with css of course) and call popupwindow method.
Popupwindow method is once so if you want to call params you should do like this:
	- to open window:
	
		$('.open').bind('click',function(){
					$('#modalwindow').popupwindow($open,{animate:10,isDrag:true});					
					return false;
				});
		or

		$('.open').bind('click',function(){
					$('#modalwindow').popupwindow('open');					
					return false;
				});
		or 
		
		$('.open').bind('click',function(){
					$('#modalwindow').popupwindow(0,{background:false,canScroll:true});					
					return false;
				});
				
	- to close window:
	
		$('.close').bind('click',function(){
					$('#modalwindow').popupwindow($close,{animate:2000});
				});
				
		or
		
			$('.close').bind('click',function(){
					$('#modalwindow').popupwindow('close');
				});
				
		or
		
			$('.close').bind('click',function(){
					$('#modalwindow').popupwindow(1);
				});

Constraints
	Variables $open,$close are global for this plugin so you shouldn`t use those names at yours applications.
	"newmodalbackground" is the name of background created div which zoomed at window openning.

Libraries
	To use plugin you should linked the Jquery and this plugin of course(javasript and css).
	If you want drag and drop effect you should link the JQuery-UI. I tips link the JQuery-UI of 1.7 series because
	I saw some bug at 1.8 series.

Full example:
		Here full example of using plugin. Index html:
		
<html>
<head>
	<style>
		.right{	float:right;}	
		#modalwindow{
			position:absolute;
			left:0px;
			top:-500px;
			width:300px;
			height:300px;
			border:1px solid;
			background:#fff;
			z-index:9999;
			opacity:0;
		}		
		
		.title{
			cursor:move;
			height:20px;
			width:299px;
			background:#aaa;
			border:1px black solid;
		}	
		
		
	</style>
	<link href="jquery.popup_window.css" rel="stylesheet" type="text/css">
	<script src=" http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src=" http://yandex.st/jquery-ui/1.8.23/jquery-ui.min.js"></script>
	<script src="jquery.popup_window.js"></script>
	<script>
		$(document).ready(function(){				
				$('.open').bind('click',function(){
					$('#modalwindow').popupwindow(0,{animate:10,isDrag:true});					
					return false;
				});
				$('.close').bind('click',function(){
					$('#modalwindow').popupwindow($close,{animate:2000});
				});
				
			});
	</script>
</head>
<body >
	<a class="open" href="#">!!!</a>
	<a class="close" href="#">55</a>
	<div id="modalwindow">
		<div class="title">
			<div class="right">
				<a class="close" href="#"><img src="close.png"></a>
			</div>
		</div>	
	</div>
	text	text	text	text	text	text	text	text	text	text	text	text
	text	text	text	text	text	texttext	text	text	text	text	text
</body>
</html>
		
		