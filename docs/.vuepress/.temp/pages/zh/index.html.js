import comp from "/Users/syugaku/Desktop/web/blog/issyugk3.github.io/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Theme Plume\",\"tagline\":\"VuePress Next Theme\",\"text\":\"一个简约的，功能丰富的 vuepress 文档&博客 主题\",\"actions\":[{\"theme\":\"brand\",\"text\":\"博客\",\"link\":\"/zh/blog/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/pengzhanbo/vuepress-theme-plume\"}]}}]},\"headers\":[],\"readingTime\":{\"minutes\":0.18,\"words\":55},\"filePathRelative\":\"zh/README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
