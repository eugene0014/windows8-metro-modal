var Win8Modal = (function($) {
	var onEscapeHandler = function(e) {
		if(e.keyCode === 27)
			close();
	}

	var onCoverClickHandler = function() {		
		close();
	}

	function show() {		
		$('html').toggleClass('win8modal-active');		
		
		$('.win8modal-cover').on('click', onCoverClickHandler);
		$('.win8modal-cover').on('touchstart', onCoverClickHandler);		

		$(document).on('keyup', onEscapeHandler);

		return false;
	}

	function close() {
		$('html').toggleClass('win8modal-active');

		$('.win8modal-cover').unbind('click', onCoverClickHandler);
		$('.win8modal-cover').unbind('touchstart', onCoverClickHandler);

		$(document).unbind('keyup', onEscapeHandler);

		return false;
	}

	return {
		show: show,
		close: close
	}	
})(jQuery);
