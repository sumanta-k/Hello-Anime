import Navbar from "./components/Navbar.jsx";
const GetTitle = () => {
    return (
        <div>
            <Navbar title="WatchAnime" genre="genre" />
        </div>
    );
};
function App() {
    return <GetTitle />;
}

export default App;
