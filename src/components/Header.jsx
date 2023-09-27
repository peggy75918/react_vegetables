export default function Header() {
    return (
        <>
            <header>
                <h1 className="title">Vegetables</h1>
                <div className="box1">
                <img src="/images/btn_facebook.png" className="fb_icon" />
                <img src="/images/btn_instagram.png" className="ig_icon" />
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
        </>
        
    );
}