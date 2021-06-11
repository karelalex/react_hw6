import React from "react";
import {Card} from "react-bootstrap";

const winterImg = 'https://d.radikal.ru/d10/2106/00/c03a887311be.png'
const springImg = 'https://d.radikal.ru/d04/2106/08/5e6d845ff68a.png'
const summerImg = 'https://b.radikal.ru/b00/2106/48/057c415e495b.png'
const autumnImg = 'https://c.radikal.ru/c15/2106/3c/31bf3b775b3f.png'

export const SeasonIf = ({value}) => {
    if (value === 1) {
        return (<Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={winterImg}/>
            <Card.Body>
                <Card.Title>Зима</Card.Title>
            </Card.Body>
        </Card>)
    } else if (value === 2) {
        return (<Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={springImg}/>
            <Card.Body>
                <Card.Title>Весна</Card.Title>
            </Card.Body>
        </Card>)
    } else if (value === 3) {
        return (<Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={summerImg}/>
            <Card.Body>
                <Card.Title>Лето</Card.Title>
            </Card.Body>
        </Card>)
    } else if (value === 4) {
        return (<Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={autumnImg}/>
            <Card.Body>
                <Card.Title>Осень</Card.Title>
            </Card.Body>
        </Card>)
    }
    return null
}

export const SeasonSwitch = ({value}) => {
    switch (value) {
        case 1:
            return (<Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={winterImg}/>
                <Card.Body>
                    <Card.Title>Зима</Card.Title>
                </Card.Body>
            </Card>)
        case 2:
            return (<Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={springImg}/>
                <Card.Body>
                    <Card.Title>Весна</Card.Title>
                </Card.Body>
            </Card>)
        case 3:
            return (<Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={summerImg}/>
                <Card.Body>
                    <Card.Title>Лето</Card.Title>
                </Card.Body>
            </Card>)
        case 4:
            return (<Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={autumnImg}/>
                <Card.Body>
                    <Card.Title>Осень</Card.Title>
                </Card.Body>
            </Card>)
        default:
            return null
    }
}

export const SeasonTern = ({value}) => {
    return value === 1 ?
        (<Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={winterImg}/>
            <Card.Body>
                <Card.Title>Зима</Card.Title>
            </Card.Body>
        </Card>) :
        value === 2 ?
            (<Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={springImg}/>
                <Card.Body>
                    <Card.Title>Весна</Card.Title>
                </Card.Body>
            </Card>) :
            value === 3 ?
                (<Card style={{width: '30rem'}}>
                    <Card.Img variant="top" src={summerImg}/>
                    <Card.Body>
                        <Card.Title>Лето</Card.Title>
                    </Card.Body>
                </Card>) :
                value === 4 ?
                    (<Card style={{width: '30rem'}}>
                        <Card.Img variant="top" src={autumnImg}/>
                        <Card.Body>
                            <Card.Title>Осень</Card.Title>
                        </Card.Body>
                    </Card>) :
                    null
}

export const SeasonTernInJSX = ({value}) => {
    return (
        <Card style={{width: '30rem'}}>
            {value === 1 ?
                (<>
                    <Card.Img variant="top" src={winterImg}/>
                    <Card.Body>
                        <Card.Title>Зима</Card.Title>
                    </Card.Body>
                </>) :
                value === 2 ?
                    (<>
                        <Card.Img variant="top" src={springImg}/>
                        <Card.Body>
                            <Card.Title>Весна</Card.Title>
                        </Card.Body>
                    </>) :
                    value === 3 ?
                        (<>
                            <Card.Img variant="top" src={summerImg}/>
                            <Card.Body>
                                <Card.Title>Лето</Card.Title>
                            </Card.Body>
                        </>) :
                        value === 4 ?
                            (<>
                                <Card.Img variant="top" src={autumnImg}/>
                                <Card.Body>
                                    <Card.Title>Осень</Card.Title>
                                </Card.Body>
                            </>) :
                            null
            }
        </Card>
    )

}

export const SeasonTernAttributes = ({value}) => {
    return (
        <Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={
                value === 1 ? winterImg :
                    value === 2 ? springImg :
                        value === 3 ? summerImg :
                            value === 4 ? autumnImg : ''
            }/>
            <Card.Body>
                <Card.Title>{
                    value === 1 ? 'Зима' :
                        value === 2 ? 'Весна' :
                            value === 3 ? 'Лето' :
                                value === 4 ? 'Осень' : 'Ашипка'
                }</Card.Title>
            </Card.Body>
        </Card>
    )

}

export const SeasonLazyAnd = ({value}) => {
    return (
        <Card style={{width: '30rem'}}>
            {value === 1 &&
            (<>
                <Card.Img variant="top" src={winterImg}/>
                <Card.Body>
                    <Card.Title>Зима</Card.Title>
                </Card.Body>
            </>)}
            {value === 2 &&
            (<>
                <Card.Img variant="top" src={springImg}/>
                <Card.Body>
                    <Card.Title>Весна</Card.Title>
                </Card.Body>
            </>)}
            {value === 3 &&
            (<>
                <Card.Img variant="top" src={summerImg}/>
                <Card.Body>
                    <Card.Title>Лето</Card.Title>
                </Card.Body>
            </>)}
            {value === 4 &&
            (<>
                <Card.Img variant="top" src={autumnImg}/>
                <Card.Body>
                    <Card.Title>Осень</Card.Title>
                </Card.Body>
            </>)}
        </Card>
    )

}

