import Form  from './component/form.jsx'
import Report from './component/report.jsx'
import './styles/homepage.css' 

function HomePage(){
  return(
    <div className="homepage">
      <Form />
      <Report />
    </div>
  )
}

export default HomePage;