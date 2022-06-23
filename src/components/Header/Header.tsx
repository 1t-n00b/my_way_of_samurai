import h from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";
import {IconButton} from "@material-ui/core";
import {Logout} from "@mui/icons-material";


type  HeaderPropsType = {
    isAuth: boolean
    //login: string
    setAuthUserDataAC?: (
        id: number,
        email: string,
        login: string | null
    ) => void

}


function Header(props: HeaderPropsType) {
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth);
    const login = useSelector<AppStateType, string | null>(state => state.auth.data.login);
    const dispatch = useDispatch()
    console.log(login)
    return (
        <header className={h.header}>
            <img src="https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png" alt=""/>

            <div className={h.loginBlock}>

                {isAuth ? <div>{login}
                    {/*<button onClick={()=> dispatch(logoutTC())}>+</button>*/}
                    <IconButton className="" size="medium" color="secondary" style={{height: '50px', width:"50px"}}>
                        <Logout onClick={() => (dispatch(logoutTC()))}/>
                    </IconButton>

                </div>: <NavLink to="/login">Login</NavLink>}

            </div>
        </header>


    )
}

export default Header;