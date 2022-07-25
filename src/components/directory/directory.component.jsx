import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
          {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
    </div>
    )
}

export default Directory;

/* 
  The categories array is passed as a prop from Home.component.jsx.
  Each object in the categories array is mapped which means we will render "dynamic content" instead of static.
  The CategoryItem will be rendered for each mapped "object" in the categories array.
  In the <CategoryItem />, key attribute is required and uses each objects id to distinguish mapped objects.
  In the <CategoryItem />, the object is passed as a prop in category={category} and will render each categories object from the Home component.
*/