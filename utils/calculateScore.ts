export function calculateScore(score_10: number, tofixed: number = 0) {
	return (score_10 * 10).toFixed(tofixed);
}
