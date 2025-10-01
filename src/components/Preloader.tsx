export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-14 w-14 rounded-full border-4 border-transparent border-t-[#f6700d] border-b-[#f6700d] animate-spin" />
        <i className="bi bi-gear-fill absolute text-[#f6700d] text-xl animate-spin-slow" />
      </div>
    </div>
  );
}