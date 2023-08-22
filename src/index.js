// Our Data
console.log(bookStore)

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2)
}

function blurb(book) {
  const title = book.title;
  const author = book.author;
  const price = book.price;

  return `${title} by ${author} is on sale for $${price}`
}

renderHeader()
renderFooter()

// ✅ Create a function that sets the text content of the header to the bookstore name
function renderHeader() {
  document.getElementById('bookstore-name').textContent = bookStore.name
}

// ✅ Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours

function renderFooter() {
  document.getElementById('store').textContent = bookStore.location
  document.getElementById('number').textContent = bookStore.number
  document.getElementById('address').textContent = bookStore.address
}

// ✅ Iterate through our book inventory (an array of book objects). For every object in the array, create an <li>, <h3>, 2 <p> tags, and an <img> element.

// ✅ Add a book title to the h3 text content, the author and price to the p tags

// ✅ Add the imageUrl to the img.src and a class to the li named list-li (this is for some pre-written CSS in our style sheet)

// ✅ Append the h2, p tags, and img to the li

// ✅ Select the ul with the id of 'book-list' and append the li

function renderBook(book) {
  const li = document.createElement('li')
  li.className = 'list-li'

  const h3 = document.createElement('h3')
  h3.innerText = book.title
  li.append(h3)

  const author = document.createElement('p')
  author.textContent = book.author
  li.append(author)
  
  const price = document.createElement('p')
  price.textContent = formatPrice(book.price)
  li.append(price)

  const img = document.createElement('img')
  img.src = book.imageUrl
  img.alt = `${book.title} cover`
  img.title = `${book.title} cover`
  li.append(img)

  const button = document.createElement('button')
  button.textContent = 'Delete'
  li.append(button)

  document.getElementById('book-list').append(li)
}

bookStore.inventory.forEach(book => renderBook(book))
// implicitly passing the item to the callback function
// i still recommend the way above for clarity, but this way is cool too
// bookStore.inventory.forEach(renderBook)


// just messing around after lecture
// const h2 = document.querySelector('h2')
// h2.textContent = "Super cool books..."

// const h3 = document.createElement('h3')
// h3.textContent = "Super cool books..."

// document.querySelector('header > div').append(h3)
