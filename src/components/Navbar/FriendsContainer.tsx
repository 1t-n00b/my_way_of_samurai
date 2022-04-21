import {connect} from "react-redux";
import Friend from "./Friend";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType)=> {
    return {
        friends: state.sidebar.friends
    }
}

export default connect(mapStateToProps)(Friend)