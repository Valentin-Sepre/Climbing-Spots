const lightMode = document.getElementById('lightmode')

lightMode.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme')

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})
