import React from 'react';
import './Preset.css';

export default function Preset() {
  return (
    <div className="wrapper">
      <div className="itemWrapper">
        <button type="button" onClick={() => {}}>
          Preset 1
        </button>
        <button className="editBtn" type="button" onClick={() => {}}>
          ✏️ 수정{' '}
        </button>
      </div>
      <div className="itemWrapper">
        <button type="button" onClick={() => {}}>
          Preset 2
        </button>
        <button className="editBtn" type="button" onClick={() => {}}>
          ✏️ 수정{' '}
        </button>
      </div>
      <button className="addBtn" type="button" onClick={() => {}}>
        ➕
      </button>
    </div>
  );
}
