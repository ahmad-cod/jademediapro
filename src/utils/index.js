const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Calculate a month abbreviation from its number, e.g.
 * ```js
 *  getMonthAbbr(1) // Returns Jan.
 * ```
 * @param {NumericRange<Enumerate<1>, 12>} num
 */
export function getMonthAbbr(num) {
  return `${months[num - 1].slice(0, 3)}.`;
}

/**
 * Returns three unique items from the input array at random.
 * @template T
 * @param {Array<T>} arr - The input array
 * @param {number} length - The number of items to return.
 * @returns {Array<T>} An array containing three unique items from the input array
 */
export function select(arr, length = 1) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length < length) {
    throw new Error("Array must have at least three elements");
  }

  const result = [];
  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[randomIndex])) {
      result.push(arr[randomIndex]);
    }
  }
  return result;
}
