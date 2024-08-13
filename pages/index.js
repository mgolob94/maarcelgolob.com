import Projects from "../components/projects"
import Services from "../components/services"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Layout from "../components/layout";
import Companies from "../components/companies";
import Expertise from "../components/expertise";
import ContactForm from "../components/contactForm";
import LogoSlider from "../components/logoSlider";
import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';


export default function Index() {
  return (
    <div>
      <Layout>
        <Hero />
        <Expertise />
        <LogoSlider />
      </Layout>
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}