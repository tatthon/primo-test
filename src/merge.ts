function merge(
    collection_1 : number[] , 
    collection_2 : number[] , 
    collection_3 : number[]
) : number[]{
    let mergedCollection : number[] = [];
    let i : number = 0;
    let j : number = 0;
    let k : number = 0;
    let min_value : number;
    collection_3.reverse();
    while(i < collection_1.length || j < collection_2.length || k < collection_3.length){
        min_value = Math.min(
            collection_1[i] !== undefined ? collection_1[i] : Infinity,
            collection_2[j] !== undefined ? collection_2[j] : Infinity,
            collection_3[k] !== undefined ? collection_3[k] : Infinity
        );
        mergedCollection.push(min_value);
        if(i < collection_1.length && min_value === collection_1[i]){
            i++;
        } else if(j < collection_2.length && min_value === collection_2[j]){
            j++;
        } else if(k < collection_3.length){
            k++;
        }
    }
    return mergedCollection;
};
module.exports = merge;