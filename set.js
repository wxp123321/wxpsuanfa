function Set(){
	var items = {};
	
	this.has = function(value){
		return value in items;
	}
	//hasOwnProperty返回是否具有特定的属性
	this.has2 = function(value){
		return items.hasOwnProperty(value);
	}
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	}
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function(){
		return Object.keys(items).length;
	}
	this.values = function(){
		return Object.keys(items);
	}
}

var set = new Set();
set.add(1);
set.add(2);
set.remove(1);
console.log(set.values());
console.log(set.size());