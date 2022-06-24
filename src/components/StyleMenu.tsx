import React from 'react';
import { BubbleMenu, Editor as EditorProps } from '@tiptap/react';
import classNames from 'classnames';

interface StyleMenuProps {
  editor: EditorProps | null;
}

export default function StyleMenu({ editor }: StyleMenuProps) {
  return (
    <React.Fragment>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="space-x-1 relative z-10"
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={classNames('bubble-menu-item', [
              editor.isActive('bold') && 'is-active',
            ])}
          >
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={classNames('bubble-menu-item', [
              editor.isActive('italic') && 'is-active',
            ])}
          >
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={classNames('bubble-menu-item', [
              editor.isActive('strike') && 'is-active',
            ])}
          >
            strike
          </button>
        </BubbleMenu>
      )}
    </React.Fragment>
  );
}
