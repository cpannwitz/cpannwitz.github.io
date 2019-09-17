const gitalkConfig = {
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  repo: "cpannwitz.github.io",
  owner: "cpannwitz",
  admin: ["cpannwitz"],
  // id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
}

export default gitalkConfig
