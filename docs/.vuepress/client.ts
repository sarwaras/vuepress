import { defineClientConfig, usePagesData } from "@vuepress/client"

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const PagesData = usePagesData()
    console.log(PagesData)
    Promise.all(Object.keys(PagesData.value).map(key => PagesData.value[key]())).then(pages => {
      console.log(pages)
      app.provide("pages", pages)
    })
  },
  setup() {
    console.log("root component setup invoke")
  },
  rootComponents: [],
})
