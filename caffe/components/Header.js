import Link from "next/link"
import Container from "./Container"

export default function Header() {
    return (
        <Container>
            <div className="flex items-center justify-between py-8 border-b">
                <p className="text-3xl font-bold">
                    <Link href="/"><a>Caffe</a></Link>
                </p>

                <ul className="flex">
                    <li className="mr-4">
                        <Link href="/about"><a>소개</a></Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/order"><a>온라인 주문</a></Link>
                    </li>
                    <li>
                        <Link href="/sign-in"><a>로그인</a></Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}