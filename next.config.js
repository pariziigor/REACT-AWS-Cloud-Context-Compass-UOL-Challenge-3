module.exports = {
  async rewrites() {
    return [
      {
        source: "/Login",
        destination: "/",
      },
      {
        source: "/Register",
        destination: "/pages/register",
      },
      {
        source: "/RegisterInfos",
        destination: "/pages/register/registerInfos",
      },
      {
        source: "/Profile",
        destination: "/pages/profile",
      },
    ];
  },
  images: {
    domains: ["i.imgur.com"],
  },
};
