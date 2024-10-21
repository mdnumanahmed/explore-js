// Global variable to store loaded data
let loadedTools;
// Funtion to Load all AI Tools from api
const loadTools = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const tools = data.data.tools;
  loadedTools = data.data.tools;
  displayTools(tools);
};

// Function to display data in the UI
const displayTools = (tools) => {
  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.textContent = "";
  tools.forEach((tool) => {
    // console.log(tool.features);
    const { image, features, name, published_in } = tool;
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

loadTools();
