export function passengers(busStops: [number, number][]): number {
	return busStops.reduce((a, b) => a + b[0] - b[1], 0);
}
