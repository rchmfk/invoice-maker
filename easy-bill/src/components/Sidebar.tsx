const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 h-screen p-4">
      <div className="text-center font-bold text-lg mb-8">Logo</div>
      <nav>
        <ul className="space-y-4">
          {['Dashboard', 'Invoice', 'Payment', 'Client', 'Profile', 'User ', 'Keluar'].map((menu) => (
            <li key={menu}>
              <a
                href={`#${menu.toLowerCase()}`}
                className="block px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;