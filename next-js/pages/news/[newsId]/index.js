import {useRouter} from 'next/router'

const DetailsPage = () => {
    const router = useRouter()
    console.log(router)

    const newsId = router.query.newsId

    return (
        <h1>
           Details Page for {newsId}
        </h1>
    );
};

export default DetailsPage;
