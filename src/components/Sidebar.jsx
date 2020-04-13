import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <nav id="sidebar">
        <div className="p-4 pt-5">
            <Link href="#" className="img logo rounded-circle mb-5" style={{backgroundImage: 'url(https://i.imgur.com/DlWzVsT.jpg)'}} />
            <ul className="list-unstyled components mb-5">
                  <li>
                        <Link to="/indonesia">Indonesia</Link>
                  </li>
                  <li>
                        <Link to="/dunia">Dunia</Link>
                  </li>
            </ul>
            <div className="footer">
                  <p>Copyright © 2020 cacan <br />All rights reserved.</p>
            </div>
        </div>
    </nav>
)

export default Sidebar;