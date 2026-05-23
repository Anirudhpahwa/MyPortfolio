export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 tracking-tighter">
        ACADEMIC
        <br />
        FOUNDATION
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-primary-container border-4 border-primary p-10 rounded-3xl neo-shadow relative overflow-hidden group">
          <span
            className="material-symbols-outlined text-9xl absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            school
          </span>
          <h3 className="text-3xl font-black uppercase mb-2">
            B.Tech. in Computer Science &amp; Engineering
          </h3>
          <p className="text-xl font-bold mb-1">
            Guru Gobind Singh Indraprastha University (GGSIPU)
          </p>
          <p className="font-bold uppercase tracking-widest text-sm mb-4 opacity-60">
            Aug 2023 – Aug 2027
          </p>
          <p className="font-medium opacity-80">
            GPA: 8.7/10 — Coursework: Data Structures &amp; Algorithms, OOP,
            Software Engineering, Artificial Intelligence
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-tertiary-container border-4 border-primary p-10 rounded-3xl neo-shadow relative overflow-hidden group">
          <span
            className="material-symbols-outlined text-9xl absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            history_edu
          </span>
          <h3 className="text-3xl font-black uppercase mb-2">
            CBSE Class X &amp; XII
          </h3>
          <p className="text-xl font-bold mb-1">
            Sri Venkateshwar International School
          </p>
          <p className="font-bold uppercase tracking-widest text-sm mb-4 opacity-60">
            Apr 2021 – Apr 2023
          </p>
          <p className="font-medium opacity-80">
            Completed secondary and senior secondary education under the Central
            Board of Secondary Education (CBSE).
          </p>
        </div>
      </div>
    </section>
  );
}
