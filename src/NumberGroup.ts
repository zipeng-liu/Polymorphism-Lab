import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
	data: number[];

	constructor(data: number[]) {
		this.data = data;
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftPos: number, rightPos: number): boolean {
		return this.data[leftPos] > this.data[rightPos];
	}

	swap(leftPos: number, rightPos: number): void {
		if (this.compare(leftPos, rightPos)) {
			let leftData = this.data[leftPos];
			let rightData = this.data[rightPos];
			
			this.data[leftPos] = rightData;
			this.data[rightPos] = leftData;
		}
	}
}