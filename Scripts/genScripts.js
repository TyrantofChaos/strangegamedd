function loadHeader()
{
    const headerTarget = document.getElementById("siteHeader");
    if (!headerTarget) return;

    fetch('../Reusables/Header.html', {method: 'HEAD'}).then(response=>
        {
            if (response.ok)
            {
                // File Exists, now fetch
                return fetch('../Reusables/header.html');
            } else
            {
                throw new Error('Header not found.');
            }
        })
        .then(response => response.text())
        .then(data => { headerTarget.innerHTML = data; })
        .catch(error => console.error("Header Load Error: ", error));
}

function loadFooter()
{
    const footerTarget = document.getElementById("siteFooter");
    if (!footerTarget) return;

    fetch('../Reusables/Footer.html', {method: 'HEAD'}).then(response =>
    {
        if (response.ok)
        {
            return fetch('../Reusables/Footer.html');
        } else
        {
            throw new Error('Footer not found.');
        }
    })
    .then(response => response.text())
    .then(data => {footerTarget.innerHTML = data;})
    .catch(error => console.error(error));

}

window.addEventListener('DOMContentLoaded', () =>
{
    loadHeader();
    loadFooter();
})

