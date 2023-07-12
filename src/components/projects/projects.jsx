import './projects.css'
import Project from "../project/project";
import RBTree from '../../utils/images/body/projects/RBTreeVisualiser.png'
import Shop from '../../utils/images/body/projects/Shop-n-All.png'
import TicTacGame from '../../utils/images/body/projects/TicTagGame.png'
import AdventurePark from '../../utils/images/body/projects/AdventurePark.png'
import SortAlgs from '../../utils/images/body/projects/SortAlgs.png'
import Portfolio from '../../utils/images/body/projects/Portfolio.png'
import DelDrones from '../../utils/images/body/projects/DelDrones.png'
import oraLuiRobert from '../../utils/images/body/projects/Ora lui Robert.png'
const Projects = () => {

    const projects = [
        {
            name: 'RBTree Visualiser',
            tech: ['✅ React JS.', '✅ TypeScript', '✅ GSAP.'],
            image: RBTree,
            description: 'A nice looking visualizer that allows you to view the rotations and insertions in a RBTree.',
            link: 'https://boisterous-stroopwafel-5eb152.netlify.app/'
        },
        {
            name: 'Shop-n-All',
            tech: ['✅ React JS.', '✅ JavaScript'],
            description: 'A fully featured e-commerce WEB app featuring: reviews, profile, favourites and more. Made using React.',
            image: Shop,
            link: 'https://golden-cupcake-87fcb9.netlify.app/'
        },
        {
            name: 'Adventure Park CMS',
            tech: ['✅ Node JS.', '✅ Express JS.', '✅ Mongo DB.', '✅ EJS Templating.'],
            image: AdventurePark,
            description: 'A fully fleged CMS that enables you to update the info on the website in real time. Made using Express, Node, Mongo DB.',
            link: 'https://adventurepark.herokuapp.com/'
        },
        {
            name: 'TicTacToe',
            tech: ['✅ JavaScript'],
            description: 'A tic tac toe game created as part of the FreeCodeCamp challange. Made using vanilla JS.',
            image: TicTacGame,
            link: 'https://stefan3002.github.io/TicTacGame/'
        },
        {
            name: 'SortAlgs',
            tech: ['✅ JavaScript', '✅ GSAP.'],
            image: SortAlgs,
            description: 'A website that helps you view how sorting algos work, but in contrast to other similar websites, my app actually takes things slow. It features really smooth animations to increase the visual impact. Made using vanilla JS.',
            link: 'https://stefan3002.github.io/SortAlgs/'
        },
        {
            name: 'Portfolio',
            tech: ['✅ CSS.', '✅ JavaScript'],
            image: Portfolio,
            description: 'A modern looking portfolio that can be customised with any info you would have. Made using vanilla HTML, SASS and JS.',
            link: 'https://stefan3002.github.io./'
        },
        {
            name: 'DelDrones',
            tech: ['✅ JavaScript', '✅ Bootstrap 5'],
            image: DelDrones,
            description: 'A modern and clean looking landing page for a product. Made using Bootstrap 5.',
            link: 'https://stefan3002.github.io/DelDrone/'
        },
        {
            name: 'Ora lui Robert',
            tech: ['✅ Wordpress'],
            image: oraLuiRobert,
            description: 'I have revised and optimised the look and feel of the web app.',
            link: 'https://oraluirobert.com/'
        }
    ]

    return (
        <div className='projects' id='projects'>
            {projects.map(project => {
                return <Project project={project} />
            })}
        </div>
    )
}
export default Projects