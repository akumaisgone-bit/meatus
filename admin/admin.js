// admin.js - Interactive Demo Control for client UX review
document.addEventListener("DOMContentLoaded", () => {
    
    // Auth Gate Guard check for realism
    if (localStorage.getItem("admin_demo_session") !== "active") {
        window.location.href = "index.html";
        return;
    }

    // Initialize state database
    let MOCK_PRODUCTS = [
        {
            id: "mutton-curry-cut",
            name: "Premium Mutton Curry Cut",
            category: "mutton",
            price: 800,
            unit: "kg",
            badge: "Best Seller",
            inStock: true,
            image: "../assets/mutton_menu.jpg"
        },
        {
            id: "mutton-boneless",
            name: "Premium Mutton Boneless",
            category: "mutton",
            price: 950,
            unit: "kg",
            badge: "Premium",
            inStock: true,
            image: "../assets/mutton_menu.jpg"
        },
        {
            id: "live-basa",
            name: "Live Basa (Pangas)",
            category: "fish",
            price: 250,
            unit: "kg",
            badge: "Live Catch",
            inStock: true,
            image: "../assets/fish_menu_1.jpg"
        },
        {
            id: "chicken-drumsticks",
            name: "Fresh Chicken Drumsticks",
            category: "chicken",
            price: 320,
            unit: "kg",
            badge: "Juicy Cuts",
            inStock: false,
            image: "../assets/promo_salami.jpg"
        },
        {
            id: "eggs-pack-30",
            name: "Farm Fresh Eggs (Pack of 30)",
            category: "eggs",
            price: 240,
            unit: "pkg",
            badge: "Best Value",
            inStock: true,
            image: "../assets/logo.jpg"
        }
    ];

    let currentEditingId = null;

    // DOM Elements
    const tabItems = document.querySelectorAll(".nav-item[data-tab]");
    const tabViews = document.querySelectorAll(".tab-view");
    const productsTableBody = document.getElementById("products-table-body");
    const searchInput = document.getElementById("product-search");
    const logoutBtn = document.getElementById("logout-btn");
    const addProductBtn = document.getElementById("add-product-btn");
    
    // Modal Elements
    const editModal = document.getElementById("edit-modal");
    const closeModalBtn = document.getElementById("modal-close-btn");
    const cancelModalBtn = document.getElementById("modal-cancel-btn");
    const editForm = document.getElementById("edit-form");
    const modalTitle = document.getElementById("modal-title");

    // Toast Notification
    const toast = document.getElementById("success-toast");

    // Initialize Table
    renderProducts(MOCK_PRODUCTS);

    // TAB ROUTING LOGIC
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetTab = tab.getAttribute("data-tab");
            
            // Toggle active sidebar tab
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Toggle active content view
            tabViews.forEach(view => {
                view.classList.remove("active");
                if (view.id === `${targetTab}-tab`) {
                    view.classList.add("active");
                }
            });
        });
    });

    // RENDER PRODUCTS TABLE
    function renderProducts(productsList) {
        if (!productsTableBody) return;
        productsTableBody.innerHTML = "";

        if (productsList.length === 0) {
            productsTableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">
                        No products found matching your criteria.
                    </td>
                </tr>
            `;
            return;
        }

        productsList.forEach(prod => {
            const row = document.createElement("tr");
            row.setAttribute("data-product-id", prod.id);
            row.innerHTML = `
                <td>
                    <div class="product-cell">
                        <img src="${prod.image}" alt="${prod.name}" class="product-thumb">
                        <div class="product-meta-cell">
                            <h4>${prod.name}</h4>
                            <span class="badge-tag ${prod.category}">${prod.category}</span>
                        </div>
                    </div>
                </td>
                <td>₹${prod.price} <span style="font-size:0.8rem; color:var(--text-muted);">/ per ${prod.unit}</span></td>
                <td>${prod.badge ? `<span style="border: 1px solid var(--border-color); padding: 2px 6px; border-radius: 4px; font-size:0.75rem;">${prod.badge}</span>` : '<span style="color:var(--text-muted); font-size:0.8rem;">None</span>'}</td>
                <td>
                    <span class="status-badge ${prod.inStock ? 'in-stock' : 'out-of-stock'}">
                        <span class="status-dot"></span>
                        ${prod.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit-btn" title="Edit Product">⚙️</button>
                        <button class="btn-icon delete delete-btn" title="Delete Product">🗑️</button>
                    </div>
                </td>
            `;

            // Bind Event Listeners immediately
            row.querySelector(".edit-btn").addEventListener("click", () => openEditModal(prod.id));
            row.querySelector(".delete-btn").addEventListener("click", () => deleteProduct(prod.id));

            productsTableBody.appendChild(row);
        });
    }

    // SEARCH FILTER LOGIC
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = MOCK_PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                (p.badge && p.badge.toLowerCase().includes(query))
            );
            renderProducts(filtered);
        });
    }

    // DELETE PRODUCT LOGIC
    function deleteProduct(id) {
        // Find product index in memory
        const index = MOCK_PRODUCTS.findIndex(p => p.id === id);
        if (index > -1) {
            MOCK_PRODUCTS.splice(index, 1);
            
            // Dynamic animation deletion from DOM
            const row = document.querySelector(`tr[data-product-id="${id}"]`);
            if (row) {
                row.style.transition = "all 0.3s ease";
                row.style.opacity = "0";
                row.style.transform = "translateX(-20px)";
                setTimeout(() => {
                    row.remove();
                    // Show delete status
                    showToast("Product deleted successfully");
                }, 300);
            }
        }
    }

    // MODAL WINDOW MANAGEMENT
    function openEditModal(id = null) {
        currentEditingId = id;
        
        if (id) {
            // Edit Mode - Prepopulate Form
            const prod = MOCK_PRODUCTS.find(p => p.id === id);
            if (!prod) return;
            
            modalTitle.textContent = "Edit Product Details";
            document.getElementById("prod-name").value = prod.name;
            document.getElementById("prod-category").value = prod.category;
            document.getElementById("prod-price").value = prod.price;
            document.getElementById("prod-unit").value = prod.unit;
            document.getElementById("prod-badge").value = prod.badge || "";
            document.getElementById("prod-instock").checked = prod.inStock;
        } else {
            // Add Mode - Clear Form
            modalTitle.textContent = "Add New Product";
            editForm.reset();
        }

        editModal.classList.add("active");
    }

    function closeModal() {
        editModal.classList.remove("active");
        currentEditingId = null;
    }

    [closeModalBtn, cancelModalBtn].forEach(btn => {
        if (btn) btn.addEventListener("click", closeModal);
    });

    // Trigger open on Add Button
    if (addProductBtn) {
        addProductBtn.addEventListener("click", () => openEditModal(null));
    }

    // FORM SAVE SUBMISSION
    if (editForm) {
        editForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Collect Form Inputs
            const name = document.getElementById("prod-name").value.trim();
            const category = document.getElementById("prod-category").value;
            const price = parseFloat(document.getElementById("prod-price").value);
            const unit = document.getElementById("prod-unit").value;
            const badge = document.getElementById("prod-badge").value.trim();
            const inStock = document.getElementById("prod-instock").checked;

            if (currentEditingId) {
                // Update Mode
                const index = MOCK_PRODUCTS.findIndex(p => p.id === currentEditingId);
                if (index > -1) {
                    MOCK_PRODUCTS[index] = {
                        ...MOCK_PRODUCTS[index],
                        name,
                        category,
                        price,
                        unit,
                        badge,
                        inStock
                    };
                    showToast("Changes Published");
                }
            } else {
                // Add Mode
                const newId = name.toLowerCase().replace(/\s+/g, "-") + Math.floor(Math.random() * 1000);
                const mockImage = category === "mutton" ? "../assets/mutton_menu.jpg" :
                                  category === "fish" ? "../assets/fish_menu_1.jpg" :
                                  category === "chicken" ? "../assets/promo_salami.jpg" : "../assets/logo.jpg";
                
                MOCK_PRODUCTS.unshift({
                    id: newId,
                    name,
                    category,
                    price,
                    unit,
                    badge,
                    inStock,
                    image: mockImage
                });
                showToast("Product Added Successfully");
            }

            // Sync Table and Hide Modal
            renderProducts(MOCK_PRODUCTS);
            closeModal();
        });
    }

    // TOAST UTILITIES
    function showToast(message) {
        if (!toast) return;
        toast.querySelector(".toast-message").textContent = message;
        toast.classList.add("show");
        
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // LOGOUT CONTROLS
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("admin_demo_session");
            window.location.href = "index.html";
        });
    }

    // SETTINGS SUBMISSION FORM
    const settingsForm = document.getElementById("settings-form");
    if (settingsForm) {
        settingsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Settings Updated");
        });
    }
});
