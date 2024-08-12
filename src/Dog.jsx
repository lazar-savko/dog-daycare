
function Dog({dog, id}) {


  return (
    <div className="Dog">
      <h3>{dog}</h3>
      <img src={`https://placedog.net/300/200?id=${id+1}`} alt="dogPhoto" />
    </div>
  )
}

export default Dog
