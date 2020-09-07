let Tivi = function (remoteId) {
    this.channel = 1;
    this.volume = 1;
    this.status = false;
    this.remoteId = remoteId;

    this.changeStatus = function (status) {
    	this.status = !this.status;
    }
    this.changeVolume = function (number) {
    	this.volume = number;
    }
    this.changeChannel = function (newChannel) {
        this.channel = newChannel;
    }
}