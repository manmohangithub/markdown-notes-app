import { useEffect, useState } from "react";
import { fetchNotes, createNote, updateNote, deleteNote } from "./services/api";
import NotesList from "./components/NotesList";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [notes, setNotes] = useState([]);
  const [current, setCurrent] = useState({ id: null, title: "", content: "" });
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const load = async (q = "") => {
    const res = await fetchNotes(q);
    setNotes(res.data);
  };

  useEffect(() => { load(); }, []);

  // Debounced auto-save
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!current) return;
      if (!current.title && !current.content) return;

      if (current.id) {
        await updateNote(current.id, current);
      } else {
        const res = await createNote(current);
        setCurrent((c) => ({ ...c, id: res.data.id }));
      }
      load(search);
    }, 800);

    return () => clearTimeout(timer);
  }, [current]);

  const onDelete = async (id) => {
    await deleteNote(id);
    if (current.id === id) setCurrent({ id: null, title: "", content: "" });
    load(search);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="container">
        <NotesList notes={notes} onSelect={setCurrent} onDelete={onDelete} />
        <div className="main">
          <div className="topbar">
            <input placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); load(e.target.value); }} />
            <button onClick={() => setCurrent({ id: null, title: "", content: "" })}>New</button>
            <button onClick={() => setDark(!dark)}>Toggle Dark</button>
          </div>
          <div className="split">
            <Editor note={current} setNote={setCurrent} />
            <Preview content={current.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
