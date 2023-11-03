// Add a scroll event listener to change the menu style when scrolled
window.addEventListener('scroll', () => {
    const navigation = document.getElementById('navigation');
    if (window.scrollY > 50) {
        navigation.style.backgroundColor = '#222';
    } else {
        navigation.style.backgroundColor = '#333';
    }
});
