import { ISortable } from "./ISortable";


class Node {
	next: Node | null = null;
	data: number;

	constructor(data: number) {
		this.data = data;
	}
}
  

export class LinkedListGroup implements ISortable {
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		tail.next = node;
	}

	get length(): number {
		let linkedListLength = 0;
		if (!this.head) {
			return linkedListLength;
		}
		let node: Node | null = this.head;
		while (node) {
			linkedListLength += 1;
			node = node.next;
		}
		return linkedListLength;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error("Error: Index out of bounds");
		}
		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		throw new Error("Error: Index out of bounds");
	}

	compare(leftPos: number, rightPos: number): boolean {
		const leftNode = this.at(leftPos);
		const rightNode = this.at(rightPos);

		return leftNode.data > rightNode.data;
	}

	swap(leftPos: number, rightPos: number): void {
		if (this.compare(leftPos, rightPos)) {
			let leftData = this.at(leftPos).data;
			let rightData = this.at(rightPos).data;
			
			this.at(leftPos).data = rightData;
			this.at(rightPos).data = leftData;
		}
	}

	print(): void {
		if (!this.head) {
			return;
		}
		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}


const node1 = new LinkedListGroup();
node1.add(4);
node1.add(2);
node1.add(3);
node1.add(1);
node1.swap(0, 1);
console.log(node1.head?.data)
console.log(node1.head?.next?.data);