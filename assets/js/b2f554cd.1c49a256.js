"use strict";(self.webpackChunkwanderedtola_blog=self.webpackChunkwanderedtola_blog||[]).push([[880],{8256:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"docusaurus-plugin","metadata":{"permalink":"/blog/docusaurus-plugin","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-07-01-docusaurus-plugin/index.md","source":"@site/blog/2024-07-01-docusaurus-plugin/index.md","title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","description":"Recent Posts","date":"2024-07-01T00:00:00.000Z","formattedDate":"July 1, 2024","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"plugin","permalink":"/blog/tags/plugin"},{"label":"custom","permalink":"/blog/tags/custom"}],"readingTime":4.865,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"docusaurus-plugin","title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","authors":["WanderedToLa"],"tags":["docusaurus","plugin","custom"]},"unlisted":false,"nextItem":{"title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","permalink":"/blog/frontend-observability"}},"content":"## Recent Posts\\n\\n\uba54\uc778\ud398\uc774\uc9c0\uc5d0 recentpost \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub824\uace0 \ubbf8\ub8e8\ub2e4\uac00 \ub4dc\ub514\uc5b4 \uc2dc\uc791\ud558\uba70  \\ndocusaurus\uc5d0\uc11c \uc9c1\uc811 \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc5d0 \uc811\uadfc\ud558\ub824\uace0 \uba87\ubc88\uc744 \uc0bd\uc9c8\ud558\ub2e4\uac00  \\nplugin\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4\ub294 \uacb0\ub860\uc744 \uc5bb\uc5c8\ub2e4.  \\n\uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc9c4 blog \uad00\ub828 plugin\uc774 \uc788\uae34\ud588\uc9c0\ub9cc [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)  \\nconfig \ud544\ub4dc\uc5d0\uc11c option\uc744\ud1b5\ud574 \uc218\uc815\ud558\ub294 \ubc29\uc2dd\uc740 \uc6d0\ud558\ub358 \ubaa8\uc591\uc774 \uc544\ub2c8\ub77c \ud328\uc2a4\ud588\uc74c.\\n\\n## Architecture\\n\\nArchive\ud0ed\uc5d0 \uc788\ub294 \uae00 \uc911 \ucd5c\uc2e0\uc21c\uc73c\ub85c 5\uac1c\ub9cc \uba54\uc778\ud398\uc774\uc9c0\uc5d0 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\uc5c8\ub294\ub370  \\n\uba54\uc778\ud398\uc774\uc9c0\uc5d0\uc11c \ube44\ub3d9\uae30\ub85c \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc744 \ud638\ucd9c\ud574 \uc77d\uc740\ub2e4\uc74c slug\ub97c \ub9ac\ud134\ud558\ub294 \uc2dd\uc73c\ub85c  \\n\uad6c\uc0c1\ud588\uc9c0\ub9cc docusaurus\uc758 \uc81c\uc791\uc758\ub3c4\ub791\uc740 \uc804\ud600 \ub2e4\ub974\uae30\ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \uc0dd\uae38 \uc218 \ubc16\uc5d0\uc5c6\ub2e4.  \\n\uce5c\uc808\ud558\uac8c\ub3c4 \uc544\ud0a4\ud14d\ucc98 \uc18c\uac1c\uae00\uc744 \ubcf4\uba70 \uac10\uc744 \uc7a1\uc744\uc218 \uc788\uc5c8\uc74c\\n\\ndocusaurus\uc758 \uc124\uacc4 \ud639\uc740 \uba58\ud0c8\ubaa8\ub378\uc774 \ucf54\ub4dc\ub97c \uc9c1\uc811 import\ud574\uc11c \uc4f0\uac70\ub098 \ud558\uc9c0\uc54a\uace0  \\njson\uc73c\ub85c \uc784\uc2dc\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\uac70\ub098 \uc0ac\uc6a9\uc790\uac00 plugin\uc5d0 \uc811\uadfc\ud55c\ub2e4\uba74  \\n\uc624\ub85c\uc9c0 config.js\ub97c \ud1b5\ud574 \uc0c1\ud638\uc791\uc6a9 \ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \uc788\uae30\ub54c\ubb38\uc5d0  \\n\uc5ec\uae30\uc11c \uc81c\uacf5\ud558\ub294 Lifecycle API\ub97c \uc774\uc6a9\ud574 build\uc2dc \uc0dd\uc131\ub41c json \ud30c\uc77c\ub85c  \\n\ub0b4 \ube14\ub85c\uadf8 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud574\uc57c \ud55c\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ucee4\uc2a4\ud140\uc740 config\uc5d0\uc11c \uac00\ub2a5\ud568\\n\\n![Architecture](../../static/img/docusaurus-architecture.png)\\n\\n\uadf8\ub798\uc11c \ubb38\uc11c\ub97c \ucc3e\uc544\ubcf4\ub358\uc911 globalData\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 `useGlobalData` API\uac00  \\n\uc788\uae34\ud588\uc73c\ub098 docs\uc758 \uc815\ubcf4\ub9cc \ub2f4\uc544\uc904 \ubfd0 blog\uc758 \ub370\uc774\ud130\ub294 \ub2f4\uae30\uc9c0 \uc54a\uae38\ub798 Lifecycle API\ub97c \uc774\uc6a9\ud574  \\nbuild\uc2dc json\uc5d0 \ube14\ub85c\uadf8 \uc815\ubcf4\ub4e4\uc744 \ub2f4\uc544 \uc0ac\uc6a9\ud558\ub294 \ucabd\uc73c\ub85c \ubcc0\uacbd\ud588\ub2e4.  \\nglobalData\uc758 \uc815\ubcf4\ub4e4\uc740 `npm start`\uc2dc `.docusaurus/globalData.json`\uc5d0\uc11c \ud655\uc778\uac00\ub2a5\\n\\n- [useGlobalData](https://docusaurus.io/docs/docusaurus-core#useGlobalData)\\n\\n## Using Plugins\\n\\nplugin\uc740 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \ub85c\uceec\ud30c\uc77c\uc744 \ubd88\ub7ec\uc640 \uc0ac\uc6a9\uac00\ub2a5\ud568\\n\\n```ts title=\\"docusaurus.config.js\\"\\nexport default {\\n  // ...\\n  plugins: [\'./src/plugins/docusaurus-local-plugin\'],\\n};\\n```\\n\\n\ub85c\uceec\ud30c\uc77c\uc744 \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc808\ub300\uacbd\ub85c\ub85c \uba85\uc2dc\ud55c\ub2e4.\\n\\n```ts title=\\"docusaurus.config.js\\"\\nexport default {\\n  // ...\\n  plugins: [\\n    async function myPlugin(context, options) {\\n      // ...\\n      return {\\n        name: \'my-plugin\',\\n        async loadContent() {\\n          // ...\\n        },\\n        async contentLoaded({ content, actions }) {\\n          // ...\\n        },\\n        /* other lifecycle API */\\n      };\\n    },\\n  ],\\n};\\n```\\n\\n\uc9c1\uc811 \ud568\uc218\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\ub3c4 \uac00\ub2a5\\n\\n\uc704\uc640\uac19\uc774 \uacbd\ub85c\ub97c \uc9c0\uc815\ud588\ub2e4\uba74 Docusaurus\uce21\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Lifecycle APIs\ub97c  \\n\uc774\uc6a9\ud574 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 \ub41c\ub2e4.\\n\\n- [Lifecycle APIs](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis)\\n\\nAPI\ub4e4\uc911 \uac00\uc7a5 \uc911\uc694\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\ub294 `async loadContent()`\uc640  \\n`async contentLoaded({content, actions})` \ub450 \uac00\uc9c0\uac00 \uc788\ub2e4 `loadContent`\uc5d0\uc11c \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc5d0  \\n\uc811\uadfc\ud558\uac70\ub098 \ub2e4\uc591\ud55c \ub3d9\uc791\ub4e4\uc774 \uac00\ub2a5\ud558\uace0 `loadContent`\uc5d0\uc11c \ub0b4\uac00 \ud544\uc694\ud55c \uac12\uc744 return\ud55c\ub2e4\uba74  \\n\uadf8 \uac12\uc740`contentLoaded`\ud568\uc218\uc5d0\uc11c `content` \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\ub294\ub2e4. `actions`\uc758 \uacbd\uc6b0  \\n\uae30\ubcf8\uc73c\ub85c \uc81c\uacf5\ud558\ub294 3\uac00\uc9c0 \ud568\uc218\ub4e4\uc774 \uc788\uace0 \uacbd\ub85c\ub97c \uc124\uc815\ud558\ub294 \uacbd\uc6b0 `appRoute`  \\njson\ud30c\uc77c\uc744 \ub9cc\ub4e0\ub2e4\uba74 `createData` \ub098\uc758 \uacbd\uc6b0 \uae30\uc874 globalData.json\uc5d0 \ub370\uc774\ud130\ub97c\\n\ucd94\uac00\ud558\ub824\uace0 \ud588\uae30\uc5d0 \ub9c8\uc9c0\ub9c9\uc778 `setGlobalData`\ub97c \uc0ac\uc6a9\ud588\ub2e4.\\n\\n- loadContent - \ub2e4\uc591\ud55c \ub3d9\uc791\uc744 \uc815\uc758\ud558\ub294 \ud568\uc218 (\ud30c\uc77c\uc2dc\uc2a4\ud15c, API\ud638\ucd9c...)\\n- contentLoaded - content,actions\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \ubc1b\ub294 \ud568\uc218\\n  - content: loadCotent\uc758 \ub9ac\ud134\uac12\\n  - actions: appRoute, createData, setGlobalData\ub85c \uad6c\uc131\\n\\n```ts title=\\"./src/plugins/my-plugin.js\\"\\nexport default {\\n  plugins: [\\n    async function myPlugin(context, options) {\\n      return {\\n        name: \'my-plugin\',\\n        async loadContent() {\\n          return 1;\\n        },\\n\\n        // loadContent\uc758 return\uac12 content\uc5d0 \uc804\ub2ec\\n        async contentLoaded({ content, actions }) {\\n          const { setGlobalData } = actions;\\n          setGlobalData({ myBlogData: content });\\n        },\\n      };\\n    },\\n  ],\\n};\\n```\\n\\n\uc704\ucc98\ub7fc \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 `npm start`\uc2dc globalData\uc5d0 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\uace0  \\n\ub0b4\uac00 \uc6d0\ud558\ub294 \ubd80\ubd84\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 `useGlobalData` \ubc0f `usePluginData`\ub97c \uc0ac\uc6a9\ud574  \\n\ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \uc0ac\uc6a9\ud558\uba74 \ub05d\\n\\n```tsx title=\\"./src/pages/index.tsx\\"\\nimport { usePluginData } from \'@docusaurus/useGlobalData\';\\n\\nexport default function Home() {\\n  const { myBlogData } = usePluginData(\'my-plugin\');\\n\\n  return (\\n    <ul className=\\"post-list-container\\">\\n      {myBlogData?.map((post) => (\\n        <li key={post.slug}>\\n          <Link to={`/blog/${post.slug}`}>{post.title}</Link>\\n          {post.date}\\n        </li>\\n      ))}\\n    </ul>\\n  );\\n}\\n```"},{"id":"frontend-observability","metadata":{"permalink":"/blog/frontend-observability","editUrl":"https://github.com/WanderedToLa/logs/tree/master/blog/2024-06-22-Observability/index.md","source":"@site/blog/2024-06-22-Observability/index.md","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","description":"SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654","date":"2024-06-22T00:00:00.000Z","formattedDate":"June 22, 2024","tags":[{"label":"Observability","permalink":"/blog/tags/observability"},{"label":"Frontend","permalink":"/blog/tags/frontend"}],"readingTime":5.355,"hasTruncateMarker":false,"authors":[{"name":"WooSeok","url":"https://github.com/WanderedToLa","imageURL":"https://avatars.githubusercontent.com/u/87642287?v=4","key":"WanderedToLa"}],"frontMatter":{"slug":"frontend-observability","title":"\uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780?","authors":["WanderedToLa"],"tags":["Observability","Frontend"]},"unlisted":false,"prevItem":{"title":"docusaurus custom plugin \ub9cc\ub4e4\uae30","permalink":"/blog/docusaurus-plugin"}},"content":"## SSR(Server-Side Rendering) \ub3c4\uc785\uc758 \ubcc0\ud654\\n\\n\uc5ec\ub7ec\uae30\uc5c5\ub4e4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\ub2e4.  \\nFrontend \uce21\uba74\uc5d0\uc11c \uc5b4\ub5a4 \ub178\ub825\ub4e4\uc744 \ud558\uace0\uc788\uc744\uae4c \ucc3e\uc544\ubcf4\uc558\ub294\ub370  \\n\uccab\ubc88\uc9f8\ub294 Node.js \uc758 \ubc1c\uc804\uc73c\ub85c server\uc640 client\uac00 \uac19\uc740 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74\uc11c  \\n\ub80c\ub354\ub9c1\uc758 \ucc45\uc784\uc744 Server\ub85c \uc774\uc804\ud558\ub824\ub294 \uc6c0\uc9c1\uc784\uc774 \ub098\ud0c0\ub0ac\uace0  \\n\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \ub2f4\ub2f9\ud558\ub358 React\uc640 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c  \\n\uc0ac\uc6a9\uc790\ub4e4\uc774 \ud398\uc774\uc9c0\uc5d0 \ucc98\uc74c\uc73c\ub85c \uc9c4\uc785\ud558\ub294 \uc2dc\uac04`(LCP/FCP)`\uc744 \uc904\uc5ec \ub354 \ub098\uc740 \uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c \uac83\uc774\ub2e4.\\n\\n\uc774\ub7f0 \ub300\ud45c\uc801\uc778 \ud504\ub808\uc784\uc6cc\ud06c\ub85c Next.js\uac00 \uc788\uace0 \ub2e8\uc810\uc740  \\nServer\uce21\uc5d0\uc11c \ub80c\ub354\ub9c1 \ud55c\ub2e4\ub294 \uac83\uc740 \uacb0\uad6d \uad00\ub9ac\ud574\uc57c\ud558\ub294 \uc11c\ubc84\uac00 \uc788\ub2e4\ub294 \uac83\uc774\uace0 \uace7  \\n\ubaa8\ub2c8\ud130\ub9c1 \ud558\ub294\ub370 \ube44\uc6a9\uc774 \ub4e4\uace0 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9b4 \uacbd\uc6b0\ub97c \ub300\ube44\ud574\uc57c\ud55c\ub2e4.  \\n\ub610\ud55c Build \ubc0f \ubc30\ud3ec\uc2dc\uac04\uc774 \uc624\ub798\uac78\ub9b0\ub2e4\ub294 \ub2e8\uc810\ub3c4 \uc874\uc7ac.\\n\\n## Observability?\\n\\n\ucee8\ud37c\ub7f0\uc2a4\ub098 \uc790\ub8cc\ub4e4\uc744 \ucc3e\ub2e4\ubcf4\uba74 `Observability`\ub77c\ub294 \ub2e8\uc5b4\ub97c \uc2ec\uc2ec\uce58 \uc54a\uac8c \ubcfc \uc218 \uc788\ub2e4.  \\n\ub3c4\ub300\uccb4 \ubb34\uc2a8 \ub73b\uc77c\uae4c \ubcf4\ub2e4\ubcf4\ub2c8 \ub098\uc5d0\uac8c\ub294 \uc774\uc0c1\uc801\uc73c\ub85c \ub2e4\uac00\uc654\ub294\ub370  \\n\uc774 \ub2e8\uc5b4\ub97c \ub9cc\ub4e0 \uc0ac\ub78c `Rudolf E Kalman`\uc740 \\"\uc2dc\uc2a4\ud15c\uc758 \ucd9c\ub825\uc73c\ub85c\ubd80\ud130 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\ud0dc\ub97c \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\\"\\n\uc774\ub77c\uace0 \ud55c\ub2e4 \uacb0\uad6d \uc774 \ub9d0\uc774 \ub85c\uae45\uc774\ub098 \ubaa8\ub2c8\ud130\ub9c1 \uc9c0\ud45c\ub97c \ud1b5\ud574 \uc6b0\ub9ac\uc758 App\uc758 \uc0c1\ud0dc\ub97c \uce21\uc815\ud558\uace0  \\n\ubc1c \ube60\ub978 \ub300\uc751\uc774 \uac00\ub2a5\ud55c \ub2a5\ub825\uc774\ub77c\uace0 \uc0dd\uac01\ud55c\ub2e4.\\n\\n\ud2b9\ud788\ub098 \uaddc\ubaa8\uac00 \ud070 \uae30\uc5c5\ub4e4\uc740 MSA\uac19\uc740 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud558\uace0 \uc694\uccad\uc774 \ubd84\uc0b0\ucc98\ub9ac\ub418\uc5b4  \\n\uc81c\ub300\ub85c \ub85c\uadf8\ub97c \ud655\uc778\ud558\uac70\ub098 \ubaa8\ub2c8\ud130\ub9c1\uc774 \ud798\ub4e4 \uc218 \uc788\ub2e4.  \\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc744 \uafc8\uafb8\uae34 \ud558\uaca0\uc9c0\ub9cc \uc5d0\ub7ec\ub294 \uc788\uc744 \uc218 \ubc16\uc5d0 \uc5c6\uace0  \\n\uadf8\ub807\uae30\uc5d0 \ubc1c\ube60\ub978 \ub300\uc751\uc744 \uc704\ud574 \ucd5c\ub300\ud55c `Observability`\ub97c \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 \ud798\uc4f0\ub294\uac83 \uac19\ub2e4.\\n\\n## Web Vitals\\n\\n\ub300\ud45c\uc801\uc73c\ub85c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud560 \ub54c \uc2e0\uacbd \uc4f0\ub294 4\uac00\uc9c0\ub294\\n\\n- TTFB: \ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ubc84\ub85c\ubd80\ud130 \uccab\ubc88\uc9f8 \ubc14\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 \uc18d\ub3c4(>500ms)\\n- LCP: \uac00\uc7a5 \ud070 \ucf58\ud150\uce20\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>2.5s)\\n- FCP: \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcfc \uc218 \uc788\ub294 \ucf58\ud150\uce20\uac00 \ucd5c\ucd08\ub85c \uadf8\ub824\uc9c0\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>1.8s)\\n- TTI: \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uace0 \uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc751\ub2f5\ud558\uae30\uae4c\uc9c0\uc758 \uc18d\ub3c4(>100ms)\\n\\n\uc774 \uc678\uc5d0\ub3c4 \ub808\uc774\uc544\uc6c3 \uc2dc\ud504\ud2b8(CLS)\ub098 TTI\uc640 \uc720\uc0ac\ud55c FID\ub4f1\uc774 \uc788\ub2e4.\\n\\n\uc774\ub7f0 \uc9c0\ud45c\ub4e4\uc758 \uc790\uc138\ud55c \uc124\uba85\uc774\uc544\ub2cc \uc774\uc720\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubcf4\ub824 \ud558\ub294\ub370  \\n\uc704\uc640\uac19\uc740 \uc9c0\ud45c\ub4e4\uc744 \ud1b5\ud574 \uc131\ub2a5\uc744 \uce21\uc815/\ucd5c\uc801\ud654 \ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120\uc73c\ub85c \uc774\uc5b4\uc9c0\uace0  \\n\uafb8\uc900\ud55c \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud1b5\ud574 \uc131\ub2a5\uc758 \uc800\ud558\ub97c \ub9c9\ub294\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4 \ud639\uc740 \ud14c\uc2a4\ud2b8\ucf54\ub4dc \uc791\uc131\uc744 \ud1b5\ud574 \ub9c9\uac70\ub098?\\n\\n## \uc815\ub9ac\\n\\n\ub204\uad70\uac00 \ub098\uc5d0\uac8c \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub780 \ubb50\uc5d0\uc694? \ub77c\uace0 \ubb3b\ub294\ub2e4\uba74  \\nFrontend\uc758 Observability\ub97c \uac00\ub2a5\ud55c \ucd5c\ub300\ub85c \ub04c\uc5b4\uc62c\ub9ac\ub294 \uac83\uacfc Metric\uac19\uc740 \ubcf4\uc870\uc9c0\ud45c\ub97c \ud65c\uc6a9\ud558\uc5ec  \\nApp\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud558\uace0 \ucd5c\uc801\ud654,\uc815\ud655\uc131\uc744 \ud14c\uc2a4\ud2b8\ud558\uc5ec \uc6f9\uc0ac\uc774\ud2b8\uc758 \ub2e4\uc591\ud55c \uce21\uba74\ub4e4\uc744 \uc6d0\ud65c\ud558\uac8c  \\n\ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc5d0\ub7ec\ub97c \uac10\uc9c0\ud558\uc5ec \uc2e0\uc18d\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubaa8\ub2c8\ud130\ub9c1 \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \uac83\\n\uc774\uc0c1\uc801\uc73c\ub85c\ub294 \uc5d0\ub7ec\uac00 \uc544\uc608\uc5c6\ub294 \ud658\uacbd\uc774 \uc548\uc804\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ube44\uc2a4\uc5d0 \uadfc\uc811\ud558\uc9c0 \uc54a\uc744\uae4c \ub77c\uace0 \ub300\ub2f5\ud560\uac83\uac19\ub2e4.\\n\\n### \ucc38\uace0\\n\\n- [SSR\uc758 \uae30\uc068\uacfc \uc2ac\ud514: \ub80c\ub354\ub9c1\uc758 \ubcc0\ud654\uc758 \ud750\ub984\uc744 \ud1b5\ud574 \uc54c\uc544\ubcf4\ub294 SSR\uacfc Streaming SSR | \uc778\ud504\ucf582023](https://www.youtube.com/watch?v=hPyyFu3lrEg&list=PLpkj8RKr48waFtrqvJjbNrpGCvdxyX8Nx&index=30)\\n- [[Dev Dive\\\\_ Frontend Day] \uc2a4\ud2b8\ub9ac\ubc0d SSR \ub525 \ub2e4\uc774\ube0c](https://www.youtube.com/watch?v=9xl9X2pfHeI&t=1934s)\\n- [\ud1a0\uc2a4\u3163SLASH 23 - \ubd84\uc0b0 \ucd94\uc801 \uccb4\uacc4 & \ub85c\uadf8 \uc911\uc2ec\uc73c\ub85c Observability \ud655\ubcf4\ud558\uae30](https://www.youtube.com/watch?v=Ifz0LsfAG94&list=PL1DJtS1Hv1PiGXmgruP1_gM2TSvQiOsFL&index=23)\\n- [\ud1a0\uc2a4\u3163SLASH 22 - \uc783\uc5b4\ubc84\ub9b0 \uac1c\ubc1c\uc790\uc758 \uc2dc\uac04\uc744 \ucc3e\uc544\uc11c: \ub9e4\uc77c \ud558\ub8e8\ub97c \uc544\ub07c\ub294 DevOps \uc774\uc57c\uae30](https://www.youtube.com/watch?v=2IE68SDTYvI)"}]}')}}]);