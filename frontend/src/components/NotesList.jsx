export default function NotesList({ notes, onSelect, onDelete }) {
  return (
    <div className="sidebar">
      {notes.map((n) => (
        <div key={n.id} className="note-item" onClick={() => onSelect(n)}>
          <div className="note-title">{n.title || "Untitled"}</div>
          <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(n.id); }}>✕</button>
        </div>
      ))}
    </div>
  );
}
