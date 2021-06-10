import React from "react";
import {Button} from "react-bootstrap";

const Tab1 = () => <h1>Кошачки</h1>

const Tab2 = () => <h2>Собачки</h2>

const Tab3 = () => <h3>Еноты</h3>

export class Ex1 extends React.Component {
    state = {
        activeTab: 1
    }
    handleClick = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }
    render() {
        const {activeTab} = this.state
        return(<>
            <div>
                <Button variant={"primary"} onClick={this.handleClick} data-name={1}>ТАБ 1</Button>{' '}
                <Button variant={"primary"} onClick={this.handleClick} data-name={2}>ТАБ 2</Button>{' '}
                <Button variant={"primary"} onClick={this.handleClick} data-name={3}>ТАБ 3</Button>{' '}
            </div>
            <div>
                {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
                {activeTab === 3 && <Tab3 />}
            </div>
                <div>
                    Активный таб: {activeTab === 1 ? 'первый' : activeTab === 2 ? 'второй' : 'третий'}
                </div>
            </>
        )
    }
}
