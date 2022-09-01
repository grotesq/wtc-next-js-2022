import BaseLayout from "../components/BaseLayout";
import ArticleForm from '../components/ArticleForm';

export default function Create() {
    return (
        <BaseLayout>
            <h1 className="text-2xl font-bold mb-8">글쓰기</h1>

            <ArticleForm mode={'create'} initialValues={{ subject: '', content: '' }}/>
        </BaseLayout>
    )
}