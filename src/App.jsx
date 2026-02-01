import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import FileListPage from './pages/FileListPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 何もつかないURL (/) の時はプロフィールを表示 */}
        <Route path="/" element={<ProfilePage />} />
        
        {/* 末尾が /video の時はファイルリストを表示 */}
        <Route path="/video" element={<FileListPage />} />
        
        {/* それ以外のURLの時はとりあえずプロフィールを表示 */}
        <Route path="*" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}