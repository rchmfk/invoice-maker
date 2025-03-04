import {
  BlueChart,
  BrownExpansesChart,
  containerDashboardClient,
  girl,
  GreenChart,
  RedChart,
  user1,
  user2,
  user3,
} from "@/public";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Transaction {
  description: string;
  name: string;
  date: string;
  amount: string;
  status: "Completed" | "Progress" | "Failed";
  image: StaticImageData;
}

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  color: "green" | "red" | "blue" | "yellow";
  image: StaticImageData;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  color,
  image,
}) => {
  const changeColor =
    color === "green"
      ? "text-green-500"
      : color === "red"
        ? "text-red-500"
        : color === "blue"
          ? "text-blue-500"
          : "text-yellow-500";

  return (
    <div className="bg-white shadow flex items-center justify-between rounded-lg min-h-40 p-6">
      <div className="flex  flex-col">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="mt-4 flex gap-2 flex-col">
          <span className={`ml-2 flex items-center ${changeColor}`}>
            {change.startsWith("-") ? "↓" : "↑"} {change}
          </span>
          <span className="text-3xl font-bold">{value}</span>
        </div>
      </div>
      <div className="">
        <Image
          src={image}
          alt={value}
          width={50}
          height={50}
          className=" h-12 w-12"
        />
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const transactions: Transaction[] = [
    {
      description: "Received",
      name: "Melanie Noble",
      date: "07 Aug 2022",
      amount: "$87.55",
      status: "Completed",
      image: user1,
    },
    {
      description: "Received",
      name: "Giana Brandt",
      date: "22 Oct 2022",
      amount: "$55.69",
      status: "Progress",
      image: user2,
    },
    {
      description: "Payment",
      name: "Jace Bush",
      date: "04 Jan 2022",
      amount: "$55.47",
      status: "Failed",
      image: user3,
    },
    {
      description: "Payment",
      name: "Reece Chung",
      date: "10 Sep 2022",
      amount: "$94.75",
      status: "Completed",
      image: user1,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen lg:ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <nav className="text-sm text-gray-500">
          <Link href="/admin">Menu</Link> / Sub Menu / Sub Sub Menu
        </nav>
      </div>

      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-green-100 relative rounded-lg p-6 flex items-center col-span-3">
          <div>
            <h2 className="text-2xl leading-10 font-bold">
              Welcome back 👋 <br /> Fabiana Capmany
            </h2>
            <p className="text-gray-600 mt-2">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn’t anything.
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Go Now
            </button>
          </div>
          <Image
            src={containerDashboardClient}
            width={220}
            height={120}
            alt="Illustration"
            className="ml-auto h-24"
          />
          <Image
            src={girl}
            width={70}
            height={100}
            alt="Girl illustration"
            className="ml-auto absolute right-20"
          />
        </div>
        <div className="bg-yellow-100  rounded-lg overflow-hidden flex flex-col justify-between">
          <div className="p-4">
            <h2 className="text-xl font-bold">Expenses</h2>
            <p className="text-3xl font-bold">$1,989</p>
            <span className="text-sm text-yellow-600">
              ↓ -6.6% than last month
            </span>
          </div>
          <div className=" h-full w-full">
            <Image
              src={BrownExpansesChart}
              alt="ExpansesCharts"
              width={200}
              height={200}
              className=" object-cover w-full h-32"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Total Active Users"
          value="43.7k"
          change="+89.4%"
          color="green"
          image={GreenChart}
        />
        <StatsCard
          title="Total Installed"
          value="66.3k"
          change="-12.2%"
          color="red"
          image={RedChart}
        />
        <StatsCard
          title="Total Downloads"
          value="92.3k"
          change="+29.4%"
          color="blue"
          image={BlueChart}
        />
      </div>

      {/* Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6 col-span-2">
          <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Image
                        src={transaction.image}
                        alt="Avatar"
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          {transaction.name}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={
                          transaction.status === "Completed"
                            ? "text-green-500"
                            : transaction.status === "Progress"
                              ? "text-yellow-500"
                              : "text-red-500"
                        }
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Transfer */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Quick Transfer</h3>
          <p className="text-sm text-gray-500">Your Balance</p>
          <p className="text-3xl font-bold mb-4">$34,212.00</p>
          <div className="flex items-center gap-4 mb-4">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={`/avatars/${index + 1}.png`}
                alt="Avatar"
                className="w-10 h-10 rounded-full border border-gray-200"
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span>$20</span>
            <input type="range" min="20" max="1000" className="flex-1" />
            <span>$999.00</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Transfer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
