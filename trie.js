var node = {
	key : null,
	value: null,
	children : []
}

function Trie() {
	this.head = {
		key: '',
		children: {}
	}
}

Trie.prototype.validate = function(key) {
	if((key === undefined) || (key === null))
}

Trie.prototype.add = function(key) {

	var curNode = this.head;
	var newNode = null;
	var curChar = key.slice(0,1);

	key = key.slice(1);

	while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0) {
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
	}

	while(curChar.length > 0) {
		newNode = {
			key: curChar,
			value: key.length === 0 ? null : undefined,
			children: {}
		};

		curNode.children[curChar] = newNode;

		curNode = newNode;

		curChar = key.slice(0, 1);
		key = key.slice(1);
	}

};

Trie.prototype.search = function(key) {
	var curNode = this.head;
	var curChar = key.slice(0, 1);
	var d = 0;

	key = key.slice(1);

	while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0) {
		curNode = curNode.children[curChar];
		curChar = key.slice(0, 1);
		key = key.slice(1);
		d += 1;
	}

	if(curNode.value === null && key.length === 0) {
		return d;
	} else {
		return -1;
	}
}

Trie.prototype.remove = function(key) {
	var d = this.search(key);
	if (d > -1) {
		removeH(this.head, key, d);
	}
}

function removeH(node, key, depth) {
	if (depth === 0 && Object.keys(node.children).length === 0) {
		return true;
	}

	var curChar = key.slice(0, 1);

	if(removeH(node.children[curChar], key.slice(1), depth -1)) {
		delete node.children[curChar];
		if(Object.keys(node.children).length === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

//HackerRank soln

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function Trie() {
    this.head = {
        key: '',
        children: []
    }
}

Trie.prototype.add = function(key) {
    var curNode = this.head;
    var newNode = null;
    var curChar = key.slice(0, 1);
    
    key = key.slice(1);
    
    /*  while there are still characters within the children of the
        current node at the key that is denoted by the curChar
        it will update the current Node with the child denoted by the key 
        curChar again. Then it will slice off the first character
        set it to the curChar, then slice the key so that that matches
        as well on the next loop.
    */
    while(typeof curNode.children[curChar] !== "undefined"
           && curChar.length > 0) {
        curNode = curNode.children[curChar];
        curChar = key.slice(0,1);
        key = key.slice(1);
        console.log('added one char');
    }
    
    /*  create a newNode which will become a child of the current Node with a key 
        being the current character for that word/set of chars
        at the end of the while llop the curChar pops the top element
        and the key also gets the top element sliced
    */
    while(curChar.length > 0) {
        newNode = {
            key: curChar,
            value: key.length === 0 ? null : undefined,
            children: {}
        };
        
        curNode.children[curChar] = newNode;
        curNode = newNode;
        
        curChar = key.slice(0, 1);
        key = key.slice(1);
    }
};

Trie.prototype.search = function(key) {
    var curNode = this.head;
    var curChar = key.slice(0,1);
    var d = 0;
    
    key = key.slice(1);
    /*  This will continue to loop until a character is not of the immediate current node's
        children (i.e undefined) and while there is still a char in current Char length
    */
    while(typeof curNode.children[curChar] !== "undefined" 
          && curChar.length > 0) {
        curNode = curNode.children[curChar];
        curChar = key.slice(0,1);
        console.log('curChar ' + curChar);
        key = key.slice(1);
        console.log('key ' + key);
        d += 1;
    }
    
    if(curNode.value === null || key.length === 0)
        return 1 + this.search(key);
    else
        return 0;

};

function main() {
    var n = parseInt(readLine());
    var myT = new Trie();
    for(var a0 = 0; a0 < n; a0++){        
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if(op === "add") {
            myT.add(contact);
        } else if(op === "find") {
            console.log(myT.search(contact));
        }
    }
    

}
