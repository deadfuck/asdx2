function billingFunction(){
  if(document.getElementById('same').checked){                                                            document.getElementById('billingName').value = shippingName.value; 
   document.getElementById('billingZip').value = shippingZip.value;                                     
                                             }
  else {
   document.getElementById('billingName').value = ""; 
    document.getElementById('billingZip').value = "";   
  }
}
function onPadd (){
	document.getElementByClass('padd').style = 'onpadd'.style;
}

