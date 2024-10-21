// Global variable to store loaded data
let loadedTools;
// Funtion to Load all AI Tools from api
const loadTools = async (dataLimit = 6) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const tools = data.data.tools;
  loadedTools = data.data.tools;
  displayTools(tools, dataLimit);
};

const showMoreBtn = document.getElementById("show-more");
// Function to display data in the UI
const displayTools = (tools, dataLimit) => {
  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.textContent = "";

  if (tools.length > 6 && dataLimit) {
    tools = tools.slice(0, 6);
    showMoreBtn.classList.remove("hidden");
  } else {
    showMoreBtn.classList.add("hidden");
  }
  tools.forEach((tool) => {
    // console.log(tool.features);
    const { id, image, features, name, published_in } = tool;
    const toolCard = document.createElement("div");
    toolCard.classList = `w-96 bg-slate-50 p-8 rounded-xl shadow-lg space-y-5`;
    toolCard.innerHTML = `
      <div>
        <img src="${
          image
            ? image
            : "https://image-placeholder.com/images/actual-size/1920x1080.png"
        }" alt="" />
        <h4 class="text-2xl font-semibold work-sans mt-5">Features</h4>
         <ul class="list-outside list-decimal pl-5">
         ${features.map((feature) => `<li>${feature}</li>`).join("")}
         </ul>
        </div>
        <hr />
        <div class="flex justify-between items-center">
        <div>
            <h4 class="text-2xl font-semibold work-sans">${
              name ? name : "No Name Found"
            }</h4>
            <p><span class="mr-3">📆</span>${
              published_in ? published_in : "No Date Found"
            }</p>
        </div>
        <div>
            <button
            onclick="loadToolDetails('${id}')"
            class="bg-[#f3dbdb] text-red-600 rounded-full w-12 h-12 pb-1 text-3xl hover:bg-red-400 hover:text-white"
            >
            →
            </button>
        </div>
        </div>
      `;
    toolsContainer.appendChild(toolCard);
  });
};

// Fucntion to sort by date
const sortByDate = () => {
  const sortData = loadedTools.sort(function (a, b) {
    return new Date(a.published_in) - new Date(b.published_in);
  });
  displayTools(sortData);
};

// Load Specific tool by id
const loadToolDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const tool = data.data;
  showToolDetails(tool);
  show_details_modal.showModal();
};

const showToolDetails = (tool) => {
  console.log(tool);
  const {
    image_link,
    pricing,
    features,
    input_output_examples,
    description,
    accuracy,
    integrations,
  } = tool;
  const showDetailModal = document.getElementById("show_details_modal");
  showDetailModal.innerHTML = `
  <div class="modal-box !max-w-screen-lg overflow-y-visible">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="bg-pink-50 rounded-xl shadow-lg">
        <h3 class="text-lg font-bold">
          ${description}
        </h3>
        <div class="flex gap-6">
          <p
            class="text-lg font-semibold bg-white p-5 rounded-lg text-green-600"
          >
            $10/month Basic
          </p>
          <p
            class="text-lg font-semibold bg-white p-5 rounded-lg text-orange-600"
          >
            $50/month Pro
          </p>
          <p
            class="text-lg font-semibold bg-white p-5 rounded-lg text-red-600"
          >
            Contact us Enterprise
          </p>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div>
            <h3 class="text-2xl font-semibold work-snas my-4">Features</h3>
            <ul>
              <li>Customizable responses</li>
              <li>Multilingual support</li>
              <li>Seamless integration</li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold work-snas my-4">Integrations</h3>
            <ul>
              <li>Customizable responses</li>
              <li>Multilingual support</li>
              <li>Seamless integration</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-pink-50 rounded-xl shadow-lg">
        <img src="${image_link[0]}" alt="" />
        <h3 class="text-lg font-bold">${input_output_examples[0]?.input}</h3>
        <p class="py-4">
         ${input_output_examples[0]?.output}
        </p>
      </div>
    </div>
    <div class="modal-action absolute -top-10 -right-4">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button
          class="text-white w-10 h-10 bg-red-500 rounded-full z-[9999]"
        >
          X
        </button>
      </form>
    </div>
  </div>
  `;
};

// Show All Tools Functionality by clicking on Show More Button
showMoreBtn.addEventListener("click", function () {
  loadTools(false);
});

loadTools();
