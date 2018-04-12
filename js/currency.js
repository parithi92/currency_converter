$(document).ready(function(){
	$("#convert").click(function(){
		var from_curr = $.trim($("#from_curr").val());
        var to_curr = $.trim($("#to_curr").val());
        var amount = $.trim($("#amount").val());
        var query = from_curr+'_'+to_curr;
       /*var result = 'data.'+query+"['val']";*/
       
        var url = "https://free.currencyconverterapi.com/api/v5/convert?q="+query+"&compact=y";
        
        if(amount.length>0){
            $.ajax({
                type: "GET",
                url: url,
                
                dataType: 'json',
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#convert").val("Converting...")},
                success: function(data){
                	var result = data[query]['val'];
                	var total_amt = amount*result;
                	/*$("#response").html("<p>Converted Value:"+total_amt+"</p>");
                	$("#response").trigger('create');*/
                	alert(total_amt);
                }

            });
        }else{
            alert("Please enter amount");
        }
	});
	
});