// data for tablets
const tabletData = {
    AppleiPadPro13Inch: {
        name: "Apple iPad Pro (13-inch)",
        imgSrc: "/images/Tablets/tab.png",
        specs: [
            { name: "Name: Apple iPad Pro", class: "blue" },
            { name: "Display: 13-inch OLED, 2732 x 2048 pixels", class: "blue" },
            { name: "Processor: Apple M4", class: "blue" },
            { name: "Camera: 12MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 256GB, 512GB, 1TB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $1,099", class: "red" }
        ]
    },
    AppleiPadAirM1: {
        name: "Apple iPad Air M1 (10.9-inch)",
        imgSrc: "/images/Tablets/tab1.png",
        specs: [
            { name: "Name: Apple iPad Air M1", class: "blue" },
            { name: "Display: 10.9-inch Liquid Retina, 2360 x 1640 pixels", class: "blue" },
            { name: "Processor: Apple M1", class: "blue" },
            { name: "Camera: 12MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 64GB, 256GB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $599", class: "red" }
        ]
    },
    SamsungGalaxyTabS10Ultra: {
        name: "Samsung Galaxy Tab S9",
        imgSrc: "/images/Tablets/tab2.png",
        specs: [
            { name: "Name: Samsung Galaxy Tab S9", class: "blue" },
            { name: "Display: 11-inch Dynamic AMOLED 2X, 2560 x 1600 pixels", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon 8 Gen 2", class: "blue" },
            { name: "Camera: 13MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 8GB, 12GB / 128GB, 256GB, 512GB", class: "blue" },
            { name: "Battery: Up to 12 hours", class: "blue" },
            { name: "Price: Starting at $799", class: "red" }
        ]
    },
    SamsungGalaxyTabS9FEPlus: {
        name: "Samsung Galaxy Tab S9 FE+",
        imgSrc: "/images/Tablets/tab3.png",
        specs: [
            { name: "Name: Samsung Galaxy Tab S9 FE+", class: "blue" },
            { name: "Display: 12.4-inch TFT LCD, 2560 x 1600 pixels", class: "blue" },
            { name: "Processor: Exynos 1380", class: "blue" },
            { name: "Camera: 8MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 6GB / 256GB", class: "blue" },
            { name: "Battery: Up to 13 hours", class: "blue" },
            { name: "Price: Starting at $599", class: "red" }
        ]
    },
    GooglePixelTablet: {
        name: "Google Pixel Tablet",
        imgSrc: "/images/Tablets/tab4.png",
        specs: [
            { name: "Name: Google Pixel Tablet", class: "blue" },
            { name: "Display: 10.95-inch LCD, 2560 x 1600 pixels", class: "blue" },
            { name: "Processor: Google Tensor G2", class: "blue" },
            { name: "Camera: 8MP / 8MP", class: "blue" },
            { name: "RAM/ROM: 8GB / 128GB", class: "blue" },
            { name: "Battery: Up to 12 hours", class: "blue" },
            { name: "Price: Starting at $499", class: "red" }
        ]
    },
    OnePlusPad: {
        name: "OnePlus Pad",
        imgSrc: "/images/Tablets/tab5.png",
        specs: [
            { name: "Name: OnePlus Pad", class: "blue" },
            { name: "Display: 11.61-inch LCD, 2800 x 2000 pixels", class: "blue" },
            { name: "Processor: Dimensity 9000", class: "blue" },
            { name: "Camera: 13MP / 8MP", class: "blue" },
            { name: "RAM/ROM: 12GB / 128GB", class: "blue" },
            { name: "Battery: Up to 12 hours", class: "blue" },
            { name: "Price: Starting at $479", class: "red" }
        ]
    },
    AmazonFire11Max: {
        name: "Amazon Fire 11 Max",
        imgSrc: "/images/Tablets/tab6.png",
        specs: [
            { name: "Name: Amazon Fire 11 Max", class: "blue" },
            { name: "Display: 11-inch, 2000 x 1200 pixels", class: "blue" },
            { name: "Processor: 2.2GHz Octa-core", class: "blue" },
            { name: "Camera: 8MP / 5MP", class: "blue" },
            { name: "RAM/ROM: 4GB / 64GB", class: "blue" },
            { name: "Battery: Up to 14 hours", class: "blue" },
            { name: "Price: Starting at $329", class: "red" }
        ]
    },
    MicrosoftSurfaceGo2: {
        name: "Microsoft Surface Go 2",
        imgSrc: "/images/Tablets/tab7.png",
        specs: [
            { name: "Name: Microsoft Surface Go 2", class: "blue" },
            { name: "Display: 10.5-inch PixelSense, 1920 x 1280 pixels", class: "blue" },
            { name: "Processor: Intel Core m3", class: "blue" },
            { name: "Camera: 8MP / 5MP", class: "blue" },
            { name: "RAM/ROM: 8GB / 64GB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $399", class: "red" }
        ]
    },
    XiaomiPad5: {
        name: "Xiaomi Pad 5",
        imgSrc: "/images/Tablets/tab8.png",
        specs: [
            { name: "Name: Xiaomi Pad 5", class: "blue" },
            { name: "Display: 11-inch IPS LCD, 2560 x 1600 pixels", class: "blue" },
            { name: "Processor: Snapdragon 860", class: "blue" },
            { name: "Camera: 13MP / 8MP", class: "blue" },
            { name: "RAM/ROM: 6GB / 128GB, 256GB", class: "blue" },
            { name: "Battery: Up to 11 hours", class: "blue" },
            { name: "Price: Starting at $399", class: "red" }
        ]
    },
    LenovoTabM10PlusGen3: {
        name: "Lenovo Tab M10 Plus Gen 3",
        imgSrc: "/images/Tablets/tab9.png",
        specs: [
            { name: "Name: Lenovo Tab M10 Plus Gen 3", class: "blue" },
            { name: "Display: 10.6-inch IPS LCD, 2000 x 1200 pixels", class: "blue" },
            { name: "Processor: MediaTek Helio G80", class: "blue" },
            { name: "Camera: 8MP / 8MP", class: "blue" },
            { name: "RAM/ROM: 4GB / 64GB", class: "blue" },
            { name: "Battery: Up to 12 hours", class: "blue" },
            { name: "Price: Starting at $189", class: "red" }
        ]
    },
    AppleiPadMini6thGen: {
        name: "Apple iPad Mini (6th Gen)",
        imgSrc: "/images/Tablets/tab10.png",
        specs: [
            { name: "Name: Apple iPad Mini (6th Gen)", class: "blue" },
            { name: "Display: 8.3-inch Liquid Retina, 2266 x 1488 pixels", class: "blue" },
            { name: "Processor: A15 Bionic", class: "blue" },
            { name: "Camera: 12MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 64GB, 256GB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $499", class: "red" }
        ]
    },
    LenovoLegionTab2025: {
        name: "Lenovo Legion Tab (2025)",
        imgSrc: "/images/Tablets/tab11.png",
        specs: [
            { name: "Name: Lenovo Legion Tab", class: "blue" },
            { name: "Display: 8.8-inch LCD, 2560 x 1600 pixels, 165Hz refresh rate", class: "blue" },
            { name: "Processor: Snapdragon 8 Gen 3", class: "blue" },
            { name: "Camera: 13MP / 8MP", class: "blue" },
            { name: "RAM/ROM: 12GB / 256GB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $499.99", class: "red" }
        ]
    },
    AppleiPad10thGen: {
        name: "Apple iPad 10th Gen (2022)",
        imgSrc: "/images/Tablets/tab12.png",
        specs: [
            { name: "Name: Apple iPad 10th Gen", class: "blue" },
            { name: "Display: 10.9-inch Liquid Retina, 2360 x 1640 pixels", class: "blue" },
            { name: "Processor: A14 Bionic", class: "blue" },
            { name: "Camera: 12MP / 12MP", class: "blue" },
            { name: "RAM/ROM: 64GB, 256GB", class: "blue" },
            { name: "Battery: Up to 10 hours", class: "blue" },
            { name: "Price: Starting at $449", class: "red" }
        ]
    },
    AmazonFireHD102023: {
        name: "Amazon Fire HD 10 (2023)",
        imgSrc: "/images/Tablets/tab13.png",
        specs: [
            { name: "Name: Amazon Fire HD 10 (2023)", class: "blue" },
            { name: "Display: 10.1-inch, 1920 x 1200 pixels", class: "blue" },
            { name: "Processor: MediaTek MT8183", class: "blue" },
            { name: "Camera: 5MP / 2MP", class: "blue" },
            { name: "RAM/ROM: 3GB / 32GB", class: "blue" },
            { name: "Battery: Up to 12 hours", class: "blue" },
            { name: "Price: Starting at $149.99", class: "red" }
        ]
    }
};

// Function to update the comparison based on user selection
function updateComparison() {
    for (let i = 1; i <= 3; i++) {
        const tabletSelector = document.getElementById(`tablet${i}`);
        const imgElement = document.getElementById(`image${i}`);
        const specsElement = document.getElementById(`specs${i}`);

        if (!tabletSelector || !imgElement || !specsElement) {
            console.error(`Missing DOM element(s) for tablet${i}`);
            continue;
        }

        const selectedTablet = tabletSelector.value;

        if (selectedTablet && tabletData[selectedTablet]) {
            const tablet = tabletData[selectedTablet];
            imgElement.src = tablet.imgSrc || "";
            specsElement.innerHTML = tablet.specs.map(spec =>
                `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("") || "<div>No specs available</div>";
        } else {
            imgElement.src = "";
            specsElement.innerHTML = "<div>Please select a tablet</div>";
        }
    }
}

// Simulated function to fetch tablet data
async function fetchTabletData(tablet) {
    // Simulate fetching data from an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tabletData[tablet]) {
                resolve(tabletData[tablet]);
            } else {
                reject(new Error(`Tablet data not found for ${tablet}`));
            }
        }, 1); // Simulate network delay
    });
}

// Event listener for tablet selection
document.querySelectorAll('.tablet-selector').forEach(selector => {
    selector.addEventListener('change', async (event) => {
        const selectedValue = event.target.value;
        const cardElement = event.target.closest('.product-card');
        const imgElement = cardElement ? cardElement.querySelector('img') : null;
        const specsElement = cardElement ? cardElement.querySelector('.specs') : null;

        if (!imgElement || !specsElement) {
            console.error("Image or specs element missing in card.");
            return;
        }

        try {
            const tablet = await fetchTabletData(selectedValue);
            imgElement.src = tablet.imgSrc || "";
            specsElement.innerHTML = tablet.specs.map(spec =>
                `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("") || "<div>No specs available</div>";
        } catch (error) {
            console.error(error.message);
            imgElement.src = "";
            specsElement.innerHTML = "<div>Error loading tablet data</div>";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("VersusHub Tablets loaded successfully");
});
