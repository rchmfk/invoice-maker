"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '@/services/firebase';
import { BanknotesIcon, IdentificationIcon, LockClosedIcon, PhoneIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

// Modal component
const Modal = ({ title, fields, onSubmit, onClose, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          { tab: "password", Icon: LockClosedIcon }
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
            <h3 className="text-lg font-semibold">General Information</h3>
            {adminData.map((data) => (
              <div key={data.id}>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.address}</p>
                <p>{data.logo}</p>
                {/* <Image src={data.logo} width="100" height="100"/> */}
                <button onClick={() => openModal("general", data)} className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300">Edit</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "bank account" && (
          <div>
            <h3 className="text-lg font-semibold">Bank Accounts</h3>
            {adminAccounts.map((account) => (
              <div key={account.id}>
                <p>{account.name} - {account.bank} - {account.number}</p>
                <button onClick={() => openModal("bankAccount", account)} className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300">Edit</button>
                <button onClick={() => handleDeleteAdminAccount(account.id)} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 transition duration-300">Delete</button>
              </div>
            ))}
            <button onClick={() => openModal("bankAccount")} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300">Add Bank Account</button>
          </div>
        )}

        {activeTab === "contact person" && (
          <div>
            <h3 className="text-lg font-semibold">Contact Persons</h3>
            {contactPersons.map((person) => (
              <div key={person.id}>
                <p>{person.name} - {person.phoneNumber}</p>
                <button onClick={() => openModal("contactPerson", person)} className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition duration-300">Edit</button>
                <button onClick={() => handleDeleteContactPerson(person.id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300">Delete</button>
              </div>
            ))}
            <button onClick={() => openModal("contactPerson")} className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition duration-300">Add Contact Person</button>
          </div>
        )}

        {activeTab === "sales person" && (
          <div>
            <h3 className="text-lg font-semibold">Sales Persons</h3>
            {salesPersons.map((person) => (
              <div key={person.id}>
                <p>{person.name}</p>
                <button onClick={() => openModal("salesPerson", person)} className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition duration-300">Edit</button>
                <button onClick={() => handleDeleteSalesPerson(person.id)} className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700 transition duration-300">Delete</button>
              </div>
            ))}
            <button onClick={() => openModal("salesPerson")} className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition duration-300">Add Sales Person</button>
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
          title={`${modalType}`}
          fields={fields}
          onSubmit={
            modalType === "general"
            ? editData ? handleEditAdminData : () => {}
            : modalType === "bankAccount"
            ? editData ? handleEditAdminAccount : handleAddAdminAccount
            : modalType === "contactPerson"
            ? editData ? handleEditContactPerson : handleAddContactPerson
            : modalType === "salesPerson"
            ? editData ? handleEditSalesPerson : handleAddSalesPerson
            : () => {}
          }
          onClose={closeModal}
          initialData={editData}
        />
      )}
    </>
  );
};

export default ProfileAdmin;