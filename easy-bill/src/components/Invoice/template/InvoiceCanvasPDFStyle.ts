import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3182ce",
  },
  addressContainer: {
    textAlign: "right",
  },
  addressText: {
    fontSize: 10,
    color: "#6b7280",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: "#6b7280",
  },
  rightSection: {
    textAlign: "right",
  },
  companyNameOrange: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ea580c",
  },
  minimalistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  minimalistLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  minimalistLogoWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  minimalistCompanyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  boldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  boldText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },

  classicContainer: {
    marginBottom: 20,
  },
  classicSection: {
    marginBottom: 10,
  },
  classicText: {
    fontSize: 10,
    color: "#6b7280",
  },
  compactContainer: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
  },
  compactSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  compactTextSection: {
    flexDirection: "column",
    gap: 6
  },
  compactText: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 2
  },
  highlightedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  highlightedText: {
    fontSize: 10,
    color: "#6b7280",
  },
  threeColsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  threeColsSection: {
    width: "33%",
    flexDirection: 'column',
    gap: 4,
    padding: 10,
  },
  threeColsText: {
    fontSize: 10,
    color: "#6b7280",
  },
  classicPaymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    marginBottom: 20,
  },
  classicPaymentDetails: {
    flexDirection: "column",
    padding: 10,
    width: "100%",
    backgroundColor: "#eff6ff",
    borderRadius: 5,
  },
  classicPaymentText: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 2
  },
  modernPaymentContainer: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  modernPaymentText: {
    fontSize: 10,
    color: "#6b7280",
  },
  modernPaymentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  modernPaymentInfo: {
    fontSize: 10,
    color: "#6b7280",
  },
  tableContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  tableHeader: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 5,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 5,
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    textAlign: "left",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "left",
    paddingLeft: 10,
  },
  tableAmountCell: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "right",
  },
  tableSubtotalCell: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#6b7280",
  },
  totalDueButton: {
    backgroundColor: "#3182ce",
    borderRadius: 30,
    padding: "12px 25px",
    flexDirection: 'row',
    textAlign: "center",
    marginTop: 20,
    justifyContent: 'space-between'
  },
  totalDueText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  totalDueAmount: {
    fontWeight: "bold",
    color: "white",
  },
  totalDueTextBelow: {
    marginTop: 5,
    fontSize: 10,
    color: "#6b7280",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  billedTo: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 2,
  },
  billedToName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
  },
  address: {
    fontSize: 10,
    color: "#6b7280",
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    fontSize: 10,
  },
  subtotalCell: {
    textAlign: 'right',
  },
  totalRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'semibold',
    textAlign: 'right',
  },
  note: {
    marginTop: 4,
    fontSize: 10,
    color: '#aaa',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  tableFooterContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tableFooterText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  tableFooterAmount: {
    fontSize: 10,
    textAlign: "right",
    fontWeight: "bold",
    paddingRight: 10,
  },
  tableTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingBottom: 5,
  },
  tableTotalLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  tableTotalAmount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#3182ce",
    textAlign: "right",
    paddingRight: 10,
  },
});