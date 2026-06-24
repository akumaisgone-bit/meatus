// PRODUCTS DATABASE
const PRODUCTS = [
    // MUTTON MENU
    {
        id: "mutton-curry-cut",
        name: "Premium Mutton Curry Cut",
        category: "mutton",
        price: 800,
        unit: "kg",
        desc: "Fresh raw mutton cut into perfect bone-in curry pieces. Juicy and tender.",
        badge: "Best Seller",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "mutton-boneless",
        name: "Premium Mutton Boneless",
        category: "mutton",
        price: 950,
        unit: "kg",
        desc: "100% boneless premium mutton cuts from clean, farm-reared livestock.",
        badge: "Premium",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "keema-kaleji",
        name: "Pure Gold Keema & Kaleji",
        category: "mutton",
        price: 800,
        unit: "kg",
        desc: "Finely minced fresh mutton keema combined with fresh liver pieces.",
        badge: "Specialty",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "mutton-liver",
        name: "Mutton Liver (Kaleji)",
        category: "mutton",
        price: 800,
        unit: "kg",
        desc: "Rich, fresh mutton liver cuts. Ideal for frying and traditional gravies.",
        badge: "Fresh Stock",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "mutton-paya",
        name: "Mutton Paya (Set of 4)",
        category: "mutton",
        price: 350,
        unit: "set",
        desc: "Traditionally cleaned mutton trotters (set of 4). Ideal for slow-cooked soups.",
        badge: "Clean Cut",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "siri-paye",
        name: "Siri Paye Set",
        category: "mutton",
        price: 550,
        unit: "set",
        desc: "Complete Siri and Paya set cleaned under high hygienic standards.",
        badge: "Delicacy",
        image: "assets/mutton_menu.jpg"
    },

    // FISH & SEAFOOD MENU (FROM PAGES 1 & 2)
    {
        id: "premium-basa",
        name: "Premium Basa (Pangas)",
        category: "fish",
        price: 200,
        unit: "kg",
        desc: "Soft and juicy texture freshwater catfish. Perfect for fish fry & curries.",
        badge: "Budget Choice",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "live-basa",
        name: "Live Basa (Pangas)",
        category: "fish",
        price: 250,
        unit: "kg",
        desc: "Freshly harvested live selection, cut precisely to order for maximum flavor.",
        badge: "Live Catch",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "fresh-rohu-1kg",
        name: "Fresh Rohu (1 kg size)",
        category: "fish",
        price: 280,
        unit: "kg",
        desc: "Indian river fish with rich traditional taste. Selected from premium harvests.",
        badge: "Curry Specialist",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "fresh-rohu-large",
        name: "Fresh Rohu (Bigger than 1.5 kg)",
        category: "fish",
        price: 320,
        unit: "kg",
        desc: "Large-sized Rohu fish with more meat and thicker slices for classic fish curries.",
        badge: "Rich Taste",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "singara-fish",
        name: "Singara Fish",
        category: "fish",
        price: 450,
        unit: "kg",
        desc: "Sweet, delicate, and flavorful flesh. Perfect for mild and spicy local curries.",
        badge: "Popular",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "tilapia-fish",
        name: "Tilapia Fish",
        category: "fish",
        price: 280,
        unit: "kg",
        desc: "Mild and tender fish. Easy to cook and ideal for daily protein-rich meals.",
        badge: "Fresh Water",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "boneless-basa",
        name: "Boneless Basa Fillet",
        category: "fish",
        price: 460,
        unit: "kg",
        desc: "100% boneless basa fish fillet. Zero hassle cooking, perfect for grilling & baking.",
        badge: "100% Fillet",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "catla-fish-1kg",
        name: "Catla Fish (1 kg size)",
        category: "fish",
        price: 300,
        unit: "kg",
        desc: "Bigger pieces of freshwater Catla, containing more flesh and less bones. Great for gravy.",
        badge: "Fresh Water",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "catla-fish-large",
        name: "Catla Fish (Bigger than 1.5 kg)",
        category: "fish",
        price: 340,
        unit: "kg",
        desc: "Extra large premium Catla fish, cut into thick, clean blocks for fish fry feast.",
        badge: "Premium Cuts",
        image: "assets/fish_menu_1.jpg"
    },
    {
        id: "white-pomfret",
        name: "White Pomfret",
        category: "fish",
        price: 1200,
        unit: "kg",
        desc: "Premium quality marine sea catch. Mild flavor & soft texture. Superb for pan fry.",
        badge: "Sea Catch",
        image: "assets/fish_menu_2.jpg"
    },
    {
        id: "fresh-prawns",
        name: "Fresh Prawns (Medium-Large)",
        category: "fish",
        price: 900,
        unit: "kg",
        desc: "Juicy prawns sized 35-40 grams. Deshelled, deveined, and ideal for curries & grills.",
        badge: "Top Sells",
        image: "assets/fish_menu_2.jpg"
    },
    {
        id: "salmon-fillet",
        name: "Salmon Fillet",
        category: "fish",
        price: 3800,
        unit: "kg",
        desc: "100% premium salmon fillet. Rich in Omega-3 acids and high protein. Exquisite taste.",
        badge: "Luxury Catch",
        image: "assets/fish_menu_2.jpg"
    },

    // CHICKEN CUTS
    {
        id: "chicken-curry-cut",
        name: "Fresh Chicken Curry Cut",
        category: "chicken",
        price: 260,
        unit: "kg",
        desc: "Fresh, hygienically cleaned bone-in chicken cut into even pieces for curry cooking.",
        badge: "Fresh Daily",
        image: "assets/promo_salami.jpg"
    },
    {
        id: "chicken-boneless",
        name: "Chicken Boneless Breast",
        category: "chicken",
        price: 360,
        unit: "kg",
        desc: "Trimmed, skinless, boneless chicken breasts. Highly tender and protein dense.",
        badge: "Lean Protein",
        image: "assets/promo_salami.jpg"
    },
    {
        id: "chicken-drumsticks",
        name: "Fresh Chicken Drumsticks",
        category: "chicken",
        price: 320,
        unit: "kg",
        desc: "Skinless bone-in chicken drumsticks. Perfect for tandoori roasting or baking.",
        badge: "Juicy Cuts",
        image: "assets/promo_salami.jpg"
    },

    // FARM FRESH EGGS
    {
        id: "eggs-pack-6",
        name: "Farm Fresh Eggs (Pack of 6)",
        category: "eggs",
        price: 50,
        unit: "pkg",
        desc: "Hygienically cleaned and packed high-protein farm-fresh brown eggs.",
        badge: "Farm Fresh",
        image: "assets/logo.jpg"
    },
    {
        id: "eggs-pack-30",
        name: "Farm Fresh Eggs (Pack of 30)",
        category: "eggs",
        price: 240,
        unit: "pkg",
        desc: "Crater box containing 30 fresh eggs directly sourced from partner poultry farms.",
        badge: "Best Value",
        image: "assets/logo.jpg"
    },

    // READY TO COOK
    {
        id: "chicken-salami",
        name: "Premium Chicken Salami",
        category: "ready",
        price: 200,
        unit: "pkg",
        desc: "Protein-rich, tasty sliced chicken salami. Lightly spiced and ready to eat or pan fry.",
        badge: "Party Starter",
        image: "assets/promo_salami.jpg"
    },
    {
        id: "mutton-seekh-kebab",
        name: "Marinated Mutton Seekh Kebab",
        category: "ready",
        price: 350,
        unit: "pkg",
        desc: "Fine ground mutton blended with aromatic fresh spices. Just grill or fry.",
        badge: "Spicy",
        image: "assets/mutton_menu.jpg"
    },

    // SPECIAL CUTS
    {
        id: "lamb-chops",
        name: "Premium Lamb Chops",
        category: "special",
        price: 900,
        unit: "kg",
        desc: "Tender rib chops carved carefully. Perfect for grilling or pan roasting.",
        badge: "Gourmet",
        image: "assets/mutton_menu.jpg"
    },
    {
        id: "mutton-shoulder-cut",
        name: "Mutton Shoulder Cut (Dasti)",
        category: "special",
        price: 850,
        unit: "kg",
        desc: "Extremely flavorful shoulder meat, bone-in. Yields juicy rich curry texture.",
        badge: "Rich Flavor",
        image: "assets/mutton_menu.jpg"
    }
];

