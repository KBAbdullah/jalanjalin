// SETTING NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Add click event listener to each nav link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Remove border bottom from all links
      navLinks.forEach(function (link) {
        link.classList.remove(
          "md:border-b-5",
          "border-b-4",
          "border-greyishBlue"
        );
      });

      // Add border bottom to clicked link
      link.classList.add("md:border-b-5", "border-b-4", "border-greyishBlue");
    });
  });
});

const formGreeting = document.querySelector(".form");

formGreeting.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("username");
  const greetingInput = document.getElementById("ucapan");

  const name = nameInput.value;
  const greeting = greetingInput.value;

  // Construct URL with form data
  const apiUrl = `https://jalanjalin-api.onrender.com/add_greeting?name=${encodeURIComponent(
    name
  )}&greeting=${encodeURIComponent(greeting)}`;

  // Make GET request to API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      fetchChatData();
      nameInput.value = "";
      greetingInput.value = "";
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
      // Display error message or handle error gracefully
    });
});

function fetchChatData() {
  // Fetch chat data
  fetch("https://jalanjalin-api.onrender.com/all_greetings")
    .then((response) => response.json())
    .then((res) => {
      const datas = res.data;
      let chats = "";
      let chats_greeting = "";
      datas.forEach((chat) => {
        const dateString = chat.datetime;
        const date = moment(dateString);
        const formattedDate = date.format("DD MMM YYYY HH:mm");
        chats += `<div class="font-poppins item-chat flex justify-start gap-2.5 mb-5">
          <div
            class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-whiten shadow rounded-e-xl rounded-es-xl"
          >
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="font-croissantOne text-sm text-gray-900 dark:text-white"
                >${chat.name}</span
              >
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
                >${formattedDate}</span
              >
            </div>
            <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              ${chat.greeting}
            </p>
          </div>
        </div>`;
        // chats_greeting += `<div
        //   class="bg-lightVintage md:py-10 md:px-10 py-4 px-4 md:shadow-lg shadow rounded-2xl rounded-tl-none"
        // >
        //   <div class="flex gap-x-4">
        //     <p
        //       class="font-poppins font-semibold text-darkBlue md:text-lg text-sm pt-0 pb-1"
        //     >
        //       ${chat.name}
        //     </p>
        //     <span class="font-poppins text-sm font-normal text-vintage"
        //       >${formattedDate}</span
        //     >
        //   </div>
        //   <p class="font-poppins font-normal text-darkBlue md:text-lg text-sm">
        //     ${chat.greeting}
        //   </p>
        // </div>`;
      });
      console.log(chats);
      document.getElementById("chats").innerHTML = chats;
      // document.getElementById("greeting-chats").innerHTML = chats_greeting;
    })
    .catch((error) => console.log(error));
}

function fetchLatest() {
  fetch("https://jalanjalin-api.onrender.com/all_greetings")
    .then((response) => response.json())
    .then((res) => {
      const datas = res.data;

      // Get the three latest data
      const latestData = datas.slice(0, 3);

      let chats_greeting = "";
      latestData.forEach((chat) => {
        const dateString = chat.datetime;
        const date = moment(dateString);
        const formattedDate = date.format("DD MMM YYYY HH:mm");
        chats_greeting += `<div
          class="bg-lightVintage md:py-10 md:px-10 py-4 px-4 md:shadow-lg shadow rounded-2xl rounded-tl-none"
        >
          <div class="flex gap-x-4">
            <p
              class="font-poppins font-semibold text-darkBlue md:text-lg text-sm pt-0 pb-1"
            >
              ${chat.name}
            </p>
            <span class="font-poppins text-sm font-normal text-vintage"
              >${formattedDate}</span
            >
          </div>
          <p class="font-poppins font-normal text-darkBlue md:text-lg text-sm">
            ${chat.greeting}
          </p>
        </div>`;
      });
      console.log(chats);
      document.getElementById("greeting-chats").innerHTML = chats_greeting;
    })
    .catch((error) => console.log(error));
}

fetchLatest();
// Initial fetch of chat data
fetchChatData();

document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  const toggleButton = document.getElementById("toggleMusic");

  toggleButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      toggleButton.classList.add("animate-spin");
    } else {
      backgroundMusic.pause();
      toggleButton.classList.remove("animate-spin");
    }
  });
});

