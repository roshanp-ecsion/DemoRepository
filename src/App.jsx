import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Font,
  List,
} from "ckeditor5";
import { SlashCommand } from "ckeditor5-premium-features";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Font from "@ckeditor/ckeditor5-font/src/font";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

function App() {
  return (
    <div style={{ margin: "20px" }}>
      Practice Here
      <CKEditor
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
      />
    </div>
  );
}

export default App;
