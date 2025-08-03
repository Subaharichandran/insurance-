document.getElementById("claimForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let claims = JSON.parse(localStorage.getItem("claims")) || [];

    let claim = {
        employeeName: document.getElementById("employeeName").value,
        policyID: document.getElementById("policyID").value,
        claimType: document.getElementById("claimType").value,
        claimAmount: document.getElementById("claimAmount").value,
        proofDocument: document.getElementById("proofDocument").value,
        status: "Pending",
        referenceNumber: "REF" + Math.floor(Math.random() * 1000000)
    };

    claims.push(claim);
    localStorage.setItem("claims", JSON.stringify(claims));

    document.getElementById("successMessage").style.display = "block";
    document.getElementById("claimForm").reset();
});
