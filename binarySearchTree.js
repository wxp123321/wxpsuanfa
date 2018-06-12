function binarySearch(){
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}
	
	var root = null;
	this.insert = function(key){
		var newNode = new Node(key);
		
		if(root === null){
			root = newNode;
		}else{
			insertNode(root,newNode);
		}
	}
	
	var insertNode = function(node,newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}
	
	//中序遍历 访问顺序从小到大
	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root,callback);
	}
	
	var inOrderTraverseNode = function(node,callback){
		if(node !== null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	}
	
	//先序遍历
	this.preOrderTraverse = function(callback){
		preOrderTraverseNode(root,callback);
	}
	var preOrderTraverseNode = function(node,callback){
		if(node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	}
	
	//后序遍历
	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(root,callback);
	}
	var postOrderTraverseNode = function(node,callback){
		if(node !== null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	}
	
	//寻找树中的最小值
	this.min = function(){
		return minNode(root);
	}
	
	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}
	
	//寻找树中的最大值
	this.max = function(){
		return maxNode(root);
	}
	
	var maxNode = function(node){
		if(node){
			while(node && node.right!== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}
	
	//搜索一个特定的值
	this.search = function(key){
		return searchNode(root,key);
	}
	var searchNode = function(node,key){
		if(node === null){
			return false;
		}
		if(key < node.key){
			return searchNode(node.left,key);
		}else if(key > node.key){
			return searchNode(node.right,key);
		}else {
			return true;
		}
	}
}

var tree = new binarySearch();

function printNode(value){
	console.log(value);
}

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
//tree.inOrderTraverse(printNode);
//tree.preOrderTraverse(printNode);
//tree.postOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(1));
console.log(tree.search(8));






