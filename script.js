const loader = document.querySelector(".loader-wrapper");
        window.addEventListener("load",function () {
            loader.style.display = "none";
});

const menu = [
  {
    id: 1,
    title: "Buttermilk pancakes",
    category: "breakfast",
    price: 125,
    img: "img/buttermilk-pancakes.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque! `,
  },
  {
    id: 2,
    title: "Dinner double",
    category: "lunch",
    price: 13.99,
    img: "img/dinner-double.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Strawberry milkshake",
    category: "shakes",
    price: 120,
    img: "img/strawberry-milkshake.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque!`,
  },
  {
    id: 4,
    title: "Country delight",
    category: "breakfast",
    price: 200,
    img: "img/country-delight.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque! `,
  },
  {
    id: 5,
    title: "Egg burger",
    category: "lunch",
    price: 150,
    img: "img/egg-burger.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque! `,
  },
  {
    id: 6,
    title: "Chocolate shake",
    category: "shakes",
    price: 120,
    img: "img/chocolate-milkshake.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque!`,
  },
  {
    id: 7,
    title: "Fish burger",
    category: "breakfast",
    price: 160,
    img: "img/fish-burger.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque!`,
  },
  {
    id: 8,
    title: "American classic",
    category: "lunch",
    price: 180,
    img: "img/american-classic.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque! `,
  },
  {
    id: 9,
    title: "Steak dinner",
    category: "dinner",
    price: 210,
    img: "img/steak-dinner.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint odit
        expedita vel quis perspiciatis atque!`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">₹${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ["all"]
  );
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
    </button>`;
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
