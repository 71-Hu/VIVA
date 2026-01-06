import { HorizontalTimeline } from './components/horizontal-timeline';
import { VerticalTimeline } from './components/vertical-timeline';
import { Navigation } from './components/navigation';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E0F0F4' }}>
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Section 1: Horizontal Timeline */}
      <section className="border-b-2 border-gray-300">
        <div className="container mx-auto">
          <h1 className="text-center pt-12 pb-4 text-gray-800">巡演时间线</h1>
          <HorizontalTimeline />
        </div>
      </section>
      
      {/* Section 2: Vertical Timeline */}
      <section>
        <div className="container mx-auto">
          <h1 className="text-center pt-12 pb-4 text-gray-800">专辑记录</h1>
          <VerticalTimeline />
        </div>
      </section>

      {/* Section 3: Chinese Closing Text */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-700 space-y-6 opacity-80" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
            <p className="leading-relaxed">
              万物都有它的极限，这个宇宙一直在扩张，它不停地扩张，不停地扩张。然后，所有的熵就会不断不断地一直扩张。
              总有一天，在宇宙失去了扩张的热量之后，宇宙会重新收缩，会回到一开始的那个原点，那是一个密度小到不能再小的原点。
            </p>
            <p className="leading-relaxed">
              你的灵魂，我的灵魂，所有的灵魂，我们都会困在那个最小的原点。然后宇审就会重新爆炸，重新地开始一次我们的旅程。万物生成，形成，一个一个地冷却，还是会有一个太阳系，也许也还是会有一个地球，地球会演化，岩浆慢慢地不喷发了，海水慢慢地冷却了。
			</p>
            <p className="leading-relaxed">
              我们从一开始的单细胞生物，慢慢地长出了脊椎，长出勇气，慢慢地有一天，我们长出人类的心。
			</p>
            <p className="leading-relaxed">
              到那时候，也许你才是我的“五月天”。那时候就让我去看看你的演唱会吧! 你要记得写出跟这个时代的五月天一样用心的歌哦。
			</p>
			<p className="leading-relaxed" style={{ textAlign: "right" }}>
				————  阿信 
			</p>
          </div>
        </div>
      </section>
	        {/* 尾部底栏：白色分割线 + 统一背景色 */}
      <footer>
        {/* 白色水平分割线 */}
        <div className="border-t-2 border-white w-full"></div>
        {/* 底部栏容器 */}
        <div 
          className="py-6 px-8" 
          style={{ backgroundColor: '#E0F0F4' }} 
        >
          <div className="container mx-auto text-gray-600">
            {/* 第一行：导航链接（对应图片内容） */}
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <a href="#" className="hover:text-gray-800 transition-colors">相关链接</a>
              <a href="#" className="hover:text-gray-800 transition-colors">影像授权</a>
              <a href="#" className="hover:text-gray-800 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-gray-800 transition-colors">版权声明</a>
              <a href="#" className="hover:text-gray-800 transition-colors">在线咨询</a>
              <a href="#" className="hover:text-gray-800 transition-colors">联系我们</a>
              <a href="#" className="hover:text-gray-800 transition-colors">关于我们</a>
            </div>
            {/* 第二行：维护与联系方式（对应图片内容） */}
            <div className="text-center mb-4">
              <p className="mt-1">联系方式：wh@bin-music.com</p>
            </div>
            {/* 原有版权信息（可保留或修改） */}
            <div className="text-center text-sm">
              <p>© 2026 五月天专辑,巡演及周边记录 | 版权方@相信音乐 & STAYREAL</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}