import {connect} from "react-redux";
import Friend from "./Friend";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType)=> {
    return {
        friends: state.sidebar.friends
    }
}

export default connect(mapStateToProps)(Friend)