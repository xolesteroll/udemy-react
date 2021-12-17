import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'Book',
        description: 'Some book'
    }, {
        id: 'p2',
        price: 16,
        title: 'toy',
        description: 'Some toy'
    }, {
        id: 'p3',
        price: 26,
        title: 'Booklet',
        description: 'Some Booklet'
    }, {
        id: 'p4',
        price: 36,
        title: 'fairy',
        description: 'Some fairy'
    },
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {
                    DUMMY_PRODUCTS.map(e => {
                        return <ProductItem
                            id={e.id}
                            key={e.id}
                            title={e.title}
                            price={e.price}
                            description={e.description}
                        />
                    })
                }
            </ul>
        </section>
    );
};

export default Products;
