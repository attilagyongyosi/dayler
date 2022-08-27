function init() {
    const app = document.getElementById('app');
    if (!app) { console.warn('Oh boy!'); return; }
    app.innerText = 'This is a beginning of a beautiful friendship!';
}

init();

export {};
