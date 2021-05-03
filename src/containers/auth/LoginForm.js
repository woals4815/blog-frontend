import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, login } from "../../modules/auth";
import { check } from "../../modules/user";
import {withRouter} from "react-router-dom";
import { useState } from "react";

const LoginForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {username, password} = form;
        dispatch(login({username, password}));
    };

    useEffect(()=> {
        dispatch(initializeForm('login'));
    },[dispatch]);
    useEffect(() => {
        if(authError){
            console.log('Error occured');
            console.log(authError);
            setError('Failed on Log in');
            return;
        }
        if(auth){
            console.log('Login success');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);
    useEffect(() => {
        if (user){
            history.push('/');
        }
    }, [history, user]);
    return (
        <AuthForm 
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(LoginForm);