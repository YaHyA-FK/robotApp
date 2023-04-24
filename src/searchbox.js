


const searchbox=({searchChange})=>{
    return(
        <div>
            <input type="search" placeholder="type robot name" 
            className="bg-light-red w-20 ma2 ba b--blue pa2 br2 shadow-5 dark-blue b"
            onKeyUp={searchChange}
            />
        </div>
    );
}
export default searchbox;