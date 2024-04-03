<div align="center">
	<h1>Eagle SDK for JavaScript</h1>
	<p>
		<b>A simple and easy to use client for the software <a href="https://eagle.cool/"> Eagle</a></b>
	</p>
	<br>
</div>

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=0.0.4&x2=0)](https://www.npmjs.com/package/eagle-sdk)

## Installation

```sh
npm install eagle-sdk
```

## Usage

```js
const { EagleSDK } = require('eagle-sdk')

const sdk = new EagleSDK({
    token: 'YOUT_TOKEN', // 从偏好设置 > 开发者选项取得 token
})
```

> See the complete list of endpoints in the [API reference](https://www.yuque.com/augus-gsjgn/eagle-api/utghhy).

```js
;(async () => {
    let res = await sdk.folder.listRecent()
    console.log(res)
})()
```

```js
{
    status: 'success',
    data: [{
        id: 'LUJI9VVR9UE60',
        name: '测试2',
        images: [],
        folders: [],
        imagesMappings: {},
        tags: [],
        children: [],
        isExpand: true,
        size: 27,
        vstype: 'folder',
        guidelines: [ 'normal' ],
        styles: { depth: 1, first: false, last: true },
        isVisible: true,
        index: 44,
        '$$hashKey': 'object:2312',
        newFolderName: '测试2',
        parent: 'LUJI9VVE0HDAF',
        imageCount: 0,
        depth: 1,
        descendantImageCount: 0,
        pinyin: 'CESHI2',
        extendTags: [],
        covers: []
    }]
}


```
