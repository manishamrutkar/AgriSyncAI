function SkeletonCard() {
  return (
    <div className="animate-pulse backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 h-[180px]">
      <div className="w-32 h-5 bg-white/10 rounded-full mb-6"></div>

      <div className="w-40 h-12 bg-white/10 rounded-2xl mb-6"></div>

      <div className="w-24 h-4 bg-white/10 rounded-full"></div>
    </div>
  );
}

export default SkeletonCard;