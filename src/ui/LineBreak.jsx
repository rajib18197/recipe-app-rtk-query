import { useState } from "react";

export default function Paragraph() {
  const [text, setText] = useState("");

  let obj = {};
  let reflectText = text.split("\n");
  console.log(reflectText);

  const tr = reflectText.map((el, i) => {
    return el.slice(-2) === "  " ? (
      <p key={i}>
        {el.slice(0, -2)} <br />
      </p>
    ) : (
      <p key={i}>{el}</p>
    );
  });

  console.log(tr);
  const HtmlText = tr;

  function handleText(e) {
    console.dir(e.target);
    setText(e.target.value);
  }

  return (
    <div>
      <LineBreak text={text} onText={handleText} />
      <ReflectBox text={HtmlText} />
    </div>
  );
}

export function LineBreak({ text, onText }) {
  return (
    <div>
      <textarea cols="30" rows="10" value={text} onChange={onText}></textarea>
    </div>
  );
}

export function ReflectBox({ text }) {
  const Text = text;
  return <h2>{text}</h2>;
}
