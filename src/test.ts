import { LinkedListGroup } from "./LinkedListGroup";
import { NumberGroup } from "./NumberGroup";

const linkedList1 = new LinkedListGroup();
linkedList1.add(4);
linkedList1.add(2);
linkedList1.add(3);
linkedList1.add(1);
linkedList1.swap(0, 1);
console.log(linkedList1.head?.data)
console.log(linkedList1.head?.next?.data);

const numberList1 = new NumberGroup([4, 2, 3, 1]);
console.log(numberList1.length);
numberList1.swap(0, 1);
console.log(numberList1.data);
