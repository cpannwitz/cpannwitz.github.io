const { GATSBY_GITHUB_ID, GATSBY_GITHUB_SECRET } = process.env

console.log("LOG | : GATSBY_GITHUB_ID", GATSBY_GITHUB_ID)
console.log("LOG | : GATSBY_GITHUB_SECRET", GATSBY_GITHUB_SECRET)
const gitalkConfig = {
  clientID: GATSBY_GITHUB_ID,
  clientSecret: GATSBY_GITHUB_SECRET,
  repo: "cpannwitz.github.io",
  owner: "cpannwitz",
  admin: ["cpannwitz"],
  // id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
}

export default gitalkConfig
