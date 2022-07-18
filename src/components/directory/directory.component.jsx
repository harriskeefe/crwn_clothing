import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'
// CategoryItem component is imported for usage.
// Stylesheet for <Directory /> is imported for usage;

// Functional component Directory is initiated.
// The categories array is passed as a prop from Home.component.jsx.
// Each object in the categories array is mapped which means we will render "dynamic content" instead of static.
// The CategoryItem will be rendered for each mapped "object" in the categories array.
// In the <CategoryItem />, key attribute is required and uses each objects id to distinguish mapped objects.
// In the <CategoryItem />, the object is passed as a prop in category={category} and will render each categories object from the Home component.
const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
          {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
    </div>
    )
}

// <Directory /> is exported and can be imported into another component.
export default Directory;