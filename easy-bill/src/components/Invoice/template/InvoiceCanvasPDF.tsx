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

  const renderClientTemplate = () => {
    switch (client) {
      case "classic":
        return (
          <View style={styles.classicContainer}>
            <View style={styles.classicSection}>
              <Text style={styles.classicText}>Billed to</Text>
              <Text style={styles.classicText}>Company Name</Text>
              <Text style={styles.classicText}>Company address</Text>
              <Text style={styles.classicText}>City, Country - 00000</Text>
              <Text style={styles.classicText}>+0 (000) 123-4567</Text>
            </View>
            <View style={styles.classicSection}>
              <Text style={styles.classicText}>Due date</Text>
              <Text style={styles.classicText}>15 Aug, 2023</Text>
              <Text style={styles.classicText}>Invoice date</Text>
              <Text style={styles.classicText}>1 Aug, 2023</Text>
            </View>
            <View style={styles.classicSection}>
              <Text style={styles.classicText}>Invoice number</Text>
              <Text style={styles.classicText}>#AB2324-01</Text>
              <Text style={styles.classicText}>Reference</Text>
              <Text style={styles.classicText}>INV-057</Text>
            </View>
          </View>
        );
      case "compact":
        return (
          <View style={styles.compactContainer}>
            <View style={styles.compactSection}>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#6b7280",
                    marginBottom: 4,
                  }}
                >
                  Billed to
                </Text>
                <Text style={styles.compactText}>Company Name</Text>
                <Text style={styles.compactText}>Company address</Text>
                <Text style={styles.compactText}>City, Country - 00000</Text>
                <Text style={styles.compactText}>+0 (000) 123-4567</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#6b7280",
                    marginBottom: 4,
                  }}
                >
                  Invoice number
                </Text>
                <Text style={styles.compactText}>#AB2324-01</Text>
                <Text style={styles.compactText}>Reference</Text>
                <Text style={styles.compactText}>INV-057</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#6b7280",
                    marginBottom: 4,
                  }}
                >
                  Invoice of (USD)
                </Text>
                <Text
                  style={[
                    styles.compactText,
                    { fontSize: 16, color: "#ea580c", fontWeight: "semibold" },
                  ]}
                >
                  $4,950.00
                </Text>
              </View>
            </View>
            <View style={styles.compactSection}>
              <View style={styles.compactTextSection}>
                <Text style={styles.compactText}>Subject</Text>
                <Text style={styles.compactText}>Design System</Text>
              </View>
              <View style={styles.compactTextSection}>
                <Text style={styles.compactText}>Invoice date</Text>
                <Text style={styles.compactText}>01 Aug, 2025</Text>
              </View>
              <View style={styles.compactTextSection}>
                <Text style={styles.compactText}>Due date</Text>
                <Text style={styles.compactText}>15 Aug, 2025</Text>
              </View>
            </View>
          </View>
        );
      case "highlighted":
        return (
          <View style={styles.highlightedContainer}>
            <View style={{ flexDirection: "column", gap: 2 }}>
              <Text style={styles.highlightedText}>Billed to</Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  marginTop: 2,
                }}
              >
                Company Name
              </Text>
              <Text style={styles.highlightedText}>Company address</Text>
              <Text style={styles.highlightedText}>City, Country - 00000</Text>
              <Text style={styles.highlightedText}>+0 (000) 123-4567</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 8 }}>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <Text style={styles.highlightedText}>Invoice date</Text>
                <Text style={styles.highlightedText}>01.08.2025</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <Text style={styles.highlightedText}>Due date</Text>
                <Text style={styles.highlightedText}>15.08.2025</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", gap: 8 }}>
              <Text style={styles.highlightedText}>Amount Due</Text>
              <View
                style={{
                  backgroundColor: "#E3FA7D",
                  padding: 10,
                  fontWeight: 500,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  US$ 4,500.00
                </Text>
              </View>
            </View>
          </View>
        );
      case "three-cols":
        return (
          <View style={styles.threeColsContainer}>
            <View style={styles.threeColsSection}>
              <Text style={styles.threeColsText}>Issued</Text>
              <Text style={styles.threeColsText}>01 Aug, 2025</Text>
              <Text style={[styles.threeColsText, { marginTop: 6 }]}>Due</Text>
              <Text style={styles.threeColsText}>15 Aug, 2025</Text>
            </View>
            <View style={styles.threeColsSection}>
              <Text style={styles.threeColsText}>Billed to</Text>
              <Text style={styles.threeColsText}>Company Name</Text>
              <Text style={styles.threeColsText}>Company address</Text>
              <Text style={styles.threeColsText}>City, Country - 00000</Text>
              <Text style={styles.threeColsText}>+0 (000) 123-4567</Text>
            </View>
            <View style={styles.threeColsSection}>
              <Text style={styles.threeColsText}>From</Text>
              <Text style={styles.threeColsText}>Panda, Inc</Text>
              <Text style={styles.threeColsText}>Business address</Text>
              <Text style={styles.threeColsText}>City, Country - 00000</Text>
              <Text style={styles.threeColsText}>TAX ID: 00XXXXX1234X0XX</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const renderPaymentTemplate = () => {
    switch (payment) {
      case "classic":
        return (
          <View style={styles.classicPaymentContainer}>
            <View style={{ width: "100%" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 10, marginBottom: 2 }}
              >
                Thank you for the business!
              </Text>
              <Text style={styles.classicPaymentText}>
                Please pay within 15 days of receiving this invoice
              </Text>
            </View>
            <View style={styles.classicPaymentDetails}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 2,
                }}
              >
                Payment details
              </Text>
              <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={styles.classicPaymentText}>ABCD BANK</Text>
                <Text style={styles.classicPaymentText}>
                  SWIFT: ABCDUSBBXXX
                </Text>
                <Text style={styles.classicPaymentText}>
                  Acct #37447892300011
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 4, paddingTop: 2 }}>
                <Text style={styles.classicPaymentText}>
                  +91 00000 00000 &nbsp;
                  <Text style={styles.classicPaymentText}>|</Text>
                </Text>
                <Text style={styles.classicPaymentText}>hello@gmail.com</Text>
              </View>
            </View>
          </View>
        );
      case "modern":
        return (
          <View style={styles.modernPaymentContainer}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 16 }}>
              Thank you for the business!
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#6b7280",
                }}
              >
                PAYMENT INFO
              </Text>
              <View
                style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}
              />
            </View>
            <View style={styles.modernPaymentSection}>
              <View>
                <Text style={styles.classicPaymentText}>ACCOUNT NAME</Text>
                <Text style={styles.modernPaymentInfo}>
                  Business address, City, IN - 000 000
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <View>
                  <Text style={styles.classicPaymentText}>Bank name</Text>
                  <Text style={styles.modernPaymentInfo}>ABCD BANK</Text>
                </View>
                <View
                  style={{ width: 1, height: 16, backgroundColor: "#E0E0E0" }}
                />
                <View>
                  <Text style={styles.classicPaymentText}>Swift code</Text>
                  <Text style={styles.modernPaymentInfo}>ABCDUSBBXXX</Text>
                </View>
                <View
                  style={{ width: 1, height: 16, backgroundColor: "#E0E0E0" }}
                />
                <View>
                  <Text style={styles.classicPaymentText}>Account #</Text>
                  <Text style={styles.modernPaymentInfo}>37474892300011</Text>
                </View>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const renderTableTemplate = () => {
    switch (table) {
      case "classic":
        return (
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>
                Item description
              </Text>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>
                Qty
              </Text>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>
                Rate
              </Text>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>
                Amount
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Sample Item 1</Text>
              <Text style={[styles.tableCell]}>2</Text>
              <Text style={[styles.tableCell]}>$10.00</Text>
              <Text style={[styles.tableCell, styles.tableAmountCell]}>
                $20.00
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Sample Item 2</Text>
              <Text style={[styles.tableCell]}>1</Text>
              <Text style={[styles.tableCell]}>$15.00</Text>
              <Text style={[styles.tableCell, styles.tableAmountCell]}>
                $15.00
              </Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableSubtotalCell]}>
                Subtotal
              </Text>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableAmountCell]}>
                $35.00
              </Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableSubtotalCell]}>
                Tax (10%)
              </Text>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableAmountCell]}>
                $3.50
              </Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableSubtotalCell]}>
                Total
              </Text>
              <Text style={styles.tableCell}></Text>
              <Text style={[styles.tableCell, styles.tableAmountCell]}>
                $38.50
              </Text>
            </View>

            <View style={styles.totalDueButton}>
              <Text style={styles.totalDueText}>Total Due</Text>
              <Text style={[styles.totalDueText, styles.totalDueAmount]}>
                US$ 38,50.00
              </Text>
            </View>
            <Text style={styles.totalDueTextBelow}>
              USD Four Thousand Nine Hundred Fifty Only.
            </Text>
          </View>
        );
      case "modern":
        return (
          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", borderBottom: "1px solid black" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    padding: "10px",
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Item Detail
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Qty
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Rate
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Amount
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ width: "50%", padding: "10px" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                    Item Name
                  </Text>
                  <Text style={{ color: "#808080", fontSize: 10 }}>
                    Item description
                  </Text>
                </View>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  2
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                >
                  $10.00
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $20.00
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ width: "50%", padding: "10px" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                    Item Name
                  </Text>
                  <Text style={{ color: "#808080", fontSize: 10 }}>
                    Item description
                  </Text>
                </View>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                >
                  $15.00
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $15.00
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ width: "50%", padding: "10px", fontSize: 10 }}
                ></Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Subtotal
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $35.00
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ width: "50%", padding: "10px", fontSize: 10 }}
                ></Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Tax (10%)
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $3.50
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ width: "50%", padding: "10px", fontSize: 10 }}
                ></Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  $38.50
                </Text>
              </View>
            </View>
          </View>
        );
      case "secondary":
        return (
          <View style={{ width: "100%" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}
            >
              Digital product design
            </Text>

            <View style={{ width: "100%", borderBottom: "1px solid black" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <Text
                  style={{
                    width: "10%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  #
                </Text>
                <Text
                  style={{
                    width: "65%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  TITLE / DESCRIPTION
                </Text>
                <Text
                  style={{
                    width: "25%",
                    padding: "10px",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  SUBTOTAL
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <Text style={{ width: "10%", padding: "10px", fontSize: 10 }}>
                  1
                </Text>
                <View style={{ width: "65%", padding: "10px", fontSize: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>Service name</Text>
                  <Text style={{ color: "#808080" }}>
                    01 Jul - 20 Jul • Hours log
                  </Text>
                </View>
                <Text
                  style={{
                    width: "25%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $3,000.00
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <Text style={{ width: "10%", padding: "10px", fontSize: 10 }}>
                  2
                </Text>
                <View style={{ width: "65%", padding: "10px", fontSize: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>Service name</Text>
                  <Text style={{ color: "#808080" }}>21 Jul - 31 Jul</Text>
                </View>
                <Text
                  style={{
                    width: "25%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $1,500.00
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ width: "10%", padding: "10px", fontSize: 10 }}
                ></Text>
                <Text
                  style={{
                    width: "65%",
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    width: "25%",
                    padding: "10px",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  $4,500.00
                </Text>
              </View>
            </View>

            <Text style={{ marginTop: 20, fontSize: 10, color: "#808080" }}>
              “Please pay within 15 days of receiving this invoice.”
            </Text>
          </View>
        );
      case "service-highlighted":
        return (
          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", borderBottom: "1px solid black" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <Text
                  style={{
                    width: "40%",
                    padding: "10px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Service
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Qty
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Rate
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  Line total
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ width: "40%", padding: "10px" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                    Service name
                  </Text>
                  <Text style={{ color: "#808080", fontSize: 10 }}>
                    Description
                  </Text>
                </View>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  2
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                >
                  $10.00
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $20.00
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ width: "40%", padding: "10px" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                    Service name
                  </Text>
                  <Text style={{ color: "#808080", fontSize: 10 }}>
                    Description
                  </Text>
                </View>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                >
                  $15.00
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $15.00
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ width: "40%", padding: "10px" }}></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  Subtotal
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $35.00
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ width: "40%", padding: "10px" }}></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "left",
                    fontSize: 10,
                  }}
                >
                  Tax (10%)
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontSize: 10,
                  }}
                >
                  $3.50
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "3px solid #9c27b0",
                  borderTop: "3px solid #9c27b0",
                }}
              >
                <Text style={{ width: "40%", padding: "10px" }}></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#9c27b0",
                    fontSize: 10,
                  }}
                >
                  Amount due
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                ></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "right",
                    fontWeight: "bold",
                    color: "#9c27b0",
                    fontSize: 10,
                  }}
                >
                  $38.50
                </Text>
              </View>
            </View>
          </View>
        );
      case "complex":
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                maxWidth: 150,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>Invoice #</Text>
                <Text style={{ fontSize: 12 }}>AB2324-01</Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>Invoice date</Text>
                <Text style={{ fontSize: 12 }}>01 Aug, 2025</Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>Reference</Text>
                <Text style={{ fontSize: 12 }}>INV-057</Text>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>Due date</Text>
                <Text style={{ fontSize: 12 }}>15 Aug, 2025</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#d1d5db",
                fontSize: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: "#d1d5db",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    padding: 10,
                    textAlign: "left",
                    borderTopLeftRadius: 10,
                    fontWeight: "bold",
                  }}
                >
                  Services
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: 10,
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Qty
                </Text>
                <Text
                  style={{
                    width: "15%",
                    padding: 10,
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Rate
                </Text>
                <Text
                  style={{
                    width: "20%",
                    padding: 10,
                    textAlign: "right",
                    borderTopRightRadius: 10,
                    fontWeight: "bold",
                  }}
                >
                  Line total
                </Text>
              </View>
              {/* Table Rows */}
              {[...Array(3)].map((_, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderColor: "#d1d5db",
                  }}
                  key={index}
                >
                  <Text style={{ width: "50%", padding: 10 }}>Item Name</Text>
                  <Text
                    style={{ width: "15%", padding: 10, textAlign: "left" }}
                  >
                    1
                  </Text>
                  <Text
                    style={{ width: "15%", padding: 10, textAlign: "right" }}
                  >
                    $3,000.00
                  </Text>
                  <Text
                    style={{ width: "20%", padding: 10, textAlign: "right" }}
                  >
                    $3,000.00
                  </Text>
                </View>
              ))}

              {/* Footer */}
              <View
                style={{
                  flexDirection: "row",
                  borderTopWidth: 1,
                  borderColor: "#d1d5db",
                }}
              >
                <Text style={{ width: "50%", padding: 10, fontWeight: "bold" }}>
                  Subtotal
                </Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text style={{ width: "20%", padding: 10, textAlign: "right" }}>
                  $9,000.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderTopWidth: 1,
                  borderColor: "#d1d5db",
                }}
              >
                <Text style={{ width: "50%", padding: 10, fontWeight: "bold" }}>
                  Tax (10%)
                </Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text style={{ width: "20%", padding: 10, textAlign: "right" }}>
                  $900.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderTopWidth: 1,
                  borderColor: "#d1d5db",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    padding: 10,
                    fontWeight: "bold",
                    borderBottomLeftRadius: 10,
                  }}
                >
                  Total due
                </Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text style={{ width: "15%", padding: 10 }}></Text>
                <Text
                  style={{
                    width: "20%",
                    padding: 10,
                    textAlign: "right",
                    fontWeight: "bold",
                    borderBottomRightRadius: 10,
                  }}
                >
                  US$ 9,900.00
                </Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

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
