import React from "react";
import Layout from "../Layout/Layout";

function Home() {
    return (
        <div>
            <button>WORK</button>
        </div>
    )
}

Home.layout = (page : React.ReactNode) => <Layout children={page} />
export default Home;
