
//Binary Search

let array = [1,3,5,7,9,11,17,25,37,45,89] ;
const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        console.log("Searching the right side of Array")
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1;
      }
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    
       return "Target value not found in array";
    
  }
  console.log(binarySearch(array,35))  ;

  //Bubble Sort
 let inputArr = [1,5,3,6,8,2,10,7,4,9]
  let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
console.log(bubbleSort(inputArr)) ;


//Merge Sort 

let arr = [3,27,9,11,343,79,26,18,65] ;
function mergeSort(arr) {
if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}
function merge (left, right) {
    let res = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        res.push(left[leftIndex]);
        leftIndex++; 
      } else {
        res.push(right[rightIndex]);
        rightIndex++; 
      }
    }
    return res
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  console.log (mergeSort(arr)) ;


