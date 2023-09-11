const dialog = document.querySelector("#book-form")

const data = []

const modalOpen = () => {
  dialog.showModal()
}

const modalClose = () => {
  dialog.close()
}

const submitButton = () => {
  const author = document.querySelector("#author")
  const title = document.querySelector("#title")
  const numOfPages = document.querySelector("#num-pages")
  const isRead = document.querySelector("#isRead")
  console.log("Hello World!")
}

dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})