import { Config, StackContext, NextjsSite } from "sst/constructs";

export function Default({ stack }: StackContext) {
  // const NEXTAUTH_URL = new Config.Secret(stack, "NEXTAUTH_URL");
  // const NEXTAUTH_SECRET = new Config.Secret(stack, "NEXTAUTH_SECRET");
  // const GITHUB_ID = new Config.Secret(stack, "GITHUB_ID");
  // const GITHUB_SECRET = new Config.Secret(stack, "GITHUB_SECRET");

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    // bind: [NEXTAUTH_URL, NEXTAUTH_SECRET, GITHUB_ID, GITHUB_SECRET],
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
