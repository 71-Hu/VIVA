import { ImageWithFallback } from './figma/ImageWithFallback';

export function Navigation() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 13vh;
          background-color: #E0F0F4;
          padding: 15px 0;
        }
        
        .navbar .logo {
          width: 240px;
          height: auto;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(230, 57, 70, 0.6));
          margin-left: 0 !important;
          padding-left: 0 !important;
          position: relative;
          left: 0;
        }
        
        .navbar .logo:hover {
          filter: drop-shadow(0 0 15px rgba(230, 57, 70, 0.9));
          transform: scale(1.05);
        }
        
        .nav-items {
          display: flex;
          gap: 20px; /* 等间隔排列核心：子元素（a标签）之间均等间距 */
          align-items: center;
          justify-content: center; /* 辅助居中，视觉更规整 */
          margin-right: 50px;
        }
        
        .nav-items img {
          width: 95px;
          height: 95px;
          cursor: pointer;
          transition: all 0.4s ease;
          object-fit: contain;
          background-color: transparent;
          border: none;
          border-radius: 0;
        }
        
        /* 关键修改：先匹配第n个a标签，再选中内部img（解决尺寸不生效问题） */
        /* 第1个a标签内的img（原第一张图）- 缩小尺寸 */
        .nav-items a:nth-child(1) img {
          width: 120px; /* 比原110px缩小，可按需调整 */
          height: 120px;
        }
        
        /* 第2个a标签内的img（原第二张图）- 原有尺寸不变 */
        .nav-items a:nth-child(2) img {
          width: 125px;
          height: 125px;
        }
        
        /* 第3个a标签内的img（原第三张图）- 新增缩小配置 */
        .nav-items a:nth-child(3) img {
          width: 95px; /* 比默认95px缩小，可按需调整 */
          height: 95px;
        }
        
        /* 第4个a标签内的img（原第四张图）- 原有尺寸不变 */
        .nav-items a:nth-child(4) img {
          width: 135px;
          height: 135px;
        }
        
        /* 最后一个a标签内的img（兜底，与第4个一致，确保样式不丢失） */
        .nav-items a:last-child img {
          width: 200px;
          height: 200px;
        }
        
        /* 通用img hover效果 */
        .nav-items a img:hover {
          transform: scale(1.15) translateY(-5px);
          filter: drop-shadow(0 5px 15px rgba(230, 57, 70, 0.7));
        }
        
        /* 第1个a标签内img的hover效果 */
        .nav-items a:nth-child(1) img:hover {
          transform: scale(1.25) translateY(-5px);
          filter: drop-shadow(0 8px 20px rgba(230, 57, 70, 0.8));
        }
        
        /* 第2个a标签内img的hover效果 */
        .nav-items a:nth-child(2) img:hover {
          transform: scale(1.28) translateY(-5px);
          filter: drop-shadow(0 9px 22px rgba(230, 57, 70, 0.85));
        }
        
        /* 第3个a标签内img的hover效果 */
        .nav-items a:nth-child(3) img:hover {
          transform: scale(1.25) translateY(25px);
          filter: drop-shadow(0 8px 20px rgba(230, 57, 70, 0.8));
        }
        
        /* 第4个a标签内img的hover效果 */
        .nav-items a:nth-child(4) img:hover {
          transform: scale(1.30) translateY(-5px);
          filter: drop-shadow(0 10px 24px rgba(230, 57, 70, 0.9));
        }
        
        /* 最后一个a标签内img的hover效果 */
        .nav-items a:last-child img:hover {
          transform: scale(1.45) translateY(-5px);
          filter: drop-shadow(0 20px 45px rgba(230, 57, 70, 1));
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.8);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(230, 57, 70, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(230, 57, 70, 0);
          }
        }
      `}</style>
      
      <nav className="navbar">
        <ImageWithFallback 
          src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/ba710d50e1904eb18572dc3ab58dd3e3.png~tplv-a9rns2rl98-image.png?rcl=2026010414342459A899AA69E8E1C2C96B&rk3s=8e244e95&rrcfp=dafada99&x-expires=2083732464&x-signature=oxyR1KuDMXEcUkuom6k9Nn7ztdk%3D" 
          alt="MAYDAY LAND Logo" 
          className="logo"
        />
		
		<div className="nav-items">
		  {/* 第一张图片：已通过a:nth-child(1) img缩小 */}
		  <a 
			href="https://目标网站1.com" 
			style={{ textDecoration: 'none' }} 
		  >
			<ImageWithFallback 
			  src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/571fac2ed5c84c45b6c70a611488d618.png~tplv-a9rns2rl98-image.png?rcl=2026010414342459A899AA69E8E1C2C96B&rk3s=8e244e95&rrcfp=dafada99&x-expires=2083732464&x-signature=va8TsF2RmfnVmsjMhRI39Zv2OBU%3D" 
			  alt="VIVA ROCK" 
			  title="VIVA ROCK"
			/>
		  </a>

		  {/* 第二张图片：尺寸不变 */}
		  <a 
			href="https://目标网站2.com"
			rel="noopener noreferrer"
			style={{ textDecoration: 'none' }}
		  >
			<ImageWithFallback 
			  src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/d013c9f2829d41aeaffdb548791e88cf.png~tplv-a9rns2rl98-image.png?rcl=2026010414342459A899AA69E8E1C2C96B&rk3s=8e244e95&rrcfp=dafada99&x-expires=2083732464&x-signature=RIVORbc6cT%2FNfcU7t3gc2oPhjOk%3D" 
			  alt="Just Love It" 
			  title="Just Love It"
			/>
		  </a>

		  {/* 第三张图片：已通过a:nth-child(3) img缩小 */}
		  <a 
			href="https://目标网站3.com"  
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: 'none' }}
		  >
			<ImageWithFallback 
			  src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/a809a2b467a64271892c462c09574418.png~tplv-a9rns2rl98-image.png?rcl=2026010414342459A899AA69E8E1C2C96B&rk3s=8e244e95&rrcfp=dafada99&x-expires=2083732464&x-signature=dGevc3e71D%2Bdkm231ZCbixsyCdg%3D" 
			  alt="MAYDAY" 
			  title="MAYDAY"
			/>
		  </a>

		  {/* 第四张图片：尺寸不变 */}
		  <a 
			href="https://目标网站4.com" 
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: 'none' }}
		  >
			<ImageWithFallback 
			  src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/dabe5a010ddd4c3f98c85b22f13c81cb.png~tplv-a9rns2rl98-image.png?rcl=2026010414342459A899AA69E8E1C2C96B&rk3s=8e244e95&rrcfp=dafada99&x-expires=2083732464&x-signature=y7jKCxCxPh0Z72j9U4DmVDCz4Eo%3D" 
			  alt="MAYDAY像素风" 
			  title="MAYDAY像素风"
			/>
		  </a>
		</div>
      </nav>
    </>
  );
}