import './detailsCard.css'

function DetailsCard() {
  return (
    <div className='cardContainer'>
       <div className="cardIcon">
       <i class="fa-solid fa-circle-dollar-to-slot"></i>
       </div>
        <div className="detail">
            <p>Earning</p>
            <h1>$198K</h1>
            <span><i class="fa-solid fa-arrow-up"></i> 37.8% this month</span>
        </div>
      
    </div>
  )
}

export default DetailsCard
