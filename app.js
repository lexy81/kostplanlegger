const recipes = [
  {
    id: "pestokylling",
    name: "Pestokylling med ovnsbakte grønnsaker",
    description: "Saftig kylling med pesto, squash og søte cherrytomater.",
    time: 30,
    carbs: 12,
    icon: "✳",
    color: "mint",
    ingredients: ["600 g kyllingfilet", "3 ss grønn pesto", "2 squash", "250 g cherrytomater", "150 g crème fraîche"],
    steps: ["Del squash og tomater, og legg dem i en ildfast form.", "Smør pesto på kyllingen og legg den over grønnsakene.", "Stek på 200 °C i ca. 20–25 minutter. Server med crème fraîche."]
  },
  {
    id: "laks",
    name: "Ovnsbakt laks med brokkoli og urtedressing",
    description: "Mild og mettende laksemiddag med frisk dressing.",
    time: 25,
    carbs: 10,
    icon: "≈",
    color: "peach",
    ingredients: ["600 g laksefilet", "2 brokkoli", "2 dl gresk yoghurt", "1 sitron", "Dill, salt og pepper"],
    steps: ["Del brokkolien i buketter og legg i en ildfast form med laksen.", "Krydre med sitron, salt og pepper. Stek på 200 °C i 15–18 minutter.", "Rør hakket dill og litt sitronsaft inn i yoghurten."]
  },
  {
    id: "tacobolle",
    name: "Taco-bolle med blomkålris",
    description: "Alt det gode fra tacoen, servert i en grønn og sprø bolle.",
    time: 25,
    carbs: 14,
    icon: "◎",
    color: "yellow",
    ingredients: ["500 g kjøttdeig", "1 blomkål", "1 hjertesalat", "2 avokado", "1 beger salsa", "Taco-krydder"],
    steps: ["Stek kjøttdeigen med tacokrydder.", "Riv blomkålen grovt og stek den i en panne i 4–5 minutter.", "Server med salat, avokado og salsa i hver sin bolle."]
  },
  {
    id: "kjottboller",
    name: "Kjøttboller i tomatsaus med squashstrimler",
    description: "En familiefavoritt med saftig saus og grønnere tilbehør.",
    time: 35,
    carbs: 16,
    icon: "◉",
    color: "lilac",
    ingredients: ["600 g kjøttdeig", "1 egg", "1 boks hakkede tomater", "4 squash", "1 løk", "Parmesan"],
    steps: ["Bland kjøttdeig og egg, form små boller og brun dem i en panne.", "Tilsett hakket løk og tomater. La sausen småkoke i 15 minutter.", "Lag squashstrimler med en skreller og server med revet parmesan."]
  },
  {
    id: "frittata",
    name: "Frittata med spinat, sopp og feta",
    description: "En enkel ovnsomelett som er like god på travle dager.",
    time: 25,
    carbs: 8,
    icon: "◒",
    color: "yellow",
    ingredients: ["8 egg", "200 g spinat", "200 g sjampinjong", "150 g fetaost", "1 dl melk"],
    steps: ["Stek skivet sopp til den er gyllen, og vend inn spinaten.", "Visp egg og melk, hell over grønnsakene og smuldre feta på toppen.", "Stek på lav varme med lokk, eller i ovnen på 180 °C til eggene har stivnet."]
  },
  {
    id: "svin",
    name: "Svinefilet med blomkålmos og grønne bønner",
    description: "Mørt svinekjøtt med kremet mos og sprø bønner.",
    time: 35,
    carbs: 13,
    icon: "⌁",
    color: "mint",
    ingredients: ["600 g svinefilet", "1 stort blomkålhode", "300 g grønne bønner", "2 ss smør", "1 dl matfløte"],
    steps: ["Krydre svinefileten og stek den til gjennomstekt. La den hvile før du skjærer den opp.", "Kok blomkål mør, hell av vannet og mos med smør og fløte.", "Kok bønnene raskt i lettsaltet vann og server ved siden av."]
  },
  {
    id: "rekecurry",
    name: "Kokos-curry med reker og blomkålris",
    description: "Kremet, mild curry som kan krydres etter smak ved bordet.",
    time: 20,
    carbs: 15,
    icon: "✺",
    color: "peach",
    ingredients: ["500 g rensede reker", "1 boks kokosmelk", "1 rød paprika", "200 g sukkererter", "1 blomkål", "2 ss currypaste"],
    steps: ["Varm currypaste i en panne og rør inn kokosmelk.", "Tilsett paprika og sukkererter, og la det småkoke i 8–10 minutter.", "Vend inn rekene til de er varme. Server med lettstekt blomkålris."]
  },
  {
    id: "burgerbolle",
    name: "Burgerbolle med dressing og ovnsbakte grønnsaker",
    description: "Saftig burger med alt tilbehøret – uten at du trenger burgerbrød.",
    time: 30,
    carbs: 14,
    icon: "◉",
    color: "yellow",
    ingredients: ["600 g kjøttdeig", "1 hjertesalat", "2 tomater", "1 rødløk", "4 skiver cheddar", "Dressing etter ønske"],
    steps: ["Form fire burgere, krydre og stek dem til de er gjennomstekte.", "Legg cheddar på burgerne mot slutten av steketiden.", "Server i salatblader med tomat, rødløk og dressing."]
  },
  {
    id: "fajita",
    name: "Kyllingfajita med paprika og avokadokrem",
    description: "Fargerik panne med lune krydder og frisk avokado.",
    time: 25,
    carbs: 13,
    icon: "✦",
    color: "peach",
    ingredients: ["600 g kyllingfilet", "3 paprika i ulike farger", "1 rødløk", "2 avokado", "1 lime", "Fajitakrydder"],
    steps: ["Skjær kylling og grønnsaker i strimler, og stek med fajitakrydder.", "Mos avokado med limesaft og en klype salt.", "Server fajitaen med avokadokrem og gjerne salatblader."]
  },
  {
    id: "torsk",
    name: "Torsk med bacon, erter og sitronsmør",
    description: "Mild fisk med sprøtt bacon og en frisk smørsaus.",
    time: 25,
    carbs: 12,
    icon: "≈",
    color: "lilac",
    ingredients: ["600 g torskefilet", "150 g bacon", "300 g erter", "100 g smør", "1 sitron", "Gressløk"],
    steps: ["Stek bacon sprøtt og legg det til side.", "Bak torsken med litt salt på 200 °C i 12–15 minutter.", "Smelt smør med sitronsaft, og server med varme erter og bacon."]
  },
  {
    id: "halloumi",
    name: "Halloumi- og grønnsaksfat med tahinidressing",
    description: "Gylden halloumi, ovnsbakte grønnsaker og en kremet dressing.",
    time: 30,
    carbs: 16,
    icon: "❋",
    color: "mint",
    ingredients: ["400 g halloumi", "1 aubergine", "2 squash", "250 g cherrytomater", "2 ss tahini", "1 sitron"],
    steps: ["Del grønnsakene og bak dem med litt olje på 220 °C i ca. 20 minutter.", "Skjær halloumi i skiver og stek dem gyllene i en panne.", "Rør tahini med sitronsaft og litt vann til en jevn dressing."]
  },
  {
    id: "paprika",
    name: "Fylte paprika med kjøttdeig og ost",
    description: "En varm og fargerik middag som er lett å gjøre klar på forhånd.",
    time: 35,
    carbs: 17,
    icon: "✿",
    color: "peach",
    ingredients: ["4 store paprika", "500 g kjøttdeig", "1 løk", "1 boks hakkede tomater", "150 g revet ost"],
    steps: ["Del paprikaene i to og ta ut frøene.", "Stek kjøttdeig og løk, rør inn tomater og fyll paprikaene.", "Topp med ost og stek på 200 °C i ca. 20 minutter."]
  },
  {
    id: "gresk",
    name: "Greske kyllingspyd med tzatziki og salat",
    description: "Smak av sitron og urter med en frisk yoghurtdressing.",
    time: 30,
    carbs: 11,
    icon: "✧",
    color: "lilac",
    ingredients: ["600 g kyllingfilet", "1 agurk", "2 dl gresk yoghurt", "1 sitron", "1 rødløk", "Oregano"],
    steps: ["Skjær kyllingen i biter, krydre med oregano og sitron, og tre på spyd.", "Stek spydene i panne eller ovn til kyllingen er gjennomstekt.", "Riv agurken og bland med yoghurt. Server med en enkel salat."]
  },
  {
    id: "panne",
    name: "Kremet kyllingpanne med sopp og spinat",
    description: "Myk fløtesaus, masse grønt og middag på under en halvtime.",
    time: 25,
    carbs: 9,
    icon: "⌂",
    color: "mint",
    ingredients: ["600 g kyllingfilet", "250 g sjampinjong", "150 g spinat", "2 dl matfløte", "1 løk", "1 ss dijonsennep"],
    steps: ["Stek kyllingbitene til de er gylne, og legg dem til side.", "Stek sopp og løk, hell i fløte og rør inn dijonsennep.", "Ha kyllingen tilbake i panna, vend inn spinat og la alt bli varmt."]
  }
];

