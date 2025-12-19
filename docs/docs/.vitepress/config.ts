import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Wind Stream UI",
    vite: {
        publicDir: 'public',
    },
    head: [
        ['link', { rel: 'icon', href: '/assets/wsicon64.ico' }],
        ['meta', { name: 'theme-color', content: '#3bbba6' }],
    ],
    themeConfig: {
        logo: '/assets/windstream.png',

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
                                { text: 'Collapse 折叠面板', link: '/technical/components-design/collapse/' },
                            ]
                        },
                        { text: 'Monorepo Structure', link: '/technical/repo-structure/',
                            items: [
                                { text: '从本地项目移植到包发布', link: '/technical/repo-structure/从本地项目移植到包发布/' },
                                { text: '组件库类型声明与全局组件注册', link: '/technical/repo-structure/组件库类型声明与全局组件注册/' },
                            ]
                        },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/NAOXUAN4/wind-stream-ui' },
            { icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>'
                },
                link: 'https://www.npmjs.com/package/wind-stream-ui' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present NAOXUAN4'
        },
    },
    lastUpdated: true,
    cleanUrls: 'without-subfolders', /// 清理url的html后缀
})