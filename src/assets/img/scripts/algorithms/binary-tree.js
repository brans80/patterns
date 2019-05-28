
// export default (function () {
//   console.log(1111111);
// }());


class NodSort {
  constructor() {
    this.val;
    this.left;
    this.right;
  }

  add(v) {
    if (!this.val) {
      this.val = v;
    } else {
      if (v >= this.val) {
        if (!this.right) {
          this.right = new NodSort;
          this.right.val = v;

        } else {
          this.right.add(v);
        }
      } else {
        if (!this.left) {
          this.left = new NodSort;
          this.left.val = v;
        } else {
          this.left.add(v);
        }
      }
    }
  }

  print() {
    if (this.left) {
      this.left.print()
    }

    console.log(this.val);

    if (this.right) {
      this.right.print()
    }
  }
}

let newNodSort = new NodSort();

newNodSort.add(8);
newNodSort.add(3);
newNodSort.add(1);
newNodSort.add(10);
newNodSort.add(6);
newNodSort.add(14);
newNodSort.add(4);
newNodSort.add(13);
newNodSort.add(7);

newNodSort.print();

