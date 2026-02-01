import React from 'react';

// プロフィール型のデザイン
export default function ProfilePage() {
  const PAGE_CONFIG = {
    warning: "18歳未満は利用禁止",
    siteTitle: "Link X",
    profileName: "公式インフルエンサー", 
    profileBio: "おすすめの最新情報を毎日更新中！✨\nフォローよろしくお願いします！",
    profileDate: "2001.02.18",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    footerTitle: "Link X"
  };

  const LINKS_DATA = [
    { id: 1, title: "公式オンラインショップはこちら♡", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop", url: "https://example.com/shop" },
    { id: 2, title: "期間限定の特別クーポンをGET ✨", thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&h=200&fit=crop", url: "https://example.com/coupon" },
    { id: 3, title: "最新の活動記録（YouTube）はこちら ♡", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop", url: "https://example.com/youtube" },
    { id: 4, title: "公式LINEグループに参加する ♡", thumbnail: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?w=200&h=200&fit=crop", url: "https://example.com/line" }
  ];

  return (
    <div className="min-h-screen bg-[#2c2c2c] text-white font-sans">
      <div className="bg-[#e74c3c] text-white text-[10px] py-1 text-center font-bold tracking-wider">{PAGE_CONFIG.warning}</div>
      <div className="max-w-md mx-auto px-6 py-8">
        <header className="text-center mb-8">
          <p className="text-sm font-bold mb-4">{PAGE_CONFIG.siteTitle}</p>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-indigo-400 p-0.5 shadow-[0_0_15px_rgba(129,140,248,0.5)]">
              <img src={PAGE_CONFIG.profileImg} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <h1 className="text-sm font-bold whitespace-pre-wrap leading-relaxed mb-2">{PAGE_CONFIG.profileBio}</h1>
          <p className="text-[10px] text-gray-400">{PAGE_CONFIG.profileDate}</p>
        </header>
        <div className="space-y-3">
          {LINKS_DATA.map(item => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity min-h-[90px]">
              <div className="w-[100px] h-[90px] flex-shrink-0"><img src={item.thumbnail} alt="" className="w-full h-full object-cover" /></div>
              <div className="px-4 flex-1"><h3 className="text-[#3498db] font-bold text-sm leading-snug">{item.title}</h3></div>
            </a>
          ))}
        </div>
        <footer className="text-center mt-20 pb-10 space-y-4">
          <a href="#" className="text-[11px] underline decoration-gray-500 text-gray-300">お問い合わせはこちら</a>
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">{PAGE_CONFIG.footerTitle}</p>
        </footer>
      </div>
    </div>
  );
}