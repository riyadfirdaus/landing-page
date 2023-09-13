const mediumDevice = window.matchMedia("(min-width: 720px)");
const buttonContainer = document.querySelector("#button-container");
const sidebarButton = document.querySelector("#sidebar-btn");
const navigation = document.querySelector("#navigation");
const sidebar = document.querySelector("#sidebar");

let isOpen = false;

sidebarButton.addEventListener("click", (e) => {
  if (isOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

function openSidebar() {
  isOpen = true;
  sidebarButton.textContent = "close";
  sidebar.classList.remove("hidden");
}

function closeSidebar() {
  isOpen = false;
  sidebarButton.textContent = "menu";
  sidebar.classList.add("hidden");
}

function createSidebarMenu() {
  const nav = document.querySelector("#navigation");
  const button = document.querySelector("#header-button");
  const navbar = document.querySelector("#navbar");
  nav.classList.add("hidden");
  button.classList.add("hidden");
  buttonContainer.classList.remove("hidden");
}
function removeSidebarMenu() {
  const nav = document.querySelector("#navigation");
  const button = document.querySelector("#header-button");
  const navbar = document.querySelector("#navbar");
  nav.classList.remove("hidden");
  button.classList.remove("hidden");
  buttonContainer.classList.add("hidden");
}

if (mediumDevice.matches) {
  removeSidebarMenu();
  closeSidebar();
} else {
  createSidebarMenu();
}

mediumDevice.addEventListener("change", (e) => {
  if (e.matches) {
    removeSidebarMenu();
    closeSidebar();
  } else {
    createSidebarMenu();
  }
});
