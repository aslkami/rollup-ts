class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

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

  reverseWithRecursion() {
    const reverse = (head) => {
      if (head === null || head.next === null) return head;
      let newHead = reverse(head.next);
      head.next.next = head;
      head.next = null;
      return newHead;
    };

    return reverse(this.head);
  }

  reverseWithLoop() {
    let head = this.head;

    if (head == null || head.next === null) return head;

    let newHead = null;

    while (head !== null) {
      const nextNode = head.next;
      head.next = newHead;
      newHead = head;
      head = nextNode;
    }

    // this.head = newHead;
    return newHead;
  }
}

const ll = new LinkList();

ll.add(0, 10);
ll.add(0, 20);
ll.add(30);
ll.add(40);
ll.add(0, 50);
ll.add(60);

console.log(JSON.stringify(ll, null, 2));
// console.log(JSON.stringify(ll.reverseWithLoop(), null, 2));
console.log(JSON.stringify(ll.reverseWithRecursion(), null, 2));
