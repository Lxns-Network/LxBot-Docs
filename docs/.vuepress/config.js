module.exports = ctx => ({
  title: '软糖酱',
  description: '帮助文档',
  base: '/docs/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: 'https://bot.lxns.org/' },
      { text: '关于', link: 'https://bot.lxns.org/about/' }
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
    smoothScroll: true,
    lastUpdated: '最后更新时间',
    repo: 'Lxns-Network/LxBot-QQ-Docs',
    repoLabel: 'GitHub'
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/css/index.css' }]
  ],
  plugins: [
	['@vuepress/back-to-top', true],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162093340-1'
      }
    ],
    ['vuepress-plugin-clean-urls', { // URL转义
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    }],
    ['@vuepress/search', { // 搜索
      searchMaxSuggestions: 10
    }],
	['@vuepress/pwa', { // 离线页面
      serviceWorker: true,
      updatePopup: true
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }]
  ]
})