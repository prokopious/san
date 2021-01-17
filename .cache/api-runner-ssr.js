var plugins = [{
      plugin: require('C:/Users/Owner/Desktop/san/gatsby/node_modules/gatsby-plugin-fontawesome-css/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Owner/Desktop/san/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('C:/Users/Owner/Desktop/san/gatsby/node_modules/gatsby-plugin-snipcartv3/gatsby-ssr'),
      options: {"plugins":[],"apiKey":"ZTNkOWE1YmYtOGI4My00NDJhLTg5MzctODY4YTNiM2ViYWFkNjM3Mzc2MTU4MjUxNTM1Mzg3","autopop":true},
    },{
      plugin: require('C:/Users/Owner/Desktop/san/gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsbysnipcartsanity","short_name":"gss","start_url":"/","background_color":"bg","theme_color":"darkBlue","display":"minimal-ui","icon":"src/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"68aa167d785ea46095075c03564f4a85"},
    },{
      plugin: require('C:/Users/Owner/Desktop/san/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"8ob6ehcj","dataset":"production","token":"","graphqlTag":"default"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
