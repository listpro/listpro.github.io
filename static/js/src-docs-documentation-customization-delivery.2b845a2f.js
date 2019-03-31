(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./public/images/release-ios.png":function(e,a,n){e.exports=n.p+"static/img/release-ios.fe6eb7ae.png"},"./public/images/release-ios2.png":function(e,a,n){e.exports=n.p+"static/img/release-ios2.4f361d99.png"},"./public/images/release-ios3.png":function(e,a,n){e.exports=n.p+"static/img/release-ios3.0c56cffa.png"},"./public/images/release-ios4.png":function(e,a,n){e.exports=n.p+"static/img/release-ios4.4f1906df.png"},"./src/docs/documentation/customization/delivery.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return T});var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=n("./node_modules/react/index.js"),m=n.n(i),c=n("./node_modules/@mdx-js/tag/dist/index.js"),d=n("./public/images/release-ios.png"),u=n.n(d),g=n("./public/images/release-ios2.png"),h=n.n(g),b=n("./public/images/release-ios3.png"),f=n.n(b),E=n("./public/images/release-ios4.png"),D=n.n(E),T=function(e){function a(e){var n;return Object(o.a)(this,a),(n=Object(r.a)(this,Object(s.a)(a).call(this,e))).layout=null,n}return Object(l.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.components;Object(t.a)(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",components:a},m.a.createElement(c.MDXTag,{name:"h1",components:a,props:{id:"delivery"}},"Delivery"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Please follow this document for detail clarify how to build the standalone app and submit to Appstore and Google Play: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.expo.io/versions/latest/guides/building-standalone-apps.html",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"https://docs.expo.io/versions/latest/guides/building-standalone-apps.html")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Open the App.json and add config for package id:"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Example:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},'"ios": {\n  "supportsTablet": true,\n  "bundleIdentifier": "com.inspireui.listapp"\n},\n"android": {\n  "package": "com.inspireui.listapp"\n}\n')),m.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"our-demo-app-results"}},"Our demo app results:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"iOS: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://itunes.apple.com/us/app/listapp-listing-directory/id1355477469",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"https://itunes.apple.com/us/app/listapp-listing-directory/id1355477469")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Android: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://play.google.com/store/apps/details?id=com.inspireui.listapp&hl=en",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"https://play.google.com/store/apps/details?id=com.inspireui.listapp&hl=en"))),m.a.createElement(c.MDXTag,{name:"h2",components:a,props:{id:"delivery-to-appstore-ios"}},"Delivery to Appstore (iOS)"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},"exp build:ios\n\n// input your Apple Developer account \n? How would you like to upload your credentials?\nExpo handles all credentials, you can still provide overrides\n\n? Will you provide your own Distribution Certificate? Let Expo handle the process\n? Will you provide your own Push Certificate? Let Expo handle the process\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Then monitor the build status by the providing link: ",m.a.createElement("img",{src:u.a,width:"100%"})),m.a.createElement(c.MDXTag,{name:"p",components:a},"If the build success then you can download the ipa file"),m.a.createElement("img",{src:h.a,width:"100%"}),m.a.createElement(c.MDXTag,{name:"p",components:a},"Go to your itune account and create the app, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"the Bundle ID should be the same with the id config from app.json, a"),"nd make sure all the detail info about the app was input correctly`          "),m.a.createElement("img",{src:f.a,width:"100%"}),m.a.createElement(c.MDXTag,{name:"p",components:a},"Open Xcode, select ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Open Developer Tools"),"/ ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Application Loader"),"and upload the previous ipa that you have download from Expo:"),m.a.createElement("img",{src:D.a,width:"100%"}),m.a.createElement(c.MDXTag,{name:"blockquote",components:a},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"blockquote"},"You may get this error during uploading \"ERROR ITMS-90717: \"Invalid App Store Icon. The App Store Icon in the asset catalog in 'ExpoKitApp.app' can't be transparent nor contain an alpha channel.\""),m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"blockquote"},"To fix this problem please try to remove the transparent background for the icon and also remove the alpha channel ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://stackoverflow.com/questions/26171739/remove-alpha-channel-in-an-image",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"https://stackoverflow.com/questions/26171739/remove-alpha-channel-in-an-image")," then run the cmd ",m.a.createElement(c.MDXTag,{name:"em",components:a,parentName:"p"},'"exp build:ios"')," again. Don't worry, expo will not ask you the below question again.")),m.a.createElement(c.MDXTag,{name:"p",components:a},"This is our result after 24h review from Apple: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://itunes.apple.com/us/app/listapp-listing-directory/id1355477469",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"https://itunes.apple.com/us/app/listapp-listing-directory/id1355477469")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Happy Release!"),m.a.createElement(c.MDXTag,{name:"h2",components:a,props:{id:"delivery-to-google-play-store-android"}},"Delivery to Google Play store (Android)"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"exp build:android\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Then follow the guide and download the apk from Expo, and open Google Developer Console to upload apk for the release."))}}]),a}(m.a.Component);T.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-customization-delivery.990a3fdc44d9a0df8541.js.map