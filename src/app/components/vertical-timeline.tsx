import { ImageWithFallback } from './figma/ImageWithFallback';

interface Song {
  title: string;
  lyrics: string;
}

interface AlbumEvent {
  year: number;
  albumTitle: string;
  albumCover: string;
  stageDesign: string;
  stageDesignAspect: string; // width/height ratio for aspect-ratio CSS
  recommendedSongs: Song[];
}

const albumEvents: AlbumEvent[] = [
  {
    year: 1999,
    albumTitle: '第一张创作专辑',
    albumCover: './img/album/album1.jpg',
    stageDesign: './img/stage/01.jpg',
    stageDesignAspect: '1127/1080', // ~1.04:1
    recommendedSongs: [
      { 
        title: '拥抱', 
        lyrics: `晚风吻尽荷花叶
任我醉倒在池边` 
      },
      { 
        title: '疯狂世界', 
        lyrics: `青春是挽不回的水
转眼消失在指间
用力的浪费
再用力的后悔` 
      },
    ],
  },
  {
    year: 2000,
    albumTitle: '爱情万岁',
    albumCover: './img/album/album2.jpg',
    stageDesign: './img/stage/02.jpg',
    stageDesignAspect: '1080/1350', // ~0.8:1 portrait
    recommendedSongs: [
      { 
        title: '温柔', 
        lyrics: `走在风中 今天阳光 突然好温柔
天的温柔 地的温柔 像你抱着我` 
      },
      { 
        title: '雨眠', 
        lyrics: `你是彼粒星
飞过我的天顶` 
      },

    ],
  },
  {
    year: 2001,
    albumTitle: '人生海海',
    albumCover: './img/album/album3.jpg',
    stageDesign: './img/stage/03.png',
    stageDesignAspect: '2227/1096', // ~2.03:1 wide landscape
    recommendedSongs: [
      { 
        title: '一颗苹果', 
        lyrics: `总要有人来陪我咽下苦果
再尝一点美梦
要等你先开口那冬天才会走
有些人经过我身旁
住在我脑中在我心里钻洞
有些人变成相片堆在角落
灰尘像雪一般冰冻` 
      },
      { 
        title: '人生海海', 
        lyrics: `所以我说就让他去
我知道潮落之后
一定有潮起
有什么了不起` 
      },
    ],
  },
  {
    year: 2003,
    albumTitle: '时光机',
    albumCover: './img/album/album4.jpg',
    stageDesign: './img/stage/04.jpg',
    stageDesignAspect: '1440/960', // 1.5:1 landscape
    recommendedSongs: [
		{
		        title: '雌雄同体', 
		        lyrics: `你也许避我唯恐不及
		你也许把我当作异形
		可是你如何真的确定
		灵魂找到自己的 样貌和身体
		` 
		      },
      { 
        title: '生命有一种绝对', 
        lyrics: `那生命 灿烂烟火般上演
你和我最后都要回归地平线
等待我 请等待我
直到约定融化成笑颜` 
      },

    ],
  },
  {
    year: 2004,
    albumTitle: '神的孩子都在跳舞',
    albumCover: './img/album/album5.jpg',
    stageDesign: './img/stage/05.jpg',
    stageDesignAspect: '1080/1439', // ~0.75:1 portrait
    recommendedSongs: [
      { 
        title: '倔强', 
        lyrics: `当 我和世界不一样
那就让我不一样
坚持对我来说就是以刚克刚` 
      },
      { 
        title: '晚安，地球人', 
        lyrics: `大人 在冷气房 作战
小孩 在太阳下 逃难
石油田 的干旱 华尔街卷起灾难
终于人们发射了飞弹 捍卫自己的晚餐
` 
      },
    ],
  },
  {
    year: 2006,
    albumTitle: '为爱而生',
    albumCover: './img/album/album6.jpg',
    stageDesign: './img/stage/06.png',
    stageDesignAspect: '2559/1075', // ~2.38:1 very wide landscape
    recommendedSongs: [
      { 
        title: '香水', 
        lyrics: `马蹄踏平了国界　野心磨破了披肩
动员了麻瓜魔戒寻找拼凑你的香味
樱桃和樱花缠绵　茉莉和没药拼贴
香颂和香榭调配也许再加一点眼泪
` 
      },
      { 
        title: '最重要的小事', 
        lyrics: `世界纷纷扰扰喧喧闹闹
什么是真实
为你跌跌撞撞傻傻笑笑
买一杯果汁` 
      },

    ],
  },
  {
    year: 2008,
    albumTitle: '后青春期的诗',
    albumCover: './img/album/album7.jpg',
    stageDesign: './img/stage/07.jpg',
    stageDesignAspect: '1920/1080', // ~1.78:1 (16:9 landscape)
    recommendedSongs: [
      { 
        title: '突然好想你', 
        lyrics: `我们 像一首最美丽的歌曲
变成 两部悲伤的电影` 
      },
      { 
        title: '生存以上 生活以下', 
        lyrics: `上课钟变成打卡钟
单行道般的人生 流失在车阵中
进行曲规律的平庸
活的像是一句标语 压韵而服从` 
      },
	  {
	  title: '后青春期的诗', 
	  lyrics: `让天空解释着蔚蓝
浮云定义着洁白
落花铺陈一片红色地毯
迎接我们到未来` 
	        },
    ],
  },
  {
    year: 2011,
    albumTitle: '第二人生',
    albumCover: './img/album/album8.jpg',
    stageDesign: './img/stage/08.jpg',
    stageDesignAspect: '1440/1080', // ~1.33:1 (4:3 landscape)
    recommendedSongs: [
      { 
        title: '2012', 
        lyrics: `谁把 愉快的愉 换 偷窃的偷
难道 自找的找 是 自我的我
终于 未来的未 变 末日的末
我们啊 是先坠落 或先坠入自甘堕落` 
      },
      { 
        title: '干杯', 
        lyrics: `也许会 有一天 世界真的有终点
也要和你举起回忆酿的甜
和你再干一杯` 
      },
      { 
        title: '仓颉', 
        lyrics: `当星宿都沉默山岳
只盼你会抬头看我寄托的明月` 
      },
    ],
  },
  {
    year: 2016,
    albumTitle: '自传',
    albumCover: './img/album/album9.jpg',
    stageDesign: './img/stage/09.jpg',
    stageDesignAspect: '1440/1080', // ~1.33:1 (4:3 landscape)
    recommendedSongs: [
      { 
        title: '如果我们不曾相遇', 
        lyrics: `偶然与巧合舞动了蝶翼 谁的心头风起
前仆而后继万千人追寻 荒漠唯一菩提
是擦身相遇或擦肩而去 命运犹如险棋
无数时间线无尽可能性 终于交织向你` 
      },
      { 
        title: '少年他的奇幻漂流', 
        lyrics: `诸神已离开 鬼在狂欢
而人们在纠缠
谁生错血脉 谁长错色彩
谁梦错了期待` 
      },
    ],
  },
];

