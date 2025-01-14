import Link from "next/link";

const SidebarClient = () => {
  return (
    <div className="w-64 h-screen p-5 border-r border-gray-100 shadow-xs">
      <h2 className="text-xl font-semibold mb-5">EasyBill</h2>
      <ul className="space-y-4">
        <li>
          <Link className="hover:text-blue-400" href="/client">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/client/invoice">
            Invoice
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/client/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/client/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarClient;