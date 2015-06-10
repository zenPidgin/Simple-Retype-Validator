var $input1 = $('#email1');
var $input2 = $('#email2');

$('.wpcf7-submit').prop('disabled',true);

//$input1.on("keyup", checkVal);
$input2.on("keyup", checkVal);

function checkVal(){
	var email1_val = $input1.val();
	var email2_val = $input2.val();

	console.log("checking value");

	if(email1_val !== email2_val){
		console.log("items do not match");
		$input2.addClass("noMatch");
		$('.wpcf7-submit').prop('disabled',true);
	} else {
		console.log("items match");
		$input2.removeClass("noMatch");
		$('.wpcf7-submit').prop('disabled',false);
	}
}
