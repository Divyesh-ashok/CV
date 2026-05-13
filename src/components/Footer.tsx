export default function Footer() {
  return (
    <footer id="contact" className="w-full py-20 border-t border-white/10 relative overflow-hidden mt-32">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        {/* Abstract Picasso-style line art using an SVG */}
        <svg viewBox="0 0 500 500" width="800" height="800" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,250 C150,100 350,100 400,250 C450,400 250,450 250,350 C250,250 150,300 100,250" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="10" fill="currentColor" />
          <path d="M300,200 L320,250 L280,250 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient tracking-tighter">Let&apos;s create together.</h2>
        <a href="mailto:divyeshashok004@gmail.com" className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
          divyeshashok004@gmail.com
        </a>
        <p className="mt-12 text-sm text-gray-500">© {new Date().getFullYear()} Divyesh Ashok. Crafted with Next.js.</p>
      </div>
    </footer>
  );
}
