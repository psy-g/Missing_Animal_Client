import React from "react";
import "../styles/Main_Menu.css";
import { Link, withRouter } from "react-router-dom";
import Signin from "./Signin";
import Signout from "./Signout";

class Main_Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const checkLogin = window.localStorage.getItem("isLogin");

    return (
      <div className="Main_Menu">
        <div className="logo">
          <Link to="/">
            <img src="/images/FindersLogo.png" width="180px" height="90px" />
          </Link>
        </div>
        <div>
          {checkLogin ? (
            <>
              {/* <span className="Btn">
                <Link to="/petpage">
                  <div className="petpageBtn">펫페이지</div>
                </Link>
              </span> */}
              <span className="Btn">
                <Link to="/mypage">
                  <div className="text">마이페이지</div>
                </Link>
              </span>
              <span className="Btn">
                <Link to="/petregister">
                  <div className="text">반려동물 등록하기</div>
                </Link>
              </span>
              <span className="Btn signout text">
                <Signout />
              </span>
            </>
          ) : (
            <>
              <span className="Btn">
                <Link className="aTag" to="/board">
                  <div className="text">목록으로 확인하기</div>
                </Link>
              </span>
              <span className="Btn signin">
                {/* <button onClick={this.openModal} className="signinBtn">
                로그인
              </button> */}
                <div onClick={this.openModal} className="text">
                  로그인
                </div>
                <Signin
                  isOpen={this.state.isModalOpen}
                  close={this.closeModal}
                />
              </span>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(Main_Menu);
