const chatbox = document.querySelector(".chatbox");
const chatboxFooter = document.querySelector(".main-chatbox__footer");
const chatList = document.querySelector(".chat-list");
const chatListFooter = document.querySelector(".chat-list__footer");
const mobileMenuTrigger = document.querySelector(".mobile-menu__trigger");
const chatSidebar = document.querySelector(".chat-sidebar");
const pageOverlay = document.querySelector(".page-overlay");
const chatForm = document.querySelector("#chat-form");

const setChatboxHeight = () => {
  chatbox.style.height = `calc(100vh - ${
    chatbox.offsetTop + chatboxFooter.offsetHeight + 55
  }px)`;
};

const setChatListHeight = () => {
  chatList.style.height = `calc(100vh - ${
    chatList.offsetTop + chatListFooter.offsetHeight + 55
  }px)`;
};

window.addEventListener("DOMContentLoaded", () => {
  setChatboxHeight();
  setChatListHeight();
  chatbox.scrollTo(0, chatbox.scrollHeight + 50);
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

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = chatForm.querySelector("#query-input");
  const formInputValue = formInput.value;
  if (formInputValue != "") {
    chatbox.innerHTML += `<p class="chat-message user-message">${formInputValue}</p>`;
  }
  chatbox.innerHTML += `<p class="chat-message bot-message">Hello Sir..</p>`;
  formInput.value = "";
  chatbox.scrollTo(0, chatbox.scrollHeight);
});