// STATE MANAGEMENT (PERSISTENT CROSS-PAGE CART)
let cart = JSON.parse(localStorage.getItem("meatus_cart")) || {};
let activeCategory = "all";
let searchQuery = "";

// DOM ELEMENTS (DYNAMIC BINDING)
const productsGrid = document.getElementById("products-grid");
const productSearchInput = document.getElementById("product-search");
const stickyCart = document.getElementById("sticky-cart");
const cartCountBadge = document.getElementById("cart-count");
const cartItemsPreview = document.getElementById("cart-items-preview");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartModal = document.getElementById("cart-modal");
const modalCartItems = document.getElementById("modal-cart-items");
const modalSubtotal = document.getElementById("modal-subtotal");
const modalTotal = document.getElementById("modal-total");
const promoAppliedMsg = document.getElementById("promo-applied-msg");

// GALLERY SLIDES FOR LIGHTBOX
const GALLERY_IMGS = [
    { src: "assets/logo.jpg", title: "Meat Us Store Front Logo" },
    { src: "assets/mutton_menu.jpg", title: "Premium Mutton Cuts Platters" },
    { src: "assets/fish_menu_1.jpg", title: "Raw Fish Rohu, Tilapia & Basa Menu" },
    { src: "assets/promo_salami.jpg", title: "Tasty Thin Sliced Chicken Salami Promotion" },
    { src: "assets/fish_menu_2.jpg", title: "Premium Marine White Pomfret, Prawns & Salmon Menu" }
];
let currentLightboxIndex = 0;

