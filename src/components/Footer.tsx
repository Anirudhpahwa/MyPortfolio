export default function Footer() {
  return (
    <footer className="bg-primary border-t-8 border-secondary w-full mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-12 md:p-24 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="text-surface font-black text-4xl uppercase mb-4">
            {/* Brand name */}
          </div>
          <p className="font-black uppercase text-lg tracking-widest text-surface opacity-80">
            {/* Copyright */}
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {/* Social links — content TBD */}
          {["Instagram", "LinkedIn", "Behance", "Twitter"].map((name) => (
            <a
              key={name}
              href="#"
              className="text-surface opacity-80 hover:opacity-100 font-black uppercase text-lg tracking-widest hover:text-primary-fixed transition-colors active:scale-95 duration-150"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
