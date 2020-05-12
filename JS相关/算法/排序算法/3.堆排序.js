/* 
Heap Sort (堆排序)
算法步骤
创建一个堆 H[0……n-1]；

把堆首（最大值）和堆尾互换；

把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；

重复步骤 2，直到堆的尺寸为 1。

——————————————————————————————————————————————————————————————————————

索引i的规律（n是元素数量）
如果i=0，它是根节点
如果i>0，它的父节点的索引为floor((i–1)/2)
如果2i+1≤n–1，它的左子节点的索引为2i+1 
如果2i+1>n–1，它无左子节点
如果2i+2≤n–1，它的右子节点的索引为2i+2 
如果2i+2>n–1，它无右子节点

*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

let len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

// 建立打顶堆
function buildMaxHeap(arr) {
  len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

// 堆序列进行原地建堆
function heapify(arr, i) {
  // 堆调整
  let left = 2 * i + 1, // 左子节点
    right = 2 * i + 2, // 右子节点
    largest = i; // 根节点

  // 如果左子节点大于根节点交换
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点大于根节点交换
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    // 交换值
    swap(arr, i, largest);
    // 继续下溢
    heapify(arr, largest);
  }
}

// 交换值
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 堆排序
function heapSort(arr) {
  buildMaxHeap(arr); // 建堆

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i); // 交换最大值和最尾值位置
    len--; // size减1
    heapify(arr, 0); // sift_down 操作
  }
  return arr;
}

console.log(heapSort(arr))
