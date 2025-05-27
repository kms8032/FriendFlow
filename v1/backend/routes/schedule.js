const express = require("express");
const router = express.Router();

// 가짜 데이터 (DB 대신)
let schedule = ["이게", "되나"]; // let을 사용하는 이유 : const의 경우 변하지 않는 수를 정의할 때 사용, let은 변경 가능한 수를 선언할 때 사용하는데, var도 있지만 이 방법은 잘 사용하지 않는 추세

// 일정 관련 라우터 설정
// 1. 일정 목록 조회 (GET /schedule)
router.get("/", (req, res) => {
    res.json(schedule);
})

// 2. 일정 추가 (POST /schedule)
router.post('/', (req, res) => {
    const { title, data } = req.body;
    const NewSchedule = { id : Data.now(), title, data};
    schedule.push(NewSchedule);
    res.status(201).json(NewSchedule);
});

// 3. 일정 삭제 (DELETE /schedule/:id)
router.delete('/', (req, res) => {
    const id = parseInt(req.params.id);
    schedule = schedule.filter(item => item.id !== id);
    res.sendStatus(204);
});

module.exports = router;