import Image from 'next/image';
import Link from 'next/link';

const originalGifs = [
  '/Twitter Downloader GIF.gif',
  '/Twitter Downloader GIF (1).gif',
  '/Twitter Downloader GIF (2).gif',
  '/Twitter Downloader GIF (3).gif',
  '/Twitter Downloader GIF (4).gif',
  '/Twitter Downloader GIF (5).gif',
  '/Twitter Downloader GIF (6).gif',
  '/Twitter Downloader GIF (7).gif',
  '/Twitter Downloader GIF (8).gif',
  '/Twitter Downloader GIF (9).gif',
  '/Twitter Downloader GIF (10).gif',
  '/Twitter Downloader GIF (11).gif',
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const gifs = shuffleArray(originalGifs);

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gifs.map((gif, index) => (
          <Link href="https://x.com/ALCrego_" key={gif}>
            <div key={gif} className="aspect-square relative">
              <Image 
                src={gif}
                alt={`GIF ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
