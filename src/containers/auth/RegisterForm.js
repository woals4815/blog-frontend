import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import {withRouter} from "react-router-dom";
import { useState } from "react";

const RegisterForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };
    const onSubmit = e => {
        e.preventDefault();
        const {username, password, passwordConfirm} = form;
        if ([username, password, passwordConfirm].includes('')){
            setError('Please fill all areas');
            return;
        }
        if (password !== passwordConfirm) {
            setError('Confirm Password is not correct');
            dispatch(changeField({form: 'register', key: 'password', value: ''}));
            dispatch(changeField({form: 'register', key: 'passwordConfirm', value: ''}));
            return;
        }
        dispatch(register({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError){
            if(authError.response.status === 409){
                setError('Username already exists');
                return;
            }
            setError('Failed on Sign in');
            return;
        }
        if (auth){
            console.log('Success');
            console.log(auth);
            dispatch(check());
        }
    },[auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user, history]);
    return (
        <AuthForm 
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
}

export default withRouter(RegisterForm);