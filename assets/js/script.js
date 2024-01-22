const chatbox = document.querySelector(".chatbox");
const chatboxFooter = document.querySelector(".main-chatbox__footer");
const chatList = document.querySelector(".chat-list");
const chatListFooter = document.querySelector(".chat-list__footer");
const mobileMenuTrigger = document.querySelector(".mobile-menu__trigger");
const chatSidebar = document.querySelector(".chat-sidebar");
const pageOverlay = document.querySelector(".page-overlay");

const setChatboxHeight = () => {
  chatbox.style.height = `calc(100vh - ${
    chatbox.offsetTop + chatboxFooter.offsetHeight + 50
  }px)`;
};

const setChatListHeight = () => {
  chatList.style.height = `calc(100vh - ${
    chatList.offsetTop + chatListFooter.offsetHeight + 50
  }px)`;
};

window.addEventListener("DOMContentLoaded", () => {
  setChatboxHeight();
  setChatListHeight();
});
window.addEventListener("resize", () => {
  setChatboxHeight();
  setChatListHeight();
});

mobileMenuTrigger.addEventListener("click", () => {
  chatSidebar.classList.toggle("chat-sidebar__visible");
  pageOverlay.classList.toggle("page-overlay__visible");
});

pageOverlay.addEventListener("click", () => {
  chatSidebar.classList.remove("chat-sidebar__visible");
  pageOverlay.classList.remove("page-overlay__visible");
});
