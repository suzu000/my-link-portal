import React from 'react';
import { Download, Play, FileText, User, ExternalLink } from 'lucide-react';

// ファイルリスト型のデザイン
export default function FileListPage() {
  const PAGE_CONFIG = { title: "Link Drop", subtitle: "おすすめコンテンツ集", description: "期間限定で公開しているリンク集です", footer: "©2025 My Link Portal" };
  const LINKS_DATA = [
    { id: 1, title: "最新の活動レポート.pdf", meta: "12.5 MB · 2025/01/28", thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", url: "https://example.com/item1", isVideo: false },
    { id: 2, title: "プロモーション動画 2025", meta: "189.2 MB · 2025/01/27", thumbnail: "https://images.unsplash.com/photo-1492691523567-61723c295fe4?w=800&q=80", url: "https://example.com/video1", isVideo: true },
    { id: 3, title: "限定ポートフォリオ", meta: "8.5 MB · 2025/01/25", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e5381be6e?w=800&q=80", url: "https://example.com/item3", isVideo: false }
  ];

  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      <div className="max-w-md mx-auto px-5 py-12">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-5"><div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-2xl"><User size={40} className="text-pink-600" /></div></div>
          <h1 className="text-xl font-black text-gray-100 tracking-tighter mb-1 uppercase italic">{PAGE_CONFIG.title}</h1>
          <p className="text-sm text-pink-500 font-bold mb-1 tracking-widest">{PAGE_CONFIG.subtitle}</p>
          <p className="text-[11px] text-gray-500 font-medium">{PAGE_CONFIG.description}</p>
        </header>
        <div className="space-y-4">
          {LINKS_DATA.map(item => (
            <div key={item.id} className="bg-[#252f3f] border border-[#3a4556] rounded-2xl overflow-hidden p-4">
              <div className="relative mb-4 rounded-xl aspect-video bg-[#1a2332] overflow-hidden">
                <img src={item.thumbnail} alt="" className="object-cover w-full h-full" />
                {item.isVideo && <div className="absolute inset-0 flex items-center justify-center bg-black/20"><div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center"><Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" /></div></div>}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center">{item.isVideo ? <Play size={12} fill="currentColor"/> : <FileText size={12} />}</div>
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
              </div>
              <div className="flex gap-2">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-pink-600 text-white rounded-xl py-2.5 text-center text-sm font-bold">視聴する</a>
                <button className="bg-[#3a4556] px-4 rounded-xl"><Download size={16} /></button>
              </div>
            </div>
          ))}
        </div>
        <footer className="text-center mt-16 text-[10px] text-gray-600 font-bold tracking-widest uppercase">{PAGE_CONFIG.footer}</footer>
      </div>
    </div>
  );
}