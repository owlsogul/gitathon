import React, {Component} from 'react';
import { Button } from 'reactstrap';

class LoginMain extends Component{
    state={
        mode: 'Login'
    }

    // this.setState({
    //mode: 'Register'
    //})

    render(){
        return(
            <div className="LoginScreen">
            if this.state.mode == 'Login'{
                <Login
                    gitathonLogo = {this.props.gitathonLogo}
                    numHackathon = {this.props.numHackathon}
                    numTeamproject = {this.props.numTeamproject} />
            }
            else if {
                <Register />
            }
            </div>
        );
    }
}

function Login ({gitathonLogo, numHackathon, numTeamproject}){
    return (
      <div class = "container">
        <div class = "row">
          <div class = "col-2">
          </div>
          <div class = "col-8">
            <table className = "LoginMain">
                <tr>
                    <td className = "LogoIcon">
                        <ShowLogo logoPath = {gitathonLogo} name = {"gitathonLogo"}/>
                    </td>
                </tr>
                <tr>
                    <td className = "Intro">
                        <Welcome hackNum = {numHackathon} teamNum = {numTeamproject} />
                    </td>
                </tr>
                <tr>
                    <td className = "InputID">
      	    	<input />
                    </td>
                </tr>
                <tr>
                    <td className = "InputPW">
      		<input />
      	      </td>
                </tr>
                <tr>
                    <td className = "LoginBtn">
                        <Button color = "primary">함께하기</Button>
                    </td>
                </tr>
                <tr>
                    <td className = "Join">
                        <div>
                            아직 계정이 없으신가요?
                             <Button color = "danger" onclick="regBtnClick();"> 회원가입</Button>
                             <script>
                                 function regBtnClick(){
                                     this.setState({
                                         mode: "Register"
                                     })
                                 }
                            </script>
                        </div>
                    </td>
                </tr>
            </table>
          </div>
          <div class = "col-2">
          </div>
        </div>
      </div>

    )
}

function Register(){
    return(
        <div class = "container">
            <Button onclick="finBtnClick();">완료</Button>
            <script>
                function finBtnClick(){
                    this.setState({
                        mode: "Login"
                    })
                }
            </script>
        </div>
    )
}

function ShowLogo({logoPath, name}) {
    return(
      <img src = {logoPath} className = {name} alt ={name}/>
    )
}

function Welcome({hackNum, teamNum}){
  return(
    <span className = "Welcoming">
      현재  <font color = "red">{hackNum}</font>개의
      해커톤과 <font color = "red">{teamNum}</font>개의
      팀프로젝트가 진행중입니다.
    </span>
  )
}

export default Login;
