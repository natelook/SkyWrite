import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import HeadingMenu from './HeadingMenu';
import StyleMenu from './StyleMenu';

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Time to write something inspriational...',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose min-h-fit outline-none',
      },
    },
  });
  return (
    <React.Fragment>
      <StyleMenu editor={editor} />
      <HeadingMenu editor={editor} />
      <EditorContent
        editor={editor}
        placeholder="Start Writing..."
        className="outine-none"
      />{' '}
    </React.Fragment>
  );
}
