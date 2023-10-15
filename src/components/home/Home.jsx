import DetailsCard from '../detailsCard/DetailsCard'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <h1>Hello Sharukh</h1>
      <div className="cardComponent">
      <DetailsCard/>
      <DetailsCard/>
      <DetailsCard/>
      <DetailsCard/>
      </div>
    </div>
  )
}

export default Home
