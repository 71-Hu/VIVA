import { ImageWithFallback } from './figma/ImageWithFallback';

interface ConcertEvent {
  year: number;
  name: string;
  coverImage: string;
}

const concertEvents: ConcertEvent[] = [
  { year: 2000, name: '十万青年站出来', coverImage: './img/tour/1999.jpg' },
  { year: 2001, name: '你要去哪里', coverImage: './img/tour/2001.jpg' },
  { year: 2003, name: '天空之城', coverImage: './img/tour/2003.jpg' },
  { year: 2004, name: 'Final Home', coverImage: './img/tour/2004.jpg' },
  { year: 2007, name: '离开地球表面', coverImage: './img/tour/2008.jpg' },
  { year: 2009, name: 'D.N.A', coverImage: './img/tour/2009.jpg' },
  { year: 2011, name: '诺亚方舟', coverImage: './img/tour/2011.jpg' },
  { year: 2016, name: 'Just Rock It', coverImage: './img/tour/2016.jpg' },
  { year: 2017, name: '人生无限公司', coverImage: './img/tour/2017.jpg' },
  { year: 2020, name: '好好好想见到你', coverImage: './img/tour/2020.jpg' },
  { year: 2024, name: '5525回到那一天', coverImage: './img/tour/2024.jpg' },
];

export function HorizontalTimeline() {
  return (
    <div className="w-full py-16 px-8 overflow-x-auto">
      <div className="min-w-[1400px] relative">
        {/* Timeline line */}
        <div className="absolute top-[180px] left-0 right-0 h-1 bg-gray-400"></div>
        
        {/* Events */}
        <div className="flex justify-between items-center relative">
          {concertEvents.map((event) => (
            <div key={event.year} className="flex flex-col items-center" style={{ flex: '0 0 auto' }}>
              {/* Cover image above */}
              <div className="mb-6">
                <ImageWithFallback
                  src={event.coverImage}
                  alt={event.name}
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Timeline node */}
              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 mb-4"></div>
              
              {/* Year and concert name below */}
              <div className="text-center">
                <div className="font-semibold text-gray-800 mb-1">{event.year}</div>
                <div className="text-sm text-gray-600 max-w-[120px]">{event.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
