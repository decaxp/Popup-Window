var $open=0;
var $close=1;

(function( $ ){ 

	  $.fn.popupwindow= function(method,options ) { 	  
			if ((method==$open) || (method=='open'))
				return openwindow($(this),options);
			if ((method==$close) || (method=='close'))
				return closewindow($(this),options);	
			return $.error( 'Method ' +  method + ' in jQuery.popupwindow does not exist' );	
	  }

  function openwindow(object, options ) {  
    return object.each(function() {        
	 var settings = {
      'left': $(document).width()/2-$(this).width()/2,
      'top' : $(window).scrollTop()+10,
	  'animate':1500,
	  'background':true,
	  'canScroll':false,
	  'isDrag':false
    };
      if ( options ) { 
        $.extend( settings, options ); // very important!
      }
	  
 	 var docWidth=$(document).width()-2;
	 var docHeight=$(document).height()-2;
	
	 if (settings.background){
		$('body').append('<div id="newmodalbackground" style="width:'+docWidth+'px;height:'+docHeight+'px;"></div>');
	 }
	 if (!settings.canScroll){
		$('body').css({'overflow':'hidden'});
	 }
	 $(this).css({'top':settings.top+'px','left':settings.left+'px','display':'block'});			
	 $(this).animate({'opacity':1},settings.animate);
	 if (settings.isDrag){
		$(this).draggable();
		$(this).droppable();
	}	
    });

  };
  
 function closewindow(object,options) {
		return object.each(function(){
			var settings = {				
				'animate':1500,
				'background':true,
				'canScroll':true
			};
			if ( options ) { 
				$.extend( settings, options ); //very important!
			}	
			$(this).animate({'opacity':0},settings.animate,function(){
				$(this).css({'top':'-500px'});
				if (settings.background){
					$('#newmodalbackground').remove();
				}			
				if (settings.canScroll){
					$('body').css({'overflow':'auto'});
				}
			});			
		});
 };   
  
})( jQuery );