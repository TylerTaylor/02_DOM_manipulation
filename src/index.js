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

// ✅ Create a function that sets the text content of the header to the bookstore name

// ✅ Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours



// ✅ Iterate through our book inventory (an array of book objects). For every object in the array, create an <li>, <h3>, 2 <p> tags, and an <img> element.

// ✅ Add a book title to the h3 text content, the author and price to the p tags

// ✅ Add the imageUrl to the img.src and a class to the li named list-li (this is for some pre-written CSS in our style sheet)

// ✅ Append the h2, p tags, and img to the li

// ✅ Select the ul with the id of 'book-list' and append the li