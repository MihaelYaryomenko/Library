const data = [{
  title: "JS programming",
  author: "Ebabichev",
  pages: 23,
  isRead: false,
}, {
  title: "Python programming",
  author: "Yaryomenko",
  pages: 45,
  isRead: true,
}]

const dialog = document.querySelector("#book-form")
const library = document.querySelector('#library-container')
const submitBtn = document.querySelector("#submit-btn")

const modalOpen = () => {
  dialog.showModal()
}

const modalClose = () => {
  dialog.close()
}

class booksConstructor {
  constructor(author, title, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

const submitButton = (event) => {
  const form = document.querySelector("form")
  const author = document.querySelector("#author").value
  const title = document.querySelector("#title").value
  const numOfPages = document.querySelector("#num-pages").value
  const isRead = document.querySelector("#isRead").checked
  const newBook = new booksConstructor(author, title, numOfPages, isRead)
  form.reset()
  data.push(newBook)
  dialog.close()
  event.preventDefault()

  renderBook(data.length - 1) // I think there is a better way to do it
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

const renderBook = (bookNumber) => {
  const book = document.createElement("div")
  book.classList.add('books')
  library.appendChild(book)
  book.setAttribute("id", `book-${bookNumber}`)

  const Title = document.createElement("h2")
  Title.innerText = `Title: ${data[bookNumber].title}`
  book.appendChild(Title)

  const author = document.createElement("p")
  author.innerText = `Author: ${data[bookNumber].author}`
  Title.after(author)

  const numOfPages = document.createElement("p")
  numOfPages.innerText = `Number of pages: ${data[bookNumber].pages}`
  author.after(numOfPages)

  const isRead = document.createElement("div")
  isRead.setAttribute("id", "isRead")

  const deleteButton = document.createElement("button")
  deleteButton.info = bookNumber // future me, I so sorry for this. I had no idea how to do this :(
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener("click", deleteBookFromLibrary)
  deleteButton.classList.add("red-btn")
  book.appendChild(deleteButton)
}

const deleteBookFromLibrary = (event) => {
  const itemThatNeedToBeDeleted = document.querySelector(`#book-${event.currentTarget.info}`)
  itemThatNeedToBeDeleted.remove()
}


for (let i = 0; i < data.length; i++) {
  renderBook([i])
}

submitBtn.addEventListener('click', submitButton)