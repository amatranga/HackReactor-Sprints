var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	ForagerBee.prototype.constructor = ForagerBee;
	this.canFly = true;
	this.treasureChest = [];
};

HoneyMakerBee.prototype = Object.create(Grub.prototype)
ForagerBee.prototype.forage = function(treasure){
	this.treasureChest.push(treasure);
}
