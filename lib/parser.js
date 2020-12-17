

const parser = document => {
    const books = document.querySelectorAll('.product_pod');

    return [...books].map(book => ({
        title: book.querySelector('h3 > a').textContent,
        imgUrl: book.querySelector('img').src,
        rating: book.querySelector('.star-rating').className.split(' ')[1],
        price: book.querySelector('.price_color').textContent,
        inStock: !!book.querySelector('.icon-ok')
    }));
};

module.exports = parser;
