require('dotenv').config()
const app = require('express')()
const db = require('./config/db')
const address = require('address')
const Routes = require('./routes');

app.get("/", (req,res) => {
    res.json({
        status: 200,
        message: "College API",
        student_is: `BD-${Date.now()}`
    })
})

app.use('/professors', Routes.Professors)
app.use('/majors', Routes.Majors)
app.use('/attendence', Routes.Majors)
app.use('/classroom', Routes.Classroom)
app.use('/grade', Routes.Grade)
app.use('/parents', Routes.Parents)
app.use('/subjects', Routes.Subjects)
app.use('/students', Routes.Students)
app.use('/students/classroom', Routes.StudentsClassroom)
app.use('/students/address', Routes.StudentsAddress)
app.use('/directors', Routes.Directors)

db.authenticate().then((res) => {
    console.log('\nConnection has been established successfully.\n');
}).catch((error) => {
    console.error(`\nUnable to connect to the database: ${error}\n`);
})
db.sync()
const PORT = process.env.PORT || 5000
app.listen(PORT, process.env.HOST, () => {
    console.log(`\nListening Local On: http://${process.env.HOST}:${PORT}`)
    console.log(`Listening On Your Network: http://${address.ip()}:${PORT}\n`)
})