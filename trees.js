class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}
// create nodes with values
const abc = new TreeNode('abc');
const use = new TreeNode('use');
const res = new TreeNode('res');
const nadia = new TreeNode('nadia');
const imane = new TreeNode('imane');

// associate root with is descendants
abe.descendants.push(use);
homer.descendants.push(res, nadia, imane);
const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
    this.parent = null;
  }

  get left() {
    return this.descendants[LEFT];
  }

  set left(node) {
    this.descendants[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this.descendants[RIGHT];
  }

  set right(node) {
    this.descendants[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  add(value) { /* ... */ }
  find(value) { /* ... */ }
  remove(value) { /* ... */ }
  getMax() { /* ... */ }
  getMin() { /* ... */ }
}

add(value) {
  const newNode = new TreeNode(value);

  if (this.root) {
    const { found, parent } = this.findNodeAndParent(value);
    if (found) { // duplicated: value already exist on the tree
      found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
    } else if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  } else {
    this.root = newNode;
  }

  this.size += 1;
  return newNode;
}
findNodeAndParent(value) {
  let node = this.root;
  let parent;

  while (node) {
    if (node.value === value) {
      break;
    }
    parent = node;
    node = ( value >= node.value) ? node.right : node.left;
  }

  return { found: node, parent };
}
remove(value) {
  const nodeToRemove = this.find(value);
  if (!nodeToRemove) return false;

  // Combine left and right children into one subtree without nodeToRemove
  const nodeToRemoveChildren = this.combineLeftIntoRightSubtree(nodeToRemove);

  if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) {
    nodeToRemove.meta.multiplicity -= 1; // handle duplicated
  } else if (nodeToRemove === this.root) {
    // Replace (root) node to delete with the combined subtree.
    this.root = nodeToRemoveChildren;
    this.root.parent = null; // clearing up old parent
  } else {
    const side = nodeToRemove.isParentLeftChild ? 'left' : 'right';
    const { parent } = nodeToRemove; // get parent
    // Replace node to delete with the combined subtree.
    parent[side] = nodeToRemoveChildren;
  }

  this.size -= 1;
  return true;
}
combineLeftIntoRightSubtree(node) {
  if (node.right) {
    const leftmost = this.getLeftmost(node.right);
    leftmost.left = node.left;
    return node.right;
  }
  return node.left;
}
* inOrderTraversal(node = this.root) {
  if (node.left) { yield* this.inOrderTraversal(node.left); }
  yield node;
  if (node.right) { yield* this.inOrderTraversal(node.right); }
}
* postOrderTraversal(node = this.root) {
  if (node.left) { yield* this.postOrderTraversal(node.left); }
  if (node.right) { yield* this.postOrderTraversal(node.right); }
  yield node;
}
* preOrderTraversal(node = this.root) {
  yield node;
  if (node.left) { yield* this.preOrderTraversal(node.left); }
  if (node.right) { yield* this.preOrderTraversal(node.right); }
}
* dfs() {
  const stack = new Stack();

  stack.add(this.root);

  while (!stack.isEmpty()) {
    const node = stack.remove();
    yield node;
    // reverse array, so left gets removed before right
    node.descendants.reverse().forEach(child => stack.add(child));
  }
}
* bfs() {
  const queue = new Queue();

  queue.add(this.root);

  while (!queue.isEmpty()) {
    const node = queue.remove();
    yield node;
    node.descendants.forEach(child => queue.add(child));
  }
}

