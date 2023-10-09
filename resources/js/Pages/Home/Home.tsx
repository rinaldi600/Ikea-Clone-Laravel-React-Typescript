import React from "react";
import Layout from "../Layout/Layout";

function Home() {
    return (
        <>
            <div className="min-h-screen bg-blue-400 w-full lg:pt-0 pt-24 pl-4">
                <button>TEST</button>
            </div>
        </>
    )
}

Home.layout = (page : React.ReactNode) => <Layout children={page} />
export default Home;
