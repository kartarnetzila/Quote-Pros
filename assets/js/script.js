const chatbox = document.querySelector(".chatbox");
const mobileMenuTrigger = document.querySelector(".mobile-menu__trigger");
const chatSidebar = document.querySelector(".chat-sidebar");
const pageOverlay = document.querySelector(".page-overlay");
const chatForm = document.querySelector("#chat-form");
const siteNavDropDownItems = document.querySelectorAll(
  ".site-nav__has-dropdown .site-nav__list-item-link"
);

chatbox && chatbox.scrollTo(0, chatbox.scrollHeight + 20);

mobileMenuTrigger &&
  mobileMenuTrigger.addEventListener("click", () => {
    chatSidebar.classList.toggle("chat-sidebar__visible");
    pageOverlay.classList.toggle("page-overlay__visible");
  });

mobileMenuTrigger &&
  pageOverlay.addEventListener("click", () => {
    chatSidebar.classList.remove("chat-sidebar__visible");
    pageOverlay.classList.remove("page-overlay__visible");
  });

siteNavDropDownItems &&
  siteNavDropDownItems.forEach((siteNavDropDownItem) => {
    siteNavDropDownItem.addEventListener("click", () => {
      siteNavDropDownItem.parentElement.classList.toggle(
        "site-nav__has-dropdown-open"
      );
    });
  });

chatForm &&
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInput = chatForm.querySelector("#query-input");
    const formInputValue = formInput.value;
    if (formInputValue != "") {
      chatbox.innerHTML += `<p class="chat-message user-message">${formInputValue}</p>`;
      chatbox.innerHTML += `<p class="chat-message bot-message">Hello Sir..</p>`;
      formInput.value = "";
      chatbox.scrollTo(0, chatbox.scrollHeight);
    }
  });
