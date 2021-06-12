import React from 'react'
import {Button, Table} from "react-bootstrap";

export class ProductTable extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({
            products: [
                {id: 1, name: 'Ручка', price: 17},
                {id: 2, name: 'Книжка', price: 320},
                {id: 3, name: 'Блокнот', price: 540},
                {id: 4, name: 'Ножницы', price: 450},
                {id: 5, name: 'Зеркало', price: 1075},
                {id: 6, name: 'Долото', price: 170},
                {id: 7, name: 'Закладка', price: 5}
            ]
        })
    }

    deleteHandler = (id) => this.setState(
        ({products}) => ({
            products: products.filter((item) => item.id !== id)
        })
    )

    render() {
        const {products} = this.state
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Кнопа</th>
                </tr>
                </thead>
                <tbody>
                {products.map(({id, name, price}) => (<tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price} руб.</td>
                    <td><Button variant={'danger'} onClick={() => this.deleteHandler(id)}>Удалить</Button></td>
                </tr>))}
                </tbody>
            </Table>
        )
    }
}
