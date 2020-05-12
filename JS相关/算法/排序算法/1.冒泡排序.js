/* 
Bubble Sort (冒泡排序 / 起泡排序)
原理：依次比较相邻的元素然后交换位置 升序的话就是每一次冒泡就把最大的值排到最后 

执行流程
① 从头开始比较每一对相邻元素，如果第1个比第2个大，就交换它们的位置✓执行完一轮后，最末尾那个元素就是最大的元素

② 忽略①中曾经找到的最大元素，重复执行步骤①，直到全部元素有序

--------------------------------------------- -----------------------------------

③ 优化：如果提前完全有序可提前终止冒泡排序

④ 优化：如果队尾局部有序记录最后一次交换位置 减少比较次数
*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76];

// 外边的循环是实现 ②
for (let j = arr.length - 1; j > 0; j--) {
  // 这一层循环是执行 ①
  for (let i = 1; i <= j; i++) {   
    if (arr[i] < arr[i - 1]) {
      const tmp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = tmp;
    }
  }
}
/* 优化一 */
// 外边的循环是实现 ②
for (let j = arr.length - 1; j > 0; j--) {
  let sorted = true; // ③
  // 这一层循环是执行 ①
  for (let i = 1; i <= j; i++) {
    if (arr[i] < arr[i - 1]) {
      const tmp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = tmp;
      sorted = false; // ③
    }
  }

  // ③
  if (sorted) {
    break;
  }
}

/* 优化二 */
for (let j = arr.length - 1; j > 0; j--) {
  let sortedIndex = 1; // ④
  // 这一层循环是执行 ①
  for (let i = 1; i <= j; i++) {
    if (arr[i] < arr[i - 1]) {
      const tmp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = tmp;
      sortedIndex = i; // ④
    }
  }

  // ④
  j = sortedIndex;
}
