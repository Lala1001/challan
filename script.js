function submitForm() {
    // Get values from the form
    const idValue = generateRandomId();
    const offenderValue = document.getElementById('nameField').value;
    const vRegNumberValue = document.getElementById('regNumberField').value;
    const violationCodeValue = document.getElementById('codeField').value;
    const challanAmountValue = parseFloat(document.getElementById('amountField').value);
    const serviceFeeValue = parseFloat(document.getElementById('feeField').value);
    const totalAmountValue = challanAmountValue + serviceFeeValue;
    const combinedValues = `KPK Traffic Police Challan Name ${offenderValue},Total Amount ${totalAmountValue},Challan ID ${idValue}`;
    // Hide the form
    const form = document.getElementById('myForm');
    form.style.display = 'none';

    // Display data on the custom-designed page
    const displayData = document.getElementById('displayData');
    displayData.innerHTML = `
        <strong>Khyber Pakhtunkhwa</strong><br>Traffic Police
        <br>
        <hr class="dotted-line">
        <strong>Swat</strong>
        <br>
        <strong>${idValue}</strong>
        <br>
        <strong>PAID</strong>
        <br>
        Offender : ${offenderValue}
        <br>
        V.Reg# : ${vRegNumberValue}
        <br>
        <hr class="dotted-line">
        Violation Code's : ${violationCodeValue}
        <br>
        Challan Amount : PKR. ${challanAmountValue.toFixed(0)}
        <br>
        Service Fee     : PKR. ${serviceFeeValue.toFixed(0)}
        <br>
        <hr class="dotted-line">
        Total Amount    : PKR. ${totalAmountValue.toFixed(0)}
        <br>
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(combinedValues)}&size=50x50" alt="QR Code">

        <p>Received by: TO Farhan Ali (1725)</p>
        <p>at ${new Date().toLocaleString()}</p>
        <p>Traffic Police Helpline 1915.</p>
    `;

    // Show the custom-designed page
    const displayPage = document.getElementById('displayPage');
    displayPage.classList.remove('hidden');
}

// Function to generate a random number with at least ten digits
function generateRandomId() {
    const min = Math.pow(10, 9); // 10^9
    const max = Math.pow(10, 10) - 1; // 10^10 - 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function printDisplayPage() {
    window.print();
}
