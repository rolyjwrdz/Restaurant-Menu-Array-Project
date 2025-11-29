const breakfastMenu = [
  { name: 'Pancakes', price: 7.99 },
  { name: 'Eggs Benedict', price: 9.49 },
  { name: 'Oatmeal', price: 4.99 },
  { name: 'Frittata', price: 8.49 }
];

const mainCourseMenu = [
  { name: 'Steak', price: 15.99 },
  { name: 'Pasta', price: 12.99 },
  { name: 'Burger', price: 10.49 },
  { name: 'Salmon', price: 14.99 }
];

const dessertMenu = [
  { name: 'Cake', price: 5.99 },
  { name: 'Ice Cream', price: 3.49 },
  { name: 'Pudding', price: 4.29 },
  { name: 'Fruit Salad', price: 4.99 }
];

const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item.name} — $${item.price.toFixed(2)}</p>`)
  .join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item.name} — $${item.price.toFixed(2)}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i].name} — $${dessertMenu[i].price.toFixed(2)}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;
