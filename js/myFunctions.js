$(function(){

var timesRun = 0;
function colorStripes(toggle){
	var cells = $("table").find("tr").find("td");
  	for( var i = 0; i<cells.length; i++){
		if((i + toggle) % 2 == 0)
	{
		$(cells[i]).css("background-color","green");
	}
	else{
		$(cells[i]).css("background-color","white");
	}

  }
}
$('#stripeToggle').toggle( function(){
	colorStripes(0);
},
function () {
	colorStripes(1);
});

$('#runCounter').click( function(){numberGen($('#runCounter_sep').attr("innerHTML"))});
function numberGen(separator){
	timesRun += 1;
	
	var retText = "<h2>Results for run "+ timesRun.toString() +":</h2>";
	for(var i = 1; i<=100; i++)
	{
		if (i % 3 == 0){
		if (i % 5 == 0){
			retText += "Both";
		}
		else{
			retText += "Three";	
		}
		}
		else if (i % 5 == 0){
		retText += "Five";	
		}
		else{
			
			retText += i.toString();
		}
		retText += separator;
	}
	retText =  retText.sub(1,retText.length - separator.length);
	$('#output').attr("innerHTML",retText + $('#output').attr("innerHTML"));
};

});