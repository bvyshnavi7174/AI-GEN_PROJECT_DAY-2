// Existing functions
function showReviewForm() {
    document.getElementById('reviewForm').style.display = 'block';
}

function closeReviewForm() {
    document.getElementById('reviewForm').style.display = 'none';
}

document.getElementById('reviewFormContent').onsubmit = function(e) {
    e.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const bookImage = document.getElementById('bookImage').value;
    const bookReview = document.getElementById('bookReview').value;
    const bookRating = document.getElementById('bookRating').value;

    console.log('Review Submitted:', {
        bookName,
        bookImage,
        bookReview,
        bookRating
    });

    alert('Review Submitted!');

    window.location.href = 'home_page.html';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('reviewForm')) {
        closeReviewForm();
    }
};

function showBookDetails() {
    const bookDetails = `
        <ul>
            <li><strong>1. To Kill a Mockingbird</strong> by Harper Lee<br><img src="https://covers.openlibrary.org/b/id/8226191-L.jpg" alt="To Kill a Mockingbird"><p>A powerful exploration of racial injustice and moral integrity through the eyes of Scout Finch.</p></li>
            <li><strong>2. 1984</strong> by George Orwell<br><img src="https://covers.openlibrary.org/b/id/10448723-L.jpg" alt="1984"><p>A harrowing dystopian novel about surveillance, control, and the loss of individuality in a totalitarian regime.</p></li>
            <li><strong>3. The Great Gatsby</strong> by F. Scott Fitzgerald<br><img src="https://covers.openlibrary.org/b/id/8394825-L.jpg" alt="The Great Gatsby"><p>A critique of the American Dream, this novel is set in the opulence of the Roaring Twenties, exploring themes of love and ambition.</p></li>
            <li><strong>4. Pride and Prejudice</strong> by Jane Austen<br><img src="https://covers.openlibrary.org/b/id/10520169-L.jpg" alt="Pride and Prejudice"><p>A witty and romantic novel that addresses social class and gender expectations in early 19th-century England.</p></li>
            <li><strong>5. The Catcher in the Rye</strong> by J.D. Salinger<br><img src="https://covers.openlibrary.org/b/id/8369300-L.jpg" alt="The Catcher in the Rye"><p>A poignant coming-of-age story about Holden Caulfield's struggle with adolescence and the adult world.</p></li>
            <li><strong>6. The Lord of the Rings</strong> by J.R.R. Tolkien<br><img src="https://covers.openlibrary.org/b/id/10832153-L.jpg" alt="The Lord of the Rings"><p>An epic fantasy tale of adventure and heroism set in the richly imagined world of Middle-earth.</p></li>
            <li><strong>7. Harry Potter and the Sorcerer's Stone</strong> by J.K. Rowling<br><img src="https://covers.openlibrary.org/b/id/7944578-L.jpg" alt="Harry Potter and the Sorcerer's Stone"><p>The enchanting story of a young wizard's journey to discover his identity and confront dark forces.</p></li>
            <li><strong>8. The Hobbit</strong> by J.R.R. Tolkien<br><img src="https://covers.openlibrary.org/b/id/8366980-L.jpg" alt="The Hobbit"><p>A prelude to Tolkien's "The Lord of the Rings," this tale follows Bilbo Baggins on an adventure to reclaim a lost kingdom.</p></li>
            <li><strong>9. The Alchemist</strong> by Paulo Coelho<br><img src="https://covers.openlibrary.org/b/id/7824159-L.jpg" alt="The Alchemist"><p>A philosophical story about following one's dreams and discovering one's personal legend.</p></li>
            <li><strong>10. One Hundred Years of Solitude</strong> by Gabriel García Márquez<br><img src="https://covers.openlibrary.org/b/id/6400925-L.jpg" alt="One Hundred Years of Solitude"><p>A masterpiece of magical realism chronicling the Buendía family over generations in the mythical town of Macondo.</p></li>
        </ul>
    `;
    document.getElementById('bookDetails').innerHTML = bookDetails;
    document.getElementById('bookDetailsModal').style.display = 'block';
}

