const student = require('../model/studentSchema');
const moment = require('moment');
// create user

exports.studentpost = async (req, res) => {
    const { firstName, email, mobile, gender, status } = req.body;

    if (!firstName || !email || !mobile || !gender || !status) {
        res.status(400).json({ error: "All Input Is required" });
    }
    try {
        const prestudent = await student.findOne({ email: email });
        if (prestudent) {
            res.status(400).json({ error: 'This user already exis in our database' });

        } else {
            const dateCreate = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

            const studentDate = new student({
                firstName, email, mobile, gender, status, datecreated: dateCreate
            });
            await studentDate.save();
            res.status(200).json(studentDate);
        }
    } catch (error) {
        console.log(error);

    }
};

// get allUser

exports.getStudent = async (req, res) => {
    try {
        const studentData = await student.find();
        res.status(200).json(studentData);
    } catch (error) {
        res.status(400).json(error);
        console.log('catch block error');

    }
}

// get singleuser 

exports.getSingleStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const singleStudentData = await student.findOne({ _id: id });
        res.status(200).json(singleStudentData);
    } catch (error) {
        res.status(400).json(error);
        console.log('catch block error');

    }
}

// deleteuser

exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteStudentData = await student.findByIdAndDelete({ _id: id, });
        res.status(200).json(deleteStudentData);
    } catch (error) {
        res.status(400).json(error);
        console.log('catch block error');

    }
}

// update user

exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstName, email, mobile, gender, status } = req.body;

    try {
        const dateUpdate = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        const updateStudentdata = await student.findByIdAndUpdate({ _id: id }, {
            firstName, email, mobile, gender, status, dateUpdated: dateUpdate

        }, { new: true });
        await updateStudentdata.save();

        res.status(200).json(updateStudentdata)
    } catch (error) {
        res.status(400).json(error);
        console.log('catch block error');

    }
}