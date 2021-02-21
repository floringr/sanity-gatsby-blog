export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60325ae7258d66f7c1220c52',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p36jj8mn',
                  apiId: '2691320a-c167-4264-af53-a02a78dd71b5'
                },
                {
                  buildHookId: '60325ae8e88b4e6a2d3bf5ba',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uq9nosjc',
                  apiId: '569ee53d-a79b-4eba-95a7-cf6e80413066'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/floringr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uq9nosjc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
