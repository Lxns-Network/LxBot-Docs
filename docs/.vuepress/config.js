module.exports = {
  title: '软糖酱',
  description: '帮助文档',
  base: '/help/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: 'https://bot.lxns.org/' },
      { text: '关于', link: 'https://bot.lxns.org/about/' }
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
    smoothScroll: true
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/css/index.css' }]
  ],
  plugins: [
	['@vuepress/back-to-top'],
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
}