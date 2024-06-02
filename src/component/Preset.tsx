/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import './Preset.css';

type TPreset = {
  id: number;
  title: string;
  content: string;
};
export default function Preset() {
  const storagePreset: TPreset[] = JSON.parse(
    localStorage.getItem('preset') || '[]',
  );
  const [preset, setPreset] = useState<TPreset[]>(storagePreset);
  const [editId, setEditId] = useState(0);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const addPreset = () => {
    const key = Date.now() + Math.floor(Math.random() * 999);
    localStorage.setItem(
      'preset',
      JSON.stringify(
        storagePreset.concat({
          id: key,
          title: `Preset ${storagePreset.length + 1}`,
          content: `contetn ${storagePreset.length + 1}`,
        }),
      ),
    );
    setPreset((prev) =>
      prev.concat({
        id: key,
        title: `Preset ${storagePreset.length + 1}`,
        content: `contetn ${storagePreset.length + 1}`,
      }),
    );
  };

  const editPreset = () => {
    localStorage.setItem(
      'preset',
      JSON.stringify(
        storagePreset.map((target) => {
          if (editId !== target.id) return target;
          return {
            ...target,
            title: editTitle,
            content: editContent,
          };
        }),
      ),
    );
    setPreset((prev) =>
      prev.map((target) => {
        if (editId !== target.id) return target;
        return {
          ...target,
          title: editTitle,
          content: editContent,
        };
      }),
    );
    setEditId(0);
    setEditTitle('');
    setEditContent('');
  };

  const deletePreset = (id: number) => {
    localStorage.setItem(
      'preset',
      JSON.stringify(storagePreset.filter((v) => v.id !== id)),
    );
    setPreset((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <div className="wrapper">
      {preset?.map(({ title, id }) => {
        return (
          <div className="itemWrapper">
            <button type="button" onClick={() => {}}>
              {title}
            </button>
            <button
              className="editBtn"
              type="button"
              onClick={() =>
                setEditId((prev) => (prev === 0 || id !== prev ? id : 0))
              }
            >
              ✏️
            </button>
            <button
              className="deleteBtn"
              type="button"
              onClick={() => deletePreset(id)}
            >
              🗑️
            </button>
          </div>
        );
      })}
      <button className="addBtn" type="button" onClick={addPreset}>
        ➕
      </button>
      {editId !== 0 && (
        <div className="editWrapper">
          <div className="editItem">
            <input
              placeholder="env title"
              onChange={(v) => setEditTitle(v.target.value)}
              value={editTitle}
            />
            <input
              placeholder="env value"
              onChange={(v) => setEditContent(v.target.value)}
              value={editContent}
            />
          </div>
          <button className="editConfirmBtn" type="button" onClick={editPreset}>
            📝
          </button>
        </div>
      )}
    </div>
  );
}
