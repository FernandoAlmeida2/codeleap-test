import api from "./api";

export async function getPosts() {
    const response = await api.get("/");

    return response.data;
}

export async function sendPost(body) {
    const response = await api.post("/", body, {});

    return response.data;
}

export async function deletePost(postId) {
    const response = await api.delete(`/${postId}/`);

    return response.data;
}

export async function updatePost(postId, body) {
    const response = await api.patch(`/${postId}/`, body, {});

    return response.data;
} 