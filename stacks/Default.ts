import { StackContext, NextjsSite } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site", {
    environment: {
      NEXTAUTH_URL: "",
      NEXTAUTH_SECRET: "",
      GITHUB_ID: "",
      GITHUB_SECRET: "",
    },
    path: "packages/web",
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
