const annualButton = document.querySelector('.plans__element_place_annual-bill'); // выбираем в проекте класс карточки "Annual";
const monthlyButton = document.querySelector('.plans__element'); // выбираем в проекте класс карточки "Monthly";
const freeButton = document.querySelector('.plan-description__button_position_first'); // выбираем в проекте класс кнопки "free";
const freePlanBlock = document.querySelector('.plan-choice__free-title'); // выбираем в проекте класс названия колонки тарифа "free";
const proPlanBlock = document.querySelector('.plan-choice__pro-title'); // выбираем в проекте класс названия колонки тарифа "pro";
const proButton = document.querySelector('.plan-description__button_position_last'); // выбираем в проекте класс кнопки "pro";
const mobileFreePlanBlock = document.querySelector('.plan-choice__free-title_version_mobile'); // выбираем в мобильной версии проекта класс названия колонки тарифа "free";
const mobileProPlanBlock = document.querySelector('.plan-choice__pro-title_version_mobile'); // выбираем в мобильной версии проекта класс названия колонки тарифа "pro";

function handleCardChoice(card, activeCard) { // объявляем функцию для обработки нажатия на карточку тарифа;
  card.classList.add('plans__element_active');
  activeCard.classList.remove('plans__element_active');
}

function handlePlanChoice(plan, button, activePlan, activeButton) { // объявляем функцию для обработки нажатия на название колонки тарифа;
  plan.classList.add('plan-choice__title_active');
  button.classList.add('plan-description__button_active');
  activePlan.classList.remove('plan-choice__title_active');
  activeButton.classList.remove('plan-description__button_active');
}



annualButton.addEventListener('click', () => handleCardChoice(annualButton, monthlyButton)); // подключаем "слушатели";
monthlyButton.addEventListener('click', () => handleCardChoice(monthlyButton, annualButton));
freePlanBlock.addEventListener('click', () => handlePlanChoice(freePlanBlock, freeButton, proPlanBlock, proButton));
proPlanBlock.addEventListener('click', () => handlePlanChoice(proPlanBlock, proButton, freePlanBlock, freeButton));
mobileFreePlanBlock.addEventListener('click', () => handlePlanChoice(mobileFreePlanBlock, freeButton, mobileProPlanBlock, proButton));
mobileProPlanBlock.addEventListener('click', () => handlePlanChoice(mobileProPlanBlock, proButton, mobileFreePlanBlock, freeButton));
