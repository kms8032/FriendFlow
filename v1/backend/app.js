const express = require("express"); // Express 불어오기
const dotenv = require("dotenv").config(); // dotenv 불러오기
const app = express(); // 서버 앱 생성
const PORT = process.env.PORT; // 포트 지정

app.use(express.json()); // JSON 파싱 미들웨어 // 손님이 주문서를 JSON으로 가져오면, 가게 직원이 그걸 읽을 수 있게 미리 준비 시켜 놓는 것
const scheduleRouter = require("./routes/schedule"); // 일정 담당 직원(schedule.js)를 데려오는 것
app.use("/schedule", scheduleRouter) // 손님이 /schedule 창구로 오면, 일정 담당 직원을 호출해서 처리하게끔 연결해주는 것

app.get('/', (req, res) => { // Get 요청 라우터 설정 // ex) 손님이 / 메뉴 주문하면 이렇게 응대하자는 규칙
    res.send("서버 정상 작동 중!"); // 클라이언트 응답 // ex) 실제 손님이 오면 그때 음식을 만들어주는 행위
});

app.listen(PORT, () => { // ex) 가게 문을 열고 손님을 기다리는 중
    console.log("백엔드 서버 실행 중 : http://localhost:${PORT}"); // 서버 시작
});