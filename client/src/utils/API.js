import axios from "axios";

export default {


    // Axios functions for single user
    logoutUser: function () {
        return axios.post('/api/users/logout');
    },
    logInUser: function (body, header) {
        return axios.post('/api/users/', body, header);
    },
    signupUser: function (body, header) {
        return axios.post('/api/users/signup', body, header);
    },
    getUser: function (id) {
        return axios.get('/api/users/' + id);
    },
    updateUser: function (id , body) {
        return axios.put('/api/users/' + id , body);
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },


    // Axios functions for users' plants
    getOwnedPlants: function (id) {
        return axios.get('/api/owned-plants/' + id);
    },
    createOwnedPlants: function (id, body) {
        return axios.post('/api/owned-plants/' + id, body);
    },
    updateOwnedPlants: function (id , body) {
        return axios.put('/api/owned-plants/' + id , body);
    },
    deleteOwnedPlants: function (plantID) {
        return axios.delete('/api/owned-plants/' + plantID);
    },

    // Axios functions for trellis posts
    getTrellisPosts: function () {
        return axios.get('/api/trellis/');
    },
    createTrellisPost: function (data) {
        return axios.post('/api/trellis/', data);
    },
    updateTrellisPost: function (id) {
        return axios.put('/api/trellis/' + id);
    },
    deleteTrellisPost: function (id) {
        return axios.delete('/api/trellis/' + id);
    },

    // Axios functions for trellis comments
    getTrellisComments: function () {
        return axios.get('/api/comments/');
    },
    createTrellisComment: function (id) {
        return axios.post('/api/comments/' + id);
    },
    updateTrellisComment: function (id) {
        return axios.put('/api/comments/' + id);
    },
    deleteTrellisComment: function (id) {
        return axios.delete('/api/comments/' + id);
    }

}