import ReactMarkdown from "react-markdown";

export default function Preview({ content }) {
  return (
    <div className="preview">
      <ReactMarkdown>{content || ""}</ReactMarkdown>
    </div>
  );
}
