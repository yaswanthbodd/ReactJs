import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
const ReactForm = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        reEnterPassword: yup.string().oneOf([yup.ref("password"),null],"Password don't match").required()
    })

    const { register, handleSubmit, formState :{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("Hello You Submit Succsfull", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Full name..' {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <input type="email" placeholder='Email...' {...register('email')} />
            <input type="number" placeholder='Age...' {...register('age')} />
            <input type="password" placeholder='Enter Password' {...register('password')} />
            <input type="password" placeholder='Re-Enter Password' {...register('reEnterPassword')} />
            <input type="submit" />
        </form> 
    )
}

export default ReactForm;
