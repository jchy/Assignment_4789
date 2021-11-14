function CategoryItem({url,title}){
    return (
        <div className="category">
            <img src = {url} alt = "title" className="card-images"/>
            <p>{title}</p>
        </div>
    )
}

export default CategoryItem; 