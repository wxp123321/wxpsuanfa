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
	//并集(将两个集合合并为一个)
	this.union = function(otherSet){
		var unionSet = new Set();
		var values = this.values();
		for(var i = 0;i<values.length;i++){
			unionSet.add(values[i]);
		}
		values = otherSet.values();
		for(var i = 0;i<values.length;i++){
			unionSet.add(values[i]);
		}
		return unionSet;
	}
	
	//交集(两个集合中相同元素)
	this.intersection = function(otherSet){
		var intersectionSet = new Set();
		var values = this.values();
		for(var i = 0;i<values.length;i++){
			if(otherSet.has(values[i])){
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}
	
	//差集(存在于集合A，但是不存在于集合B)
	this.difference = function(otherSet){
		var differenceSet = new Set();
		
		var values = this.values();
		for(var i = 0;i<values.length;i++){
			if(!otherSet.has(values[i])){
				differenceSet.add(values[i]);
			}
		}
	}
}

var set = new Set();
set.add(1);
set.add(2);
set.remove(1);
console.log(set.values());
console.log(set.size());




















