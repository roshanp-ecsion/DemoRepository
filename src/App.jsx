import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "./Editor";




function App() {
  //
  return (
    <div style={{ margin: "20px" }}>
      Practice Here
      {/* <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "fontColor",
              "fontBackgroundColor",
              "numberedList",
              "bulletedList",
              "clipboard",
            ],
          },
          plugins: [Bold, Essentials, Italic, Paragraph, Undo, Font, List],
          mention: {},
          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        }}
      /> */}
      <Editor />
    </div>
  );
}

export default App;
