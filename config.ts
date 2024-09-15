interface Config {
  baseUrl: string;
}

const checkConfig = (env: string): Config | {} => {
  let config: Config | {} = {};
  switch (env) {
    case "production":
      config = {
        baseUrl: "https:",
      };
      break;
    case "local":
      {
        config = {
          baseUrl: "http://localhost:3000/",
        };
      }
      break;
  }

  return config;
};

const selectServer = 'local'
export const config = checkConfig(selectServer) as Config;
