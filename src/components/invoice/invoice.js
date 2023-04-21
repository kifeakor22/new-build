import React, { useState } from "react";
import jsPDF from "jspdf";

function PDFGenerator() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleInvoiceNumberChange = (event) => {
    setInvoiceNumber(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePDFGenerate = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Invoice Number: ${invoiceNumber}`, 10, 30);
    doc.text(`Price: $${price}`, 10, 40);
    doc.save("document.pdf");
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Invoice Number:
          <input
            type="text"
            value={invoiceNumber}
            onChange={handleInvoiceNumberChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
        <br />
        <button type="button" onClick={handlePDFGenerate}>
          Download PDF
        </button>
      </form>
    </div>
  );
}

export default PDFGenerator;

