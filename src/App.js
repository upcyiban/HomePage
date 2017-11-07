import React, { Component } from 'react';
import AppSection from './components/app-section/AppSection'
import InfoSection from "./components/info-section/InfoSection"
import RightBar from "./components/right-bar/RightBar"
import TitleBar from "./components/title-bar/TitleBar"
import Footer from './components/footer/Footer'
import './App.css';
import { DATA_PATH } from './config/Conf'
import EmptyTemplate from './config/Templ'

class App extends Component {
  constructor(props){
    super(props)
    this.state = EmptyTemplate
  }
  componentWillMount(){
    fetch(DATA_PATH).then(res => res.json())
                    .then(data => {
                      this.state.listConf[1].name = `机构群(${data.school_intro.group.data.length})`
                      this.state.listConf[2].name = `本校成员:${data.school_intro.members}`
                      this.setState({data:data})
                    })
  }
  render() {
    return (
      <div className="App">
          <TitleBar />
          <InfoSection notices={this.state.data.notices} listConf={this.state.listConf} group={this.state.data.school_intro.group.data} teachers={this.state.data.teachers}/>
          <AppSection apps={this.state.data.apps}/>
          <Footer />
          <RightBar />
      </div>
    );
  }
}

export default App;
