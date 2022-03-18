import React, { useRef, useState } from "react";

const Index = () => {
  const [name, setName] = useState("Initial text by kev");
  const fileUpload = useRef(null);

  const uploadContent = e => {
    setName(e.target.files[0].name);
  };
  const handleUpload = (e) => {
    fileUpload.current.click();
    e.preventDefault();
  };

  return (
    <div>
        <h1> { name } </h1>
      <form>
        <input
          ref={fileUpload}
          style={{ display: "none" }}
          onChange={uploadContent}
          type="file"
        />

        <button onClick={handleUpload}>
          <span>File</span>
        </button>
      </form>
    </div>
  );
};

export default Index;
