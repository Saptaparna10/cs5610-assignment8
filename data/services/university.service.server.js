const dao = require('../daos/university.dao.server')

module.exports = function (app) {
    var session = require('express-session');
    app.use(session({
        resave: false,
        saveUninitialized: true,
        duration: 30 * 60 * 1000,
        activeDuration: 30 * 60 * 1000,
        secret: 'any string'
    }));

    function home(req,res){
        res.send('Welcome to whiteboard');
    }

    function truncateDatabase(req, res) {
        dao.truncateDatabase()
            .then(function (status) {
                res.send(status);
            });
    }

    function populateDatabase(req, res) {
        dao.populateDatabase()
            .then(function (status) {
                res.send(status);
            });
    }

    /**------------student-------**/
    function createStudent(req, res){
        dao.createStudent(req.body)
            .then(function (status) {
                res.send(status);
            });
    }

    function findAllStudents(req, res){
        dao.findAllStudents()
            .then(function (status) {
                res.send(status);
            });
    }

    function findStudentById(req, res) {
        dao.findStudentById(req.params.id)
            .then(function (status) {
                res.send(status);
            });
    }

    function updateStudent(req, res) {
        dao.updateStudent(req.params.id, req.body)
            .then(function (status) {
                res.send(status);
            });
    }

    function deleteStudent(req, res) {
        dao.deleteStudent(req.params.id)
            .then(function (status) {
                res.send(status);
            });
    }

    /**---------Questions-----------**/

    function createQuestion(req, res) {
        dao.createQuestion(req.body)
            .then(function (status) {
                res.send(status);
            });
    }

    function findAllQuestions(req, res) {
        dao.findAllQuestions()
            .then(function (status) {
                res.send(status);
            });
    }

    function findQuestionById(req, res) {
        dao.findQuestionById(req.params.id)
            .then(function (status) {
                res.send(status);
            });
    }

    function updateQuestion(req, res) {
        dao.updateQuestion(req.params.id, req.body)
            .then(function (status) {
                res.send(status);
            });
    }

    function deleteQuestion(req, res) {
        dao.deleteQuestion(req.params.id)
            .then(function (status) {
                res.send(status);
            });
    }

    /**------answers----------**/
    function answerQuestion(req, res) {
        dao.answerQuestion(req.params.sid, req.params.qid, req.body)
            .then(function (status) {
                res.send(status);
            });
    }

    function findAnswersByStudentAndQuestion(req, res) {
        dao.findAnswersByStudentAndQuestion(req.params.sid, req.params.qid)
            .then(function (status) {
                res.send(status);
            });
    }

    app.get('/', home)

    app.post('/api/populate', populateDatabase)
    app.delete('/api/all', truncateDatabase)

    app.post('/api/student', createStudent)
    app.get('/api/student', findAllStudents)
    app.get('/api/student/:id', findStudentById)
    app.put('/api/student/:id', updateStudent)
    app.delete('/api/student/:id', deleteStudent)

    app.post('/api/question', createQuestion)
    app.get('/api/question', findAllQuestions)
    app.get('/api/question/:id', findQuestionById)
    app.put('/api/question/:id', updateQuestion)
    app.delete('/api/question/:id', deleteQuestion)

    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudentAndQuestion)
    app.get('/api/question/:qid/student/:sid/answer', findAnswersByStudentAndQuestion)
};