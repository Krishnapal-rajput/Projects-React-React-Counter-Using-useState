export default function 
({appleCount, basketName}) {
  return (
    <div className="basket">
        <h1><span>{appleCount}</span> apples</h1>
        <p>{basketName}</p>
    </div>
  )
}
