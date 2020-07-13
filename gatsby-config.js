require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "proTETCr",
    description: "a cloudbased security plattform.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
};