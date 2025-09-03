import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Logie’s Edges",
  description: "Value-betting alerts across football (soccer) + gridiron",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-navy text-brand-cream">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-3">
            {/* <Image
              src="/logo.png"
              alt="Logie’s Edges"
              width={36}
              height={36}
              priority
            /> */}
            {/* <Link href="/" className="text-xl font-semibold">
              Logie’s Edges
            </Link> */}
            {/* <nav className="ml-auto flex items-center gap-6">
              <Link href="/#about">About</Link>
              <Link href="/#sports">Sports</Link>
              <Link
                href="https://t.me/YOUR_PUBLIC_CHANNEL"
                target="_blank"
                className="rounded-md px-3 py-1.5 bg-brand-gold text-brand-navy font-medium hover:opacity-90"
              >
                Join Telegram
              </Link>
            </nav> */}
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70">
            © {new Date().getFullYear()} Logie’s Edges — All rights reserved.
          </div>
        </footer> */}
      </body>
    </html>
  );
}