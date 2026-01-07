const MobileNav = ({ isOpen, onClose, navLinks }) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-text/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`absolute top-0 right-0 h-full w-64 bg-background shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="text-text font-semibold text-xl hover:text-brand transition-colors duration-300 py-2 border-b border-brand/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pb-8">
            <button
              onClick={onClose}
              className="w-full bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand/90 transition-all duration-300"
            >
              Close Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
