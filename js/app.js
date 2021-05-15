// display menu items script
const menu = [
    {
        id: 1,
        itemName: 'Cupcake',
        category: 'dessert',
        price: 2.00,
        img: 'imgs/item1.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 2,
        itemName: 'Special Salad',
        category: 'healthy',
        price: 8.25,
        img: 'imgs/item2.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 3,
        itemName: 'Bacon & Eggs',
        category: 'breakfast',
        price: 4.11,
        img: 'imgs/item3.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 4,
        itemName: 'Carbonara',
        category: 'lunch',
        price: 8.99,
        img: 'imgs/item4.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 5,
        itemName: 'Pancakes',
        category: 'breakfast',
        price: 5.00,
        img: 'imgs/item5.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 6,
        itemName: 'Macarons',
        category: 'dessert',
        price: 11.25,
        img: 'imgs/item6.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 7,
        itemName: 'Fried Shrimp',
        category: 'lunch',
        price: 15.25,
        img: 'imgs/item7.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 8,
        itemName: 'Shawarma',
        category: 'snacks',
        price: 6.75,
        img: 'imgs/item8.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 9,
        itemName: 'Cupcake II',
        category: 'dessert',
        price: 6.75,
        img: 'imgs/item9.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
    {
        id: 10,
        itemName: 'Green Smoothie',
        category: 'healthy',
        price: 3.75,
        img: 'imgs/item10.jpg',
        itemDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum dignissimos eius accusantium blanditiis, deleniti et hic amet recusandae aspernatur vitae culpa totam minus quas. Dolores, ipsam ipsa!',
    },
];
const menuContainer = document.querySelector('.mainMenu');
const filterBtns = document.querySelectorAll('.filterBtn');

// menu filter buttons
filterBtns.forEach(function(btn) {
    btn.addEventListener('click',function(event) {
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            };
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

// load initial item
window.addEventListener('DOMContentLoaded',function() {
    displayMenuItems(menu);
});


// function: display designated menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menuItem">
        <img src=${item.img} alt=${item.itemName} class="menuItemImg rightItem">
        <div class="menuItemInfo">
            <div class="menuHeader">
                <h3 class="itemName">${item.itemName}</h3>
                <h3 class="price">$${item.price}</h3>
            </div>
            <p class="itemDetails">${item.itemDetails}</p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join('');
    menuContainer.innerHTML = displayMenu;
};

// back-to-top button
const backToTopBtn = document.querySelector('.backToTop');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    };
});

// auto-update year in footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// open and close navbar 
const toggleNavbar = document.querySelector('.fa-bars');
const navbar = document.querySelector('.header');
const closeBtn = document.querySelector('.fa-times');

toggleNavbar.addEventListener('click',function() {
    navbar.classList.add('active');
});

closeBtn.addEventListener('click',function() {
    navbar.classList.remove('active');
});

// close navbar after choosing a nav link 
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('active');
    });
});