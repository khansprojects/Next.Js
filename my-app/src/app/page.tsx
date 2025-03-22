import Link from "next/link";

export default function Home() {
    return <>
    <h1>Welcome Home</h1>
    <Link style={{
        textDecoration: "none", color: "red", margin: "2rem"
    }} href="/blog">Blog</Link>
    <Link style={{
        textDecoration: "none", color: "red", margin: "2rem"
    }} href="/products">Products</Link>
    <Link style={{
        textDecoration: "none", color: "red", margin: "2rem"
    }} href="/articles/breaking-news-123?lang=en">Read in English</Link>
    <Link style={{
        textDecoration: "none", color: "red", margin: "2rem"
    }} href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
    <Link style={{
        textDecoration: "none", color: "red", margin: "2rem"
    }} href="/articles/breaking-news-123?lang=fr">Read in Fraech</Link>
    </>
}