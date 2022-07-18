import Directory from '../../components/directory/directory.component'
// Directory component is imported into the Home.jsx

// Home component is initiated with an array an a return statement
const Home = () => {
  // array of objects
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  // The return statement renders "static content" through the Directory component for now.
  // <Directory /> categories props is passing the categories array to <Directory />
  return (
    <Directory categories={categories}/>
  );
}

// Home component is exported and can be import in another component.
export default Home;