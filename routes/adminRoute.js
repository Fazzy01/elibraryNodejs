const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router() ;

router.get('/', (req, res) => {

    res.render('admin/index', {title:'Homepage', data:'data'}) ; 
})

router.post('/', (req, res) => {
    
    const obj = new AdminController() ;
    obj.loginAdmin(req, res) ;
    // res.render('admin/index', {title:'Homepage', data:'data'}) ; 
})

router.get('/homepage', (req, res) => {

    res.render('admin/homepage', {title:'Homepage', data:'data'}) ;
    
});

router.get('/add-department', (req, res) => {

    res.render('admin/add-department', {title:'Add Department', data:'data'}) ;
    
});

router.post('/add-department', (req, res) => {

    const data = new AdminController() ;
    data.addNewDepartment(req, res) ;
});

router.get('/manage-departments', async (req, res) => {

    const obj = new AdminController() ;
    depts = await obj.fetchAllDepartments() ;
    //  console.log(depts);
     res.render('admin/manage-departments', {title:'Manage Departments', depts}) ;
    
});

router.get('/department-details/:apo', async (req, res) => {

    const sending = req.params.apo;

    const obj = new AdminController() ;
    data = await obj.fetchDepartmentById(sending) ;
    //  console.log(data[0].depName);
     res.render('admin/department-details', {title:'Department Details', dept:data}) ;
    
});

router.post('/department-details', (req, res) => {

    const obj = new AdminController() ;
    obj.updateDepartment(req, res) ;
});

router.post('/delete-department', (req, res) => {

    // console.log(req.body) ;
    const obj = new AdminController() ;
    obj.deleteDepartment(req, res) ;

});


module.exports = router;