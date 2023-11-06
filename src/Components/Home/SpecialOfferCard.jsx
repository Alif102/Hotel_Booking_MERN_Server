/* eslint-disable react/prop-types */

const SpecialOfferCard = ({data}) => {
  return (
    <div>
        <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
    </div>
  )
}

export default SpecialOfferCard