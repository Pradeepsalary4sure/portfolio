import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      <title>Pradeep | React Developer</title>

      <meta
        name="description"
        content="Pradeep Portfolio - React, Next.js, TypeScript Developer"
      />

      <meta
        name="keywords"
        content="React, Next.js, TypeScript, Portfolio"
      />
    </Helmet>
  );
};

export default SEO;