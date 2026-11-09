"use strict";

const STORAGE_KEY = "andes-market-clickready-store";

const STORES = [
  {
    id: "centro",
    name: "Andes Market Santiago Centro",
    address: "Santiago Centro · Tienda piloto",
    description: "Retiro en tienda y catálogo local"
  },
  {
    id: "providencia",
    name: "Andes Market Providencia",
    address: "Providencia · Tienda piloto",
    description: "Retiro en tienda y catálogo local"
  },
  {
    id: "las-condes",
    name: "Andes Market Las Condes",
    address: "Las Condes · Tienda piloto",
    description: "Retiro en tienda y catálogo local"
  }
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Leche Entera 1 L",
    category: "Lácteos",
    price: 1190,
    unit: "1 litro",
    icon: "🥛",
    stock: [24, 18, 0]
  },
  {
    id: 2,
    name: "Leche Descremada 1 L",
    category: "Lácteos",
    price: 1250,
    unit: "1 litro",
    icon: "🥛",
    stock: [15, 0, 12]
  },
  {
    id: 3,
    name: "Yogurt Natural 1 kg",
    category: "Lácteos",
    price: 2890,
    unit: "1 kilogramo",
    icon: "🥣",
    stock: [12, 8, 16]
  },
  {
    id: 4,
    name: "Mantequilla 250 g",
    category: "Lácteos",
    price: 2790,
    unit: "250 gramos",
    icon: "🧈",
    stock: [8, 3, 10]
  },
  {
    id: 5,
    name: "Queso Gauda Laminado 250 g",
    category: "Lácteos",
    price: 3490,
    unit: "250 gramos",
    icon: "🧀",
    stock: [0, 14, 7]
  },
  {
    id: 6,
    name: "Yogurt Frutilla 125 g",
    category: "Lácteos",
    price: 590,
    unit: "125 gramos",
    icon: "🍓",
    stock: [18, 20, 3]
  },
  {
    id: 7,
    name: "Arroz Grado 1 1 kg",
    category: "Despensa",
    price: 1690,
    unit: "1 kilogramo",
    icon: "🍚",
    stock: [30, 25, 18]
  },
  {
    id: 8,
    name: "Fideos Espirales 400 g",
    category: "Despensa",
    price: 1090,
    unit: "400 gramos",
    icon: "🍝",
    stock: [22, 0, 16]
  },
  {
    id: 9,
    name: "Azúcar Blanca 1 kg",
    category: "Despensa",
    price: 1490,
    unit: "1 kilogramo",
    icon: "🍬",
    stock: [19, 15, 13]
  },
  {
    id: 10,
    name: "Harina sin Polvos 1 kg",
    category: "Despensa",
    price: 1190,
    unit: "1 kilogramo",
    icon: "🌾",
    stock: [16, 11, 0]
  },
  {
    id: 11,
    name: "Aceite Vegetal 900 ml",
    category: "Despensa",
    price: 2490,
    unit: "900 mililitros",
    icon: "🫒",
    stock: [9, 18, 14]
  },
  {
    id: 12,
    name: "Café Instantáneo 170 g",
    category: "Despensa",
    price: 6490,
    unit: "170 gramos",
    icon: "☕",
    stock: [3, 8, 0]
  },
  {
    id: 13,
    name: "Atún al Agua 160 g",
    category: "Despensa",
    price: 1790,
    unit: "160 gramos",
    icon: "🐟",
    stock: [14, 12, 9]
  },
  {
    id: 14,
    name: "Porotos 1 kg",
    category: "Despensa",
    price: 3290,
    unit: "1 kilogramo",
    icon: "🫘",
    stock: [11, 7, 15]
  },
  {
    id: 15,
    name: "Galletas de Chocolate 150 g",
    category: "Despensa",
    price: 1390,
    unit: "150 gramos",
    icon: "🍪",
    stock: [25, 19, 20]
  },
  {
    id: 16,
    name: "Sal Fina 1 kg",
    category: "Despensa",
    price: 790,
    unit: "1 kilogramo",
    icon: "🧂",
    stock: [20, 24, 17]
  },
  {
    id: 17,
    name: "Agua Mineral sin Gas 1,5 L",
    category: "Bebidas",
    price: 990,
    unit: "1,5 litros",
    icon: "💧",
    stock: [40, 32, 26]
  },
  {
    id: 18,
    name: "Agua Mineral con Gas 1,5 L",
    category: "Bebidas",
    price: 990,
    unit: "1,5 litros",
    icon: "🫧",
    stock: [17, 0, 21]
  },
  {
    id: 19,
    name: "Jugo de Naranja 1 L",
    category: "Bebidas",
    price: 1890,
    unit: "1 litro",
    icon: "🍊",
    stock: [12, 14, 0]
  },
  {
    id: 20,
    name: "Bebida Cola 1,5 L",
    category: "Bebidas",
    price: 1990,
    unit: "1,5 litros",
    icon: "🥤",
    stock: [28, 20, 15]
  },
  {
    id: 21,
    name: "Té Negro 100 Bolsitas",
    category: "Bebidas",
    price: 2990,
    unit: "100 unidades",
    icon: "🍵",
    stock: [10, 16, 8]
  },
  {
    id: 22,
    name: "Jugo de Manzana 1 L",
    category: "Bebidas",
    price: 1690,
    unit: "1 litro",
    icon: "🍎",
    stock: [0, 9, 14]
  },
  {
    id: 23,
    name: "Detergente Líquido 3 L",
    category: "Aseo",
    price: 7490,
    unit: "3 litros",
    icon: "🧴",
    stock: [8, 12, 5]
  },
  {
    id: 24,
    name: "Lavalozas Concentrado 750 ml",
    category: "Aseo",
    price: 2290,
    unit: "750 mililitros",
    icon: "🧽",
    stock: [13, 0, 16]
  },
  {
    id: 25,
    name: "Papel Higiénico 12 Rollos",
    category: "Aseo",
    price: 5990,
    unit: "12 unidades",
    icon: "🧻",
    stock: [17, 15, 10]
  },
  {
    id: 26,
    name: "Cloro Tradicional 1 L",
    category: "Aseo",
    price: 1190,
    unit: "1 litro",
    icon: "🧼",
    stock: [20, 11, 0]
  },
  {
    id: 27,
    name: "Limpiador Multiuso 900 ml",
    category: "Aseo",
    price: 2490,
    unit: "900 mililitros",
    icon: "🧹",
    stock: [7, 3, 12]
  },
  {
    id: 28,
    name: "Jabón Líquido 500 ml",
    category: "Aseo",
    price: 1990,
    unit: "500 mililitros",
    icon: "🫧",
    stock: [18, 14, 9]
  }
];

