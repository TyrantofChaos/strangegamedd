function getPathPrefix()
{
    const depth = window.location.pathname.split('/').filter(Boolean);
    return '../'.repeat(depth.length);
}

function loadHeader()
{
    const headerTarget = document.getElementById("siteHeader");
    if (!headerTarget) return;
    const path = getPathPrefix() + 'Reusables/header.html';

    fetch(path, {method: 'HEAD'}).then(response=>
        {
            if (response.ok)
            {
                // File Exists, now fetch
                return fetch(path);
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
    const path = getPathPrefix() + 'Reusables/footer.html';

    fetch(path, {method: 'HEAD'}).then(response =>
    {
        if (response.ok)
        {
            return fetch(path);
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

