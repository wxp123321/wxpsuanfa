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
}


var tree = new binarySearch();

function printNode(value){
	console.log(value);
}

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.inOrderTraverse(printNode);
tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);






