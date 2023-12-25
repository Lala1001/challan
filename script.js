function submitForm() {
    const manualIdValue = document.getElementById('manualIdField').value;
    const offenderValue = document.getElementById('nameField').value;
    const uppercaseOffenderValue = offenderValue.toUpperCase();
    const vRegNumberValue = document.getElementById('regNumberField').value;
    const vRegNumberValue1 = vRegNumberValue.toUpperCase();
    const violationCodeValue = document.getElementById('codeField').value;
    const violationCodeValue1 = `(${violationCodeValue})`;
    const challanAmountValue = parseFloat(document.getElementById('amountField').value);
    const serviceFeeValue = parseFloat(document.getElementById('feeField').value);
    const totalAmountValue = challanAmountValue + serviceFeeValue;
    const combinedValues = `KPK Traffic Police Challan Name ${offenderValue},Total Amount ${totalAmountValue},Challan ID ${manualIdValue}`;

    const form = document.getElementById('myForm');
    form.style.display = 'none';

    const displayData = document.getElementById('displayData');

    const qrCodeApiUrl = `https://quickchart.io/qr?text=${encodeURIComponent(combinedValues)}`;
    displayData.innerHTML = `
        <p style="font-size:22px;"><strong>Khyber Pakhtunkhwa</strong></p>
        <div style="font-size: 16px; transform: scaleY(2); transform-origin: 0 0;">Traffic Police</div><br>
        <p style="font-weight: bold; font-size:15px; margin-bottom: 0px; "><strong>............................</strong></p>
        <article style="font-weight: bold; font-size:19px;">Swat</article>
        <article style="font-weight: bold; font-size:19px;">${manualIdValue}</article>
        <article style="font-weight: bold; font-size:19px;">PAID</article>
        
        <p style="transform: scaleY(1.5); transform-origin: 0 0; margin-top: 0px;">Offender : ${uppercaseOffenderValue}</p>
        <p style="transform: scaleY(1.5); transform-origin: 0 0; margin-bottom: 20px;">V.Reg# : ${vRegNumberValue1}</p>
        
        <p style="font-weight: bold; font-size:15px; vertical-align: top; margin-bottom: 10px;"><strong>............................</strong></p>
        <p style="transform: scaleY(1.5); transform-origin: 0 0;">Violation Code's : ${violationCodeValue1}</p>
        <p style="transform: scaleY(1.5); transform-origin: 0 0;">Challan Amount : PKR. ${challanAmountValue.toFixed(0)}</p>
        <p style="transform: scaleY(1.5); transform-origin: 0 0; margin-bottom: 20px;">Service Fee : PKR. ${serviceFeeValue.toFixed(0)}</p>
        
        <p style="font-weight: bold; font-size:15px; vertical-align: top; margin-bottom: 10px;"><strong>............................</strong></p>
        <p style="transform: scaleY(1.5); transform-origin: 0 0; margin-bottom: 5px;">Total Amount : PKR. ${totalAmountValue.toFixed(0)}</p>
        <br>
        <img src="${qrCodeApiUrl}" alt="QR Code" width="75" height="75">
        
        <section style="margin-top: 5px;">Received By: TO Farhan Ali (1725)</section>
        <section>at ${new Date().toLocaleString()}</section>
        <section>Traffic Police Helpline 1915.</section>
    `;

    const displayPage = document.getElementById('displayPage');
    displayPage.classList.remove('hidden');
}

function printDisplayPage() {
    window.print();
}
