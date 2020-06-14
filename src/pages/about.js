import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return ( <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <div className="site-About">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Starter: Carl's Ecommerce  </h1>
                            <p> by jordank.co </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About