# 💻 22-23 코테 스터디 규칙

## 💬 코테 준비 언어 선택
- **JavaScript**
  - [@pione3r](https://github.com/pione3r)
  - [@nowrobin](https://github.com/nowrobin)
  - [@coincidence-one](https://github.com/coincidence-one)
  - [@jung-yeon99](https://github.com/jung-yeon99)

- **Python**
  - [@vivian0304](https://github.com/vivian0304)
  - [@Chynmn](https://github.com/Chynmn)
  - [@hyeonjin9819](https://github.com/hyeonjin9819)
  - [@Kyoungmin1016](https://github.com/Kyoungmin1016)
  - [@danflanf](https://github.com/danflanf)
  
## 🌏 코테 사이트
- https://leetcode.com/

## 🔥 문제 선정 및 스터디 진행 방식
* 문제 선정
  * 1,2팀으로 나눠 진행되며 1팀은 주에 4문제 이상, 2팀은 주에 2문제 이상업로드해야합니다.
  * 매 주 총 7개, 멤버당 한 문제씩 선정하여, 리포지토리에 txt 파일로 업로드
    * 주마다 사다리타기로 9명 중 문제 선정할 7명 선정
    * 문제 주제는 자유
    * 난이도는 진행하면서 조절
  
* 기한
  * 월요일 : 문제제출
  * ~금요일 : 문제 풀이 제출 완료
  * 토요일 : 코드 리뷰
  * 일요일 : 회의
  * 기한 초과 제출인 경우
    * 주석에 "#기한 초과 제출" 달기
    * 코드 리뷰 해주지 않기로
* 문제 풀이 개수
  * 일요일에 본인이 풀 수 있는 문제수 미리 말하기
  * 최소 절반 이상(7문제 기준 4개 이상) 풀기
* 코드 리뷰 방식
  * 한 사람에 한개씩은 배운점이나 고쳤으면 좋겠는 점 정리
  * 리뷰할 내용이 없으면, 코드 확인했다는 메시지 남기기
   
## 리포지토리 디렉토리 구조 예시
  ```
  루트
   |
   |______week1
   |        |
   |        |_____문제폴더 (xx번_문제)
   |        |         |
   |        |         |____문제파일 (문제번호.txt)
   |        |         |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
   |        |
   |        |_____문제폴더 (xx번_문제)
   |                  |
   |                  |____문제파일 (문제번호.txt)
   |                  |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
   |                  
   |______week2
            |
            |_____문제폴더 (xx번_문제)
            |         |
            |         |____문제파일 (문제번호.txt)
            |         |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
            |
            |_____문제폴더 (xx번_문제)
                      |
                      |____문제파일 (문제번호.txt)
                      |____각자 코딩한 파일 (문제번호_푼사람이름.js, .py)
                      

  ```

## 회의 진행 방식
* 매주 일요일 진행하며 멤버 한명씩 세션 발표
  * 회의 시간은 토요일날 정함
* 발표 내용은 기업 인터뷰에 나오는 주제들로 자유롭게 선정
* 세션 순서
  * `용준현` &rarr; `조현민` &rarr; `김정연` &rarr; `박수현` &rarr; `원우연` &rarr; `김현진` &rarr; `최정락` &rarr; `한정욱` &rarr; `강용민`
  * 세션 자료는 구글 드라이브에 저장(https://drive.google.com/drive/folders/1Xk---OFQWpH1i_cBaGmYlkn3-ftVd30Z)

  
## 🌱 fork한 리포 최신화하는 방법
#### (1번과 2번은 한 번만 실행, 3번부터는 문제를 풀기 전/후 항상 실행)
1. organization 리포지토리(원본 리포로 지칭)를 fork한다.

2. fork한 개인 리포를 로컬에 clone한다.
   - 예시) ```git clone https://github.com/pione3r/algorithm-test-prep.git```
  
3. 원본 리포를 로컬에 upstream 원격 저장소로 추가한다.
   - ```git remote add upstream https://github.com/22-23-appealGrad-coding-test-prep/algorithm-test-prep.git```
  
4. 문제를 풀기 전, 원본 리포의 내용을 로컬에 fetch한다.
   - ```git fetch upstream```
 
5. 로컬에 fetch한 내용을 merge한다.
   - ```git merge upstream/main```
 
6. 위에 설명한 디렉토리 구조대로 개인 리포에 소스 코드 파일을 위치시킨 후, commit하고 push한다.
   - 문제 제출 커밋 예시 : ```[제출자이름/문제제출] 1주차 문제제출```
   - 문제 해결 커밋 예시 : ```[풀이자이름/문제해결] 1주차 동적프로그래밍 풀이완료```  
   - 문재 미해결 커밋 예시 : ```[풀이자이름/문제미해결] 1주차 동적프로그래밍 미해결```
 
7. 개인 리포에서 원본 리포로 Pull Request(PR)를 올리고, 타 팀원은 코멘트에 코드 리뷰를 한다.
   - 문제 제출 PR 예시 : ```[제출자이름/문제제출] 1주차 문제제출```
   - 문제 해결 코드 리뷰 요청 PR 예시 : ```[풀이자이름/코드리뷰요청] 1주차 코드 리뷰 요청```
   - 문제 미해결 PR 예시 : ```[풀이자이름/코드리뷰요청] 1주차 코드 리뷰 요청```
  
  

 
