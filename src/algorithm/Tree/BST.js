class Node {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

// 二叉搜索树
class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // 添加的同时，进行排序， 记住每一轮比对，小的在左边，大的在右边
  add(element) {
    if (!this.root) {
      this.root = new Node(element, null);
      this.size++;
      return;
    }

    //
    let currentNode = this.root;
    let compare = 0;
    let parent;

    while (currentNode !== null) {
      compare = element - currentNode.element;
      parent = currentNode;
      if (compare < 0) {
        currentNode = currentNode.left;
      } else if (compare > 0) {
        currentNode = currentNode.right;
      }
    }

    let newNode = new Node(element, parent);
    if (compare > 0) {
      parent.right = newNode;
    } else {
      parent.left = newNode;
    }
    this.size++;
  }
  // 前序
  preorderTraversal(visitor) {
    if (visitor == null) return;
    const traversal = (node) => {
      if (node === null) return;
      visitor.visit(node.element);
      traversal(node.left);
      traversal(node.right);
    };
    traversal(this.root);
  }
  // 中序
  inorderTraversal(visitor) {
    if (visitor == null) return;
    const traversal = (node) => {
      if (node === null) return;
      traversal(node.left);
      visitor.visit(node.element);
      traversal(node.right);
    };
    traversal(this.root);
  }
  // 后序
  postorderTraversal(visitor) {
    if (visitor == null) return;
    const traversal = (node) => {
      if (node === null) return;
      traversal(node.left);
      traversal(node.right);
      visitor.visit(node.element);
    };
    traversal(this.root);
  }
  // 层序
  levelOrderTraversal(visitor) {
    if (this.root == null || visitor == null) return;
    let stack = [this.root];
    let currentNode = null;
    let index = 0;
    while ((currentNode = stack[index++])) {
      visitor.visit(currentNode.element);
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }
  }

  // 二叉树的反转
  invertTree() {
    if (this.root == null) return;
    let stack = [this.root];
    let currentNode = null;
    let index = 0;
    while ((currentNode = stack[index++])) {
      let tmp = currentNode.left;
      currentNode.left = currentNode.right;
      currentNode.right = tmp;
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }
    return this.root;
  }
}

const bst = new BST();
const list = [10, 8, 6, 19, 15, 22, 20];
list.forEach((num) => {
  bst.add(num);
});

console.dir(bst.root, { depth: 20 });
