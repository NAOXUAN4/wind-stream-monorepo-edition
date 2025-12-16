import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Wind Stream UI",
    head: [
        ['link', { rel: 'icon', href: '/assets/wsicon64.ico' }],
        ['meta', { name: 'theme-color', content: '#3bbba6' }],
    ],
    themeConfig: {
        nav: [
            { text: '组件', link: '/components/button/' },
            { text: '技术', link: '/technical/' },
        ],
        sidebar: {
            '/components/': [
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/components/button/' },
                        { text: 'Icon 图标', link: '/components/icon/' },
                    ]
                }
            ],
            '/technical/': [
                {
                    text: '技术文档',
                    items: [
                        { text: 'Component Design', link: '/technical/components-design/button/',
                            items: [
                                { text: 'Button 按钮', link: '/technical/components-design/button/' },
                                { text: 'Icon 图标', link: '/technical/components-design/icon/' },
                            ]
                        },
                        { text: 'Monorepo Structure', link: '/technical/repo-structure' },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/你的github/wind-stream-ui' }
        ]
    }
})