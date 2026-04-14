import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/notes"
});

export const fetchNotes = (q = "") => API.get(q ? `/?q=${encodeURIComponent(q)}` : "/");
export const createNote = (data) => API.post("/", data);
export const updateNote = (id, data) => API.put(`/${id}`, data);
export const deleteNote = (id) => API.delete(`/${id}`);

export default API;
