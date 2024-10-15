function StickyCard() {
    return (
      <div className="fixed bottom-6 right-6 bg-white shadow-lg  rounded-lg z-50">
        <nav className="flex justify-center gap-10">
          <a href="#home" className="text-blue-600 hover:text-blue-800 font-semibold">
            Home
          </a>
          ||
          <a href="#events" className="text-blue-600 hover:text-blue-800 font-semibold">
            Events
          </a>
          ||
          <a href="#footer" className="text-blue-600 hover:text-blue-800 font-semibold">
            Footer
          </a>
        </nav>
      </div>
    );
}
  

export default StickyCard