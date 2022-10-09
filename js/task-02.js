const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => {
   
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;

  return li;
});

ingredientsListRef.append(...list);

