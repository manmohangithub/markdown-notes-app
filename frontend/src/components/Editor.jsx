export default function Editor({ note, setNote }) {
  return (
    <div className="editor">
      <input
        className="title-input"
        placeholder="Title"
        value={note.title || ""}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="content-textarea"
        placeholder="Write Markdown here..."
        value={note.content || ""}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
    </div>
  );
}
