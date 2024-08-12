import Dog from './Dog.jsx'

function Dogs({dogs}) {


  return (
    <div className="Dogs">
      {dogs.map((dog, i) => <Dog dog={dog} id={i}/>)}
    </div>
  )
}

export default Dogs
