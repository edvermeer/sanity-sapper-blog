export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6016f3cfa0d38767b4521cdb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-fb536fmb',
                  apiId: 'ec97e6b4-7ef1-49ae-ab64-ecc2cdfad1c8'
                },
                {
                  buildHookId: '6016f3cf7e8812307f967d3b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ytm3otxb',
                  apiId: '6e262a9d-3c29-4e79-b554-cd5eed2c9b6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edvermeer/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ytm3otxb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
