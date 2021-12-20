const {config} = require("./theme");
module.exports = config({
    title: "StreamX",
    description: 'StreamX 是一个 Apache Flink&Spark 极速开发框架,项目的初衷是 ——让 Flink&Spark 更简单。其定位是 Flink&Spark 开发脚手架 + 流批一体大数据平台,一站式大数据平台,Flink大数据平台,Flink可视化数据平台,LowCode平台,流批一体,一站式,Flink,Spark,FlinkSQL,Application,sqlSubmit,SpringBoot,Vue,flink-connectors',
    dest: "./dist",
    locales: {
        "/": {
            lang: "en-US",
        },
        "/zh/" :{
            lang: "简体中文"
        }
    },
    // base: '/streamx-docs/',
    themeConfig: {
        logo: "/assets/logo/streamx.png",
        author: "benjobs",
        hostname: 'http://www.streamxhub.com',
        darkmode: 'disable',
        themeColor: false,
        iconPrefix: '',
        locales: {
            '/': {
                lastUpdated: 'Last Updated',
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    {
                        text: "Home",
                        link: "/"
                    },
                    {
                        text: "Document",
                        link: "/doc/",
                    },
                    {
                        text: "Sponsor",
                        link: "/sponsor/",
                    },
                    {
                        text: "Download",
                        link: "/download/",
                    },
                ],
                sidebar: {
                    "/doc/": [
                        {
                            title: 'QuickStart',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/guide/intro',
                                '/doc/guide/quickstart'
                            ]
                        },
                        {
                            title: '规范约定',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/model/conf',
                                '/doc/model/model'
                            ]
                        },
                        {
                            title: 'DataStream Connectors',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/connector/kafka',
                                '/doc/connector/jdbc',
                                '/doc/connector/redis',
                                '/doc/connector/mongo',
                                '/doc/connector/clickhouse',
                                '/doc/connector/http',
                                '/doc/connector/es',
                            ]
                        },
                        {
                            title: 'Flink SQL Connectors',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/flinksql/flinksql'
                            ]
                        },
                        {
                            title: '高级扩展',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/advanced/advanced'
                            ]
                        },
                        {
                            title: 'StreamX Console',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/doc/console/deploy',
                                '/doc/console/quickstart',
                                '/doc/console/deployment'
                            ]
                        },
                        {
                            title: 'Deployment',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Flink Kubernetes',
                                    collapsable: false,
                                    sidebarDepth: 3,
                                    children: [
                                        '/doc/flink-k8s/1-deployment.md',
                                        '/doc/flink-k8s/2-k8s-pvc-integration.md',
                                        '/doc/flink-k8s/3-hadoop-resource-integration.md'
                                    ]
                                }
                            ]
                        }
                    ],
                },
            },
            '/zh/': {
                lastUpdated: '上次更新',
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    {
                        text: "主页",
                        link: "/zh/"
                    },
                    {
                        text: "文档",
                        link: "/zh/doc/",
                    },
                    {
                        text: "捐助",
                        link: "/zh/sponsor/",
                    },
                    {
                        text: "下载",
                        link: "/zh/download/",
                    },
                ],
                sidebar: {
                    "/zh/doc/": [
                        {
                            title: '快速上手',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/guide/intro',
                                '/zh/doc/guide/quickstart'
                            ]
                        },
                        {
                            title: '规范约定',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/model/conf',
                                '/zh/doc/model/model'
                            ]
                        },
                        {
                            title: 'DataStream Connectors',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/connector/kafka',
                                '/zh/doc/connector/jdbc',
                                '/zh/doc/connector/redis',
                                '/zh/doc/connector/mongo',
                                '/zh/doc/connector/clickhouse',
                                '/zh/doc/connector/http',
                                '/zh/doc/connector/es',
                            ]
                        },
                        {
                            title: 'Flink SQL Connectors',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/flinksql/flinksql'
                            ]
                        },
                        {
                            title: '高级扩展',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/advanced/advanced'
                            ]
                        },
                        {
                            title: 'StreamX Console',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                '/zh/doc/console/deploy',
                                '/zh/doc/console/quickstart',
                                '/zh/doc/console/deployment'
                            ]
                        },
                        {
                            title: 'Deployment',
                            collapsable: false,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Flink Kubernetes',
                                    collapsable: false,
                                    sidebarDepth: 3,
                                    children: [
                                        '/zh/doc/flink-k8s/1-deployment.md',
                                        '/zh/doc/flink-k8s/2-k8s-pvc-integration.md',
                                        '/zh/doc/flink-k8s/3-hadoop-resource-integration.md'
                                    ]
                                }
                            ]
                        }
                    ]
                },
            }
        },
        evergreen: true,
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        displayAllHeaders: true,
        repo: 'streamxhub/streamx',
        // 头部导航栏链接显示的标签字符，默认根据repo配置推断，如果是github，则显示GitHub字样
        repoLabel: 'Github',
        docsBranch: 'main',
        docsDir: '',
        // 配置页脚的链接是否显示，默认是 false, 设置为 true 来启用
        editLinks: true,
        // 配置显示的标签字符，默认为 "Edit this page"
        footer: {
            display: true,
            content: "Apache LICENSE 2.0 Licensed",
        },
        copyright: true,
        copyrightText: "Copyright © 2019-2021 streamxhub.com",
        git: {
            timezone: "Asia/Shanghai",
        },
        mdEnhance: {
            enableAll: true,
            presentation: {
                plugins: [
                    "highlight",
                    "math",
                    "search",
                    "notes",
                    "zoom",
                    "anything",
                    "audio",
                    "chalkboard",
                ],
            },
        },
    },
});