export function VerticalTimeline() {
  return (
    <div className="w-full py-16 px-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-400"></div>
        
        {/* Album events */}
        <div className="space-y-24">
          {albumEvents.map((album) => (
            <div key={album.year} className="relative flex gap-8">
              {/* Year and node */}
              <div className="flex flex-col items-center" style={{ width: '64px' }}>
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="font-semibold text-gray-800 mt-2">{album.year}</div>
              </div>
              
              {/* Content to the right */}
              <div className="flex-1 pb-8">
                {/* Album title and cover */}
                <div className="flex items-start gap-6 mb-6">
                  <ImageWithFallback
                    src={album.albumCover}
                    alt={album.albumTitle}
                    className="w-40 h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div>
                    <h3 className="text-gray-800 mb-2">{album.albumTitle}</h3>
                    <p className="text-sm text-gray-600">Album • {album.year}</p>
                  </div>
                </div>
                
                {/* Stage design image */}
                <div className="mb-6">
                  <ImageWithFallback
                    src={album.stageDesign}
                    alt={`${album.albumTitle} stage design`}
                    className={`w-full object-cover rounded-lg shadow-lg ${
                      album.year === 2000 ? 'max-w-xs' : 
                      album.year === 2004 ? 'max-w-sm' : 
                      album.year === 2006 ? 'max-w-xl' : 
                      'max-w-md'
                    }`}
                    style={{ aspectRatio: album.stageDesignAspect }}
                  />
                  <p className="text-xs text-gray-500 mt-2">歌曲舞美</p>
                </div>
                
                {/* Recommended songs and lyrics */}
                <div className="space-y-4">
                  <h4 className="text-sm text-gray-700">歌曲推荐:</h4>
                  {album.recommendedSongs.map((song, index) => (
                    <div key={index} className="bg-white/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2">{song.title}</p>
                      <p className="text-xs text-gray-600 italic whitespace-pre-line">{song.lyrics}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}