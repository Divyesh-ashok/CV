import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient">
          DIVI
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-gradient transition-all"
            >
              {item}
            </Link>
          ))}
          <Link href="#contact" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-sm font-medium">
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
