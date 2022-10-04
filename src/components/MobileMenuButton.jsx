const MobileMenuButton = ({ openMenu, setOpenMenu }) => {
    return (
        <div className={`d-block d-sm-none ${openMenu ? 'open' : ''}`} id="nav-icon" onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MobileMenuButton;