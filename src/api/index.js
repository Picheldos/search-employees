import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
    baseURL,
    timeout: 5000,
});

export const searchUserById = async (userId) => {
    const response = await instance.get(`/users?id=${userId}`);
    return response.data;
};

export const searchUsersByIds = async (userIds) => {
    const response = await instance.get('/users', {
        params: { id: userIds },
    });
    return response.data;
};

export const searchUsersByUsername = async (username) => {
    const response = await instance.get(`/users?username=${username}`);
    return response.data;
};

export const searchUsersByUsernames = async (usernames) => {
    const response = await instance.get('/users', {
        params: { username: usernames },
    });
    return response.data;
};
