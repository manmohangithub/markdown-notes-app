import axios from "axios";

const API = axios.create({
  baseURL: "https://inventory-fullstack-app-production.up.railway.app/"
});

export const fetchNotes = (q = "") =>
  API.get(q ? `/?q=${encodeURIComponent(q)}` : "/");

export const createNote = (data) =>
  API.post("/", data);

export const updateNote = (id, data) =>
  API.put(`/${id}`, data);

export const deleteNote = (id) =>
  API.delete(`/${id}`);

export default API;