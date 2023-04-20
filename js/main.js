const elsTabLink = document.querySelectorAll('.js-tablink-link')
const elsTabItem = document.querySelectorAll('.tablink__item')
const elsTabBox = document.querySelectorAll('.tablink__box')
function deactivateTabsItem() {
  elsTabItem.forEach((elTabItem) => {
    elTabItem.classList.remove('tablink__item--active')
    //add clicked current item faqatgina bosilgan (clicked) elementning otasiga qo'shamiz to'g'ridan to'g'ri eltabItem ga qo'shib keta olmaymiz
  })
}
function deactivateBox() {
  elsTabBox.forEach((elTabBox) => {
    elTabBox.classList.remove('tablink__box--active')
  })
}
elsTabLink.forEach((elTabLink) => {
  elTabLink.addEventListener('click', (e) => {
    //prevent page move
    e.preventDefault()
    //remove active class from each item
    deactivateTabsItem()
    elTabLink.parentElement.classList.add('tablink__item--active')
    deactivateBox()
    const elTargetBox = document.querySelector(elTabLink.dataset.tabTarget)
    elTargetBox.classList.add('tablink__box--active')
  })
})
