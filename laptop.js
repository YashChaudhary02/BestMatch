// data for laptops
const laptopData = {
    macbookair: {
        name: "Macbook Air M2",
        imgSrc: "/images/Laptops/lap1.png",
        specs: [
            { name: "Name: Macbook Air M2", class: "blue" },
            { name: "Display: 13.6-inch Retina", class: "blue" },
            { name: "Processor: M2 chip", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 18 hours", class: "blue" },
            { name: "GPU: Integrated 10-core GPU", class: "blue" },
            { name: "Price: Starting at $1,250.00", class: "red" }
        ]
    },
    samsungnotebook: {
        name: "Galaxy Book 4",
        imgSrc: "/images/Laptops/lap2.png",
        specs: [
            { name: "Name: Galaxy Book 4", class: "blue" },
            { name: "Display: 15.6-inch", class: "blue" },
            { name: "Processor: Intel Core i7", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 10 hours", class: "blue" },
            { name: "GPU: Intel Iris Xe Graphics", class: "blue" },
            { name: "Price: Starting at $980.00", class: "red" }
        ]
    },
    asusvivobook: {
        name: "Asus Vivobook 16",
        imgSrc: "/images/Laptops/lap3.png",
        specs: [
            { name: "Name: Asus Vivobook 16", class: "blue" },
            { name: "Display: 16.0-inch", class: "blue" },
            { name: "Processor: AMD Ryzen 5", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 12 hours", class: "blue" },
            { name: "GPU: AMD Radeon Vega Graphics", class: "blue" },
            { name: "Price: Starting at $1,130.00", class: "red" }
        ]
    },
    microsoftsurface: {
        name: "Microsoft Surface X Elite",
        imgSrc: "/images/Laptops/lap4.png",
        specs: [
            { name: "Name: Microsoft Surface X Elite", class: "blue" },
            { name: "Display: 14.0-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon X Elite", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 10 hours", class: "blue" },
            { name: "GPU: Integrated Adreno GPU", class: "blue" },
            { name: "Price: Starting at $1,480.00", class: "red" }
        ]
    },
    lenovoideapad5: {
        name: "Lenovo IdeaPad Duet 5",
        imgSrc: "/images/Laptops/lap5.png",
        specs: [
            { name: "Name: Lenovo IdeaPad Duet 5", class: "blue" },
            { name: "Display: 13.3-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon 7 Gen2", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 16 hours", class: "blue" },
            { name: "GPU: Integrated Adreno GPU", class: "blue" },
            { name: "Price: Starting at $480.49", class: "red" }
        ]
    },
    dellxps13: {
        name: "Dell XPS 13",
        imgSrc: "/images/Laptops/lap6.png",
        specs: [
            { name: "Name: Dell XPS 13", class: "blue" },
            { name: "Display: 13.4-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon X Elite", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 17 hours", class: "blue" },
            { name: "Graphics: Integrated Adreno GPU", class: "blue" },
            { name: "Price: Starting at $1,699.99 ", class: "red" }
        ]
    },
};

// Function to update the comparison based on user selection
function updateComparison() {
    for (let i = 1; i <= 3; i++) {
        const selectedLaptop = document.getElementById(`laptop${i}`).value;
        const imgElement = document.getElementById(`image${i}`);
        const specsElement = document.getElementById(`specs${i}`);

        if (selectedLaptop) {
            const laptop = LaptopData[selectedLaptop]; // Fetch the laptop data asynchronously
            imgElement.src = laptop.imgSrc;
            specsElement.innerHTML = laptop.specs.map(
                spec => `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("");
        } else {
            // Clear image and specs if no laptop is selected
            imgElement.src = "=";
            specsElement.innerHTML = "";
        }
    }
}

// Example of how to fetch data from an API (simulated here)
async function fetchLaptopData(laptop) {
    // Simulate fetching data from an API
    // In a real application, you might use fetch() to get data from an actual endpoint.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(laptopData[laptop]);
        }, 1); // Simulate network delay
    });
}

// Event listener to automatically fetch and update data when a laptop is selected
document.querySelectorAll('.laptop-selector').forEach(selector => {
    selector.addEventListener('change', async (event) => {
        const selectedValue = event.target.value;
        const laptopData = await fetchLaptopData(selectedValue);
        const imgElement = event.target.closest('.product-card').querySelector('img');
        const specsElement = event.target.closest('.product-card').querySelector('.specs');

        if (laptopData) {
            imgElement.src = laptopData.imgSrc;
            specsElement.innerHTML = laptopData.specs.map(
                spec => `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("");
        } else {
            imgElement.src = "";
            specsElement.innerHTML = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("VersusHub loaded");
});
