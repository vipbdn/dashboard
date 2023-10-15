import './sidebar.css'

function Sidebar() {
  return (
    <div  className='sidebar'>
      <div className="dashboardLogo">
      <i class="fa-solid fa-chart-line mainHeading"></i> <span className='mainHeading'>Dashboard</span>
      </div>
      <div className="options">
        <div className="optionBg firstOption">
       <div> <i class="fa-solid fa-key dashboardOptionIcon"></i> <span>Dashboard</span></div>
        </div>
        <div className="optionBg">
        <div>
        <i class="fa-solid fa-hands-asl-interpreting dashboardOptionIcon"></i> <span>Product</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="optionBg">
        <div>
        <i class="fa-regular fa-user dashboardOptionIcon"></i><span>Customer</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="optionBg">
        <div>
        <i class="fa-solid fa-money-bill-wheat dashboardOptionIcon"></i> <span>Income</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="optionBg">
        <div>
        <i class="fa-solid fa-percent dashboardOptionIcon"></i><span>Promote</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="optionBg">
        <div>
        <i class="fa-regular fa-circle-question dashboardOptionIcon"></i><span>Help</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
