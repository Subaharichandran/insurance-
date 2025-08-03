const employeeData = {
    "Management Team": { count: 3, deduction: 5000 },
    "HODs": { count: 5, deduction: 4500 },
    "Professors": { count: 10, deduction: 4000 },
    "Assistant Professors": { count: 15, deduction: 3000 },
    "Trainers": { count: 8, deduction: 2500 },
    "Non-Teaching Staff": { count: 12, deduction: 2000 },
    "House keeping": { count: 6, deduction: 1500 },
    "Transportation Team": {count:17, deduction:1700}
};

// Navigate from Dashboard to Payment Form
function navigateToForm(group) {
    window.location.href = `payment_form.html?employeeGroup=${encodeURIComponent(group)}`;
}

// Load Employee Group & Auto-Fill Data in Payment Form
function loadFormDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get("employeeGroup") || "Management Team"; 

    document.getElementById("employeeGroup").value = group;
    document.getElementById("numEmployees").value = employeeData[group].count;
    document.getElementById("deductionPerPerson").value = `${employeeData[group].deduction}`;
    document.getElementById("totalAmount").value = `${employeeData[group].count * employeeData[group].deduction}`;

    // Generate Transaction ID & Date
    document.getElementById("transactionID").value = "TXN" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("paymentDate").value = new Date().toLocaleDateString();
}

// Process Payment and Redirect to Success Page
function processPayment() {
    const params = new URLSearchParams({
        transactionID: document.getElementById("transactionID").value,
        policyType: document.getElementById("policyType").value,
        employeeGroup: document.getElementById("employeeGroup").value,
        totalEmployees: document.getElementById("numEmployees").value,
        totalAmount: document.getElementById("totalAmount").value,
        paymentDate: document.getElementById("paymentDate").value
    });

    window.location.href = "payment_success.html?" + params.toString();
}

// Load Success Page Data
function loadSuccessDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("transactionID").innerText = urlParams.get("transactionID");
    document.getElementById("policyType").innerText = urlParams.get("policyType");
    document.getElementById("employeeGroup").innerText = urlParams.get("employeeGroup");
    document.getElementById("numEmployees").innerText = urlParams.get("totalEmployees");
    document.getElementById("totalAmount").innerText = urlParams.get("totalAmount");
    document.getElementById("paymentDate").innerText = urlParams.get("paymentDate");
}

// Auto-load functions
if (window.location.pathname.includes("payment_form.html")) loadFormDetails();
if (window.location.pathname.includes("payment_success.html")) loadSuccessDetails();