const storageKey = "ukasmiddager-plan-v1";
const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
const shoppingUnits = new Set(["g", "kg", "ml", "dl", "l", "ss", "ts", "boks", "beger", "pakke", "pk", "skive", "skiver", "stk"]);
const shoppingCategories = ["Frukt og grønt", "Kjøtt, fisk og sjømat", "Meieri og egg", "Annet"];
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let plan;
let toastTimeout;

function getWeekInfo(date = new Date()) {
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);
  const mondayUtc = Date.UTC(monday.getFullYear(), monday.getMonth(), monday.getDate());
  const weekIndex = Math.floor((mondayUtc - Date.UTC(1970, 0, 5)) / 604800000);
  const thursday = new Date(monday);
  thursday.setDate(thursday.getDate() + 3);
  const thursdayUtc = Date.UTC(thursday.getFullYear(), thursday.getMonth(), thursday.getDate());
  const yearStartUtc = Date.UTC(thursday.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((thursdayUtc - yearStartUtc) / 86400000) + 1) / 7);
  return {
    key: `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, "0")}-${String(monday.getDate()).padStart(2, "0")}`,
    monday,
    sunday,
    weekIndex,
    weekNumber
  };
}

function defaultMeals(weekIndex) {
  return days.map((_, dayIndex) => dayIndex === 4
    ? "tacobolle"
    : recipes[(weekIndex + dayIndex * 2) % recipes.length].id);
}

