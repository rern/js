function select_all_and_copy(el) {
	// http://www.seabreezecomputers.com/tips/copy2clipboard.htm
	
	// ++ added line for table
	var el = document.getElementById(el);
	// Copy textarea, pre, div, etc.
	if (document.body.createTextRange) {// IE 
		var textRange = document.body.createTextRange();
		textRange.moveToElementText(el);
		textRange.select();
		textRange.execCommand("Copy");   
		alert('Copied to clipboard');
	} else if (window.getSelection && document.createRange) {// non-IE
		var editable = el.contentEditable; // Record contentEditable status of element
		var readOnly = el.readOnly; // Record readOnly status of element
		el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
		el.readOnly = false; // iOS will not select in a read only form element
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range); // Does not work for Firefox if a textarea or input
		if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") 
			el.select(); // Firefox will only select a form element with select()
		if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
			el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
		el.contentEditable = editable; // Restore previous contentEditable status
		el.readOnly = readOnly; // Restore previous readOnly status 
		if (document.queryCommandSupported("copy"))
		{
			var successful = document.execCommand('copy');  
			if (successful) alert('Copied to clipboard');
			else alert('Press Ctrl+C to copy');
		}
		else
		{
			if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
				alert('Press Ctrl+C to copy');
		}
	}
}
