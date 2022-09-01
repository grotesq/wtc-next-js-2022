import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import auth from '../net/auth';

export default function Header() {
    const [ user, setUser ] = useState( null );
    useEffect(() => {
        onAuthStateChanged( auth, user => {
            setUser( user );
        } );
    }, [])
    return (
        <header className="mb-8 border-b border-gray-500 p-4 flex justify-end">
            { user && <button onClick={() => signOut( auth )}>로그아웃</button> }
            { !user && <div>
                <Link href="/sign-in">
                    <button className='mr-2'>로그인</button>
                </Link>
                <Link href="/sign-up">
                    <button>회원가입</button>
                </Link>
            </div> }
        </header>
    )
}