import { binarySearch } from './binary-search';
import { SortedList } from './sorted-list';

// Sorted list
const list = new SortedList<string>('d', 'g', 'e', 'h', 'a', 'f', 'b', 'c');

test('list is sorted', () => {
  expect(list.items).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
});

test('list has length of 8', () => {
  expect(list.length).toBe(8);
});

test('items are pushed to list and sorted', () => {
  list.push('0', '.', 'z');
  expect(list.length).toBe(11);
  expect(list.items[0]).toBe('.');
});

test('binarySearch() finds item indicies', () => {
  expect(binarySearch<string>(list, '0')).toBe(1);
  expect(binarySearch<string>(list, 'a')).toBe(2);
  expect(binarySearch<string>(list, 'f')).toBe(7);
});

test('binarySearch() returns undefined for items not found', () => {
  expect(binarySearch<string>(list, 'j')).toBeUndefined();
  expect(binarySearch<string>(list, 'k')).toBeUndefined();
});
