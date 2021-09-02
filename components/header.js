function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-4">
            <ul className="nav container-fluid justify-content-center">
                <li className="nav-item" style={{ "marginLeft": "1%", "marginRight": "1%" }}>
                    <a className="nav-link fs-4" href="/">Home</a>
                </li>
                <li className="nav-item" style={{ "marginLeft": "1%", "marginRight": "1%" }}>
                    <a className="nav-link fs-4" href="/browse">Browse</a>
                </li>
                <li className="nav-item" style={{ "marginLeft": "1%", "marginRight": "1%" }}>
                    <a className="nav-link fs-4" href="/create">Create</a>
                </li>
                <li className="nav-item" style={{ "marginLeft": "1%", "marginRight": "1%" }}>
                    <a className="nav-link fs-4" href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}
export default HeaderComponent