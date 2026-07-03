import "../../assets/styles/header.css";

const Header = () => {
  return (
    <header className="topbar">
      <div className="logo">
        Revenue Aggregator Application
      </div>

      <div className="profile">
        <div className="avatar">TU</div>

        <div className="user-details">
          <span className="user-name">Test user</span>
        </div>
      </div>
    </header>
  );
};

export default Header;