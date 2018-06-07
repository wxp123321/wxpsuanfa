function PriorityQueue() {
	var items = [];

	function QueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element,priority);
		if(this.isEmpty()){
			items.push(queueElement);	
		}else {
			var added = false;
			for(var i = 0;i<items.length;i++){
				console.log(items[i].priority);
				if(queueElement.priority<items[i].priority){
					items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
		if(!added){
			items.push(queueElement);
		}
		}
			
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

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('john',2);
priorityQueue.enqueue('jack',1);
priorityQueue.enqueue('camila',1);
priorityQueue.print();




