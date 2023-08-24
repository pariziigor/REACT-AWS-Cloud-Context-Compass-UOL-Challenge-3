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
        source: "/RecoverPassword",
        destination: "/pages/recover",
      },
      {
        source: "/Profile",
        destination: "/pages/profile",
      },
      {
        source: "/InfoPassword",
        destination: "/pages/password",
      },
    ];
  },
  images: {
    domains: ["i.imgur.com"],
  },
};
