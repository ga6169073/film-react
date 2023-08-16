import "./Sidebar.scss";
import {
    LineStyle,
    Timeline,
    PermIdentity,
    Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { React } from "react"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/homeAdmin" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/homeAdmin/geners" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Genres
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}