function searchClaim() {
    const policyNumber = document.getElementById("policySearch").value.trim();
    if (!policyNumber) {
        alert("Please enter a policy number.");
        return;
    }

    const claims = JSON.parse(localStorage.getItem("claims")) || [];
    const claim = claims.find(c => c.policyNumber === policyNumber);

    const resultDiv = document.getElementById("statusResult");
    resultDiv.innerHTML = ""; // Clear previous result

    if (claim) {
        let statusMessage;
        let alertClass;

        if (claim.status === "Approved") {
            statusMessage = "Your claim has been approved.";
            alertClass = "alert-success";
        } else if (claim.status === "Rejected") {
            statusMessage = "Your claim has been rejected.";
            alertClass = "alert-danger";
        } else {
            statusMessage = "Your claim is in process.";
            alertClass = "alert-warning";
        }

        resultDiv.innerHTML = `
            <div class="alert ${alertClass}">
                <strong>Claim Status:</strong> ${statusMessage}<br>
                <strong>Reference Number:</strong> ${claim.referenceNumber}<br>
                <strong>Claim Type:</strong> ${claim.claimType}<br>
                <strong>Amount:</strong> $${claim.claimAmount}<br>
                ${claim.status === "Rejected" ? `<strong>Reason:</strong> ${claim.reason}` : ""}
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<div class="alert alert-warning">No claim found for this policy number.</div>`;
    }
}
