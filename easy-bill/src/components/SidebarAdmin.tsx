import Link from "next/link";

const SidebarAdmin = () => {
  return (
    <div className="w-64 h-screen p-5 border-r border-gray-100 shadow-xs">
      <h2 className="text-xl font-semibold mb-5">EasyBill</h2>
      <ul className="space-y-4">
        <li>
          <Link className="hover:text-blue-400" href="/admin">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/invoice">
            Invoice
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/payment">
            Payment
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/client">
            Client
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/user">
            User
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" href="/admin/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;