function loadPlan(week) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (saved?.weekKey === week.key && Array.isArray(saved.meals) && saved.meals.length === days.length &&
        saved.meals.every(id => recipes.some(recipe => recipe.id === id))) {
      const meals = [...saved.meals];
      if (!saved.tacoFriday) meals[4] = "tacobolle";
      return {
        weekKey: week.key,
        meals,
        checkedItems: Array.isArray(saved.checkedItems) ? saved.checkedItems.filter(item => typeof item === "string") : [],
        tacoFriday: true
      };
    }
  } catch (error) {
    console.warn("Kunne ikke lese den lagrede middagsplanen:", error);
    showToast("Den lagrede planen kunne ikke leses. En ny ukeplan vises.");
  }
  return { weekKey: week.key, meals: defaultMeals(week.weekIndex), checkedItems: [], tacoFriday: true };
}

function savePlan() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(plan));
  } catch (error) {
    console.error("Kunne ikke lagre middagsplanen:", error);
    showToast("Endringen vises, men kunne ikke lagres på denne enheten.");
  }
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat("nb-NO", options).format(date);
}

function formatWeekRange(week) {
  const sameMonth = week.monday.getMonth() === week.sunday.getMonth();
  const start = formatDate(week.monday, { day: "numeric" });
  const end = formatDate(week.sunday, { day: "numeric", month: "long" });
  const startMonth = sameMonth ? "" : ` ${formatDate(week.monday, { month: "long" })}`;
  return `${start}${startMonth}–${end}`;
}

function renderWeekHeader(week) {
  $("#week-range").textContent = formatWeekRange(week);
  $("#week-number").textContent = `Uke ${week.weekNumber}`;
}

