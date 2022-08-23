import { useEffect, useState } from 'react';
import BaseLayout from "../components/BaseLayout";
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import db from '../net/db';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../net/auth';

export default function ArticleForm({initialValues, mode}) {
    const [subject, setSubject] = useState( initialValues?.subject );
    const [content, setContent] = useState( initialValues?.content );
    const [user, setUser] = useState();
    const router = useRouter();
    const submit = async () => {
        await addDoc( collection( db, 'articles' ), {
            subject,
            content,
            author: user.email,
            created_at: new Date().getTime(),
        } )
        alert( '저장 되었습니다.' );
        setSubject( '' );
        setContent( '' );
        router.push( '/' );
        // history.back();
    }

    const update = async () => {
        await updateDoc( doc( db, 'articles', router.query.id ), {
            subject,
            content,
        } )
        alert( '저장 되었습니다.' );
        router.push( '/' );
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            setUser( user );
        } );
    },[])

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                return false;
            }}>
                <div className="mb-4">
                    <input className="border-b w-full" type="text" placeholder="제목을 입력하세요."
                        value={ subject }
                        onChange={ event => setSubject( event.target.value )}
                    />
                </div>
                <div className="mb-4">
                    <textarea className="border-b w-full" placeholder="내용을 입력하세요."
                        value={ content }
                        onChange={ event => setContent( event.target.value ) }
                    ></textarea>
                </div>
                <div>
                    <button className="border p-2" onClick={mode === 'update' ? update : submit }>전송</button>
                </div>
            </form>
        </div>
    )
}
