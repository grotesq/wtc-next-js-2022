import Header from "./Header";

export default function BaseLayout({ children }) {
    return (
        <div>
            <Header/>
            <main className="p-4">{ children }</main>
        </div>
    )
}