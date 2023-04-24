import Card from "./card";


const cardlist=({robots})=>{
    const robotsTable=robots.map((el)=>{
        return <Card id={el.id} name={el.name} email={el.email}/>
    })
    return(
        <div>
            {robotsTable}
        </div>
    )
}
export default cardlist;