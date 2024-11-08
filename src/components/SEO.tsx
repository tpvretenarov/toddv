import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Todd Vretenarov | Senior Fullstack Engineer",
  description = "Senior Fullstack Software Engineer specializing in building exceptional digital experiences with React, TypeScript, and modern web technologies.",
  image = "/og-image.jpg", // Add your OG image
  url = "https://toddv.net", // Your actual domain
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Keywords */}
      <meta
        name="keywords"
        content="software engineer, fullstack developer, react developer, typescript, web development, todd vretenarov"
      />

      {/* Additional tags */}
      <meta name="author" content="Todd Vretenarov" />
      <meta name="theme-color" content="#0a1f2d" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
