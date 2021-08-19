export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611ec56d8d7a6460f5298a8b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-final-studio",
                  apiId: "77a3c04f-fd85-46e9-94b4-d4eabb87ef70",
                },
                {
                  buildHookId: "611ec56d8d7a646423298696",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-final",
                  apiId: "d399e314-7eff-47e2-84e6-42aa41dd1b91",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MaisaMaisa/sanity-gatsby-blog-final",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-final.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
