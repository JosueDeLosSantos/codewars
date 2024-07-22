/* export default function findOdd(arr: number[]): number {
	const tempArr = arr;
	let answer: number[] = [];

	arr.forEach((v) => {

		const nTimesElement = tempArr.filter((el) => el === v);
		const isOdd = nTimesElement.length % 2;

		if (isOdd && nTimesElement.length > answer.length) {
			answer = nTimesElement;
		}
	});

	return answer[0];
} */

export default function findOdd(xs: number[]): number {
	return xs.reduce((a, b) => a ^ b);
}
