function hotPotato(nameList,num){
	var queue = new Queue();
	for(var i = 0; i < nameList.length;i++){
		queue.enqueue(nameList[i]);
	}
	
	var eliminated = '';
	while(queue.size() > 1) {
		for(var i = 0; i < num;i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated+'被淘汰');
	}
	return queue.dequeue();
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names,7);
console.log('胜利者'+winner);



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