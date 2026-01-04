import { Header } from "@/src/components/header";

export default function userLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}