function loadHeader()
{
    const headerTarget = document.getElementById("siteHeader");
    if (headerTarget)
    {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {headerTarget.innerHTML = data;})
            .catch(error => console.error(error));
    }
}

function loadFooter()
{
    const footerTarget = document.getElementById("siteFooter");
    if (footerTarget)
    {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => { footerTarget.innerHTML = data;})
            .catch(error => console.error(error));
    }
}

window.addEventListener('DOMContentLoaded', () =>
{
    loadHeader();
    loadFooter();
})

