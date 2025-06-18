import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar} from './navbar'
import { enNotes } from './notes/index'


const kaggle_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="-96 0 512 512"><path fill="#dfdada" d="M304.2 501.5L158.4 320.3L298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3l110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" stroke-width="23" stroke="#686666"/></svg>'


/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/pics/star.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/issyugk3-zxw' },
    { icon: 'x', link:'https://x.com/issyugk3'},
    { icon: 'linkedin', link:''},
    { icon: {svg:kaggle_svg, name:'kaggle'}, link:'https://kaggle.com/issyugk3'},

  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '',
    copyright: 'Copyright © 2025-present issyugk3-zxw. All rights reserved.',
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/self.jpg',
        name: 'issyugk3-zxw',
        description: '"To record."',
        circle: true,
        location: 'Hangzhou, China',
        organization: 'Zhejiang Univ. of Technology',
      },

      navbar: enNavbar,
      notes: enNotes,
      
      

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },
})
