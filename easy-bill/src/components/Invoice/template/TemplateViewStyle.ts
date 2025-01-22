import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: "Helvetica",
      lineHeight: 1.5,
      color: "#333",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      borderBottom: "1px solid #ddd",
      paddingBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    section: {
      marginBottom: 20,
    },
    clientSection: {
      marginTop: 20,
    },
    label: {
      fontWeight: "bold",
      marginBottom: 5,
    },
    tableHeader: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid #ddd",
      paddingBottom: 5,
      marginBottom: 10,
    },
    tableRow: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 5,
    },
    descriptionCell: {
      flex: 2,
    },
    tableCell: {
      flex: 1,
      textAlign: "right",
    },
    totalSection: {
      marginTop: 20,
      textAlign: "right",
    },
    totalText: {
      fontWeight: "bold",
      marginTop: 5,
    },
    notesSection: {
      marginTop: 20,
      paddingTop: 10,
      borderTop: "1px solid #ddd",
      fontStyle: "italic",
      fontSize: 10,
    },
})
