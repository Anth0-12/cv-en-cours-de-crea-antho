const switchThemeBtn = document.querySelector('.mode')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {
        document.documentElement.style.setProperty ('--ecriture', 'white');
        document.documentElement.style.setProperty('--background-ligne', '#3a8fd5');
        document.documentElement.style.setProperty('--background-header-footer', '#000000');
        document.documentElement.style.setProperty('--background-contenu', '#030303');
        document.documentElement.style.setProperty('--box-shadow', '#ffffff23');
        document.documentElement.style.setProperty('--border-image', '#3a8fd5');
        document.documentElement.style.setProperty('--ecriture-span', '#3a8fd5');
        document.documentElement.style.setProperty('--background-bouton', '#000000');
        document.documentElement.style.setProperty('--background-bouton-hover', 'white');
        document.documentElement.style.setProperty('--border-bouton', '#3a8fd5');
        document.documentElement.style.setProperty('--ecriture-bouton', '#3a8fd5');
        document.documentElement.style.setProperty('--ecriture-bouton-hover', '#3a8fd5');
        document.documentElement.style.setProperty('--background-barre-progr', '#d8d8d8');
        document.documentElement.style.setProperty('--fa', '#3a8fd5');

        toggleTheme++;
    }
    else {
        document.documentElement.style.setProperty ('--ecriture', '#000000');
        document.documentElement.style.setProperty('--background-ligne', '#ca1010');
        document.documentElement.style.setProperty('--background-header-footer', 'white');
        document.documentElement.style.setProperty('--background-contenu', '#f7f7f7');
        document.documentElement.style.setProperty('--box-shadow', '#00000073');
        document.documentElement.style.setProperty('--border-image', '#ca1010');
        document.documentElement.style.setProperty('--ecriture-span', '#ca1010');
        document.documentElement.style.setProperty('--background-bouton', 'white');
        document.documentElement.style.setProperty('--background-bouton-hover', '#000000');
        document.documentElement.style.setProperty('--border-bouton', '#ca1010');
        document.documentElement.style.setProperty('--ecriture-bouton', '#000000');
        document.documentElement.style.setProperty('--ecriture-bouton-hover', 'white');
        document.documentElement.style.setProperty('--background-barre-progr', '#000000');
        document.documentElement.style.setProperty('--fa', '#ca1010');

        toggleTheme--;
    }
}) 