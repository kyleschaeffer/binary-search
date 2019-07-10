import { SortedList } from './sorted-list';

/**
 * Search a sorted list for an item using binary search algorithm
 *  - Performant: O(log n)
 */
export function binarySearch<T>(haystack: SortedList<T>, needle: T): number|undefined {
  // Initial search params
  let min: number = 0;
  let max: number = haystack.length - 1;
  let guess;

  // Search for the needle
  while (min <= max) {
    // Guess halfway between min and max
    guess = Math.floor((min + max) / 2);

    // Found it!
    if (haystack.items[guess] === needle) return guess;

    // Update min and max to search left or right of guess
    if (needle > haystack.items[guess]) min = guess + 1;
    else max = guess - 1;
  }

  // Not found
  return undefined;
}
