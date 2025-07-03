import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const [copied, setCopied] = useState(false);

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleCopy() {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}></div>
        <p>Selected color : {color}</p>
        <div className="color-div">
          <label>Select a color :</label>
          <input type="color" value={color} onChange={handleColorChange} />
          <button onClick={handleCopy}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
