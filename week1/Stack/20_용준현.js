/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  // 입력 조건 : 문자열
  // 출력 조건 : true 혹은 false

  // 스택 이용해서 풀이.
  // 입력 받은 문자열을 가장 앞의 인덱스부터 접근 
  // (, {, [ 일 때는 스택에 push
  // ), }, ] 일 때는 스택에서 pop하고 [], {}, () 인지 비교
  // const stack = [];
  // let poppedItem = "";
  // for (let char of s) {
  //     switch (char) {
  //         case "(":
  //             stack.push(char);
  //             break;
  //         case "{":
  //             stack.push(char);
  //             break;
  //         case "[":
  //             stack.push(char);
  //             break;
  //         case ")":
  //             poppedItem = stack.pop();
  //             if (poppedItem + char !== "()") return false;
  //             break;
  //         case "}":
  //             poppedItem = stack.pop();
  //             if (poppedItem + char !== "{}") return false;
  //             break;
  //         case "]":
  //             poppedItem = stack.pop();
  //             if (poppedItem + char !== "[]") return false;
  //             break;
  //     }
  // }

  // 엣지 케이스 : 스택에 문자가 남아있으면 false
  // if (stack.length > 0) {
  //     return false;
  // }

  // return true;

  // 리팩토링 버전
  const stack = [];
  for (let char of s) {
      switch (char) {
          case "(":
              stack.push(")");
              break;
          case "{":
              stack.push("}");
              break;
          case "[":
              stack.push("]");
              break;
          default:
              if (stack.pop() !== char) return false;
              break;
      }
  }

  if (stack.length > 0) {
      return false;
  }

  return true;

};