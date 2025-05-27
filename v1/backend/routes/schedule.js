/*
일정 관련 라우터 파일
이 파일은 일정 관리에 해당하는 모든 API 엔드포인트를 담당합니다.
Express의 Router를 사용해서, "일정"이라는 창구의 직원 역할을 합니다.
(비유: 손님이 일정 관련 요청을 하면, 이 파일이 그 요청을 처리하는 작업)
*/

const express = require("express");
const router = express.Router(); // 일정 담당 "직원" 인스턴스 생성(각 창구별 담당 직원 만들기)

// 임시 데이터 (DB 대신)
let schedule = []; // let : 변경 간읗나 일정 목록 (실제 BD가 아닌 메모리에 저장)

// 1. 일정 목록 조회 (GET /schedule)
// [GET 요청] 손님이 "일정 목록을 보여주세요"라고 요청하는 상황(비유 : 손님이 가게에 와서 일정 목록을 보여달라고 함)
router.get("/", (req, res) => {
    // res.json(): 직원이 손님에게 일정 목록(메뉴판)을 JSON 형태로 보여줌
    res.json(schedule);
})

// 2. 일정 추가 (POST /schedule)
// [POST 요청] 손님이 "새 일정 등록해주세요"라고 요청하는 상황(비유 : 손님이 종이에 새 일정 써서 직원에게 건넴)
router.post('/', (req, res) => {
    //req.body: 손님이 직원에게 전달한 주문서(데이터) (ex: 일정 제목, 내용 등)
    const { title, data } = req.body;
    const NewSchedule = { id : Date.now(), title, data };
    schedule.push(NewSchedule); // 직원이 새 일정(주문)을 목록에 추가
    // res.status(201).json(): 직원이 손님에게 "등록완료!"와 함께, 추가된 일정 정보를 전달
    res.status(201).json(NewSchedule);
});

// 3. 일정 삭제 (DELETE /schedule/:id)
// [DELETE 요청] 손님이 "이 일정(id) 삭제해주세요"라고 요청한 상황 (비유 : 손님이 특정 메뉴를 없애달라고 직원에게 요청)
router.delete('/:id', (req, res) => {
    //req.params: 손님이 요청 URL에 포함해서 전달할 값 (ex: 삭제할 일정의 id)
    const id = parseInt(req.params.id);
    // 직원이 해당 i의 일정을 목록에서 제거
    schedule = schedule.filter(item => item.id !== id);
    // res.sendStatus(204): 직원이 "삭제완료, 내용없음" 응답을 손님에게 전달
    res.sendStatus(204);
});

module.exports = router;