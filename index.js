let halalRecipes = [
  {
    name: "Chicken Biryani",
    image: "./assets/halal_recipe01.jpg",
    ingredients: [
      "1kg Halal Chicken",
      "500g Basmati Rice",
      "2 Onions",
      "1 cup Yogurt",
      "2 tbsp Ginger-Garlic Paste",
      "2 tbsp Biryani Masala",
      "1/2 cup Oil",
      "Saffron",
      "Mint Leaves",
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 2 hours.",
      "Parboil rice and set aside.",
      "In a large pot, fry sliced onions until golden.",
      "Layer marinated chicken and parboiled rice.",
      "Sprinkle saffron milk and mint leaves.",
      "Cook on low heat for 25 minutes.",
      "Serve hot with raita.",
    ],
  },
  {
    name: "Lamb Kebabs",
    image: "./assets/halal_recipe02.jpg",
    ingredients: [
      "500g Ground Halal Lamb",
      "1 Onion",
      "2 cloves Garlic",
      "1 tsp Cumin",
      "1 tsp Coriander",
      "1/2 tsp Cinnamon",
      "Salt",
      "Black Pepper",
    ],
    instructions: [
      "Mix all ingredients in a bowl.",
      "Shape the mixture into small sausages.",
      "Grill or pan-fry until cooked through.",
      "Serve with pita bread and tahini sauce.",
    ],
  },
  {
    name: "Vegetable Curry",
    image: "./assets/halal_recipe03.jpg",
    ingredients: [
      "2 Potatoes",
      "1 Cauliflower",
      "1 cup Peas",
      "1 Onion",
      "2 Tomatoes",
      "2 tbsp Curry Powder",
      "1 can Coconut Milk",
      "Oil",
      "Salt",
    ],
    instructions: [
      "Chop vegetables into bite-sized pieces.",
      "Fry onions in oil until golden.",
      "Add curry powder and fry for 1 minute.",
      "Add vegetables and stir-fry for 5 minutes.",
      "Pour in coconut milk and simmer until vegetables are tender.",
      "Season with salt and serve with rice.",
    ],
  },
  {
    name: "Lentil Soup",
    image: "./assets/halal_recipe04.jpg",
    ingredients: [
      "2 cups Red Lentils",
      "1 Onion",
      "2 Carrots",
      "2 cloves Garlic",
      "1 tsp Cumin",
      "1 tsp Turmeric",
      "6 cups Vegetable Broth",
      "Lemon juice",
    ],
    instructions: [
      "Rinse lentils and set aside.",
      "Sauté chopped onions, carrots, and garlic.",
      "Add cumin and turmeric, stir for 1 minute.",
      "Add lentils and broth, bring to a boil.",
      "Simmer for 20 minutes until lentils are soft.",
      "Blend soup until smooth.",
      "Serve with a squeeze of lemon juice.",
    ],
  },
  {
    name: "Grilled Fish",
    image: "./assets/halal_recipe05.jpg",
    ingredients: [
      "4 Fish Fillets (any halal fish)",
      "2 tbsp Olive Oil",
      "1 Lemon",
      "2 cloves Garlic",
      "1 tsp Paprika",
      "Salt",
      "Black Pepper",
      "Fresh Herbs",
    ],
    instructions: [
      "Mix olive oil, lemon juice, minced garlic, paprika, salt, and pepper.",
      "Marinate fish fillets for 30 minutes.",
      "Preheat grill or pan.",
      "Grill fish for 4-5 minutes each side.",
      "Garnish with fresh herbs and serve with lemon wedges.",
    ],
  },
  {
    name: "Falafel",
    image: "./assets/halal_recipe06.jpg",
    ingredients: [
      "2 cups Dried Chickpeas",
      "1 Onion",
      "4 cloves Garlic",
      "1 cup Fresh Parsley",
      "1 tbsp Cumin",
      "1 tbsp Coriander",
      "Salt",
      "Oil for frying",
    ],
    instructions: [
      "Soak chickpeas overnight, then drain.",
      "Blend chickpeas with onion, garlic, parsley, and spices.",
      "Form mixture into small balls.",
      "Deep fry until golden and crispy.",
      "Serve in pita bread with tahini sauce and vegetables.",
    ],
  },
  {
    name: "Chicken Shawarma",
    image: "./assets/halal_recipe07.jpg",
    ingredients: [
      "1kg Halal Chicken Thighs",
      "4 tbsp Yogurt",
      "2 tbsp Lemon Juice",
      "2 tbsp Olive Oil",
      "2 cloves Garlic",
      "1 tsp Cumin",
      "1 tsp Paprika",
      "1/2 tsp Turmeric",
      "Salt",
      "Black Pepper",
    ],
    instructions: [
      "Mix all ingredients except chicken to make marinade.",
      "Marinate chicken for at least 2 hours.",
      "Preheat oven to 425°F (220°C).",
      "Roast chicken for 30-35 minutes, turning once.",
      "Slice chicken and serve in pita with garlic sauce and vegetables.",
    ],
  },
  {
    name: "Vegetable Samosas",
    image: "./assets/halal_recipe08.jpg",
    ingredients: [
      "2 Potatoes",
      "1 cup Peas",
      "1 Onion",
      "2 cloves Garlic",
      "1 tsp Ginger",
      "1 tsp Cumin",
      "1 tsp Coriander",
      "Samosa Pastry",
      "Oil for frying",
    ],
    instructions: [
      "Boil and mash potatoes.",
      "Sauté onions, garlic, and ginger.",
      "Add spices, peas, and mashed potatoes.",
      "Fill samosa pastry with the mixture.",
      "Deep fry until golden brown.",
      "Serve hot with chutney.",
    ],
  },
  {
    name: "Beef Kofta",
    image: "./assets/halal_recipe09.jpg",
    ingredients: [
      "500g Ground Halal Beef",
      "1 Onion",
      "2 cloves Garlic",
      "1/4 cup Fresh Parsley",
      "1 tsp Cumin",
      "1 tsp Coriander",
      "1/4 tsp Cinnamon",
      "Salt",
      "Black Pepper",
    ],
    instructions: [
      "Mix all ingredients in a bowl.",
      "Shape mixture into oval patties.",
      "Grill or pan-fry until cooked through.",
      "Serve with flatbread and yogurt sauce.",
    ],
  },
  {
    name: "Butter Chicken",
    image: "./assets/halal_recipe10.jpg",
    ingredients: [
      "1kg Halal Chicken",
      "1 cup Yogurt",
      "2 tbsp Butter",
      "1 Onion",
      "2 cloves Garlic",
      "1 inch Ginger",
      "2 cups Tomato Puree",
      "1 tsp Garam Masala",
      "1 tsp Turmeric",
      "1/2 cup Cream",
    ],
    instructions: [
      "Marinate chicken in yogurt for 2 hours.",
      "Grill or roast chicken until charred.",
      "In a pan, sauté onions, garlic, and ginger in butter.",
      "Add tomato puree and spices, simmer for 10 minutes.",
      "Add grilled chicken and cream, cook for 5 more minutes.",
      "Serve with naan bread.",
    ],
  },
  {
    name: "Vegetable Couscous",
    image: "./assets/halal_recipe11.jpg",
    ingredients: [
      "2 cups Couscous",
      "4 cups Vegetable Broth",
      "2 Zucchinis",
      "2 Carrots",
      "1 Red Bell Pepper",
      "1 Onion",
      "2 tbsp Olive Oil",
      "1 tsp Cumin",
      "1 tsp Paprika",
      "Salt",
      "Fresh Mint",
    ],
    instructions: [
      "Cook couscous according to package instructions using broth.",
      "Chop all vegetables.",
      "Sauté vegetables with spices in olive oil until tender.",
      "Fluff couscous and mix with sautéed vegetables.",
      "Garnish with fresh mint and serve.",
    ],
  },
  {
    name: "Lamb Tagine",
    image: "./assets/halal_recipe12.jpg",
    ingredients: [
      "1kg Halal Lamb",
      "2 Onions",
      "3 cloves Garlic",
      "2 tsp Ginger",
      "2 tsp Paprika",
      "1 tsp Cumin",
      "1/2 tsp Saffron",
      "2 cups Chicken Broth",
      "1 can Chickpeas",
      "1 cup Dried Apricots",
      "Fresh Cilantro",
    ],
    instructions: [
      "Brown lamb in a tagine or heavy pot.",
      "Add onions, garlic, ginger, and spices, cook for 5 minutes.",
      "Pour in broth, bring to a boil, then simmer for 1.5 hours.",
      "Add chickpeas and apricots, cook for 30 more minutes.",
      "Garnish with cilantro and serve with couscous.",
    ],
  },
  {
    name: "Stuffed Grape Leaves (Dolma)",
    image: "./assets/halal_recipe13.jpeg",
    ingredients: [
      "1 jar Grape Leaves",
      "1 cup Rice",
      "1/2 cup Olive Oil",
      "1 Onion",
      "1/4 cup Pine Nuts",
      "1/4 cup Currants",
      "2 tbsp Mint",
      "2 tbsp Dill",
      "Lemon Juice",
      "Salt",
    ],
    instructions: [
      "Rinse grape leaves and set aside.",
      "Sauté onions and pine nuts in olive oil.",
      "Mix with rice, currants, herbs, and seasonings.",
      "Place a spoonful of mixture on each grape leaf and roll.",
      "Layer rolls in a pot, pour in water and lemon juice.",
      "Simmer for 45 minutes until rice is cooked.",
      "Serve cold or at room temperature.",
    ],
  },
  {
    name: "Chicken Tikka",
    image: "./assets/halal_recipe14.jpg",
    ingredients: [
      "1kg Halal Chicken Breast",
      "1 cup Yogurt",
      "2 tbsp Lemon Juice",
      "2 tsp Ginger",
      "2 tsp Garlic",
      "2 tsp Garam Masala",
      "1 tsp Turmeric",
      "1 tsp Cumin",
      "Red Food Coloring (optional)",
    ],
    instructions: [
      "Cut chicken into cubes.",
      "Mix all ingredients to make marinade.",
      "Marinate chicken for at least 4 hours.",
      "Thread chicken onto skewers.",
      "Grill or bake until cooked through and slightly charred.",
      "Serve with mint chutney and naan bread.",
    ],
  },
  {
    name: "Vegetable Biryani",
    image: "./assets/halal_recipe15.jpg",
    ingredients: [
      "2 cups Basmati Rice",
      "4 cups Mixed Vegetables",
      "1 Onion",
      "2 cloves Garlic",
      "1 inch Ginger",
      "2 tsp Biryani Masala",
      "1/2 cup Yogurt",
      "Saffron",
      "Ghee",
      "Mint Leaves",
    ],
    instructions: [
      "Parboil rice and set aside.",
      "Sauté onions, garlic, and ginger in ghee.",
      "Add vegetables and biryani masala, cook for 5 minutes.",
      "Layer rice and vegetable mixture in a pot.",
      "Pour saffron milk and yogurt over layers.",
      "Cook on low heat for 20 minutes.",
      "Garnish with mint leaves and serve.",
    ],
  },
  {
    name: "Shish Tawook",
    image: "./assets/halal_recipe16.jpg",
    ingredients: [
      "1kg Halal Chicken Breast",
      "1/4 cup Lemon Juice",
      "1/4 cup Olive Oil",
      "4 cloves Garlic",
      "2 tbsp Yogurt",
      "1 tsp Oregano",
      "1 tsp Paprika",
      "Salt",
      "Black Pepper",
    ],
    instructions: [
      "Cut chicken into cubes.",
      "Mix all ingredients to make marinade.",
      "Marinate chicken for at least 4 hours.",
      "Thread chicken onto skewers.",
      "Grill until cooked through and slightly charred.",
      "Serve with garlic sauce and pita bread.",
    ],
  },
  {
    name: "Lentil and Spinach Curry",
    image: "./assets/halal_recipe17.jpg",
    ingredients: [
      "2 cups Red Lentils",
      "4 cups Spinach",
      "1 Onion",
      "2 cloves Garlic",
      "1 tsp Ginger",
      "2 tsp Curry Powder",
      "1 can Coconut Milk",
      "2 cups Vegetable Broth",
      "Lemon Juice",
    ],
    instructions: [
      "Rinse lentils and set aside.",
      "Sauté onions, garlic, and ginger.",
      "Add curry powder and cook for 1 minute.",
      "Add lentils, coconut milk, and broth.",
      "Simmer for 20 minutes until lentils are soft.",
      "Stir in spinach and cook until wilted.",
      "Season with lemon juice and serve with rice.",
    ],
  },
  {
    name: "Fattoush Salad",
    image: "./assets/halal_recipe18.jpg",
    ingredients: [
      "2 Pita Breads",
      "2 Cucumbers",
      "2 Tomatoes",
      "1 Red Onion",
      "1 cup Parsley",
      "1/4 cup Mint",
      "2 tbsp Sumac",
      "1/4 cup Lemon Juice",
      "1/4 cup Olive Oil",
      "Salt",
    ],
    instructions: [
      "Toast pita bread until crispy, then break into pieces.",
      "Chop cucumbers, tomatoes, and onion.",
      "Mix vegetables with herbs in a large bowl.",
      "Whisk lemon juice, olive oil, sumac, and salt for dressing.",
      "Toss salad with dressing and pita chips just before serving.",
    ],
  },
];

