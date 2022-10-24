/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function (nums) {
  // 입력 조건 : 음이 아닌 정수 배열을 받음
  // 출력 조건 : 리턴 값은 배열의 모든 양의 정수를 0으로 만드는 최소 연산의 갯수.
      // 0부터 시작.
  let minOp = 0;

  // 한 번의 연산에는 1개의 양의 정수 x를 고른다.
      // x는 받은 배열의 요소 중 0이 아니면서 가장 작은 수보다 작거나 같아야 한다.
      // x가 조건을 만족하면서 숫자가 클수록, 최종 연산 횟수가 적어짐
  // 반복문을 사용하여 배열의 모든 양의 정수 요소들에 x를 뺀다.
  while (Math.max(...nums) !== 0) {
      let x = Math.min(...nums.filter((item) => item !== 0))
      nums = nums.map((item) =>
          item !== 0 ? item - x : 0
      )
      minOp++;
  }

  // 출력
  return minOp;

};

// look back
  // 중복되지 않는 요소로 이루어진 set의 특징을 이용하는 방법이 가장 빨랐음
  // 값이 같은 요소는 연산 결과도 항상 같다. => 중복이므로 하나만 남기고 제거 가능
  // 값이 다른 요소는 0이 될 때까지 항상 값이 다르다.
      // 모든 요소가 0이 되기 위한 연산 갯수는 == 요소 갯수
