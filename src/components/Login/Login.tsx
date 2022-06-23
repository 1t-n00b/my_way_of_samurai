import React from 'react';

import {useFormik} from 'formik';

import {Navigate} from 'react-router-dom';
import s from './Lodin.module.css'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '3WkYr_gjnmmQ5AE',
            rememberMe: true
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Password is short. Should be minimum 3 symbol';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(loginTC({email: values.email, password: values.password}));
            formik.resetForm();
        }
    });
    if (isAuth) return <Navigate to="/profile"/>;

    return <div  className={s.loginBlock}>
        <Grid item container justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel >
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email" margin="normal" style={{backgroundColor:"AppWorkspace"}}
                                   {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                        <TextField type="password" label="Password" style={{backgroundColor:"AppWorkspace"}}
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                        />
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                            />}/>
                        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl></form>

        </Grid>
    </div>;
};
