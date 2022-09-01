import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../net/auth';
import BaseLayout from "../components/BaseLayout";
import { useRouter } from "next/router";

export default function SignIn() {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const router = useRouter();

    const submit = () => {
        signInWithEmailAndPassword( auth, email, password ).then( res => {
            router.push( '/' );
        } )
        .catch( error => {
            console.warn( error );
            alert( '로그인에 실패했습니다.' );
        } );
    }

    return (
        <BaseLayout>
            <div className="w-1/3 m-auto">
                <h1 className="text-2xl font-bold mb-8">로그인</h1>
                <div className="mb-4">
                    <input type="email" value={ email } onChange={ event => setEmail( event.target.value ) }
                        className="border border-solid border-gray-300 w-full p-2"
                        placeholder="이메일"
                    />
                </div>
                <div className="mb-4">
                    <input type="password" value={ password } onChange={ event => setPassword( event.target.value ) }
                        className="border border-solid border-gray-300 w-full p-2"
                        placeholder="비밀번호"
                    />
                </div>

                <div className="mb-4">
                    <button className="border p-2 w-full" onClick={ submit }>로그인</button>
                </div>
            </div>
        </BaseLayout>
    )
}