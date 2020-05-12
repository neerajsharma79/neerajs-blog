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
                  buildHookId: '5ebafc5651092301702028ca',
                  title: 'Sanity Studio',
                  name: 'neerajs-blog-studio',
                  apiId: '05bc576e-b8cd-4ee7-8613-7b19f10b0e26'
                },
                {
                  buildHookId: '5ebafc5666772501bd61d268',
                  title: 'Blog Website',
                  name: 'neerajs-blog',
                  apiId: '8ac81b90-ffab-4926-90c2-3d5c54852aa2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajsharma79/neerajs-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://neerajs-blog.netlify.app', category: 'apps' }
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
