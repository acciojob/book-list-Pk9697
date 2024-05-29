//your JS code here. If required.
const titleInput=document.getElementById('title')
const authorInput=document.getElementById('author')
const isbnInput=document.getElementById('isbn')
const submitButton=document.getElementById('submit')
const tbody=document.getElementById('book-list')

let booksList=[]

submitButton.addEventListener('click',()=>{
	booksList.push({
			id:booksList.length,
			title:titleInput.value,
			author:authorInput.value,
			isbn:isbnInput.value
		})

	render()
})

function handleDelete(id) {
	booksList=booksList.filter(book=>book.id!=id)
	render();
}

function render(){
	tbody.innerHTML=booksList.map(book=>`
		<tr>
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</th>
			<td>
				<button class="delete" id=${book.id} onclick="handleDelete(${book.id})">Delete</button>
			</td>
		</tr>
	`).join(' ')
}






