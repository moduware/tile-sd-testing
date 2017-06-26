
/** ================ Handlers == */
function nativeDataUpdateHandler(data) {	
	
	if(data[1].state=='sdCardIn') {
			document.getElementById('sdCardStatus').textContent = "Connected";
	}
	else if(data[1].state=='sdCardOut') {
			document.getElementById('sdCardStatus').textContent = "Disconnected";
	}

	if(data[0].state=='usbEnabled') {
			document.getElementById('usbStatus').textContent = "Connected";
	}
	else if(data[0].state=='usbDisabled') {
			document.getElementById('usbStatus').textContent = "Disconnected";
	}
}