const main = document.querySelector("main");

halalRecipes.forEach(({ name, image, ingredients, instructions }) => {
  const recipeBody = document.createElement("div");
  recipeBody.classList.add("Recipe");

  const img = document.createElement("img");
  img.src = image;
  img.alt = "Recipe Image";
  img.classList.add("recipeImage");

  const recipeName = document.createElement("h1");
  recipeName.textContent = name;
  const button = document.createElement("button");
  button.classList.add("more");
  button.textContent = "Learn More";

  button.addEventListener("click", () => {
    if (recipeBody.classList.contains("modal")) {
    } else {
      let displayMore = document.createElement("div");
      displayMore.classList.add("displayMore");
      displayMore.classList.add("show");

      let closeBtn = document.createElement("button");
      closeBtn.classList.add("closeBtn");
      closeBtn.textContent = "X";
      closeBtn.addEventListener("click", () => {
        displayMore.classList.remove("show");
        displayMore.classList.add("hide");
        recipeBody.classList.remove("modal");
      });

      let ingradients = document.createElement("div");
      ingradients.classList.add("ingradients");
      let ingradientsH3 = document.createElement("h3");
      ingradientsH3.textContent = "Ingredients";

      let ingradientsList = document.createElement("ul");
      ingradientsList.classList.add("ingradientsList");
      ingredients.forEach((ingredient) => {
        let ingradient = document.createElement("li");
        ingradient.textContent = ingredient;
        ingradientsList.appendChild(ingradient);
      });

      ingradients.append(ingradientsH3, ingradientsList);

      let cooking = document.createElement("div");
      cooking.classList.add("cookingInstructions");
      let cookingH3 = document.createElement("h3");
      cookingH3.textContent = "Instructions";

      let cookingList = document.createElement("ol");
      cookingList.classList.add("cookingList");
      instructions.forEach((instruction) => {
        let instructionEle = document.createElement("li");
        instructionEle.textContent = instruction;
        cookingList.appendChild(instructionEle);
      });

      cooking.append(cookingH3, cookingList);

      displayMore.append(closeBtn, ingradients, cooking);
      document.body.append(displayMore);
      // Appending to recipeBody and then to main
    }

    recipeBody.classList.add("modal");
  });

  // DisplayMore

  recipeBody.append(img, recipeName, button);
  main.appendChild(recipeBody);
});

setInterval(() => {
  let displays = document.querySelectorAll(".displayMore.hide");
  displays.forEach((display) => {
    document.body.removeChild(display);
  });
}, 1000);
