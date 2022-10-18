# 💻 22-23 코테 스터디 규칙

## 💬 코테 준비 언어 선택
- **JavaScript**
  - [@pione3r](https://github.com/pione3r), [@nowrobin](https://github.com/nowrobin), [@coincidence-one](https://github.com/coincidence-one)

- **Python**
  - [@vivian0304](https://github.com/vivian0304), [@Chynmn](https://github.com/Chynmn), [@hyeonjin9819](https://github.com/hyeonjin9819), [@Kyoungmin1016](https://github.com/Kyoungmin1016)
  
## 🌏 코테 사이트
- https://leetcode.com/

## 🔥 문제 선정 및 스터디 진행 방식
- 팀원 한명당 주제 하나씩 선정
  - 매주 각 팀원은 문제 하나씩 선정하여, 월요일마다 리포지토리에 txt 파일로 업로드
  - 1주일에 총 7문제(월~일)
  - 타임리밋 및 코드리뷰 : 일요일
- 10/19~11월 중순 : easy
- 11월 중순 ~ : medium
- 난이도는 진행하면서 조절
- 리포지토리 디렉토리 구조 예시
```
루트
 |
 |______week1
          |
          |_____문제 유형(string, sorting, etc)
          |         |
          |         |____문제파일 (문제번호.txt)
          |         |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
          |
          |_____문제 유형(string, sorting, etc)
                    |
                    |____문제파일 (문제번호.txt)
                    |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
                 
  ```
  
  ## 🌱 fork한 리포 최신화하는 방법
  #### (1번과 2번은 한 번만 실행, 3번부터는 문제를 풀기 전/후 항상 실행)
   1. organization 리포지토리(원본 리포로 지칭)를 fork한다.
   
   2. fork한 개인 리포를 로컬에 clone한다.
   - 예시) git clone https://github.com/pione3r/algorithm-test-prep.git
   3. 원본 리포를 로컬에 upstream 원격 저장소로 추가한다.
   - git remote add upstream https://github.com/22-23-appealGrad-coding-test-prep/algorithm-test-prep.git
   3. 문제를 풀기 전, 원본 리포의 내용을 로컬에 fetch한다.
   - git fetch upstream
   4. 로컬에 fetch한 내용을 merge한다.
   - git merge upstream/main
   5. 위에 설명한 디렉토리 구조대로 개인 리포에 소스 코드 파일을 위치시킨 후, commit하고 push한다.
   - 문제 제출 커밋 예시 : [제출자이름/문제제출]1주차 동적프로그래밍 문제제출
   - 문제 해결 커밋 예시 : [제출자이름/문제해결]1주차 동적프로그래밍 풀이완료    
   - 문재 미해결 커밋 예시 : [제출자이름/문제미해결]1주차 동적프로그래밍 미해결
   6. 개인 리포에서 원본 리포로 Pull Request(PR)를 올리고, 타 팀원은 코멘트에 코드 리뷰를 한다.
   - 문제 제출 PR 예시 : [제출자이름/문제제출]1주차 동적프로그래밍 문제제출
   - 문제 해결 PR 예시 : [제출자이름/문제해결]1주차 동적프로그래밍 풀이완료
   - 문재 미해결 PR 예시 : [제출자이름/문제미해결]1주차 동적프로그래밍 미해결
  
  

 
