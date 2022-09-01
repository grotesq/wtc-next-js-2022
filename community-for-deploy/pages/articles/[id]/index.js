import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../../components/BaseLayout";
import db from "../../../net/db";
import Link from "next/link";

export default function Article() {
    const router = useRouter();
    const [ subject, setSubject ] = useState( '' );
    const [ content, setContent ] = useState( '' );

    useEffect(()=>{
        getDoc( doc( db, 'articles', router.query.id ) )
            .then( doc => {
                const data = doc.data();
                setSubject( data.subject );
                setContent( data.content );
            } )
    },[]);

    const remove = async () => {
        await deleteDoc( doc( db, 'articles', router.query.id ) );
        alert( '삭제되었습니다.' );
        router.push( '/' );
    }

    return (
        <BaseLayout>
            <h1 className="p-4 mb-8 boder-b">{ subject }</h1>
            <p className="p-4">{ content }</p>
            <hr/>
            <Link href={`/articles/${router.query.id}/edit`}>
                <button className="p-2 bg-black text-white">수정</button>
            </Link>
            
            <button className="p-2 bg-black text-white ml-2" onClick={remove}>삭제</button>
        </BaseLayout>
    )
}