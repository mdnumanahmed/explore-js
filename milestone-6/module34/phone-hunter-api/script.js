const loadPhones = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";

  // ShowAll Btn

  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `max-w-96 rounded-xl border shadow-xl p-4`;
    phoneCard.innerHTML = `
      <div class="bg-blue-50 p-12">
        <img src="${phone.image}" alt="" class="" />
        </div>
        <div class="text-center space-y-4 p-3 mt-3">
        <h4 class="font-poppins text-2xl font-bold">${phone.phone_name}</h4>
        <p>
            There are many variations of passages of available, but the
            majority have suffered
        </p>
        <p class="font-poppins text-2xl font-bold">Brand: ${phone.brand}</p>
        <button class="btn bg-blue-600 text-white text-lg">
            Show Details
        </button>
        </div>
      `;
    phonesContainer.appendChild(phoneCard);
  });
};

const handleShowAll = () => {};

loadPhones();