const catalogService = {
  async listProducts() {
    return MOCK_PRODUCTS.map(product => ({
      ...product,
      stock: [...product.stock]
    }));
  },

  async listStores() {
    return STORES.map(store => ({ ...store }));
  }
};

function readSavedStore() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);

    if (STORES.some(store => store.id === value)) {
      return value;
    }
  } catch {
    return null;
  }

  return null;
}

function saveStore(storeId) {
  try {
    localStorage.setItem(STORAGE_KEY, storeId);
  } catch {
    return;
  }
}

const state = {
  products: [],
  stores: STORES,
  selectedStoreId: readSavedStore(),
  search: "",
  category: "all",
  cart: [],
  currentUser: null
};

const accounts = new Map([
  [
    "cliente@andesmarket.cl",
    {
      name: "Cliente Demo",
      password: "Andes123"
    }
  ]
]);

let resetTicket = null;
let toastTimeout = null;

const elements = {
  openStoreBtn: document.getElementById("openStoreSelectorBtn"),
  openLoginBtn: document.getElementById("openLoginBtn"),
  openCartBtn: document.getElementById("openCartBtn"),

  heroStartBtn: document.getElementById("heroStartBtn"),
  heroStoreBtn: document.getElementById("heroStoreBtn"),

  selectedStoreName: document.getElementById("selectedStoreName"),
  selectedStoreAddress: document.getElementById("selectedStoreAddress"),

  searchInput: document.getElementById("searchInput"),
  searchSuggestions: document.getElementById("searchSuggestions"),
  productsGrid: document.getElementById("productsGrid"),

  storesList: document.getElementById("storesList"),

  loginModal: document.getElementById("loginModal"),
  loginForm: document.getElementById("loginForm"),

  storeModal: document.getElementById("storeModal"),

  cartDrawer: document.getElementById("cartDrawer"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartItems: document.getElementById("cartItems"),
  cartCount: document.getElementById("cartCount"),
  cartTotal: document.getElementById("cartTotal"),

  toast: document.getElementById("toast")
};

function formatPrice(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getProduct(productId) {
  return state.products.find(
    product => product.id === Number(productId)
  );
}

function getSelectedStore() {
  return state.stores.find(
    store => store.id === state.selectedStoreId
  ) ?? null;
}

function getStock(product) {
  if (!product || !state.selectedStoreId) {
    return null;
  }

  const index = state.stores.findIndex(
    store => store.id === state.selectedStoreId
  );

  return index === -1 ? null : product.stock[index] ?? 0;
}

function showToast(message, type = "") {
  window.clearTimeout(toastTimeout);

  elements.toast.textContent = message;
  elements.toast.className = `toast ${type}`.trim();

  toastTimeout = window.setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 3500);
}

function closeModals() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  });
}

