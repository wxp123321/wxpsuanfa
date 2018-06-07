function Queue(){
	var items = [];
	//向队列中添加新元素
	this.enqueue = function(element){
		items.push(element)
	}
	//移除队列的第一
	this.dequeue = function(){
		return items.shift();
	}
	//返回最前面的元素
	this.front = function(){
		return items[0];
	}
	//判断队列是否为空
	this.isEmpty = function(){
		return items.length == 0;
	}
	//返回队列的大小
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items.toString());
	}
	this.clear = function(){
		items = [];	
	}	
}

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('Camila');
queue.enqueue('xp');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.print();
