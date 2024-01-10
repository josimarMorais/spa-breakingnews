import { Card } from "../../components/Cards/Card.jsx"
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { news } from '../../Datas'

export default function () {

    return (
        <>
            <Navbar />

            { news.map((item, index) => {
                return <Card key = { index} news = { item } />
            })}
            
        </>
    )
}