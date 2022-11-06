/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  return [
    Array.from(new Set(nums1.filter((item) => !nums2.includes(item)))),
    Array.from(new Set(nums2.filter((item) => !nums1.includes(item)))),
  ];
};
