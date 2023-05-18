import api from "./api";

export async function getPosts() {
    const response = await api.get("/");

    return response.data;
}