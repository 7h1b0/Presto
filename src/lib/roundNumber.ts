export function round(value: number): string {
	const nb = new Intl.NumberFormat('en-EN', { maximumFractionDigits: 2 });
	return nb.format(value);
}
