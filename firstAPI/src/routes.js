const UserController = require('./controllers/UserController');

module.exports = [
    {
        endpoint :'/users',
        method : 'GET',
        handler : UserController.listUsers, //função que ira passar oq a rota ira fazer quando for chamda 
    },

    {
        endpoint :'/users/:id',
        method : 'GET',
        handler : UserController.getUserById, 
    },

    {
        endpoint :'/users',
        method : 'POST',
        handler : UserController.createUser, 
    },
];