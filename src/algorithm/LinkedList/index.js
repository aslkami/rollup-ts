class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

/**
 * add(index,element)  指定索引添加元素
 * add(element)  直接添加元素
 * get(index)  获取指定索引元素
 * set(index,element) 修改指定索引节点内容
 * remove(index) 删除指定索引节点
 * clear() 清空链表
 *
 */
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(index, element) {
    // 参数为 1 个， 代表不指定 索引 添加值
    if (arguments.length === 1) {
      element = index;
      index = this.size;
    }

    if (index < 0 || index > this.size) throw new Error("Error Boundary");

    if (index === 0) {
      // 头插入
      const head = this.head;
      this.head = new Node(element, head);
    } else {
      // 尾插入
      const prevNdoe = this.getNode(index - 1);
      const next = prevNdoe.next; // null, 需要把最新的节点的 next 指针指向 null
      prevNdoe.next = new Node(element, next);
    }

    this.size++;
  }

  getNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    return this.getNode(index);
  }

  set(index, element) {
    const updatedNode = this.getNode(index);
    updatedNode.element = element;
    return updatedNode;
  }

  remove(index) {
    if (index === 0) {
      // 删除头部只需要把指针指向下一个就好了
      this.head = this.head.next;
    } else {
      // 非头删除
      const prevNode = this.getNode(index - 1);
      const nextNode = prevNode.next.next;
      prevNode.next = nextNode;
    }

    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkList();

ll.add(0, 10);
ll.add(0, 20);
ll.add(30);
ll.add(40);
ll.add(0, 50);
ll.add(60);

// console.log(JSON.stringify(ll.get(1), null, 2));
// ll.remove(3);
console.log(JSON.stringify(ll, null, 2));
ll.remove(3);
console.log(JSON.stringify(ll, null, 2));
ll.set(1, 70);
console.log(JSON.stringify(ll, null, 2));
