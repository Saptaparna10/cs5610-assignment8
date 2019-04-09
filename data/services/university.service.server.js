const dao = require('../daos/university.dao.server')

module.exports = app => {

    truncateDatabase = (req, res) =>
        dao.truncateDatabase()
            .then((e)=>
                res.send(e))
            .catch(err=>console.log(err));

    populateDatabase = (req, res) =>
        dao.populateDatabase()
            .then(res.json('done'))
            .catch((err) => console.log(err));

    // findAllStudents = (req, res) =>
    //     dao.findAllStudents()
    //         .then((e)=> res.send(e))
    // findStudentById = (req, res) =>
    //     dao.findStudentById(req.params.id)
    //         .then((e)=> res.send(e))
    // updateStudent = (req, res) =>
    //     dao.updateStudent(req.params.id, req.body)
    //         .then((e)=> res.send(e))
    // deleteStudent = (req, res) =>
    //     dao.deleteStudent(req.params.id)
    //         .then((e)=> res.send(e))
    //
    //
    //
    // createQuestion = (req, res) =>
    //     dao.createQuestion(req.body)
    //         .then((e)=>
    //             res.send(e))
    //
    // findAllQuestions = (req, res) =>
    //     dao.findAllQuestions()
    //         .then((e)=>
    //             res.send(e))
    //
    // findQuestionById = (req, res) =>
    //     dao.findQuestionById(req.params.id)
    //         .then((e)=>
    //             res.send(e))
    //
    // updateQuestion = (req, res) =>
    //     dao.updateQuestion(req.params.id, req.body)
    //         .then((e)=>
    //             res.send(e))
    //
    // deleteQuestion = (req, res) =>
    //     dao.deleteQuestion(req.params.id)
    //         .then((e)=>
    //             res.send(e))
    //
    // answerQuestion = (req, res) =>
    //     dao.answerQuestion(req.params.sid, req.params.qid, req.body)
    //         .then((e)=>
    //             res.send(e))
    //
    // findAnswersByStudentAndQuestion = (req, res) =>
    //     dao.findAnswersByStudentAndQuestion(req.params.sid, req.params.qid)
    //         .then((e)=>
    //             res.send(e))

    app.post('/api/populate', populateDatabase)
    app.delete('/api/all', truncateDatabase)
    //
    //app.post('/api/student', createStudent)
    // app.get('/api/student', findAllStudents)
    // app.get('/api/student/:id', findStudentById)
    // app.put('/api/student/:id', updateStudent)
    // app.delete('/api/student/:id', deleteStudent)
    //
    // app.post('/api/question', createQuestion)
    // app.get('/api/question', findAllQuestions)
    // app.get('/api/question/:id', findQuestionById)
    // app.put('/api/question/:id', updateQuestion)
    // app.delete('/api/question/:id', deleteQuestion)
    //
    // app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    // app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudentAndQuestion)
    // app.get('/api/question/:qid/student/:sid/answer', findAnswersByStudentAndQuestion)
}