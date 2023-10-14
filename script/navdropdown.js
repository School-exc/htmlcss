function toggleDrop(){
    let el = document.getElementById("nav-nest");
    el.classList.toggle("closed");
    document.getElementById("kleurbehoud").classList.toggle("kleurbehoud"); // Puur hier omdat firefox :has niet ondersteund, anders had ik :has(:not(.closed)); gebruikt)
}