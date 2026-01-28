import React from 'react';
import { Download, Play, FileText, User, ExternalLink } from 'lucide-react';

// --- 設定エリア：ここを書き換えて内容を調整してください ---
const PAGE_CONFIG = {
  title: "Link Drop",
  subtitle: "おすすめコンテンツ集",
  description: "期間限定で公開しているリンク集です",
  footer: "©2025 My Link Portal",
};

const LINKS_DATA = [
  {
    id: 1,
    title: "最新の活動レポート.pdf",
    meta: "12.5 MB · 2025/01/28",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    url: "https://example.com/item1", // 実際のリンク先
    isVideo: false
  },
  {
    id: 2,
    title: "プロモーション動画 2025",
    meta: "189.2 MB · 2025/01/27",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-61723c295fe4?w=800&q=80",
    url: "https://example.com/video1",
    isVideo: true
  },
  {
    id: 3,
    title: "限定ポートフォリオ",
    meta: "8.5 MB · 2025/01/25",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e5381be6e?w=800&q=80",
    url: "https://example.com/item3",
    isVideo: false
  }
];
// -------------------------------------------------------

const LinkCard = ({ item }) => {
  return (
    <div className="bg-[#252f3f] border border-[#3a4556] rounded-2xl overflow-hidden hover:border-[#4a5566] transition-all duration-300 shadow-xl group">
      <div className="p-4">
        {/* サムネイル部分 */}
        <div className="relative mb-4 overflow-hidden rounded-xl aspect-video bg-[#1a2332]">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          {item.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black/20 group-hover:bg-black/40">
              <div className="flex items-center justify-center w-14 h-14 bg-white/90 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* テキスト情報 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded flex items-center justify-center">
              {item.isVideo ? <Play size={12} className="text-black" fill="currentColor"/> : <FileText size={12} className="text-black" />}
            </div>
            <h3 className="text-sm font-semibold text-gray-100 truncate">{item.title}</h3>
          </div>
          <p className="text-[11px] text-gray-500 ml-7 font-medium tracking-tight">
            {item.meta}
          </p>
        </div>

        {/* アクションボタン */}
        <div className="flex gap-2">
          <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 transition-colors text-sm font-bold shadow-lg shadow-pink-900/20"
          >
            {item.isVideo ? '視聴する' : '詳細を見る'}
            <ExternalLink size={14} />
          </a>
          <button className="bg-[#3a4556] hover:bg-[#4a5566] text-white rounded-xl py-2.5 px-4 flex items-center justify-center transition-colors shadow-inner">
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function LinkPortal() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white selection:bg-pink-500/30">
      <div className="max-w-md mx-auto px-5 py-12">
        
        {/* ヘッダー */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-pink-500/20">
                <User size={40} className="text-pink-600" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-4 border-[#1a2332] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-xl font-black text-gray-100 tracking-tighter mb-1 uppercase italic">
            {PAGE_CONFIG.title}
          </h1>
          <p className="text-sm text-pink-500 font-bold mb-1 tracking-widest">
            {PAGE_CONFIG.subtitle}
          </p>
          <p className="text-[11px] text-gray-500 font-medium">
            {PAGE_CONFIG.description}
          </p>
        </header>

        {/* リストヘッダー */}
        <div className="flex items-center gap-2 mb-5 px-1">
          <div className="w-5 h-5 bg-yellow-400 rounded shadow-sm flex items-center justify-center">
            <span className="text-[10px] text-black font-bold">📂</span>
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contents</span>
          <span className="ml-auto text-[10px] bg-[#252f3f] px-2 py-1 rounded-full text-gray-400 border border-[#3a4556]">
            {LINKS_DATA.length} items
          </span>
        </div>

        {/* カードリスト */}
        <div className="space-y-4">
          {LINKS_DATA.map(item => (
            <LinkCard key={item.id} item={item} />
          ))}
        </div>

        {/* フッター */}
        <footer className="text-center mt-16">
          <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
            {PAGE_CONFIG.footer}
          </p>
          <div className="mt-4 flex justify-center gap-4 text-gray-600">
             {/* 必要に応じてSNSアイコン等を追加 */}
          </div>
        </footer>
      </div>
    </div>
  );
}