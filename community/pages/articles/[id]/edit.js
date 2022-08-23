import { doc, getDoc } from "firebase/firestore";
import db from "../../../net/db";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleForm from "../../../components/ArticleForm";
import BaseLayout from "../../../components/BaseLayout";

export default function Edit() {
    const [initialValues, setInitialValues] = useState();
    const router = useRouter();
    useEffect(()=>{
        getDoc( doc( db, 'articles', router.query.id ) )
            .then( doc => {
                const data = doc.data();
                setInitialValues(data);
            } )
    },[]);
    return (
        <BaseLayout>
            <h1>게시물 수정</h1>

            { initialValues && <ArticleForm mode={'update'} initialValues={initialValues}/> }
        </BaseLayout>
    )
}