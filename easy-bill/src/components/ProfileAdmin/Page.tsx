"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { BanknotesIcon, IdentificationIcon, LockClosedIcon, PaperClipIcon, PhoneIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

// Modal component
interface ModalProps {
  title: string;
  fields: { name: string; type: string; placeholder: string }[];
  onSubmit: (data: any) => void;
  onClose: () => void;
  initialData?: any;
}

const Modal = ({ title, fields, onSubmit, onClose, initialData }: ModalProps) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <form onSubmit={handleFormSubmit}>
          {fields.map(({ name, type, placeholder }) => (
            <div key={name} className="mb-4">
              <input
                type={type}
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300">Save</button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition duration-300">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfileAdmin = () => {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [adminData, setAdminData] = useState<any[]>([]);
  const [adminAccounts, setAdminAccounts] = useState<any[]>([]);
  const [contactPersons, setContactPersons] = useState<any[]>([]);
  const [salesPersons, setSalesPersons] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('');
  const [fields, setFields] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    fetchAdminData();
    fetchAdminAccounts();
    fetchContactPersons();
    fetchSalesPersons();
  }, []);

  const fetchAdminData = async () => {
    const querySnapshot = await getDocs(collection(db, "admin"));
    const datas: any[] = [];
    querySnapshot.forEach((doc) => {
      datas.push({ id: doc.id, ...doc.data() });
    });
    setAdminData(datas);
  };

  const fetchAdminAccounts = async () => {
    const querySnapshot = await getDocs(collection(db, "admin_account"));
    const accounts: any[] = [];
    querySnapshot.forEach((doc) => {
      accounts.push({ id: doc.id, ...doc.data() });
    });
    setAdminAccounts(accounts);
  };

  const fetchContactPersons = async () => {
    const querySnapshot = await getDocs(collection(db, "admin_contact_person"));
    const persons: any[] = [];
    querySnapshot.forEach((doc) => {
      persons.push({ id: doc.id, ...doc.data() });
    });
    setContactPersons(persons);
  };

  const fetchSalesPersons = async () => {
    const querySnapshot = await getDocs(collection(db, "admin_sales_person"));
    const sales: any[] = [];
    querySnapshot.forEach((doc) => {
      sales.push({ id: doc.id, ...doc.data() });
    });
    setSalesPersons(sales);
  };


  const openModal = (type: string, data?: any) => {
    setModalType(type);
    setEditData(data);
    switch (type) {
      case "general":
        setFields([
          { name: "name", type: "text", placeholder: "Name" },
          { name: "email", type: "text", placeholder: "Email" },
          { name: "logo", type: "text", placeholder: "Logo" },
          { name: "address", type: "text", placeholder: "Address" },
        ]);
        break;
      case "bankAccount":
        setFields([
          { name: "name", type: "text", placeholder: "Account Name" },
          { name: "bank", type: "text", placeholder: "Bank" },
          { name: "number", type: "text", placeholder: "Account Number" },
        ]);
        break;
      case "contactPerson":
        setFields([
          { name: "name", type: "text", placeholder: "Name" },
          { name: "phoneNumber", type: "text", placeholder: "Phone Number" },
        ]);
        break;
      case "salesPerson":
        setFields([{ name: "name", type: "text", placeholder: "Name" }]);
        break;
      default:
        setFields([]);
        break;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleEditAdminData = async (data: any) => {
    if (editData) {
      await updateDoc(doc(db, "admin", editData.id), data);
    } else {
      await addDoc(collection(db, "admin"), data);
    }
    fetchAdminData();
    closeModal();
  };

  const handleEditAdminAccount = async (data: any) => {
    if (editData) {
      await updateDoc(doc(db, "admin_account", editData.id), data);
    }
    fetchAdminAccounts();
    closeModal();
  };

  const handleEditContactPerson = async (data: any) => {
    if (editData) {
      await updateDoc(doc(db, "admin_contact_person", editData.id), data);
    }
    fetchContactPersons();
    closeModal();
  };

  const handleEditSalesPerson = async (data: any) => {
    if (editData) {
      await updateDoc(doc(db, "admin_sales_person", editData.id), data);
    }
    fetchSalesPersons();
    closeModal();
  };

  const handleAddAdminAccount = async (data: any) => {
    await addDoc(collection(db, "admin_account"), data);
    fetchAdminAccounts();
    closeModal();
  };

  const handleDeleteAdminAccount = async (id: string) => {
    await deleteDoc(doc(db, "admin_account", id));
    fetchAdminAccounts();
  };

  const handleAddContactPerson = async (data: any) => {
    await addDoc(collection(db, "admin_contact_person"), data);
    fetchContactPersons();
    closeModal();
  };

  const handleDeleteContactPerson = async (id: string) => {
    await deleteDoc(doc(db, "admin_contact_person", id));
    fetchContactPersons();
  };

  const handleAddSalesPerson = async (data: any) => {
    await addDoc(collection(db, "admin_sales_person"), data);
    fetchSalesPersons();
    closeModal();
  };

  const handleDeleteSalesPerson = async (id: string) => {
    await deleteDoc(doc(db, "admin_sales_person", id));
    fetchSalesPersons();
  };

  return (
    <>
      <div className="mb-4 flex border-b border-gray-200">
        {[{ tab: "general", Icon: IdentificationIcon },
        { tab: "bank account", Icon: BanknotesIcon },
        { tab: "contact person", Icon: PhoneIcon },
        { tab: "sales person", Icon: UserCircleIcon },
        ].map(({ tab, Icon }) => (
          <button
            key={tab}
            className={`flex items-center p-4 text-sm ${activeTab === tab ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            <Icon className="mr-2 h-5 w-5" />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="rounded-lg bg-white p-6 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.03)]">


        {activeTab === "general" && (
          <div>
            {adminData.length === 0 ? (
              <div>
                <div className="px-4 sm:px-0">
                  <div className="grid grid-cols-2 items-center">
                    <div>
                      <h3 className="text-base/7 font-semibold text-gray-900">General Information</h3>
                      <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
                    </div>
                    <div className="text-right">
                      <span
                        onClick={() => openModal("general")}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
                      >
                        Insert Data
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              adminData.map((data) => (
                <div key={data.id}>
                  <div className="px-4 sm:px-0">
                    <div className="grid grid-cols-2 items-center">
                      <div>
                        <h3 className="text-base/7 font-semibold text-gray-900">General Information</h3>
                        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
                      </div>
                      <div className="text-right">
                        <span
                          onClick={() => openModal("general", data)}
                          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
                        >
                          Edit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {data.name}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email}</dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">About</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {data.address}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Logo</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                  <span className="truncate font-medium">{data.logo}</span>
                                  {/* <span className="shrink-0 text-gray-400">2.4mb</span> */}
                                </div>
                              </div>
                              <div className="ml-4 shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

              ))
            )}
          </div>
        )}

        {activeTab === "bank account" && (
          <div>
            <div className="px-4 sm:px-0">
              <div className="grid grid-cols-2 items-center">
                <div>
                  <h3 className="text-base/7 font-semibold text-gray-900">General Information</h3>
                  <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
                </div>
                <div className="text-right">
                  <span
                    onClick={() => openModal("bankAccount")}
                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
                  >
                    <PlusIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    Add Bank Account
                  </span>
                </div>
              </div>
            </div>
            {adminAccounts.map((account) => (
              <div key={account.id} className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      <p className="font-bold">{account.name}</p>
                      <p>{account.bank}</p>
                      <p>{account.number}</p>
                    </dt>
                    <dd className="mt-1 text-right text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <span
                        onClick={() => openModal("bankAccount", account)}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset cursor-pointer"
                      >
                        <PencilIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Edit
                      </span>
                      <span
                        onClick={() => handleDeleteAdminAccount(account.id)}
                        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset cursor-pointer"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Delete
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        )}

        {activeTab === "contact person" && (
          <div>
            <div className="px-4 sm:px-0">
              <div className="grid grid-cols-2 items-center">
                <div>
                  <h3 className="text-base/7 font-semibold text-gray-900">Contact Person</h3>
                  <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
                </div>
                <div className="text-right">
                  <span
                    onClick={() => openModal("contactPerson")}
                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
                  >
                    <PlusIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    Add Contact Person
                  </span>
                </div>
              </div>
            </div>
            {contactPersons.map((person) => (

              <div key={person.id} className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      <p className="font-bold">{person.name}</p>
                      <p>{person.phoneNumber}</p>
                    </dt>
                    <dd className="mt-1 text-right text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <span
                        onClick={() => openModal("contactPerson", person)}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset cursor-pointer"
                      >
                        <PencilIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Edit
                      </span>
                      <span
                        onClick={() => handleDeleteContactPerson(person.id)}
                        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset cursor-pointer"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Delete
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        )}

        {activeTab === "sales person" && (
          <div>
            <div className="px-4 sm:px-0">
              <div className="grid grid-cols-2 items-center">
                <div>
                  <h3 className="text-base/7 font-semibold text-gray-900">Sales Person</h3>
                  <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
                </div>
                <div className="text-right">
                  <span
                    onClick={() => openModal("salesPerson")}
                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
                  >
                    <PlusIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    Add Sales Person
                  </span>
                </div>
              </div>
            </div>
            {salesPersons.map((person) => (
              <div key={person.id} className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      <p className="font-bold">{person.name}</p>
                      <p>{person.phoneNumber}</p>
                    </dt>
                    <dd className="mt-1 text-right text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <span
                        onClick={() => openModal("salesPerson", person)}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset cursor-pointer"
                      >
                        <PencilIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Edit
                      </span>
                      <span
                        onClick={() => handleDeleteSalesPerson(person.id)}
                        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset cursor-pointer"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        Delete
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        )}

        {activeTab === "password" && (
          <div>
            <h3 className="text-lg font-semibold">Change Password</h3>
            <p>Here you can change your password.</p>
          </div>
        )}
      </div>

      {/* Modal component */}

      {isModalOpen && (
        <Modal
          title={`${modalType === "general" ? (editData ? "Edit General" : "Add General") : modalType}`}
          fields={fields}
          onSubmit={
            modalType === "general"
              ? handleEditAdminData
              : modalType === "bankAccount"
                ? editData ? handleEditAdminAccount : handleAddAdminAccount
                : modalType === "contactPerson"
                  ? editData ? handleEditContactPerson : handleAddContactPerson
                  : modalType === "salesPerson"
                    ? editData ? handleEditSalesPerson : handleAddSalesPerson
                    : () => { }
          }
          onClose={closeModal}
          initialData={editData}
        />
      )}
    </>
  );
};

export default ProfileAdmin;