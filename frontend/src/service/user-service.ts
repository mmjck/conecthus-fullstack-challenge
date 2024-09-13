
import AxiosInstance from "@/network/axios";

const userService = () => {

    const search = async (page: number = 1, q: string) => {

        try {
            const response = await AxiosInstance.get(`/users?page=${page}&q=${q}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getAll = async (page: number = 1) => {
        try {
            const response = await AxiosInstance.get(`/users?page=${page}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getById = async (id: number) => {
        try {
            const response = await AxiosInstance.get(`/users/${id}`);


            return response.data;
        } catch (error) {

            throw error;
        }
    };


    const create = async ({ name, email, password, registration }) => {
        try {
            const response = await AxiosInstance.post(`/users`, { name, email, password, registration });
            return response.data;
        } catch (error) {
            throw error;
        }
    };


    const update = async ({ id, name, email, password, registration }) => {
        try {
            const response = await AxiosInstance.put(`/users/${id}`, { name, email, password, registration });
            return response.data;
        } catch (error) {
            throw error;
        }
    };


    const remove = async (id: number) => {
        try {
            await AxiosInstance.delete(`/users/${id}`);
        } catch (error) {
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