function openModal(modalId) {
  closeCart();
  closeModals();

  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  const firstInput = modal.querySelector(
    "form:not(.hidden) input"
  );

  if (firstInput) {
    window.requestAnimationFrame(() => firstInput.focus());
  }
}

function closeCart() {
  elements.cartDrawer.classList.add("hidden");
  elements.cartDrawer.setAttribute("aria-hidden", "true");
}

function openCart() {
  closeModals();
  renderCart();

  elements.cartDrawer.classList.remove("hidden");
  elements.cartDrawer.setAttribute("aria-hidden", "false");

  elements.closeCartBtn.focus();
}

function goToCatalog() {
  if (!state.selectedStoreId) {
    openStoreSelector();
    return;
  }

  document.querySelector(".catalog-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function renderSelectedStore() {
  const store = getSelectedStore();

  if (!store) {
    elements.selectedStoreName.textContent = "Sin seleccionar";
    elements.selectedStoreAddress.textContent =
      "Selecciona una tienda para ver stock";

    return;
  }

  elements.selectedStoreName.textContent = store.name;
  elements.selectedStoreAddress.textContent = store.address;
}

function renderStores() {
  elements.storesList.innerHTML = state.stores
    .map(store => {
      const selected = store.id === state.selectedStoreId;

      return `
        <button
          type="button"
          class="store-card ${selected ? "selected" : ""}"
          data-store-id="${escapeHTML(store.id)}"
          aria-pressed="${selected}"
        >
          <div class="store-card-info">
            <h4>${escapeHTML(store.name)}</h4>
            <p>${escapeHTML(store.address)}</p>
            <p>${escapeHTML(store.description)}</p>
          </div>

          <span class="store-card-check" aria-hidden="true">
            ${selected ? "✓" : "→"}
          </span>
        </button>
      `;
    })
    .join("");
}

function openStoreSelector() {
  renderStores();
  openModal("storeModal");
}

function selectStore(storeId) {
  if (!state.stores.some(store => store.id === storeId)) {
    return;
  }

  const changed =
    state.selectedStoreId !== null &&
    state.selectedStoreId !== storeId;

  state.selectedStoreId = storeId;
  saveStore(storeId);

  if (changed && state.cart.length > 0) {
    state.cart = [];

    showToast(
      "Se vació el carrito al cambiar de tienda.",
      "success"
    );
  } else {
    showToast("Tienda seleccionada correctamente.", "success");
  }

  renderSelectedStore();
  renderStores();
  renderProducts();
  renderCart();

  closeModals();
}

function getStockInformation(product) {
  const stock = getStock(product);

  if (stock === null) {
    return {
      label: "Selecciona una tienda",
      className: "low",
      available: false
    };
  }

  if (stock === 0) {
    return {
      label: "Sin stock en esta tienda",
      className: "unavailable",
      available: false
    };
  }

  if (stock <= 3) {
    return {
      label: `Últimas ${stock} unidades`,
      className: "low",
      available: true
    };
  }

  return {
    label: `${stock} unidades disponibles`,
    className: "available",
    available: true
  };
}

function getFilteredProducts() {
  const query = normalizeText(state.search);

  return state.products.filter(product => {
    const matchesCategory =
      state.category === "all" ||
      product.category === state.category;

    const searchable = normalizeText(
      `${product.name} ${product.category}`
    );

    const matchesSearch =
      query.length === 0 || searchable.includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderProductCard(product) {
  const stock = getStockInformation(product);

  return `
    <article class="product-card ${
      stock.className === "unavailable" ? "out-of-stock" : ""
    }">
      <div class="product-media">
        <div
          class="product-emoji"
          role="img"
          aria-label="${escapeHTML(product.name)}"
        >
          ${product.icon}
        </div>

        <span class="product-badge">Andes Market</span>
      </div>

      <div class="product-info">
        <span class="product-category">
          ${escapeHTML(product.category)}
        </span>

        <h4 class="product-name">
          ${escapeHTML(product.name)}
        </h4>

        <div class="product-price-row">
          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>
        </div>

        <span class="product-unit">
          ${escapeHTML(product.unit)}
        </span>

        <span class="product-stock ${stock.className}">
          ${escapeHTML(stock.label)}
        </span>

        <button
          type="button"
          class="product-add-btn"
          data-add-product="${product.id}"
          ${stock.available ? "" : "disabled"}
        >
          ${
            !state.selectedStoreId
              ? "Selecciona una tienda"
              : stock.available
                ? "Agregar al carrito"
                : "Sin disponibilidad"
          }
        </button>
      </div>
    </article>
  `;
}

function updateProductsCount(count) {
  let counter = document.getElementById("productsCounter");

  if (!counter) {
    counter = document.createElement("p");
    counter.id = "productsCounter";

    document.querySelector(
      ".catalog-section .section-header"
    )?.appendChild(counter);
  }

  counter.textContent =
    `${count} productos encontrados · catálogo de demostración`;
}

function renderProducts() {
  const products = getFilteredProducts();

  if (products.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="empty-results">
        <h4>No encontramos productos</h4>
        <p>
          Intenta con otro nombre o selecciona otra categoría.
        </p>
      </div>
    `;
  } else {
    elements.productsGrid.innerHTML = products
      .map(renderProductCard)
      .join("");
  }

  updateProductsCount(products.length);
}

function hideSuggestions() {
  elements.searchSuggestions.classList.add("hidden");
  elements.searchSuggestions.innerHTML = "";
}

function renderSuggestions() {
  const query = normalizeText(state.search);

  if (query.length < 2) {
    hideSuggestions();
    return;
  }

  const matches = state.products
    .filter(product =>
      normalizeText(product.name).includes(query)
    )
    .slice(0, 5);

  if (matches.length === 0) {
    hideSuggestions();
    return;
  }

  elements.searchSuggestions.innerHTML = matches
    .map(product => `
      <button
        type="button"
        class="suggestion-item"
        data-suggestion-id="${product.id}"
      >
        <span class="suggestion-icon" aria-hidden="true">
          ${product.icon}
        </span>
        <span>${escapeHTML(product.name)}</span>
      </button>
    `)
    .join("");

  elements.searchSuggestions.classList.remove("hidden");
}

function setCategory(category) {
  state.category = category;

  document.querySelectorAll("[data-filter]").forEach(button => {
    const active = button.dataset.filter === category;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  hideSuggestions();
  renderProducts();
}

function getCartQuantity(productId) {
  const item = state.cart.find(
    entry => entry.productId === Number(productId)
  );

  return item?.quantity ?? 0;
}

function addToCart(productId) {
  const product = getProduct(productId);

  if (!product) {
    return;
  }

  if (!state.selectedStoreId) {
    openStoreSelector();

    showToast("Primero debes seleccionar una tienda.");
    return;
  }

  const stock = getStock(product);
  const quantity = getCartQuantity(productId);

  if (stock === null || stock <= 0) {
    showToast("Este producto no tiene stock.", "error");
    return;
  }

  if (quantity >= stock) {
    showToast(
      "No puedes agregar más unidades que las disponibles.",
      "error"
    );
    return;
  }

  const existing = state.cart.find(
    entry => entry.productId === Number(productId)
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      productId: Number(productId),
      quantity: 1
    });
  }

  renderCart();

  showToast(
    `${product.name} agregado al carrito.`,
    "success"
  );
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(
    entry => entry.productId !== Number(productId)
  );

  renderCart();
}

function changeQuantity(productId, amount) {
  const item = state.cart.find(
    entry => entry.productId === Number(productId)
  );

  const product = getProduct(productId);

  if (!item || !product) {
    return;
  }

  const nextQuantity = item.quantity + amount;

  if (nextQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const stock = getStock(product);

  if (stock === null || nextQuantity > stock) {
    showToast(
      "La cantidad solicitada supera el stock disponible.",
      "error"
    );
    return;
  }

  item.quantity = nextQuantity;
  renderCart();
}

function calculateCart() {
  return state.cart.reduce((total, entry) => {
    const product = getProduct(entry.productId);

    if (!product) {
      return total;
    }

    return total + product.price * entry.quantity;
  }, 0);
}

function renderCart() {
  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  elements.cartCount.textContent = String(totalItems);
  elements.cartTotal.textContent = formatPrice(calculateCart());

  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        <p>Tu carrito está vacío.</p>
        <p>Selecciona productos del catálogo para comenzar.</p>
      </div>
    `;
    return;
  }

  elements.cartItems.innerHTML = state.cart
    .map(entry => {
      const product = getProduct(entry.productId);

      if (!product) {
        return "";
      }

      const stock = getStock(product);

      return `
        <div class="cart-item">
          <div class="cart-item-icon" aria-hidden="true">
            ${product.icon}
          </div>

          <div class="cart-item-info">
            <h4 class="cart-item-name">
              ${escapeHTML(product.name)}
            </h4>

            <span class="cart-item-price">
              ${formatPrice(product.price * entry.quantity)}
            </span>

            <div class="cart-item-quantity">
              <button
                type="button"
                class="quantity-btn"
                data-cart-action="decrease"
                data-product-id="${product.id}"
                aria-label="Disminuir cantidad"
              >
                −
              </button>

              <span class="quantity-value">
                ${entry.quantity}
              </span>

              <button
                type="button"
                class="quantity-btn"
                data-cart-action="increase"
                data-product-id="${product.id}"
                aria-label="Aumentar cantidad"
                ${entry.quantity >= stock ? "disabled" : ""}
              >
                +
              </button>

              <button
                type="button"
                class="cart-item-remove"
                data-cart-action="remove"
                data-product-id="${product.id}"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

const authHeaderTitle = elements.loginModal.querySelector(
  ".modal-header h3"
);

const authHeaderText = elements.loginModal.querySelector(
  ".modal-header p"
);

const demoNote = elements.loginModal.querySelector(
  ".demo-note"
);

const authExtra = document.createElement("div");

authExtra.id = "authExtra";

elements.loginModal.querySelector(".modal-content")
  .appendChild(authExtra);

function updateUserButton() {
  if (state.currentUser) {
    elements.openLoginBtn.textContent = "Cerrar sesión";
    elements.openLoginBtn.title =
      `Sesión demo: ${state.currentUser.name}`;
    return;
  }

  elements.openLoginBtn.textContent = "Iniciar sesión";
  elements.openLoginBtn.title = "Acceso de demostración";
}

function setAuthMode(mode) {
  elements.loginForm.classList.toggle(
    "hidden",
    mode !== "login"
  );

  demoNote?.classList.toggle(
    "hidden",
    mode !== "login"
  );

  switch (mode) {
    case "login":
      authHeaderTitle.textContent = "Iniciar sesión";
      authHeaderText.textContent =
        "Accede con una cuenta de demostración.";

      authExtra.innerHTML = `
        <div style="
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          margin-top:16px;
        ">
          <button
            type="button"
            class="btn btn-secondary"
            data-auth-mode="register"
          >
            Crear cuenta
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            data-auth-mode="recover"
          >
            Recuperar acceso
          </button>
        </div>
      `;
      break;

    case "register":
      authHeaderTitle.textContent = "Crear cuenta";
      authHeaderText.textContent =
        "Registro de demostración. No ingreses datos reales.";

      authExtra.innerHTML = `
        <form id="registerForm" class="form">
          <div class="form-field">
            <label for="registerName">Nombre</label>
            <input
              id="registerName"
              name="name"
              type="text"
              minlength="2"
              maxlength="80"
              required
            />
          </div>

          <div class="form-field">
            <label for="registerEmail">Correo</label>
            <input
              id="registerEmail"
              name="email"
              type="email"
              required
            />
          </div>

          <div class="form-field">
            <label for="registerPassword">
              Contraseña de demostración
            </label>
            <input
              id="registerPassword"
              name="password"
              type="password"
              minlength="8"
              required
            />
          </div>

          <div class="form-field">
            <label for="registerConfirm">
              Confirmar contraseña
            </label>
            <input
              id="registerConfirm"
              name="confirm"
              type="password"
              minlength="8"
              required
            />
          </div>

          <button
            class="btn btn-primary btn-full"
            type="submit"
          >
            Crear cuenta
          </button>
        </form>

        <button
          type="button"
          class="btn btn-secondary btn-full"
          style="margin-top:12px"
          data-auth-mode="login"
        >
          Volver al inicio de sesión
        </button>
      `;
      break;

    case "recover":
      authHeaderTitle.textContent = "Recuperar acceso";
      authHeaderText.textContent =
        "Se generará un código visible en pantalla. No se envían correos.";

      authExtra.innerHTML = `
        <form id="recoverForm" class="form">
          <div class="form-field">
            <label for="recoverEmail">
              Correo de la cuenta
            </label>
            <input
              id="recoverEmail"
              name="email"
              type="email"
              required
            />
          </div>

          <button
            class="btn btn-primary btn-full"
            type="submit"
          >
            Generar código de prueba
          </button>
        </form>

        <button
          type="button"
          class="btn btn-secondary btn-full"
          style="margin-top:12px"
          data-auth-mode="login"
        >
          Volver
        </button>
      `;
      break;

    case "recover-code":
      if (!resetTicket) {
        setAuthMode("recover");
        return;
      }

      authHeaderTitle.textContent = "Cambiar contraseña";
      authHeaderText.textContent =
        "Validación de código para la cuenta de demostración.";

      authExtra.innerHTML = `
        <div class="demo-note" style="margin:0 0 18px">
          <strong>Código de prueba</strong>
          <p>${escapeHTML(resetTicket.code)}</p>
          <p>
            Visible en pantalla porque no existe
            envío de correo. Válido por cinco minutos.
          </p>
        </div>

        <form id="resetPasswordForm" class="form">
          <div class="form-field">
            <label for="resetCode">Código</label>
            <input
              id="resetCode"
              name="code"
              inputmode="numeric"
              maxlength="6"
              required
            />
          </div>

          <div class="form-field">
            <label for="resetPassword">
              Nueva contraseña
            </label>
            <input
              id="resetPassword"
              name="password"
              type="password"
              minlength="8"
              required
            />
          </div>

          <button
            class="btn btn-primary btn-full"
            type="submit"
          >
            Cambiar contraseña
          </button>
        </form>

        <button
          type="button"
          class="btn btn-secondary btn-full"
          style="margin-top:12px"
          data-auth-mode="login"
        >
          Volver
        </button>
      `;
      break;
  }
}

function openLogin() {
  setAuthMode("login");
  openModal("loginModal");
}

elements.loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("email")
    .value.trim().toLowerCase();

  const password = document.getElementById("password").value;
  const account = accounts.get(email);

  if (!account || account.password !== password) {
    showToast(
      "Correo o contraseña de demostración incorrectos.",
      "error"
    );
    return;
  }

  state.currentUser = {
    name: account.name,
    email
  };

  elements.loginForm.reset();

  updateUserButton();
  closeModals();

  showToast(
    `Bienvenido a Andes Market, ${account.name}.`,
    "success"
  );
});

authExtra.addEventListener("click", event => {
  const button = event.target.closest("[data-auth-mode]");

  if (button) {
    setAuthMode(button.dataset.authMode);
  }
});

authExtra.addEventListener("submit", event => {
  event.preventDefault();

  const form = event.target;

  if (form.id === "registerForm") {
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();

    const email = String(data.get("email") ?? "")
      .trim()
      .toLowerCase();

    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");

    if (name.length < 2 || password.length < 8) {
      showToast("Revisa los datos del registro.", "error");
      return;
    }

    if (password !== confirm) {
      showToast("Las contraseñas no coinciden.", "error");
      return;
    }

    if (accounts.has(email)) {
      showToast("La cuenta ya existe.", "error");
      return;
    }

    accounts.set(email, { name, password });

    setAuthMode("login");
    document.getElementById("email").value = email;

    showToast(
      "Cuenta creada. Ahora puedes iniciar sesión.",
      "success"
    );
    return;
  }

  if (form.id === "recoverForm") {
    const data = new FormData(form);

    const email = String(data.get("email") ?? "")
      .trim()
      .toLowerCase();

    if (!accounts.has(email)) {
      showToast(
        "No existe una cuenta de demostración con ese correo.",
        "error"
      );
      return;
    }

    resetTicket = {
      email,
      code: String(
        Math.floor(100000 + Math.random() * 900000)
      ),
      expiresAt: Date.now() + 5 * 60 * 1000
    };

    setAuthMode("recover-code");
    return;
  }

  if (form.id === "resetPasswordForm") {
    if (!resetTicket) {
      setAuthMode("recover");
      return;
    }

    const data = new FormData(form);
    const code = String(data.get("code") ?? "").trim();
    const newPassword = String(data.get("password") ?? "");

    if (Date.now() > resetTicket.expiresAt) {
      resetTicket = null;
      setAuthMode("recover");

      showToast(
        "El código expiró. Genera uno nuevo.",
        "error"
      );
      return;
    }

    if (code !== resetTicket.code) {
      showToast("Código incorrecto.", "error");
      return;
    }

    if (newPassword.length < 8) {
      showToast(
        "La contraseña debe tener al menos 8 caracteres.",
        "error"
      );
      return;
    }

    const account = accounts.get(resetTicket.email);

    if (!account) {
      resetTicket = null;
      setAuthMode("recover");
      return;
    }

    account.password = newPassword;

    const email = resetTicket.email;
    resetTicket = null;

    setAuthMode("login");
    document.getElementById("email").value = email;

    showToast(
      "Contraseña actualizada correctamente.",
      "success"
    );
  }
});

elements.storesList.addEventListener("click", event => {
  const button = event.target.closest("[data-store-id]");

  if (button) {
    selectStore(button.dataset.storeId);
  }
});

elements.searchInput.addEventListener("input", event => {
  state.search = event.target.value;

  renderProducts();
  renderSuggestions();
});

elements.searchInput.addEventListener("keydown", event => {
  if (event.key !== "Enter") {
    return;
  }

  const suggestion = elements.searchSuggestions.querySelector(
    "[data-suggestion-id]"
  );

  if (!suggestion) {
    return;
  }

  event.preventDefault();
  suggestion.click();
});

elements.searchSuggestions.addEventListener("click", event => {
  const button = event.target.closest("[data-suggestion-id]");

  if (!button) {
    return;
  }

  const product = getProduct(button.dataset.suggestionId);

  if (!product) {
    return;
  }

  state.search = product.name;
  elements.searchInput.value = product.name;

  hideSuggestions();
  renderProducts();
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.filter);
  });
});

elements.productsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add-product]");

  if (button) {
    addToCart(button.dataset.addProduct);
  }
});

elements.cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-cart-action]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.productId);

  switch (button.dataset.cartAction) {
    case "increase":
      changeQuantity(productId, 1);
      break;

    case "decrease":
      changeQuantity(productId, -1);
      break;

    case "remove":
      removeFromCart(productId);
      break;
  }
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closeModals);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModals();
    closeCart();
    hideSuggestions();
  }
});

document.addEventListener("click", event => {
  if (!event.target.closest(".search-block")) {
    hideSuggestions();
  }
});

elements.openStoreBtn.addEventListener(
  "click",
  openStoreSelector
);

elements.heroStoreBtn.addEventListener(
  "click",
  openStoreSelector
);

elements.heroStartBtn.addEventListener(
  "click",
  goToCatalog
);

elements.openCartBtn.addEventListener(
  "click",
  openCart
);

elements.closeCartBtn.addEventListener(
  "click",
  closeCart
);

elements.openLoginBtn.addEventListener("click", () => {
  if (state.currentUser) {
    state.currentUser = null;
    updateUserButton();

    showToast(
      "Sesión de demostración cerrada.",
      "success"
    );
    return;
  }

  openLogin();
});

async function initializeApp() {
  try {
    const [products, stores] = await Promise.all([
      catalogService.listProducts(),
      catalogService.listStores()
    ]);

    state.products = products;
    state.stores = stores;

    if (
      state.selectedStoreId &&
      !state.stores.some(
        store => store.id === state.selectedStoreId
      )
    ) {
      state.selectedStoreId = null;
    }

    renderSelectedStore();
    renderStores();
    renderProducts();
    renderCart();
    updateUserButton();

    console.info(
      `Andes Market: ${products.length} productos cargados.`
    );
  } catch (error) {
    console.error(
      "Error al iniciar Andes Market:",
      error
    );

    showToast(
      "No fue posible cargar el catálogo.",
      "error"
    );
  }
}

initializeApp();