function renderMeals() {
  const week = getWeekInfo();
  $("#meal-list").innerHTML = plan.meals.map((recipeId, dayIndex) => {
    const recipe = recipes.find(item => item.id === recipeId);
    const options = recipes.map(item =>
      `<option value="${item.id}" ${item.id === recipe.id ? "selected" : ""}>${item.name}</option>`
    ).join("");
    const availableAlternatives = recipes.filter(item => item.id !== recipe.id);
    const alternativeStart = (week.weekIndex + dayIndex * 3) % availableAlternatives.length;
    const alternatives = availableAlternatives
      .slice(alternativeStart)
      .concat(availableAlternatives.slice(0, alternativeStart))
      .slice(0, 3);
    return `
      <article class="meal-card">
        <div class="meal-day"><span class="day-marker">${String(dayIndex + 1).padStart(2, "0")}</span>${days[dayIndex]}</div>
        <div class="meal-main">
          <button class="meal-photo ${recipe.color}" type="button" data-photo="${recipe.id}" aria-label="Forstørr bilde av ${recipe.name}">
            <span aria-hidden="true">${recipe.icon}</span>
            <img src="images/${recipe.id}.jpg" alt="" loading="lazy">
          </button>
          <div class="meal-copy">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <div class="meal-tags">
              <span><span aria-hidden="true">◷</span> ${recipe.time} min</span>
              <span><span aria-hidden="true">↘</span> ca. ${recipe.carbs} g karbohydrater</span>
              <span><span aria-hidden="true">♧</span> 4 porsjoner</span>
            </div>
          </div>
          <label class="meal-select">
            <span>Bytt middag</span>
            <select data-day="${dayIndex}" aria-label="Bytt middag for ${days[dayIndex]}">${options}</select>
          </label>
          <details class="recipe-details">
            <summary>Se oppskrift</summary>
            <div class="recipe-content">
              <h4>Dette trenger dere</h4>
              <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
              <h4>Slik gjør dere</h4>
              <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
            </div>
          </details>
          <details class="alternatives-details">
            <summary>Andre middagsideer</summary>
            <div class="alternative-list">
              ${alternatives.map(alternative => `
                <button type="button" data-day="${dayIndex}" data-recipe="${alternative.id}">
                  <span>${alternative.name}</span>
                  <small>${alternative.time} min · ca. ${alternative.carbs} g karbohydrater</small>
                </button>`).join("")}
            </div>
          </details>
        </div>
      </article>`;
  }).join("");
  $$("#meal-list .meal-photo img").forEach(image => {
    image.addEventListener("load", () => image.parentElement.classList.add("has-image"), { once: true });
    image.addEventListener("error", () => image.parentElement.classList.add("image-missing"), { once: true });
  });
}

function parseShoppingItem(ingredient) {
  const match = ingredient.match(/^(\d+(?:[,.]\d+)?)(?:\s+([^\s]+))?\s+(.+)$/u);
  if (!match) {
    const name = ingredient.trim();
    return { key: name.toLocaleLowerCase("nb-NO"), name, quantity: null, unit: "" };
  }

  const quantity = Number(match[1].replace(",", "."));
  const hasUnit = match[2] && shoppingUnits.has(match[2].toLocaleLowerCase("nb-NO"));
  const name = (hasUnit ? match[3] : [match[2], match[3]].filter(Boolean).join(" ")).trim();
  const unit = hasUnit ? match[2].toLocaleLowerCase("nb-NO") : "";
  return { key: `${unit}|${name.toLocaleLowerCase("nb-NO")}`, name, quantity, unit };
}

function getShoppingItems() {
  const items = new Map();
  plan.meals.forEach(recipeId => {
    const recipe = recipes.find(item => item.id === recipeId);
    recipe.ingredients.forEach(ingredient => {
      const parsed = parseShoppingItem(ingredient);
      const existing = items.get(parsed.key);
      if (existing && parsed.quantity !== null && existing.quantity !== null) {
        existing.quantity += parsed.quantity;
      } else if (existing) {
        existing.count += 1;
      } else {
        items.set(parsed.key, { ...parsed, count: 1, category: shoppingCategory(parsed.name) });
      }
    });
  });
  return [...items.values()].sort((a, b) =>
    shoppingCategories.indexOf(a.category) - shoppingCategories.indexOf(b.category) ||
    a.name.localeCompare(b.name, "nb")
  );
}

function shoppingCategory(name) {
  const item = name.toLocaleLowerCase("nb-NO");
  if (/squash|tomat|blomkål|salat|avokado|paprika|løk|brokkoli|spinat|sopp|bønner|erter|aubergine|agurk|sitron|lime|dill|gressløk|oregano|sukkererter/.test(item)) {
    return shoppingCategories[0];
  }
  if (/kylling|kjøtt|laks|svine|reker|torsk|bacon/.test(item)) return shoppingCategories[1];
  if (/yoghurt|feta|crème|fløte|smør|halloumi|ost|parmesan|cheddar|melk|egg/.test(item)) {
    return shoppingCategories[2];
  }
  return shoppingCategories[3];
}

function formatShoppingItem(item) {
  const quantity = item.quantity === null
    ? ""
    : `${new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 2 }).format(item.quantity)}${item.unit ? ` ${item.unit}` : ""} `;
  const repeat = item.quantity === null && item.count > 1 ? ` (${item.count} retter)` : "";
  return `${quantity}${item.name}${repeat}`;
}

