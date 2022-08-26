import http from '../utils/http-common';

const getAll = () => {
    return http.get("/todoitems");
};

const get = (id) => {
    return http.get(`/todoitems/${id}`);
};

const create = (data) => {
    return http.post("/todoitems", data);
};

const update = (id, data) => {
    return http.put(`/todoitems/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/todoitem/${id}`);
};

const Service = {
    getAll,
    get,
    create,
    update,
    remove
};

export default Service;