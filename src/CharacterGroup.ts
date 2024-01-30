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
		if (this.compare(leftPos, rightPos)) {
			const leftChar = this.data[leftPos];
			const rightChar = this.data[rightPos];
			const theRest = this.data.substring(rightPos-1, this.length);
			this.data = rightChar + leftChar + theRest;
		}
	}
}