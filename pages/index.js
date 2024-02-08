import Projects from "../components/projects"
import Services from "../components/services"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Layout from "../components/layout";
import Companies from "../components/companies";


export default function Index() {
  return (
    <div>
      <Layout>
        <Hero />
        <Projects />

        {/* <Companies /> */}
        {/* <Cta /> */}
      </Layout>
    </div>
  );
}
