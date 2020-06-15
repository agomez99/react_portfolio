import React, {Component} from 'react'

class Resume extends Component {
  render() {
    return (
      <div >
        <object  width="100%" height="1000" data="../images/resume.pdf" type="application/pdf">   </object>
      </div>
    )
  }
}

export default Resume;