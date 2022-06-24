import classNames from 'classnames';
import React from 'react';
import { FloatingMenu, Editor as EditorProps } from '@tiptap/react';

interface HeadingMenuProps {
  editor: EditorProps | null;
}
export default function HeadingMenu({ editor }: HeadingMenuProps) {
  return (
    <React.Fragment>
      {editor && (
        <React.Fragment>
          <FloatingMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className="space-x-3 -mb-10"
          >
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={classNames('floating-button', [
                editor.isActive('heading', { level: 1 }) ? 'is-active' : '',
              ])}
            >
              h1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={classNames('floating-button', [
                editor.isActive('heading', { level: 2 }) ? 'is-active' : '',
              ])}
            >
              h2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={classNames('floating-button', [
                editor.isActive('bulletList') ? 'is-active' : '',
              ])}
            >
              list
            </button>
          </FloatingMenu>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
