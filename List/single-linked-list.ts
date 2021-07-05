import { blue, green, yellow } from "../log";
import { Node } from "./Node";

export class SingleLinkedList {
  head: Node;
  constructor(data: any) {
    this.head = new Node(data);
  }

  append(data) {
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
    }
    const node = new Node(data);
    cur.next = node;
  }

  insert(data, position: number) {
    if (position < 0) return 'invalid position';
    if (position === 0) { // first node
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let cur = this.head;
      for(let i=0; i<position-1 && cur; i++) {
        cur = cur.next;
      }
      if (cur) {
        let node = new Node(data);
        node.next = cur.next;
        cur.next = node;
      }
    }
  }

  display() {
    let tmp = this.head;
    while(tmp !== null) {
      yellow(tmp.data);
      tmp = tmp.next;
    }
  }

  rdisplay(node = this.head) {
    if (node !== null) {
      green(node.data);
      this.rdisplay(node.next);
    }
  }

  reverse_display(node = this.head) {
    if (node !== null) {
      this.reverse_display(node.next);
      blue(node.data);
    }
  }

  count() {
    let tmp = this.head;
    let count = 0;
    while(tmp) {
      tmp = tmp.next;
      count++;
    }
    console.log(count);
    return count;
  }

  rcount(node = this.head) {
    if (!node) return 0;
    return this.rcount(node.next) + 1;
  }

  sum() {
    let tmp = this.head;
    let sum = 0;
    while(tmp) {
      sum += tmp.data;
      tmp = tmp.next;
    }
    return sum;
  }

  rsum(node = this.head) {
    if (!node) return 0;
    return node.data + this.rsum(node.next)
  }

  max() {
    let tmp = this.head;
    let max = tmp.data;
    while(tmp) {
      if (tmp.data > max) max = tmp.data;
      tmp = tmp.next;
    }
    return max;
  }

  rmax(node = this.head) {
    let x = 0;
    if (!node) return 0;
    x = this.rmax(node.next);
    return x > node.data ? x : node.data;
  }

  search(key) {
    let tmp = this.head;
    while(tmp) {
      if (tmp.data === key) return tmp;
      tmp = tmp.next;
    }
    return null;
  }

  rsearch(node = this.head, key) {
    if (node === null) return null;
    if (node.data === key) return node;
    return this.rsearch(node.next, key);
  }

  // moves the searched key to front of the list, so that for further queries, it will be fast
  opt_search(key) {
    let tmp = this.head, prev = null;
    while(tmp) {
      if (tmp.data === key) {
        prev.next = tmp.next;
        tmp.next = this.head;
        this.head = tmp;
        return this.head;
      }
      prev = tmp;
      tmp = tmp.next;
    }
    return null;
  }

  delete() {}

  isSorted() {}

  removeDuplicates() {}

  reverse() {}

  concat(list2) {}

  merge(list) {}

  findLoop() {}

}
