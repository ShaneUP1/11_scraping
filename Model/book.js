const pool = require('../lib/utils/pool');

module.exports = class Book {
    id;
    title;
    imgUrl;
    rating;
    price;
    inStock;

    constructor(row) {
        this.id = row.id;
        this.title = row.title;
        this.imgUrl = row.img_url;
        this.rating = row.rating;
        this.price = row.price;
        this.inStock = row.in_stock;
    }

    static async insert(book) {
        const { rows } = await pool.query(
            `INSERT INTO books (title, img_url, rating, price, in_stock)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *`,
            [book.title, book.imgUrl, book.rating, book.price, book.inStock]
        );
        return new Book(rows[0]);
    }
};
