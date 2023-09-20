import SearchInput from "../../../components/SearchInput/SearchInput";
import { ReactComponent as CameraIcon } from "../../../assets/icons/camera.svg";
import "./MobileSearch.scss";

function MobileSearch(){
    return(
        <div className="mobile-search">
            <p>Store Location</p>
            <div className="mobile-search__search" >
            <SearchInput className="mobile-search__search-input"/>
            <CameraIcon />
        </div>
            </div>
           
        
    );
};
export default MobileSearch;