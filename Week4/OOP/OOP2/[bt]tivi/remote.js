let Remote = function (code) {
    this.code = code;

    this.changeStatusTv = function (tv) {
    	if (this.code !== tv.remoteId) {
    		console.log("Ko phải điều khiển");
    	} else {
    		tv.changeStatus();
    		console.log("Đã bật");
    	}
    }
    this.changeChannel = function (tv,channel) {
    	if (tv.status) {
    		if (this.code !== tv.remoteId) {
    			console.log("Ko phải điều khiển");
	    	} else {
	        	tv.changeChannel(channel);
	        	console.log("Đã chuyển kênh");
	        }
    	}else {
    		console.log("tivi chưa bật")
    	}
    }
    this.changeVolume = function (tv, volume) {
    	if (tv.status) {
    		if (this.code !== tv.remoteId) {
    			console.log("Ko phải điều khiển");
	    	} else {
	        	tv.changeChannel(channel);
	        	console.log("Đã chuyển kênh");
	        }
    	}else {
    		console.log("tivi chưa bật")
    	}
        
    }

}