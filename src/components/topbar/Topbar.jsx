import SearchIcon from '@material-ui/icons/Search';
import './topbar.css'
function Topbar() {
  return (
    <div className="header">
        <div className="brand-name">
            <span>Travel Companion</span>
        </div>
        <div className="header-search">
            <label className="header-search-label">Explore new places</label>
            <div className="header-search-input" >
            <SearchIcon className='search-icon'/>
            <input placeholder="Delhi,DL,IND" />

            </div>
        </div>
    </div>
  )
}

export default Topbar
