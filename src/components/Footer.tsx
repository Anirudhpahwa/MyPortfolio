export default function Footer() {
  return (
    <footer className="bg-primary border-t-8 border-secondary w-full mt-24">
      <div className="flex flex-col items-center justify-center p-12 md:p-24 gap-4">
        <p
          className="text-2xl md:text-3xl font-black text-secondary-container text-center"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Made with ☕, 💻, and Drake&apos;s Playlist
        </p>
        <p
          className="text-sm font-bold uppercase tracking-widest text-surface opacity-60 text-center"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          © 2026 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
