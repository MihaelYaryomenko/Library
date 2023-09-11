const data = []

const dialog = document.querySelector("#book-form")

const submitBtn = document.querySelector("#submit-btn")

const modalOpen = () => {
  dialog.showModal()
}

const modalClose = () => {
  dialog.close()
}

class booksConstructor {
  constructor(author, title, pages, isRead) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
  }
}

const submitButton = (event) => {
  const author = document.querySelector("#author").value
  const title = document.querySelector("#title").value
  const numOfPages = document.querySelector("#num-pages").value
  const isRead = document.querySelector("#isRead").value
  const newBook = new booksConstructor(author, title, numOfPages, isRead)
  data.push(newBook)
  event.preventDefault()
}

submitBtn.addEventListener("click", submitButton)

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

const booksGenerator = () => {
  
}