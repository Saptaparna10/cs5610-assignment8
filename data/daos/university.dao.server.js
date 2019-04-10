const studentModel = require('../models/student.model.server')
const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.model.server')

createStudent = student => studentModel.create(student)
findAllStudents = () => studentModel.find()
findStudentById = studentId => studentModel.findById(studentId)
updateStudent = (studentId, student) => studentModel.update({_id: studentId}, {$set: student})
deleteStudent = studentId => studentModel.remove({_id: studentId})

createQuestion = question => questionModel.create(question)
deleteQuestion = qId => questionModel.remove({_id: qId})
findAllQuestions = () => questionModel.find()
findQuestionById = qId => questionModel.findById(qId)
updateQuestion = (questionId, question) => questionModel.update({_id: questionId}, {$set: question})

answerQuestion = (studentId, questionId, answer) => {
    answer.student=studentId;
    answer.question= questionId;
    const ans = answerModel.create(answer);
    return ans;
}
deleteAnswer = (aId) => answerModel.remove({_id: aId})
findAllAnswers = () => answerModel.find()
findAnswerById = aId => answerModel.findById(aId)
findAnswersByStudent = studentId => answerModel.find({student: studentId}, (function(err, docs) {
    if(err) {
        //console.log(err);
    }
    else {
        //console.log(docs);
    }
}))
findAnswersByQuestion = questionId => answerModel.find({question: questionId}, (function(err, docs) {
    if(err) {
        //console.log(err);
    }
    else {
        //console.log(docs);
    }
}))
findAnswersByStudentAndQuestion = (studentId, questionId) => answerModel.find({question: questionId, student: studentId}, (function(err, docs) {
    if(err) {
        //console.log(err);
    }
    else {
        //console.log(docs);
    }
}))



truncateDatabase = () => {
    console.log('truncate')
    return Promise.all([
        studentModel.deleteMany({}),
        questionModel.deleteMany({}),
        answerModel.deleteMany({})
    ]);
}

populateDatabase = () => {
    console.log('populate')
    const alice = createStudent({
        _id:123,
        username: 'alice',
        password: 'alice',
        firstName: 'Alice',
        lastName: 'Wonderland',
        gradYear: 2020,
        scholarship: 15000
    }).then(newStudent =>
        console.log(newStudent))
        .catch(err=>console.log(err));

    const bob = createStudent({
        _id:234,
        username: 'bob',
        password: 'bob',
        firstName: 'Bob',
        lastName: 'Hope',
        gradYear: 2021,
        scholarship: 12000
    }).then(newStudent =>
        console.log(newStudent))
        .catch(err=>console.log(err));;

    const q321 = createQuestion({
        _id: 321,
        question: 'Is the following schema valid?',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse : {
            isTrue : false
        }
    }).then(newQuestion =>
        console.log(newQuestion))
        .catch(err=>console.log(err));

    const q432 = createQuestion({
        _id: 432,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse : {
            isTrue : false
        }
    }).then(newQuestion =>
        console.log(newQuestion))
        .catch(err=>console.log(err));

    const q543 = createQuestion({
        _id:543,
        question: 'What does JPA stand for?',
        points:10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:{
            choices:[
                'Java Persistence API','Java Persisted Application','JavaScript Persistence API','JSON Persistent Associations'
            ],
            correct:1
        }
    }).then(newQuestion => console.log(newQuestion))
        .catch(err=>console.log(err));

    const q654 = createQuestion({
        _id:654,
        question: 'What does ORM stand for?',
        points:10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:{
            choices:[
                'Object Relational Model','Object Relative Markup','Object Reflexive Model','Object Relational'
            ],
            correct:4
        }
    }).then(newQuestion => console.log(newQuestion))
        .catch(err=>console.log(err));

    return Promise.all([alice, bob, q321, q432, q543, q654])

        .then(() => {
            answerQuestion(123, 321, {_id: 123, selectedAnswer: true});

            answerQuestion(123, 432, {_id: 234, selectedAnswer: false});

            answerQuestion(123, 543, {_id: 345, selectedAnswer: 1});

            answerQuestion(123, 654, {_id: 456, selectedAnswer: 2});

            answerQuestion(234, 321, {_id: 567, selectedAnswer: false});

            answerQuestion(234, 432, {_id: 678, selectedAnswer: true});

            answerQuestion(234, 543, {_id: 789, selectedAnswer: 3});

            answerQuestion(234, 654, {_id: 890, selectedAnswer: 4});
        })
        .catch(err => console.log(err));

}

module.exports = {
    populateDatabase, truncateDatabase,
    createStudent, findAllStudents, findStudentById, updateStudent, deleteStudent, createQuestion,
    deleteQuestion, findAllQuestions, findQuestionById, answerQuestion, findAllAnswers, deleteAnswer, findAnswerById,
    findAnswersByStudent,findAnswersByQuestion,findAnswersByStudentAndQuestion, updateQuestion}