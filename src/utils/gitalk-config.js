// const { GATSBY_GITHUB_ID, GATSBY_GITHUB_SECRET } = process.env

const gitalkConfig = {
  clientID: "d9d1cafee1d959d73a6a",
  clientSecret: "e4772b51ad53cd08faa7dd9632e65cc93a4bda04",
  repo: "cpannwitz.github.io",
  owner: "cpannwitz",
  admin: ["cpannwitz"],
  // id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
}

export default gitalkConfig
