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

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to trigger the transition
      entry.target.classList.add("opacity-100");
    } else {
      // Remove the class if not intersecting
      entry.target.classList.remove("opacity-100");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// const greetingElement = document.getElementById("greeting");
// observer.observe(greetingElement);

// FETCH UCAPAN
fetch("https://jalanjalin-api.onrender.com/all_greetings")
  .then((response) => response.json())
  .then((res) => {
    const datas = res.data;
    let chats = "";
    datas.forEach((chat) => {
      const dateString = chat.datetime;
      const date = moment(dateString);
      const formattedDate = date.format("DD MMM YYYY HH:mm");
      chats += `<div class="item-chat flex justify-center gap-2.5 mb-5">
          <div
            class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
          >
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white"
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
    });
    console.log(chats);
    document.getElementById("chats").innerHTML = chats;
  })
  .catch((error) => console.log(error));

// ADD UCAPAN
const formGreeting = document.querySelector(".form");
formGreeting.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("username").value;
  const greeting = document.getElementById("ucapan").value;

  // Construct URL with form data
  const apiUrl = `https://jalanjalin-api.onrender.com/add_greeting?name=${encodeURIComponent(
    name
  )}&greeting=${encodeURIComponent(greeting)}`;

  // Make GET request to API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Handle response data if needed
      console.log(data);
      // For example, you can display a success message or update UI
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
      // Display error message or handle error gracefully
    });
});
