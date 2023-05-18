import api from "./api";

export async function getPosts() {
    const response = await api.get("/");

    return response.data;
}

export async function sendPost(body) {
    const response = await api.post("/", body, {});

    return response.data;
}