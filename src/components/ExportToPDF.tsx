import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportToPDF = () => {
  const handleDownloadPDF = async () => {
    // Dynamically select the element by ID or class
    const content = document.getElementById("menu-content");

    if (!content) {
      console.error("Content not found");
      return;
    }

    const canvas = await html2canvas(content, {
      scale: 2, // Higher resolution
      backgroundColor: null,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height], // Match canvas size
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("menu.pdf");
  };

  return (
    <div>
      {/* Content */}
      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4B2E2A",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontFamily: "Tangerine",
          display: "block",
          margin: "20px auto",
        }}
      >
        Download Menu as PDF
      </button>
    </div>
  );
};

export default ExportToPDF;
