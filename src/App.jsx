import ClientPage from "./pages/ClientPage"
import Datapage from "./pages/DataPage"
import Extension_page from "./pages/Extension_page"
import Features from "./pages/features"
import Footer from "./pages/Footer"
import FreetrialPage from "./pages/FreetrialPage"
import Hero_section from "./pages/Hero_section"
import Plateform from "./pages/platform_data"
import Pricing from "./pages/pricing"
import Project_mng from "./pages/prj_managment"
import Sponsor from "./pages/Sponsor"


function App() {

  return (
   <div className="mx-auto">
      <Hero_section/>
      <Project_mng/>
      <Extension_page/>
      <Pricing/>
      <Plateform/>
      <Datapage/>
      <Sponsor/>
      <Features/>
      <ClientPage/>
      <FreetrialPage/>
      <Footer/>
   </div>
  )
}

export default App
