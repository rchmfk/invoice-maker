import Link from "next/link";

const SidebarAdmin = () => {
  return (
    <div className="w-64 h-screen p-5 border-r border-gray-100 shadow-xs">
      <h2 className="text-xl font-semibold mb-5">EasyBill</h2>
      <ul className="space-y-4">
        {[
          "Dashboard",
          "Invoice",
          "Payment",
          "Client",
          "Profile",
          "User",
          "Logout",
        ].map((menu) => (
          <li key={menu}>
            <Link
              className="block px-4 py-2 rounded-lg hover:bg-gray-200"
              href={menu === 'Dashboard' ? '/admin' : `/admin/${menu.toLowerCase()}`}
            >
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarAdmin;
