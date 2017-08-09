import React, { Component } from 'react';
import AppSection from './components/app-section/AppSection'
import InfoSection from "./components/info-section/InfoSection"
import RightBar from "./components/right-bar/RightBar"
import TitleBar from "./components/title-bar/TitleBar"
import Footer from './components/footer/Footer'
import './App.css';
import { DATA_PATH } from './config/Conf'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : {
        notices:{
          carousels:[
            {name : '',href : '',src : ''}
          ],
          notice_1:{
            title:'通知公告',
            content:[
              {text:'',href:''}
            ]
          },
          notice_2:{
            title:'校园活动',
            content:[
              {text:'',href:''}
            ]
          }
        },
        apps:[
          [
            {icon:'', name:'', href: ''}
          ]
        ]
      }
    }
  }
  componentWillMount(){
    console.log(DATA_PATH)
    fetch(DATA_PATH).then(res => res.json())
                    .then(data => {
                      this.setState({data:data})
                      console.log(this.state)
                    })
  }
  render() {
    return (
      <div className="App">
          <TitleBar />
          <InfoSection notices={this.state.data.notices}/>
          <AppSection apps={this.state.data.apps}/>
          <Footer />
          <RightBar />
      </div>
    );
  }
}

export default App;
