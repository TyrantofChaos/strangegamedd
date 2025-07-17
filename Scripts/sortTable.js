document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector(".projTable");
    const headers = table.querySelectorAll("th");

    let sortDirection = Array.from(headers).map(() => true); // Track direction per column

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            headers.forEach(h => {
            // Clear all other header arrows
            if (h !== header) h.textContent = h.textContent.replace(/[\u25B2\u25BC]/g, '');
        });
        const ascending = sortDirection[index];
        sortTableByColumn(table, index, ascending);

        //add arrow to current header
        header.textContent = header.textContent.replace(/[\u25B2\u25BC]/g, '') + (ascending ? '\u25B2' : '\u25BC');

        sortDirection[index] = !ascending; // Toggle for next click
        });
    })
})

function sortTableByColumn(table, index, ascending = true) {
    const tBody = table.querySelector("tbody");
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aText = a.children[index].textContent.trim().toLowerCase();
        const bText = b.children[index].textContent.trim().toLowerCase();

        return ascending
        ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    sortedRows.forEach(row => tBody.appendChild(row));
}