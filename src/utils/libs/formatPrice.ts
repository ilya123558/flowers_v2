export const formatPrice = (price: string | number) => {
  const num = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(num)) return "0";

  return num.toLocaleString("ru-RU")
};
