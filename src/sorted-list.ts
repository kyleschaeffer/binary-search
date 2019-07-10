/**
 * List (array-like) that is always sorted
 */
export class SortedList<T> {
  /**
   * A sorted list of items
   */
  private list: T[];

  /**
   * Instantiate a new sorted list
   */
  constructor(...items: T[]) {
    // New empty list
    this.list = [];

    // Add items
    this.push(...items);
  }

  /**
   * Get all items in the list
   */
  public get items(): T[] {
    return this.list;
  }

  /**
   * Get item list length
   */
  public get length(): number {
    return this.list.length;
  }

  /**
   * Add new item(s) to the list
   */
  public push(...items: T[]): void {
    // Add new items
    items.forEach(item => this.list.push(item));

    // Sort list
    this.sort();
  }

  /**
   * Sort the list
   */
  private sort(): void {
    this.list.sort();
  }
}
