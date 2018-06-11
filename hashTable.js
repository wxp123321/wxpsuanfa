function hashTable(){
	var table = [];
	var valuePair = function(key,value){
		this.key = key;
		this.value = value;
		
		this.toString = function(){
			return '['+this.key+'-'+this.value+']';
		}
	}
	
	var loseHasnCode = function(key){
		var hash = 0;
		for(var i = 0; i < key.length;i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}
	
	/*this.put = function(key,value){
		var position = loseHasnCode(key);
		console.log(position+'-'+key);
		table[position] = value;
	}*/
	/*this.put = function(key,value){
		var position = loseHasnCode(key);
		
		if(table[position] == undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key,value));
	}*/
	this.put = function(key,value){
		var position = loseHasnCode(key);
		
		if(table[position] == undefined){
			table[position] = new ValuePair(key,value);
		}else{
			var index = ++position;
			while(table[index] != undefined){
				index++;
			}
			table[index] = new ValuePair(key,value);
		}
	}
	
	/*this.get = function(key){
		return table[loseHasnCode(key)];
	}*/
	
	/*this.get = function(key){
		var position = loseHasnCode[key];
		if(table[position] !== undefined){
			var current = table[position].getHead();
			
			while(current.next){
				if(current.element.key === key){
					return current.element.value;
				}
				current = current.next;
			}
			
			if(current.element.key === key){
				return current.element.value;
			}
		}
		return undefined;
	}*/
	this.get = function(){
		var position = loseHasnCode(key);
		
		if(table[position] !== undefined){
			if(table[position].key === key){
				return table[position].value;
			}else{
				var index = ++position;
				while(table[index] === undefined || table[index].key !== key){
					index++;
				}
				if(table[index].key === key){
					return table[index].value;
				}
			}
		}
		return undefined;
	}
	
	/*this.remove = function(){
		table[loseHasnCode[key]] = undefined;
	}*/
	this.remove = function(key){
		var position = loseHasnCode(key);
		if(table[position] !== undefined){
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key === key){
					table[position].remove(current.element);
					if(table[position].isEmpty()){
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}
			if(current.element.key === key){
				table[position].remove(current.element);
				if(table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}
	}
	
	this.print = function(){
		for(var i = 0; i < table.length;i++){
			if(table[i] !== undefined){
				console.log(i + ':'+table[i]);
			}
		}
	}
}

function LinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}
	
	var length = 0;
	var head = null;
	
	this.append = function(element){
		var node = new Node(element),
		current;
		if(head === null) {
			head = node;
		}else {
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
		
	};
	this.indexOf = function(element){
		var current = head,
			index = 0;
		while(current){
			if(element === current.element){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;	
	};
	this.removeAt = function(position){
		if(position > -1 && position < length){
			var current = head,
			    previous,
			    index = 0;
			if(position === 0) {
				head = current.next;
			}else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.element; 	
		}else{
			return null;
		}
	};
	

	this.insert = function(position,element){
		if(position >= 0 && position <= length){
			var node = new Node(element),
				current = head,
				previous,
				index = 0;
			if(position === 0){
				node.next = current;
				head  = node;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	this.isEmpty = function(){
		return length === 0;
	};
	this.size = function(){
		return length;
	};
	this.toString = function(){
		var current = head,
			string = '';
		while(current){
			string += current.element;
			current = current.next;
		}	
		return string;
	};
	this.print = function(){};
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	}
	this.getHead = function(){
		return head;
	}
}

var hash = new hashTable();
hash.put('a','a.com');
hash.put('b','b.com');
hash.put('c','c.com');
console.log(hash.get('a'));