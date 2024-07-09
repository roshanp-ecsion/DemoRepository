import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

const Editor = () => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Inline Editor</h2>
            <div id="editor" style={{ border: '1px solid #ccc', padding: '10px' }}>
                <CKEditor
                    editor={InlineEditor}
                    config={{
                        plugins: [Bold, Italic],
                        toolbar: ['bold', 'italic']
                    }}
                    data="<p>Hello from CKEditor 5 in React!</p>"
                    onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
