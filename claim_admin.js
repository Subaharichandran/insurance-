document.addEventListener("DOMContentLoaded", function () {
    loadClaims();
});

function loadClaims() {
    let claims = JSON.parse(localStorage.getItem("claims")) || [];
    let table = document.getElementById("managementClaimsTable");
    table.innerHTML = "";

    claims.forEach((claim, index) => {
        let row = `<tr>
            <td>${claim.employeeName}</td>
            <td>${claim.policyID}</td>
            <td>${claim.claimType}</td>
            <td>$${claim.claimAmount}</td>
            <td><span class="badge ${claim.status === 'Approved' ? 'bg-success' : claim.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}">${claim.status}</span></td>
            <td>
                ${claim.status === "Pending" ? `
                <button class="btn btn-success btn-sm" onclick="updateClaimStatus(${index}, 'Approved')">Approve</button>
                <button class="btn btn-danger btn-sm" onclick="updateClaimStatus(${index}, 'Rejected')">Reject</button>
                ` : `<span class="text-muted">Processed</span>`}
            </td>
        </tr>`;
        table.innerHTML += row;
    });

    localStorage.setItem("claims", JSON.stringify(claims));
}

function updateClaimStatus(index, newStatus) {
    let claims = JSON.parse(localStorage.getItem("claims")) || [];
    claims[index].status = newStatus;
    localStorage.setItem("claims", JSON.stringify(claims));
    loadClaims();
    alert(`Claim ${newStatus}!`);
}