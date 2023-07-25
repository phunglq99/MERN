import Container from '@mui/material/Container';
import Header from '../components/Header';
import PostList from '../components/PostList';

const HomePage = () => {
    return (
        <Container maxWidth="lg" className="">
            <Header />
            <PostList />
        </Container>
    );
};

export default HomePage;
