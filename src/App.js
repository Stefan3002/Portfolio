import './index.styles.css'
import {Route, Routes} from "react-router";
import NavigationComponent from "./Components/Navigation/navigation.component";
import HomepageComponent from "./Components/HomePage/homepage.component";
import SkillspageComponent from "./Components/SkillsPage/skillspage.component";
import CertificatespageComponent from "./Components/CertificatesPage/certificatespage.component";
import AchievementspageComponent from "./Components/AchievementsPage/achievementspage.component";
import ProjectspageComponent from "./Components/ProjectsPage/projectspage.component";
import AboutpageComponent from "./Components/AboutPage/aboutpage.component";


export const views = ['/', '/about', '/skills', '/projects', '/achievements', '/certificates']

function App() {
  return (
      <div className='App'>
          <Routes>
              <Route path='/' element={<NavigationComponent />}>
                  <Route path='/' element={<HomepageComponent />}/>
                  <Route path='/skills' element={<SkillspageComponent />}/>
                  <Route path='/certificates' element={<CertificatespageComponent />}/>
                  <Route path='/achievements' element={<AchievementspageComponent />}/>
                  <Route path='/projects' element={<ProjectspageComponent />}/>
                  <Route path='/about' element={<AboutpageComponent />}/>
              </Route>

          </Routes>
      </div>
  );
}

export default App;
