const Logo = () => {
  return (
    <div
      className="fixed bottom-20 left-2 lg:bottom-10 p-4 bg-gray-800 text-white z-50 animate-pulse
    "
    >
      {/* Logo for large screens */}
      <span className="hidden lg:inline-block bold-32 font-bold">
        DASH-MEDIA
      </span>

      {/* Logo for smaller screens */}
      <span className="lg:hidden text-sm bold-16 font-bold">D-Media</span>
    </div>
  );
};

export default Logo;
