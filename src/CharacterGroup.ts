import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
	data: string;

	constructor(data: string) {
		this.data = data;
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftPos: number, rightPos: number): boolean {
		return this.data[leftPos] > this.data[rightPos];
	}

	swap(leftPos: number, rightPos: number): void {
		let stringList = this.data.split("");
		const leftData = stringList[leftPos];
		const rightData = stringList[rightPos];
		stringList[leftPos] = rightData;
		stringList[rightPos] = leftData;
		this.data = stringList.join(""); 
	}
}