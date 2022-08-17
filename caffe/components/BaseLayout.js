import Container from "./Container";
import Header from "./Header";

export default function BaseLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-4">
                <Container>
                    { children }
                </Container>
            </main>
            
            <Container>
                <div className="border-t py-4">
                    Footer Content
                </div>
            </Container>
        </div>
    )
}