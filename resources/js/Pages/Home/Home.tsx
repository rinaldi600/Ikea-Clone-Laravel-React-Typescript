import React from "react";
import Layout from "../Layout/Layout";

function Home() {
    return (
        <>
            <div className="min-h-screen bg-blue-400 w-full">
                <button>WORK</button>
            </div>
        </>
    )
}

Home.layout = (page : React.ReactNode) => <Layout children={page} />
export default Home;
