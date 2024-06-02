import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import EnvSetup from '../component/EnvSetup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvSetup />} />
      </Routes>
    </Router>
  );
}
