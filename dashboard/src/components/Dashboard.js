import Header from './Header';
import Footer from './Footer';
import Hypertension from './hypertension/Hypertension';

const Dashboard = () => {
    console.log("Dashboard");
    return (
        <>
            <Header />
            <Hypertension />
            <Footer />
        </>
    );
}

export default Dashboard;