import './App.css'

function App() {

  return (
    <div className="container">
      <header>
        <h1 className="title">Vegetables</h1>
        <div className="box1">
          <img src="../public/images/btn_facebook.png" className="fb_icon" />
          <img src="../public//images/btn_instagram.png" className="ig_icon" />
          <div className="line1"></div>
          <a href="#" className="login_btn"><p className="login">LOGIN</p></a>
          <a href="#" className="join_btn"><p className="join">JOIN</p></a>
        </div>
      </header>
      <nav>
        <a href="#" className="nav_home">Home</a>
        <a href="#" className="nav_aboutus">About Us</a>
        <a href="#" className="nav_vegetables">Vegetables</a>
        <a href="#" className="nav_online">Online</a>
        <a href="#" className="nav_contact">Contact</a>
      </nav>
      <img src="../public/images/img_main_pumpkin.png" className="main_img" />
      <div className="main_content">
        <div className="contents">
          <div className="box2">
            <p className="contents_text">Vegetables</p>
          </div>
          <div className="contents_img">
            <img src="../public/images/img_vegetables_pepper.png" className="img1" />
            <img src="../public/images/img_vegetables_carrot.png" className="img2" />
            <img src="../public/images/img_vegetables_corn.png" className="img3" />
          </div>
        </div>
        <div className="contact">
          <div className="box3">
            <p className="contact_title">Contact</p>
          </div>
          <div className="contact_box">
            <p className="contact_text1">For any questions or suggestions about
              Vegetables, Vegetables Club or your
              online order you can contact Vegetables
              Customer Service by phone, email or post
              and we’ll be happy to help.</p>
            <div className="line2"></div>
            <p className="contact_text2">E-mail : Vegetables@aaabbccc.com<br />
              PHONE : +886-123-456-789</p>
          </div>
        </div>
      </div> 
      <footer>
        <p className="footer_text">Copyrights 2017 Vegetables cise /
          Design by Vegetables</p>
      </footer>
    </div>
    
  )
}

export default App