function renderShoppingList() {
  const items = getShoppingItems();
  const checked = new Set(plan.checkedItems);
  const categories = shoppingCategories.map(category => {
    const categoryItems = items.filter(item => item.category === category);
    if (!categoryItems.length) return "";
    return `
      <section class="shopping-group" aria-label="${category}">
        <h3>${category}</h3>
        <ul>${categoryItems.map(item => `
          <li class="shopping-item ${checked.has(item.key) ? "is-checked" : ""}">
            <label>
              <input type="checkbox" data-shopping-item="${item.key}" ${checked.has(item.key) ? "checked" : ""}>
              <span>${formatShoppingItem(item)}</span>
            </label>
          </li>`).join("")}
        </ul>
      </section>`;
  }).join("");
  $("#shopping-list").innerHTML = categories || '<p class="shopping-empty">Velg middager for å lage handlelisten.</p>';
  $("#shopping-count").textContent = `${checked.size} av ${items.length} varer handlet`;
  $("#clear-shopping").disabled = checked.size === 0;
}

function render() {
  const week = getWeekInfo();
  if (!plan || plan.weekKey !== week.key) {
    plan = loadPlan(week);
    savePlan();
  }
  renderWeekHeader(week);
  renderMeals();
  renderShoppingList();
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

$("#meal-list").addEventListener("change", event => {
  const select = event.target.closest("select[data-day]");
  if (!select) return;
  const dayIndex = Number(select.dataset.day);
  const recipe = recipes.find(item => item.id === select.value);
  if (!Number.isInteger(dayIndex) || dayIndex < 0 || dayIndex >= days.length || !recipe) return;
  plan.meals[dayIndex] = recipe.id;
  const availableItems = new Set(getShoppingItems().map(item => item.key));
  plan.checkedItems = plan.checkedItems.filter(item => availableItems.has(item));
  savePlan();
  renderMeals();
  renderShoppingList();
  showToast(`${days[dayIndex]} er oppdatert til ${recipe.name}.`);
});

$("#meal-list").addEventListener("click", event => {
  const button = event.target.closest("button[data-day][data-recipe]");
  if (!button) return;
  const dayIndex = Number(button.dataset.day);
  const recipe = recipes.find(item => item.id === button.dataset.recipe);
  if (!Number.isInteger(dayIndex) || dayIndex < 0 || dayIndex >= days.length || !recipe) return;
  plan.meals[dayIndex] = recipe.id;
  const availableItems = new Set(getShoppingItems().map(item => item.key));
  plan.checkedItems = plan.checkedItems.filter(item => availableItems.has(item));
  savePlan();
  renderMeals();
  renderShoppingList();
  showToast(`${days[dayIndex]} er oppdatert til ${recipe.name}.`);
});

$("#shopping-list").addEventListener("change", event => {
  const checkbox = event.target.closest("input[data-shopping-item]");
  if (!checkbox) return;
  const itemKey = checkbox.dataset.shoppingItem;
  plan.checkedItems = checkbox.checked
    ? [...new Set([...plan.checkedItems, itemKey])]
    : plan.checkedItems.filter(item => item !== itemKey);
  savePlan();
  checkbox.closest(".shopping-item").classList.toggle("is-checked", checkbox.checked);
  const checkedCount = plan.checkedItems.length;
  $("#shopping-count").textContent = `${checkedCount} av ${getShoppingItems().length} varer handlet`;
  $("#clear-shopping").disabled = checkedCount === 0;
});

$("#clear-shopping").addEventListener("click", () => {
  plan.checkedItems = [];
  savePlan();
  renderShoppingList();
});

$("#meal-list").addEventListener("click", event => {
  const photoButton = event.target.closest("button[data-photo]");
  if (!photoButton) return;
  const recipe = recipes.find(item => item.id === photoButton.dataset.photo);
  if (!recipe) return;
  const dialog = $("#photo-dialog");
  const image = $("#photo-dialog-image");
  image.src = photoButton.querySelector("img").src;
  image.alt = recipe.name;
  $("#photo-dialog-caption").textContent = recipe.name;
  dialog.showModal();
});

$("#photo-dialog-close").addEventListener("click", () => $("#photo-dialog").close());
$("#photo-dialog").addEventListener("click", event => {
  if (event.target === $("#photo-dialog")) $("#photo-dialog").close();
});

window.addEventListener("focus", render);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) render();
});
window.setInterval(() => {
  if (getWeekInfo().key !== plan.weekKey) render();
}, 60000);

render();
