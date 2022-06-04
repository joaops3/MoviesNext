import Footer from "./Footer";
import Header from "./Header";

const MainContainer = ({children}) => {
    return ( 
    <>
    <Header ></Header>
    <div>
        {children}
    </div> 
    <Footer></Footer>
    </>);
}
 
export default MainContainer;