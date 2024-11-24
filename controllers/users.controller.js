const { response } = require('express');

const getUsers = (req, res = response )=> {
    const params = req.query;// query params lo que viene por la url

    res.json({
        message:'get api controller',
        qParams: params
    });
}

const postUsers = (req, res) => {
    const body = req.body;
    
    res.json({
        message: 'post',
        body:body
    });
}

const putUsers = (req, res) => {
    
    const { id } = req.params;

    res.status(500).json({
        message: 'put',
        params: id
    })
}

const deleteUsers = (req, res)=> {
    res.json({
        message: 'delete'  
    })
}

const patchUsers = (req, res)=> {
    res.json({
        message: 'patch'
    })
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}