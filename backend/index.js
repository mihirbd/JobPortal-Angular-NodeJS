const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({
    extended: true,
    limit: '50mb'
}));

//connection database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'db_angular',
    port: 3307
})

//check database
db.connect(err => {
    if (err) {
        console.log('err');
    } else {
        console.log("database Connected successfully!");
    }
})


//get all data
app.get('/users', (req, res) => {
    //console.log("get all users");
    let qrr = 'select * from users';
    db.query(qrr, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})

//get single data
app.get('/users/:id', (req, res) => {
    //console.log("get all users");
    let qrid = req.params.id;
    let qrr1 = `select * from users where id=${qrid}`;
    db.query(qrr1, (err, results) => {

        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        } else {
            res.send({
                message: 'Data is not Found',
            })
        }
    })
})


//insert data

app.post('/users', (req, res) => {
    //console.log(req.body, "post data success");
    let fullName = req.body.fullname;
    let Email = req.body.email;
    let Mobile = req.body.mobile;
    let qr = `insert into users(fullname, email, mobile) value('${fullName}','${Email}','${Mobile}')`

    db.query(qr, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Created Successfully',
            data: results
        })
    })

})

//get all data from hirer
app.get('/hirer', (req, res) => {
    //console.log("get all users");
    let qrr = 'select * from hirer';
    db.query(qrr, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})




// insert Data form hirer
app.post('/hirer', (req, res) => {
    //console.log(req.body, "post data success");
    let First_name = req.body.first_name;
    let Last_name = req.body.last_name;
    let Mobile = req.body.phone;
    let Password = req.body.password;
    let Email = req.body.email;
    let CPassword = req.body.c_password;
    let Status = req.body.user_status;

    let qr = `insert into hirer(first_name,last_name, email, phone, password,c_password,user_status) value('${First_name}','${Last_name}','${Email}', '${Mobile}','${Password}','${CPassword}','${Status}')`

    db.query(qr, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Created Successfully',
            data: results
        })
    })

})




//Update data

app.put('/users/:id', (req, res) => {
    //console.log(req.body, "post data success");

    let name = req.body.fullname;
    let mail = req.body.email;
    let phone = req.body.mobile;
    let uid = req.params.id;

    let query = `Update users set fullname='${name}',email='${mail}', mobile='${phone}' where id=${uid}`;

    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Update Successfully',
            data: results
        })
    })

})


//Delete data

app.delete('/users/:id', (req, res) => {

    let uid = req.params.id;

    let query = `Delete from users where id=${uid}`;

    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Delete Successfully',
            data: results
        })
    })

})





// here is the code of job_post table


//insert code for job post


// insert Data form hirer
app.post('/job_post', (req, res) => {
    //console.log(req.body, "post data success");
    let JobTitel = req.body.job_title;
    let Job_Description = req.body.job_description;
    let Required_KSA = req.body.job_required_KSA;
    let Job_Edu_EXP = req.body.job_education_experience;
    let Job_Vacency = req.body.job_vacency;
    let Job_Nature = req.body.job_nature
    let Job_salary = req.body.job_salary;
    let deadline = req.body.job_deadline;
    let Company_name = req.body.company_name;
    let Company_des = req.body.company_description;
    let Company_add = req.body.company_address;
    let Email = req.body.email;
    let mobile = req.body.mobile;
    let Image = req.body.image;
    let Date = req.body.date;


    let qr = `insert into job_post(date, job_title,job_description, job_required_KSA, job_education_experience, job_vacency,job_nature,job_salary,job_deadline,company_name,company_description,company_address,email,mobile,image) value('${Date}','${JobTitel}','${Job_Description}', '${Required_KSA}','${Job_Edu_EXP}','${Job_Vacency}','${Job_Nature}','${Job_salary}','${deadline}','${Company_name}', '${Company_des}','${Company_add}','${Email}','${mobile}','${Image}')`

    db.query(qr, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data Created Successfully',
            data: results
        })
    })

})


//get all data from Job_post
app.get('/job_post', (req, res) => {
    //console.log("get all users");
    let qrr = 'select * from job_post';
    db.query(qrr, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        }
    })
})

//get single data
app.get('/job_post/:id', (req, res) => {
    let qrid1 = req.params.id;
    let qrr2 = `select * from job_post where job_post_id=${qrid1}`;
    db.query(qrr2, (err, results) => {

        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All user data',
                data: results
            })
        } else {
            res.send({
                message: 'Data is not Found',
            })
        }
    })
})





// insert Data form Blog_post
app.post('/blog_post', (req, res) => {
    //console.log(req.body, "post data success");
    let Blog_Title = req.body.first_name;
    let Blog_Description = req.body.last_name;
    let Blog_image = req.body.phone;


    let qr = `insert into blog_post(blog_title, blog_description, blog_image) value('${Blog_Title}','${Blog_Description}','${Blog_image}')`

    db.query(qr, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'BLog Created Successfully',
            data: results
        })
    })

})

//get all data from Blog post
app.get('/blog_post', (req, res) => {
    let qrr = 'select * from blog_post';
    db.query(qrr, (err, results) => {
        if (err) {
            console.log('err')
        }
        if (results.length > 0) {
            res.send({
                message: 'All Blog data',
                data: results
            })
        }
    })
})














app.listen(3000, () => {
    console.log("server is running on 3000 port");
})