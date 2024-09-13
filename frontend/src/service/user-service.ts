import axios from 'axios';

const API_URL = 'http://127.0.0.1:3001';


const userService = () => {

    const search = async (page: number = 1, q: string) => {

        try {
            const response = await axios.get(`${API_URL}/users?page=${page}&q=${q}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getAll = async (page: number = 1) => {
        try {
            const response = await axios.get(`${API_URL}/users?page=${page}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getById = async (id: number) => {
        try {
            const response = await axios.get(`${API_URL}/users/${id}`);
            console.log(response);
            console.log(response.data);

            return response.data;
        } catch (error) {
            console.error(`Error fetching user ${id}:`, error);
            throw error;
        }
    };


    const create = async ({ name, email, password, registration }) => {
        try {
            const response = await axios.post(`${API_URL}/users`, { name, email, password, registration });
            return response.data;
        } catch (error) {
            console.error(`Error fetching user`);
            throw error;
        }
    };


    const update = async ({ id, name, email, password, registration }) => {
        try {
            const response = await axios.put(`${API_URL}/users/${id}`, { name, email, password, registration });
            return response.data;
        } catch (error) {
            console.error(`Error fetching user`); throw error;
        }
    };


    const remove = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/users/${id}`);
        } catch (error) {
            console.error(`Error fetching user`);
            throw error;
        }
    };

    return {
        getAll,
        search,
        getById,
        create,
        update,
        remove
    };
}

export default userService;