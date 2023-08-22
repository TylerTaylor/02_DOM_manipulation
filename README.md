# DOM

## Deliverables

- Demo querySelector
  - Create a function that sets the text content of the header to the bookstore name
- Demo getElementById
  - Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours 
- Demo createElement
  - Iterate through our book inventory (an array of book objects). For every object in the array, create an `<li>`, `<h3>`, 2 `<p>` tags, and an `<img>` element.
  - Add a book title to the h3 text content, the author and price to the p tags
  - Add the imageUrl to the `img.src` and a class to the `li` named `list-li` (this is for some pre-written CSS in our style sheet)
  - Append the `h2`, `p` tags, and `img` to the `li`
  - Select the `ul` with the id of 'book-list' and append the `li`
- Refactor
  - Take the callback function out of the `forEach` and set it to a variable so it can be reused in other areas of our code

## Document Object Model

The DOM is an interface for web documents. A tree of Node objects that represent a web page. These nodes allow access and changes to the Document.

```js
// The window is an object with methods and properties attached to the DOM

// The document is an object inside the window that allows us to manipulate the dom
```

## Selecting DOM Elements

To manipulate the DOM, we need to use methods to traverse it and find the elements we are looking for. There are more methods we can use, but these will be the most common for now.

```js
// Single Elements

// querySelector() - returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
.querySelector('div')

// Adding a class argument ('.class') will look for the first matching class. You can do the same with an ID.
.querySelector('.someClass')

// getElementById() - returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
.getElementById('someId')

// Multiple Elements

// querySelectorAll() - returns a NodeList representing a list of the document's elements that match the specified group of selectors.
.querySelectorAll('div')
.querySelectorAll('.someClass')
```

## Changing and Creating DOM Elements

Once a DOM element is selected, there are several ways of changing the content in that Node.

```js
// Select a div
const div = document.querySelector('div')

// Set new text content
// 3 main ways to do this - `.textContent`, `.innerText`, and `.innerHTML`

// textContent - returns the full text of a node. Is less performance heavy and works for all nodes. 
div.textContent = 'some text'

// innerText - only grabs visible text (if something is hidden by CSS, it won't be selected by innerText), and is more performance heavy.
div.innerText = 'some text'

// innerHTML - can add full HTML content to an element. Use of this should be limited as it's slow, it clears out everything, removes event listeners, and most importantly, is vulnerable to cross-site-scripting attacks!
div.innerHTML = `
  <p>Use with caution!</p>
`

// Creating Elements

// createElement creates a new element when provided a tag name (div, p, img, h3 etc)
// A newly created element can be set with content just as an element selected by the dom can.
const newDiv = document.createElement('div')
newDiv.textContent = 'my text'

// Note: remember to `append` your new element to the DOM! ;)
const targetDiv = document.querySelector('.target')
targetDiv.append(newDiv)
```

## Removing Elements

Once selected, elements can be removed in a couple ways.

```js
// remove the whole element
div.remove()

// clear the element of all it's nested children
div.innerHTML = ''
```