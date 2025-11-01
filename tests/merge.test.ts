const mergedCollection = require('../src/merge');
test('merge function exists', () => {
    expect(mergedCollection).toBeDefined();
});
test('merge function merges three sorted arrays correctly', () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [2, 5, 8];
    const collection_3 = [9, 6, 3];
    const result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
test('merge three sorted array with different length ', () => {
    const collection_1 = [1, 4, 7, 10, 12];
    const collection_2 = [2, 5, 8];
    const collection_3 = [14 ,11, 9];
    const result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 14]);
});
test('merge three sorted arrays with same number', () => {
    const collection_1 = [1, 4, 7, 8, 9];
    const collection_2 = [2, 5, 8, 9];
    const collection_3 = [9, 9, 6, 3];
    const result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 9, 9]);
});
test('merge three sorted array having some arrays empty', () => {
    let collection_1 : number[];
    let collection_2 : number[];
    let collection_3 : number[];
    let result : number[];
    collection_1 = [];
    collection_2 = [2, 4, 6];
    collection_3 = [];
    result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([2,4,6]);
    collection_1 = [1, 3 ,5];
    collection_2 = [2 ,4 ,6];
    collection_3 = [];
    result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5 ,6]);
});
test('merge three empty arrays', () => {
    const collection_1 : number[] = [];
    const collection_2 : number[] = [];
    const collection_3 : number[] = [];
    const result = mergedCollection(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
});