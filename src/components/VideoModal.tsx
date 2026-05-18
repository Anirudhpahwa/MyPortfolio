"use client";

export default function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-primary border-4 border-primary rounded-3xl shadow-[8px_8px_0px_0px_#ffcc00] w-full max-w-3xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-primary-container border-4 border-primary rounded-full w-10 h-10 flex items-center justify-center font-black text-primary hover:scale-110 transition-transform"
        >
          ✕
        </button>
        <video
          src="/videos/gunlab.mp4"
          controls
          autoPlay
          className="w-full block"
        />
      </div>
    </div>
  );
}
