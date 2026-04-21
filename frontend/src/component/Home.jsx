import ThemeButton from "../context/ThemeButton";
import useFetch from "./hooks/useFetch";

function Home() {
    const { data, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
    );

    if (loading) return <p>Loading...</p>
    return (
        <div>
            <h1>This is a Landing page</h1>
            <ThemeButton />

            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;