

class Headertext extends React.Component{
  constructor(){
      super()
  }
  render(){
    return(
      <header className="jumbotron text-center">
        <h3> Hi Wellcome To My Web</h3>
      </header>
    )
  }
}


class Divmenu extends React.Component{
  constructor(){
      super()
      this.Home = "Home"
      this.Profile = "Profile"
      this.Project = "Project" 
      this.about = "About"
  }
  render(){
      return(
         <div className ="bd-example">
          
            <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className ="navbar-brand" href="Home.html">{this.Home}</a>
              <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
              </button>
              <div className ="collapse navbar-collapse" id="navbarColor01">
                <ul className ="navbar-nav mr-auto">
                  <li className ="nav-item">
                    <a className ="nav-link" href="Profile.html">{this.Profile}</a>
                  </li>
                  <li className ="nav-item">
                    <a className ="nav-link" href="Project.html">{this.Project}</a>
                  </li>
                  <li className ="nav-item">
                    <a className ="nav-link" href="#">{this.about}</a>
                  </li>
                </ul>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
         </div>
      )
  }           
}

ReactDOM.render(<Divmenu />, document.getElementById("jsmenu"))
ReactDOM.render(<Headertext />, document.getElementById("jsheadertext"))
      