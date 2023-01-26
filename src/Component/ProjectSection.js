import React, { useRef } from 'react'
import './Projectcss.css'

const ProjectSection = () => {
  const yourRef = useRef();
  const handleEnter = () => {

    for (let index = 0; index < 6; index++) {
      document.getElementsByClassName("box")[index].style.backgroundColor = "#02aab0";

    }


  }

  const handleLeave = () => {
    for (let index = 0; index < 6; index++) {
      document.getElementsByClassName("box")[index].style.backgroundColor = "grey";

    }
  }
  const handleEnter2 = () => {

    for (let index = 0; index < 12; index++) {
      document.getElementsByClassName("box2")[index].style.backgroundColor = "#02aab0";

    }


  }

  const handleLeave2 = () => {
    for (let index = 0; index < 12; index++) {
      document.getElementsByClassName("box2")[index].style.backgroundColor = "grey";

    }
  }
  return (

    <div id="thisproject" style={{ marginTop: "6vh" }}>
      <h1 style={{ fontWeight: "700", textAlign: "center", marginBottom: "6vh", fontSize: "42px" }}>Projects</h1>
      <div className="container">
        <h2 style={{ fontWeight: "600", textAlign: "center", marginBottom: "1vh" }}>News Monkey</h2>
        <div className="container" >
          <div className='row'>

            <div className='col-md-4 container forcon' onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ borderRadius: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "4vh", paddingRight: "4vh", paddingTop: "4.5vh" }}>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">React</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">API fetch</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">JSX</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">CSS</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">Google font</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} ref={yourRef} className="box">Router</div>

              </div>
              <div>
                <div style={{ flexWrap: "wrap", paddingLeft: "4vh", paddingRight: "4vh" }} >
                  {/* description */}
                  This is News Monkey website it shows different category of news.

                  News Api is used to fetch data
                  Content portion bhar rha hu n
                  Baad me sahi karunga
                </div>

              </div>

            </div>


            <div className='col-md-5  thisis container' style={{ borderRadius: "16px" }}>
              <div className='container' style={{ display: "flex", "justifyContent": "center", "alignItems": "center", marginTop: "4.5vh" }}>
                <img style={{ width: "90%", border: "2px solid grey", borderRadius: "8px" }} src="/project_image/newsimage.png" alt="showing image" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", marginTop: "3%" }}>
          <button type="button" class="btn btn-outline-primary fun  todisplay" style={{ borderRadius: "0px", border: "2px solid #02aab0", fontSize: "25px", fontWeight: "600" }}  >
            See Live
          </button>


          <button type="button" class="btn btn-outline-primary fun todisplay" style={{ borderRadius: "0px", border: "2px solid #02aab0", fontSize: "25px", fontWeight: "600" }}  >
            See Code
          </button>
        </div>
        <h2 style={{ fontWeight: "600", textAlign: "center", marginTop: "3vh" }}>Qcluster</h2>
        <div className="container" style={{ marginTop: "6vh", marginBottom: "6vh" }}>
          <div className='row'>

            <div className='col-md-4 container forcon' onMouseEnter={handleEnter2} onMouseLeave={handleLeave2} style={{ borderRadius: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "4vh", paddingRight: "4vh", paddingTop: "3vh" }}>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">React</div>
                {/* <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Context</div> */}
                {/* <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">JSX</div> */}
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">CSS</div>
                {/* <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Google font</div> */}
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Router</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Nodejs</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Express js</div>
                {/* <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Vanilla js</div> */}
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Bootstarp</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">Mongodb</div>
                <div style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "grey", marginRight: "6px", marginTop: "4px" }} className="box2">javascript</div>

              </div>
              <div>
                <div style={{ flexWrap: "wrap", paddingLeft: "4vh", paddingRight: "4vh" }} >
                  {/* description */}
                  <p style={{ lineHeight: "18px", margin: "0px" }}> <strong>Qcluster</strong> - online community for developers to learn, share their programming knowledge, and build their careers</p>
                  <p style={{ lineHeight: "18px", margin: "0px" }}>-- a secured authentication process for user</p>
                  <p style={{ lineHeight: "18px", margin: "0px" }}>-- interactive, attractive and responsive user interface with different filter options</p>
                </div>

              </div>

            </div>


            <div className='col-md-5  thisis container' style={{ borderRadius: "16px", paddingBottom: "0px", marginTop: "2vh" }}>
              <div className='container' style={{ display: "flex", "justifyContent": "center", "alignItems": "center", paddingBottom: "0px", marginBottom: "0px" }}>
                <img style={{ width: "90%", border: "2px solid grey", borderRadius: "8px" }} src="/project_image/Qcluster_image.png" alt="showing image" />
              </div>
            </div>

          </div>

        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", marginBottom: "5%" }}>
          <button type="button" class="btn btn-outline-primary fun  todisplay" style={{ borderRadius: "0px", border: "2px solid #02aab0", fontSize: "25px", fontWeight: "600" }}  >
            See Live
          </button>


          <button type="button" class="btn btn-outline-primary fun todisplay" style={{ borderRadius: "0px", border: "2px solid #02aab0", fontSize: "25px", fontWeight: "600" }}  >
            See Code
          </button>
        </div>
      </div>
    </div>


  )
}
export default ProjectSection