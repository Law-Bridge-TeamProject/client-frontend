export function formatMoneyDigits(value: number | string) {
  const num = typeof value === "string" ? Number(value.replace(/'/g, "")) : value;
  if (isNaN(num)) return "";
  return `₮ ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`;
}
