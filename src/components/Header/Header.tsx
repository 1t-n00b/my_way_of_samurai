import h from "./Header.module.css"
import {NavLink} from "react-router-dom";

type  HeaderPropsType = {
    isAuth: boolean
    login: string
    setAuthUserDataAC?: (
        id: number,
        email: string,
        login: string
    ) => void

}


function Header(props: HeaderPropsType) {
    console.log(props.login)
    return (
        <header className={h.header}>
            <img src="https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png" alt=""/>

            <div className={h.loginBlock}>

                {props.isAuth?
                    props.login
                    :
                    <NavLink to="/login">Login</NavLink>}
            </div>
        </header>


    )
}

export default Header;