// INITIALIZE APP
window.addEventListener("DOMContentLoaded", () => {
    // Determine active menu link based on current page url
    highlightActiveNavLink();

    // Load elements safely
    renderProducts();
    updateCartBar();
    updateCartModal();
    initStickyHeader();
    initScrollAnimations();
    checkOpeningHours();
    
    // Search listener
    if(productSearchInput) {
        productSearchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    // Toggle navigation dropdown on mobile
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if(navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("open");
            navMenu.classList.toggle("active");
        });
    }
});

// HIGHLIGHT ACTIVE HEADER NAV LINK
function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        link.classList.remove("active");
        
        if (currentPath.includes(href) && href !== "#" && href !== "") {
            link.classList.add("active");
        } else if ((currentPath.endsWith("/") || currentPath.endsWith("index.html")) && (href === "index.html" || href === "#")) {
            link.classList.add("active");
        }
    });
}

// STICKY HEADER SCROLL LOGIC
function initStickyHeader() {
    const header = document.querySelector(".main-header");
    if(!header) return;
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// CHECK DYNAMIC STORE HOURS
function checkOpeningHours() {
    const badge = document.getElementById("hours-badge");
    if(!badge) return;

    const date = new Date();
    // Get current Indian Standard Time (IST) details
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const istTime = new Date(utc + (3600000 * 5.5));
    
    const hours = istTime.getHours();
    
    // Shop hours: 8:00 AM to 9:00 PM
    if(hours >= 8 && hours < 21) {
        badge.textContent = "Open Now";
        badge.className = "badge-open";
    } else {
        badge.textContent = "Closed - Opens at 8 AM";
        badge.className = "badge-closed";
    }
}

// RENDER PRODUCTS
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = "";
    
    // Filter database
    const filteredProducts = PRODUCTS.filter(prod => {
        const matchesCategory = (activeCategory === "all" || prod.category === activeCategory);
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                              prod.desc.toLowerCase().includes(searchQuery) ||
                              prod.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="text-center w-100 py-48" style="grid-column: 1/-1; padding: 60px 0;">
                <p style="color: #555555; font-size: 1.2rem;">No cuts found matching your filter/search.</p>
                <button class="btn btn-primary btn-sm mt-16" onclick="resetFilters()">Reset Search Filters</button>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(prod => {
        const qtyInCart = cart[prod.id] || 0;
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Counter HTML or Add button
        let actionHTML = "";
        if (qtyInCart > 0) {
            actionHTML = `
                <div class="cart-ctrl">
                    <button class="cart-ctrl-btn" onclick="updateQty('${prod.id}', ${qtyInCart - 1})">-</button>
                    <span class="cart-qty">${qtyInCart}</span>
                    <button class="cart-ctrl-btn" onclick="updateQty('${prod.id}', ${qtyInCart + 1})">+</button>
                </div>
            `;
        } else {
            actionHTML = `
                <button class="btn btn-outline btn-sm" onclick="updateQty('${prod.id}', 1)">
                    Add to Order
                </button>
            `;
        }

        card.innerHTML = `
            <div class="product-img-wrap">
                <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
                ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ""}
            </div>
            <div class="product-body">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.desc}</p>
                <div class="product-meta">
                    <span>✓ Fresh Raw Stock</span>
                    <span>• Clean Cut</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-now">₹${prod.price}</span>
                        <span class="price-unit">per ${prod.unit}</span>
                    </div>
                    <div class="product-action">
                        ${actionHTML}
                    </div>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// RESET SEARCH FILTERS
window.resetFilters = function() {
    searchQuery = "";
    if(productSearchInput) productSearchInput.value = "";
    activeCategory = "all";
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    const allTabBtn = document.querySelector(".tab-btn[onclick*='all']");
    if(allTabBtn) allTabBtn.classList.add("active");
    renderProducts();
};

// FILTER CATEGORY TABS
window.filterCategory = function(category) {
    activeCategory = category;
    
    // Update active tab styles
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick").includes(category)) {
            btn.classList.add("active");
        }
    });

    renderProducts();
};

// UPDATE QUANTITY IN STATE (SAVED TO LOCALSTORAGE)
window.updateQty = function(productId, qty) {
    if (qty <= 0) {
        delete cart[productId];
    } else {
        cart[productId] = qty;
    }
    
    // Persist
    localStorage.setItem("meatus_cart", JSON.stringify(cart));
    
    renderProducts();
    updateCartBar();
    updateCartModal();
};

// UPDATE STICKY BOTTOM CART BAR
function updateCartBar() {
    if(!stickyCart || !cartCountBadge || !cartItemsPreview || !cartTotalPrice) return;

    const itemIds = Object.keys(cart);
    const totalItemsCount = itemIds.reduce((sum, id) => sum + cart[id], 0);
    
    if (totalItemsCount > 0) {
        stickyCart.classList.add("active");
        cartCountBadge.textContent = totalItemsCount;
        
        // Compute total price
        let totalPrice = 0;
        let summaryItems = [];
        
        itemIds.forEach(id => {
            const product = PRODUCTS.find(p => p.id === id);
            if (product) {
                totalPrice += product.price * cart[id];
                summaryItems.push(`${product.name} (${cart[id]})`);
            }
        });
        
        cartItemsPreview.textContent = summaryItems.join(", ");
        cartTotalPrice.textContent = `₹${totalPrice}`;
    } else {
        stickyCart.classList.remove("active");
    }
}

// CLOSE OFFER BANNER
window.closePromo = function() {
    const banner = document.getElementById("promo-banner");
    if(banner) {
        banner.style.display = "none";
    }
};

// OPEN CART DETAIL MODAL
window.openCartModal = function() {
    if(cartModal) {
        cartModal.classList.add("open");
        updateCartModal();
    }
};

// CLOSE CART DETAIL MODAL
window.closeCartModal = function() {
    if(cartModal) {
        cartModal.classList.remove("open");
    }
};

// UPDATE CART MODAL CONTENT
function updateCartModal() {
    if(!modalCartItems || !modalSubtotal || !modalTotal || !promoAppliedMsg) return;
    
    modalCartItems.innerHTML = "";
    const itemIds = Object.keys(cart);
    
    if(itemIds.length === 0) {
        modalCartItems.innerHTML = `<p class="text-center" style="color: var(--text-muted); padding: 20px 0;">Your order card is empty.</p>`;
        modalSubtotal.textContent = "₹0";
        modalTotal.textContent = "₹0";
        promoAppliedMsg.style.display = "none";
        return;
    }

    let subtotal = 0;
    
    itemIds.forEach(id => {
        const product = PRODUCTS.find(p => p.id === id);
        if(product) {
            const itemCost = product.price * cart[id];
            subtotal += itemCost;
            
            const row = document.createElement("div");
            row.className = "modal-cart-row";
            row.innerHTML = `
                <div class="modal-item-info">
                    <h5>${product.name}</h5>
                    <p>₹${product.price} per ${product.unit}</p>
                </div>
                <div class="modal-item-ctrl">
                    <div class="cart-ctrl">
                        <button class="cart-ctrl-btn" onclick="updateQty('${product.id}', ${cart[id] - 1})">-</button>
                        <span class="cart-qty">${cart[id]}</span>
                        <button class="cart-ctrl-btn" onclick="updateQty('${product.id}', ${cart[id] + 1})">+</button>
                    </div>
                </div>
                <div class="modal-item-price">
                    ₹${itemCost}
                </div>
            `;
            modalCartItems.appendChild(row);
        }
    });

    // Handle Promo logic: order above 500 gets Free Chicken Salami worth Rs 200!
    const promoUnlocked = subtotal >= 500;
    if(promoUnlocked) {
        promoAppliedMsg.style.display = "block";
        
        // Add visual row for the Free Salami item
        const freeRow = document.createElement("div");
        freeRow.className = "modal-cart-row";
        freeRow.style.borderLeft = "4px solid var(--primary-red)";
        freeRow.style.paddingLeft = "8px";
        freeRow.innerHTML = `
            <div class="modal-item-info">
                <h5 style="color: var(--primary-red);">🎁 Free Chicken Salami (Promo Gift)</h5>
                <p style="color: var(--text-muted);">1 Packet (Worth ₹200)</p>
            </div>
            <div class="modal-item-ctrl">
                <span class="cart-qty" style="width: 100px; color: var(--primary-red); font-weight: bold;">FREE</span>
            </div>
            <div class="modal-item-price" style="color: #4caf50; font-weight: bold;">
                ₹0
            </div>
        `;
        modalCartItems.appendChild(freeRow);
    } else {
        promoAppliedMsg.style.display = "none";
    }

    modalSubtotal.textContent = `₹${subtotal}`;
    modalTotal.textContent = `₹${subtotal}`;
}

// CHECKOUT WHATSAPP LOGIC
window.checkoutWhatsApp = function() {
    openCartModal();
};

window.submitOrderViaModal = function() {
    const addressEl = document.getElementById("order-address");
    const address = addressEl ? addressEl.value.trim() : "";
    if(!address) {
        alert("Please enter a delivery address in Agra so we can fulfill your order!");
        if(addressEl) addressEl.focus();
        return;
    }
    
    const instructionsEl = document.getElementById("order-instructions");
    const instructions = instructionsEl ? instructionsEl.value.trim() : "";
    
    // Compile WhatsApp message string
    const itemIds = Object.keys(cart);
    let orderText = "";
    let subtotal = 0;
    
    itemIds.forEach(id => {
        const product = PRODUCTS.find(p => p.id === id);
        if(product) {
            const qty = cart[id];
            const cost = product.price * qty;
            subtotal += cost;
            orderText += `- *${product.name}* (Qty: ${qty} ${product.unit}) - ₹${cost}\n`;
        }
    });

    const isPromoEnabled = subtotal >= 500;
    if(isPromoEnabled) {
        orderText += `- *🎁 Free Chicken Salami (Promo Gift)* - *FREE* (Worth ₹200)\n`;
    }

    let message = `*NEW MEAT US ORDER* 🥩\n\n`;
    message += `🛒 *ORDER DETAILS:*\n${orderText}\n`;
    message += `💰 *BILL SUMMARY:*\n`;
    message += `- Subtotal: ₹${subtotal}\n`;
    message += `- Delivery Charge: *FREE*\n`;
    message += `- *Estimated Total: ₹${subtotal}*\n\n`;
    message += `📍 *DELIVERY ADDRESS:*\n${address}\n\n`;
    
    if(instructions) {
        message += `✍️ *SPECIAL INSTRUCTIONS:*\n${instructions}\n\n`;
    }
    
    message += `Please confirm my order and share estimated delivery time. (Agra Delivery)`;
    
    const waUrl = `https://wa.me/919045994333?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
};

// MASONRY LIGHTBOX CONTROLS
window.openLightbox = function(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    
    if(lightbox && lightboxImg) {
        currentLightboxIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = GALLERY_IMGS[index].src;
        if(lightboxCaption) lightboxCaption.textContent = GALLERY_IMGS[index].title;
    }
};

window.closeLightbox = function() {
    const lightbox = document.getElementById("lightbox");
    if(lightbox) {
        lightbox.style.display = "none";
    }
};

window.changeLightboxSlide = function(direction) {
    currentLightboxIndex += direction;
    if(currentLightboxIndex >= GALLERY_IMGS.length) {
        currentLightboxIndex = 0;
    } else if(currentLightboxIndex < 0) {
        currentLightboxIndex = GALLERY_IMGS.length - 1;
    }
    
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    
    if(lightboxImg) {
        lightboxImg.src = GALLERY_IMGS[currentLightboxIndex].src;
        if(lightboxCaption) lightboxCaption.textContent = GALLERY_IMGS[currentLightboxIndex].title;
    }
};

// CLOSE LIGHTBOX ON ESCAPE KEY
window.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.style.display === "flex") {
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowRight") {
            changeLightboxSlide(1);
        } else if (e.key === "ArrowLeft") {
            changeLightboxSlide(-1);
        }
    }
});

// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
function initScrollAnimations() {
    const triggers = document.querySelectorAll(".scroll-trigger");
    if(triggers.length === 0) return;
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    triggers.forEach(trigger => {
        observer.observe(trigger);
    });
}
