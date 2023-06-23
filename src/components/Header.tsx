import { memo } from "react";

const Header = memo(function Header() {
  return (
    <div className="header">
      <h2 className="header-title">Notes</h2>
      <button type="button" className="btn btn-update" />
      {console.log("header")}
    </div>
  );
});

export default Header;
