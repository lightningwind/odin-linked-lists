class LinkedList {

  constructor(head=null) {
    this.head = head;
    this.tail = head;
    this.size = 0;
  }
  
  /* Adds a new node containing value <value> to the end of this list. */
  append(value) { // O(1)
    const node = new Node(value);
    if (this.size === 0) { // List is empty
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  /* Adds a new node containing value <value> to the beginning of this list. */
  prepend(value) { // O(1)
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node; // Update head
    }
    this.size++;
  }

  /* Returns the total number of nodes in this list. */
  get getSize() { // O(1)
    return this.size;
  }

  /* Returns the first node in this list. */
  get getHead() { // O(1)
    return this.head;
  }

  /* Returns the last node in this list. */
  get getTail() { // O(1)
    return this.tail;
  }

  /* Returns the node at the given index. */
  at(index) { // O(N)
    if (index < 0) return null;
    if (index === 0) return this.head;
    if (this.size === 0) return null;

    let cur = this.head;

    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }

    return cur;
  }

  /* Removes the last element from this list. */
  pop() { // O(N) in singly linked list
    if (this.size === 0) { // empty list
      return null;
    }
    let n;
    if (this.head === this.tail) { // singleton list
      n = this.head;
      this.head = null;
    } else {
      n = this.tail;
      const newTail = this.at(this.size - 2); // Grab the second to last node
      newTail.next = null;
      this.tail = newTail;
    }
    this.size--;
    return n;
  }

  /* Returns true iff the value passed in is in the list. */
  contains(value) { // O(N)
    if (this.size === 0) return false;
    let cur = this.head;
    while (cur !== null) { // Traverse the list
      if (cur.value === value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  /* Returns the index of the node containing the given value, null otherwise. */
  find(value) { // O(N)
    if (!this.contains(value)) return null;
    let i = 0;
    let cur = this.head;
    while (cur !== null && cur.value !== value) {
      i++;
      cur = cur.next;
    }
    return i;
  }

  /* Returns a string representation of the entire linked list in the format: 
  ( value ) -> ( value ) -> ( value ) -> null
  */
  toString() { // O(N)
    if (this.size === 0) return 'null';
    let str = '';
    let cur = this.head;

    while (cur !== null) {
      str += `( ${cur.value} ) -> `;
      cur = cur.next;
    }

    return `${str}-> null`;
  }


}

class Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}

// Driver code