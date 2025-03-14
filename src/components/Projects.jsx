import projectsArray from "./projectsInfo.js"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

const gridLayout ={
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr",
  "rowGap": "70px",
  "columnGap": "60px",
}

const sourceBtnStyles = {
  textDecoration: "none",
  fontSize: "1rem",
  margin: "15px 0px 10px 0px",
  padding: '8px',
  fontFamily: "Faculty Glyphic, sans-serif",
  width: "fit-content",
  color: '#FCF6EA',
  textTransform: "none",
  "&hover":{
    backgroundColor: "rgba(252, 246, 234, 0.5)",
  },
  "& .arrow-icon": {
    opacity: 0,
    transform: "translateX(-10px) scale(0.5)",
    transition: "opacity 0.1s, transform 0.2s",
  },
  "&:hover .arrow-icon":{
    opacity: 1,
    transform: "translateX(0px) scale(1)",
  }
}

function Projects() {
  return (
    <>
    
      <h2 className="projects-title">
        Projects
      </h2>
      <div style={gridLayout}>
        {
          projectsArray.map((project, index) => {
            return (
              <div key={index} className="project">
                <h2 className="project-title"
                  // initial={{y: 20, opacity: 0.3}}
                  // whileInView={{y: 0, opacity: 1}}
                  // transition={{ease: 'easeInOut', duration:0.4}}
                >
                  {project.title}
                </h2>
                <Divider sx={{ backgroundColor: '#FCF6EA', opacity: 0.7, height: '1px' }} />
                <ul className="project-description">
                  {
                    project.description.map((point, idx) => {
                      return <li key={idx} style={{padding: "10px"}}
                      // initial={{y: 20, opacity: 0.3}}
                      // whileInView={{y: 0, opacity: 1}}
                      // transition={{ease: 'easeInOut', duration:0.45*(idx+1)}}
                      >{point}</li>
                    })
                  }
                </ul>
                <Button component="a" href={project.link} target="_blank" className="sourceLink" 
                  endIcon={<ArrowOutwardIcon className="arrow-icon"/>}
                  sx={sourceBtnStyles}>
                  <GitHubIcon sx={{padding: '0 10px 0 0', fontSize: '1.5rem', color: '#D6DC82'}}/>
                  Source Code
                </Button>
              </div>
            )
          })
        }
      </div>
    
    </>
  )
}

export default Projects;