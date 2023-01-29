import './skills.css'
import Skill from "../skill/skill";
import ReactSVG from '../../utils/images/body/skills/React.svg'
import JSSVG from '../../utils/images/body/skills/JS.svg'
import HTMLSVG from '../../utils/images/body/skills/HTML.svg'
import TypeScriptSVG from '../../utils/images/body/skills/TypeScript.svg'
import ExpressSVG from '../../utils/images/body/skills/Express.svg'
import NodeSVG from '../../utils/images/body/skills/Node.svg'
import MongoSVG from '../../utils/images/body/skills/Mongo.svg'
import FirebaseSVG from '../../utils/images/body/skills/Firebase.svg'
import SASSSVG from '../../utils/images/body/skills/SASS.svg'
import CSSSVG from '../../utils/images/body/skills/CSS.svg'
import SQLSVG from '../../utils/images/body/skills/SQL.svg'
import SoftSkill from "../soft-skill/soft-skill";
import CsSkill from "../cs-skill/cs-skill";
import Divider from "../divider/divider";
const Skills = () => {

    const skills = [
        {
            name: 'React JS.',
            mastery: 70,
            icon: ReactSVG
        },
        {
            name: 'JavaScript',
            mastery: 80,
            icon: JSSVG
        },
        {
            name: 'HTML',
            mastery: 95,
            icon: HTMLSVG
        },
        {
            name: 'TypeScript',
            mastery: 50,
            icon: TypeScriptSVG
        },
        {
            name: 'Express JS',
            mastery: 60,
            icon: ExpressSVG
        },
        {
            name: 'Node JS',
            mastery: 45,
            icon: NodeSVG
        },
        {
            name: 'Monog DB',
            mastery: 45,
            icon: MongoSVG
        },
        {
            name: 'Firebase',
            mastery: 60,
            icon: FirebaseSVG
        },
        {
            name: 'SASS',
            mastery: 85,
            icon: SASSSVG
        },
        {
            name: 'CSS',
            mastery: 90,
            icon: CSSSVG
        },
        {
            name: 'SQL',
            mastery: 50,
            icon: SQLSVG
        }
    ]

    const softSkills = [
        {
            name: 'Adaptive',
            mastery: 80,
            icon: undefined
        },
        {
            name: 'Team player',
            mastery: 80,
            icon: undefined
        },
        {
            name: 'Decision making',
            mastery: 75,
            icon: undefined
        },
        {
            name: 'Creative',
            mastery: 60,
            icon: undefined
        }
    ]
    const csSkills = [
        {
            name: 'C++',
            mastery: 30
        },
        {
            name: 'Java',
            mastery: 25
        },
        {
            name: 'Python',
            mastery: 15
        }
    ]

    return (
        <div className='skills' id='skills'>
            <div className='center-container'>
                <h2 className='section-header'>Skills</h2>
                <h3 className='subheader-name'>WEB Dev Skills</h3>
                <Divider />
                <ul className='web-skills'>
                    {skills.map((skill) => {
                        return <Skill skill={skill} key={skill.name} />
                    })}
                </ul>
                <h3 className='subheader-name'>Soft Skills</h3>
                <Divider />
                <ul className='soft-skills'>
                    {softSkills.map((skill) => {
                        return <SoftSkill skill={skill} />
                    })}
                </ul>
                {/*<h3 className='subheader-name'>Software Dev Skills</h3>*/}
                {/*<Divider />*/}
                {/*<ul className='cs-skills'>*/}
                {/*    {csSkills.map((skill) => {*/}
                {/*        return <CsSkill skill={skill} />*/}
                {/*    })}*/}
                {/*</ul>*/}
            </div>
        </div>
    )
}
export default Skills