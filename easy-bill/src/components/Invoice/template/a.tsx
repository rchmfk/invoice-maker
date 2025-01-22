"use client"
import { useEffect, useState } from "react";
import { Document, Page, Image as ImagePDF, Text, View } from "@react-pdf/renderer";
import { styles } from "./InvoiceCanvasPDFStyle";
import {
    getInvoiceData,
    getClientData,
    getPaymentData,
    getTableData
} from "@/utils/firestoreAdmin";

const InvoiceCanvasPDF = ({
    invoiceData,
    head,
    client,
    payment,
    table,
    sections,
}: {
    invoiceData: any;
    head: string;
    client: string;
    payment: string;
    table?: string;
    sections: any;
}) => {

    const [invoiceData, setInvoiceData] = useState<any>(null);
    const [clientData, setClientData] = useState<any>(null);
    const [paymentData, setPaymentData] = useState<any>(null);
    const [tableData, setTableData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (invoiceId) {
                const invoice = await getInvoiceData(invoiceId);
                setInvoiceData(invoice);
            }
            if (clientId) {
                const client = await getClientData(clientId);
                setClientData(client);
            }
            if (paymentId) {
                const payment = await getPaymentData(paymentId);
                setPaymentData(payment);
            }
            if (tableId) {
                const table = await getTableData(tableId);
                setTableData(table);
            }
        };

        fetchData();
    }, [invoiceId, clientId, paymentId, tableId]);

    const renderHeadTemplate = () => {
        switch (head) {
            case "classic":
                return (
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoWrapper}>
                                <ImagePDF
                                    src="https://tse4.mm.bing.net/th?id=OIP.6m-imjlo6n01VaGlszCrOgHaE7&pid=Api&P=0&h=220"
                                    style={styles.logoImage}
                                />
                            </View>
                            <Text style={styles.companyName}>{invoiceData?.name || "-"}</Text>
                        </View>
                        <View style={styles.addressContainer}>
                            <Text style={styles.addressText}>{invoiceData?.name || "-"}</Text>
                            <Text style={styles.addressText}>{invoiceData?.address || "-"}</Text>
                            {/* <Text style={styles.addressText}>TAX ID: 00XXXXX1234X0XX</Text> */}
                        </View>
                    </View>
                );
            case "vibrant":
                return (
                    <View style={styles.container}>
                        <View style={styles.leftSection}>
                            <View style={styles.logoWrapper}>
                                <ImagePDF
                                    src="https://tse4.mm.bing.net/th?id=OIP.6m-imjlo6n01VaGlszCrOgHaE7&pid=Api&P=0&h=220"
                                    style={styles.logoImage}
                                />
                            </View>
                            <View style={{ flexDirection: "column", gap: 4 }}>
                                <Text style={styles.companyName}>{invoiceData?.name || "-"}</Text>
                                <Text style={styles.contactInfo}>{invoiceData?.email || "-"}</Text>
                                <Text style={styles.contactInfo}>+91 00000 00000</Text>
                            </View>
                        </View>

                        {/* Right Section: Business Information */}
                        <View style={{ flexDirection: "column", gap: 4 }}>
                            <Text style={styles.addressText}>{invoiceData?.address || "-"}</Text>
                            {/* <Text style={styles.addressText}>City, State, IN - 000000</Text> */}
                            {/* <Text style={styles.addressText}>TAX ID: 00XXXXX1234X0XX</Text> */}
                        </View>
                    </View>
                );
            case "minimalist":
                return (
                    <View style={styles.minimalistContainer}>
                        <View style={styles.minimalistLeft}>
                            <View style={styles.minimalistLogoWrapper}>
                                <ImagePDF
                                    src="https://tse4.mm.bing.net/th?id=OIP.6m-imjlo6n01VaGlszCrOgHaE7&pid=Api&P=0&h=220"
                                    style={styles.logoImage}
                                />
                            </View>
                            <View style={{ flexDirection: "column", gap: 4 }}>
                                <Text style={styles.minimalistCompanyName}>{invoiceData?.name || "-"}</Text>
                                <Text style={styles.contactInfo}>{invoiceData?.email || "-"}</Text>
                                <Text style={styles.contactInfo}>+91 00000 00000</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", gap: 4 }}>
                            <Text
                                style={{
                                    color: "#6b7280",
                                    fontSize: 28,
                                }}
                            >
                                Invoice
                            </Text>
                            <Text style={styles.addressText}>#AB2324-01</Text>
                        </View>
                    </View>
                );
            case "bold":
                return (
                    <View style={styles.boldContainer}>
                        <View style={{ flexDirection: "column", gap: 4 }}>
                            <Text style={styles.boldText}>INVOICE</Text>
                            <Text style={styles.addressText}>#AB2324-01</Text>
                        </View>
                        <ImagePDF
                            src="https://tse4.mm.bing.net/th?id=OIP.6m-imjlo6n01VaGlszCrOgHaE7&pid=Api&P=0&h=220"
                            style={styles.logoImage}
                        />
                    </View>
                );
            case "complex-bold":
                return (
                    <View style={styles.container}>
                        {/* Left Section */}
                        <View style={{ flexDirection: "column", gap: 6 }}>
                            <Text style={styles.headerTitle}>INVOICE</Text>
                            <View>
                                <Text style={styles.billedTo}>Billed to</Text>
                                <Text style={styles.billedToName}>Company Name</Text>
                                <Text style={styles.address}>Company address</Text>
                                <Text style={styles.address}>City, Country - 00000</Text>
                            </View>
                        </View>

                        {/* Right Section */}
                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                            <ImagePDF
                                style={styles.logoImage}
                                src="https://tse4.mm.bing.net/th?id=OIP.6m-imjlo6n01VaGlszCrOgHaE7&pid=Api&P=0&h=220"
                            />
                            <Text style={styles.companyName}>{invoiceData?.name || "-"}</Text>
                            <Text style={styles.address}>{invoiceData?.address || "-"}</Text>
                            <Text style={styles.address}>TAX ID 00XXXXX1234X0XX</Text>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };



    // ----------------------------
    const isTemplateSelected = head || client || table || payment;

    if (isTemplateSelected === null) {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Text style={{ fontSize: 40 }}>⚠️</Text>
                <Text style={{ marginTop: 10 }}>
                    You must select at least one template to display your invoice.
                </Text>
            </View>
        );
    }

    return (
        <Document>
            <Page
                size="A4"
                style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                }}
            >
                {sections.map((section: any, idx: number) => (
                    <View key={section.id + idx}>
                        {section.id === "head" && renderHeadTemplate()}
                        {section.id === "client" && renderClientTemplate()}
                        {section.id === "table" && renderTableTemplate()}
                        {section.id === "payment" && renderPaymentTemplate()}
                    </View>
                ))}
            </Page>
        </Document>
    );
};

export default InvoiceCanvasPDF;
