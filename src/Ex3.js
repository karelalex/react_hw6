import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const Content = () => (
    <>
        <h1>Всем привет</h1>
        <p>Очень привет</p>
    </>
)


export const ShowHide = () => {
    const [show, setShow] = useState(true);
    const handler = () => setShow(!show)
    let content = null
    if (show) {
        content = <Content />
    }
        return (
        <div>
            <Button variant="primary" onClick={handler}>Жми меня</Button>
            {content}
        </div>

    )
}

export const RecursiveButton = () => {
    const [showNext, setShowNext] = useState(false);
    const handler = () => setShowNext(!showNext)
    return (
        <div>
            <Button variant="primary" onClick={handler}>Показать/скрыть далее</Button>
            {showNext && <RecursiveButton />}
        </div>

    )
}
