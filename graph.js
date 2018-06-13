function graph(){
	var vertices = [];
	var adjList = new Dictionary();
	
	//添加新顶点
	this.addVertex = function(v){
		vertices.push(v);
		adjList.set(v, []);
	}
	
	this.addEdge = function(v,w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}
	
	this.toString = function(){
		var s = '';
		for(var i = 0;i<vertices.length;i++){
			s += vertices[i] + '->';
			var neighbors = adjList.get(vertices[i]);
			for(var j = 0;j < neighbors.length;j++){
				s += neighbors[j]+'';
			}
			s += '\n';
		}
		return s;
	}
	
	//广度优先搜索算法
	var initializeColor = function(){
		var color = [];
		for(var i = 0; i < vertices.length;i++){
			color[vertices[i]] = 'white';
		}
		return color;
	}
	
	this.bfs = function(v,callback){
		var color = initializeColor(),
			queue = new Queue();
		queue.enqueue(v);

		while(!queue.isEmpty()){
			var u = queue.dequeue(),
				neighbors = adjList.get(u);
			color[u] = 'grey';
			for(var i = 0;i<neighbors.length;i++){
				var w = neighbors[i];
				if(color[w] === 'white'){
					color[w] = 'grey';
					queue.enqueue(w);
				}
			}
			color[u] = 'black';
			if(callback){
				callback(u);
			}		
		}	
	}
	
	this.BFS = function(v){
		var color = initializeColor(),
			queue = new Queue(),
			d = [],
			pred = [];
		queue.enqueue(v);
			
		for(var i = 0; i < vertices.length; i++){
			d[vertices[i]] = 0;
			pred[vertices[i]] = null;
		}
		while(!queue.isEmpty()){
			var u = queue.dequeue(),
				neighbors = adjList.get(u);
			color[u] = 'grey';
			for(var i = 0; i < neighbors.length;i++){
				var w = neighbors[i];
				if(color[w] === 'white'){
					color[w] = 'grey';
					d[w] = d[u] + 1;
					pred[w] = u;
					queue.enqueue(w);
				}
			}
			color[u] = 'black';	
		}
		return {
			distances: d,
			predecessors: pred
		};	
	}
	
	//深度优先算法
	this.dfs = function(callback){
		var color = initializeColor();
		for(var i = 0; i < vertices.length;i++){
			if(color[vertices[i]] === 'white'){
				dfsVisit(vertices[i],color,callback);
			}
		}
	}
	var dfsVisit = function(u,color,callback){
		color[u] = 'grey';
		if(callback){
			callback(u);
		}
		var neighbors = adjList.get(u);
		for(var i = 0; i < neighbors.length;i++){
			var w = neighbors[i];
			if(color[w] === 'white'){
				dfsVisit(w,color,callback);
			}
		}
		color[u] = 'black';
	}
}

var graph = new graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for(var i = 0; i < myVertices.length;i++){
	graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');
console.log(graph.toString());

function printNode(value){
	console.log('Visited vertex:'+value);
}
graph.bfs(myVertices[0],printNode);

var shorttestPathA = graph.BFS(myVertices[0]);
console.log(shorttestPathA);


var fromVertex = myVertices[0];
for(var i = 1;i<myVertices.length;i++){
	var toVertex = myVertices[i],
		path = new Stack();
	for(var v = toVertex;v !== fromVertex;v=shorttestPathA.predecessors[v]){
		path.push(v);
	}
	path.push(fromVertex);
	var s = path.pop();
	while(!path.isEmpty()){
		s += '-'+path.pop();
	}
	console.log(s);
}

graph.dfs(printNode);





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

function Stack(){
	var items = [];
	//向栈中添加元素
	this.push = function(element){
		items.push(element);
	}
	//移除栈顶元素 同时返回被移除的元素
	this.pop = function(element) {
		return items.pop(element);
	}
	//返回栈顶元素
	this.peek = function(){
		return items[items.length-1];
	}
	//判断数组是否为空
	this.isEmpty = function(){
		return items.length == 0;
	}
	this.size = function(){
		return items.length;
	}
	//清除栈中的所有元素
	function clear(){
		items = [];
	}
	//输出栈中所有内容
	this.print = function(){
		console.log(items.toString());
	}
}



function Dictionary(){
	var items = {};
	
	this.has = function(key){
		return key in items;
	}
	
	this.set = function(key,value){
		items[key] = value;
	}
	
	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}
	
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}
	
	this.values = function(){
		var values = {};
		for(var k in items){
			 if(this.has(k)){
				 values.push(items[k]);
			 }
		}
		return values;
	}
	
	this.getItems = function(){
		return items;
	}
	
	this.clear = function(){
		items = {};
	}
	
	this.size = function(){
		return Object.keys(items).length;
	}
	
	this.keys = function(){
		return Object.keys(items);
	}
}