import { ChangeEvent, useState } from 'react';
import './EnvSetup.css';

export default function EnvSetup() {
  const [envPath, setEnvPath] = useState(
    localStorage.getItem('env_path') || '',
  );

  const handleEnvPath = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setEnvPath(file?.path || '');
    return localStorage.setItem('env_path', file?.path || '');
  };

  return (
    <div>
      <h4>선택한 ENV 파일: {envPath}</h4>
      <div className="Hello">
        <label htmlFor="fileInput" className="custom-file-label">
          <input type="file" id="fileInput" onChange={handleEnvPath} />
          Choose File
        </label>
      </div>
    </div>
  );
}
