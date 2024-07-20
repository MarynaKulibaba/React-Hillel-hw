import React from "react";
import MarkdownEditor from "./components/MarkdownEditor";

const App = () => {
  return (
    <>
      <MarkdownEditor onContentChange={console.log} />
    </>
  );
};

export default App;
