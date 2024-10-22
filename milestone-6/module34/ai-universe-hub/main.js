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

  // to show tool details call the function
  showToolDetails(tool);
  show_details_modal.showModal();
};

// Set Details Data on the modal
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

  // Show Features inside Modal
  const showFeatures = (features) => {
    let text = "";
    for (const feature in features) {
      text += `<li>${features[feature]?.feature_name}</li>`;
    }
    return text;
  };

  // Show Integrations inside Modal
  const showIntegrations = (integrations) => {
    let text = "";
    for (const intg of integrations) {
      text += `<li>${intg}</li>`;
    }
    return text;
  };
  // select Modal Container from the DOM and set data
  const showDetailModal = document.getElementById("show_details_modal");
  showDetailModal.innerHTML = `
  <div class="modal-box !max-w-screen-lg p-20 overflow-y-visible">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="bg-pink-50 rounded-xl p-7 shadow-lg">
        <h3 class="text-lg font-semibold mb-4 work-sans">
          ${description ? description : "No description available"}
        </h3>
        <div class="flex gap-3">
          ${
            pricing
              ? pricing?.map(
                  (price) =>
                    `<p class="text-base text-center font-semibold bg-white p-3 rounded-lg text-green-600">
              ${price?.price.split(" ").slice(0, 2).join(" ")} ${price?.plan}
            </p>`
                )
              : `<p class="text-base mx-auto text-center font-semibold bg-white p-3 rounded-lg text-green-600">
              Pricing Data not available
            </p>`
          }          
        </div>
        <div class="flex gap-5">
          <div class="grow">
            <h3 class="text-2xl font-semibold work-snas my-4">Features</h3>
            <ul class="list-disc pl-4">
            ${features ? showFeatures(features) : "Data not found"}
            </ul>
          </div>
          <div class="grow-0">
            <h3 class="text-2xl font-semibold work-snas my-4">Integrations</h3>
            <ul class="list-disc pl-4">
            
            ${integrations ? showIntegrations(integrations) : "Data not found"}
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-pink-50 rounded-xl p-7 shadow-lg">
        <div class="relative">
        <img src="${
          image_link[0]
            ? image_link[0]
            : "https://image-placeholder.com/images/actual-size/1920x1080.png"
        }" alt="" class="rounded-xl" />
        <span class="${
          accuracy.score ? "inline-block" : "hidden"
        } px-4 py-2 work-sans font-semibold bg-[#EB5757] text-white rounded-lg absolute top-2 right-2">
        ${accuracy?.score * 100 + "% accuracy"}</span>
        </div>
        <div class="text-center mt-3">
        <h3 class="text-lg font-bold">${
          input_output_examples
            ? input_output_examples[0]?.input
            : "No input data found"
        }</h3>
        <p class="py-4">
         ${
           input_output_examples
             ? input_output_examples[0]?.output
             : "No output data found"
         }
        </p>
        </div>
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
