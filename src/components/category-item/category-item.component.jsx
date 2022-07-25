import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const { imageUrl, title } = category;
    return (
        <div className='category-container'>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default CategoryItem;
/*
  Props from <Directory /> is passed, which is each categories "object".
  category prop is destructured into the "keys" from each object (imageUrl, title).
  Each object is rendered in its own <CategoryItem/> after props are passed in.
  <CategoryItem /> is exported so that <Directory /> can import it.
*/