
Let txtUnits = document.getElementById('txtUnits');
Let lblResult = document.getElementById('lblResult');

function clearTextBox(){
	txtUnits.value = 0;
	console.log('Value Cleared');
}
<script>
function calculateBill()
	Let rate = 0;
	Let totll = 0;
	Let noOfUnits;
	
	if (txtUnits.value!=null){
		noOfUnits = txtUnits.value;
		
	if(txtUnits.value <= 60){
		rate = 7.85;
	
		subTotal = noOfUnits-60*rate;
		
	}else if(txtUnits.value <= 90) {
		
		rate = 10;
		subTotal = noOfUnits;
		
	}else if(txtUnits.value <= 120){
		
		rate = 27.75;
		
	}else if(txtUnits.value <= 180){
		
		rate = 32;
		
	}else{
	
		lblError.InnerHTML = "Please enter value between 0 to 100";
	}
}
</script>




	
		
		
		
		
		
		
		
		