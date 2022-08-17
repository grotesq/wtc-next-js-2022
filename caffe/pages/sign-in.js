import { useFormik } from "formik";
import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    id: yup.string().required( '아이디는 필수 입력 항목입니다.' ),
    password: yup
        .string()
        .required( '비밀번호는 필수 입력 항목입니다.')
        .min( 6, '비밀번호는 최소 6자리를 입력해야 합니다.'),
});

export default function SignIn() {
    const formik = useFormik({
        initialValues: {
            id: '',
            password: '',
        },
        // validate: values => {
        //     const errors = {};
        //     if( !values.id ) {
        //         errors.id = '아이디는 필수 입력 항목입니다.';
        //     }
        //     if( !values.password ) {
        //         errors.password = '비밀번호는 필수 입력 항목입니다.';
        //     }
        //     return errors;
        // },
        validationSchema,
        onSubmit: values => {
            console.log({values});
        }
    });
    return (
        <BaseLayout>
            <div className="w-1/3 mx-auto">
                <h1 className="font-bold mb-8">로그인</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id">아이디</label>
                        <input
                            className="w-full border-b"
                            name="id"
                            id="id"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        { formik.touched.id && formik.errors.id && (
                            <p className="mt-2 text-red-500">{ formik.errors.id }</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            className="w-full border-b"
                            name="password"
                            id="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        { formik.touched.password && formik.errors.password && (
                            <p className="mt-2 text-red-500">{ formik.errors.password }</p>
                        ) }
                    </div>
                    <button
                        type="submit"
                        className={`border p-2 w-full ${formik.isValid ? 'border-black' : ''}`}
                    >
                        로그인
                    </button>
                </form>
            </div>
        </BaseLayout>
    )
}