function closeBookDetails() {
    document.getElementById('bookDetailsModal').style.display = 'none';
}

// Existing functionality for the top-rated books section
function showBookDetail(title, cover, review, link) {
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookCover').src = cover;
    document.getElementById('bookDescription').textContent = review;
    document.getElementById('buyLink').href = link;
    document.getElementById('bookDetailModal').style.display = 'block';
}

function closeBookDetail() {
    document.getElementById('bookDetailModal').style.display = 'none';
}

// New functionality for top-rated books
function showTopRatedBooks() {
    const topRatedBooks = [
        {
            name: "To Kill a Mockingbird",
            rating: "4.8/5",
            link: "https://www.amazon.com/dp/0060935464"
        },
        {
            name: "1984",
            rating: "4.7/5",
            link: "https://www.amazon.com/dp/0451524934"
        },


        {
            name: "The Great Gatsby",
            rating: "4.6/5",
            link: "https://www.amazon.com/dp/0743273567"
        },
        {
            name: "Pride and Prejudice",
            rating: "4.8/5",
            link: "https://www.amazon.com/dp/1503290565"
        },
        {
            name: "The Catcher in the Rye",
            rating: "4.3/5",
            link: "https://www.amazon.com/dp/0316769487"
        },
        {
            name: "The Lord of the Rings",
            rating: "4.9/5",
            link: "https://www.amazon.com/dp/0544003411"
        },
        {
            name: "Harry Potter and the Sorcerer's Stone",
            rating: "4.9/5",
            link: "https://www.amazon.com/dp/059035342X"
        },
        {
            name: "The Hobbit",
            rating: "4.7/5",
            link: "https://www.amazon.com/dp/0345339681"
        },
        {
            name: "The Alchemist",
            rating: "4.6/5",
            link: "https://www.amazon.com/dp/0061122416"
        },
        {
            name: "One Hundred Years of Solitude",
            rating: "4.8/5",
            link: "https://www.amazon.com/dp/0060883286"
        },
        {
            name: "The Catcher in the Rye",
            rating: "4.3/5",
            link: "https://www.amazon.com/dp/0316769487"
        },
        {
            name: "Brave New World",
            rating: "4.5/5",
            link: "https://www.amazon.com/dp/0060850523"
        },
        {
            name: "Fahrenheit 451",
            rating: "4.4/5",
            link: "https://www.amazon.com/dp/1451673310"
        },
        {
            name: "Catch-22",
            rating: "4.6/5",
            link: "https://www.amazon.com/dp/1451626657"
        },
        {
            name: "The Road",
            rating: "4.4/5",
            link: "https://www.amazon.com/dp/0307387895"
        },
        {
            name: "The Shining",
            rating: "4.5/5",
            link: "https://www.amazon.com/dp/0307743659"
        },
        {
            name: "A Game of Thrones",
            rating: "4.7/5",
            link: "https://www.amazon.com/dp/0553103547"
        },
        {
            name: "Dune",
            rating: "4.8/5",
            link: "https://www.amazon.com/dp/0441013597"
        },
        {
            name: "Ender's Game",
            rating: "4.7/5",
            link: "https://www.amazon.com/dp/0812550706"
        },
        {
            name: "The Handmaid's Tale",
            rating: "4.6/5",
            link: "https://www.amazon.com/dp/038549081X"
        },
        {
            name: "Neuromancer",
            rating: "4.4/5",
            link: "https://www.amazon.com/dp/0441569595"
        }
        // Add more books as needed
    ];

    let bookDetailsHTML = '<h2>Top Rated Books</h2>';
    topRatedBooks.forEach(book => {
        bookDetailsHTML += `
            <div class="book-detail">
                <p><strong>${book.name}</strong></p>
                <p>Rating: ${book.rating}</p>
                <p><a href="${book.link}" target="_blank">Buy Now</a></p>
            </div>
        `;
    });

    document.getElementById('bookDetails').innerHTML = bookDetailsHTML;
    document.getElementById('bookDetailsModal').style.display = 'block';
}
