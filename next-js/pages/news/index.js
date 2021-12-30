import Link from 'next/link'

const NewsPage = () => {
    return (
        <>
            <h1>
                The News Page
            </h1>
            <ul>
                <li>
                    <Link href="/news/news-1">
                        News item 1
                    </Link>
                </li>
                <li>News item 2</li>
                <li>News item 3</li>
            </ul>
        </>
    );
};

export default NewsPage;
