module.exports = ctx => ({
    base: '/docs/',
    themeConfig: {
      locales: {
        '/': {
          selectText: '语言',
          label: '简体中文',
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新"
            }
          },
          nav: [
            { text: '首页', link: 'https://bot.lxns.org/' },
            { text: '关于', link: '/about/' }
          ],
          lastUpdated: '最后更新时间',
        },
        '/en/': {
          selectText: 'Language',
          label: 'English',
          serviceWorker: {
            updatePopup: {
              message: "Found new available content",
              buttonText: "Refresh"
            }
          },
          nav: [
            { text: 'Home', link: 'https://bot.lxns.org/' },
            { text: 'About', link: '/about/' }
          ],
          lastUpdated: 'Last Updated',
        }
      },
      logo: '/img/logo.png',
      sidebar: 'auto',
      displayAllHeaders: true,
      smoothScroll: true,
      repo: 'Lxns-Network/LxBot-QQ-Docs',
      repoLabel: 'GitHub'
    },
    head: [
      ['link', { rel: 'icon', href: '/img/logo.png' }],
      ['link', { rel: 'stylesheet', href: '/css/index.css' }]
    ],
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '软糖酱',
        description: '帮助文档'
      },
      '/en/': {
        lang: 'en-US',
        title: 'LxBot',
        description: 'Help Docs'
      }
    },
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
    ],
    pwa: {
      workboxOptions: {
        skipWaiting: true
      }
    }
  })