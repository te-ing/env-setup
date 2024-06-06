import { ChangeEvent, useState } from 'react';
import './EnvSetup.css';
import Preset from './Preset';

export default function EnvSetup() {
  const [envPath, setEnvPath] = useState(
    localStorage.getItem('env_path') || '',
  );

  const handleEnvPath = (e: ChangeEvent<HTMLInputElement>) => {
    setEnvPath(e.target.value);
    return localStorage.setItem('env_path', e.target.value);
  };

  return (
    <div>
      <h4>선택한 ENV 파일: {envPath}</h4>
      <div className="Hello">
        <input
          id="fileInput"
          onChange={handleEnvPath}
          placeholder="path를 입력하세요"
        />
        {/* <label htmlFor="fileInput" className="custom-file-label">
          Select Your Env File
        </label> */}
      </div>
      <Preset envPath={envPath} />
    </div>
  );
}
