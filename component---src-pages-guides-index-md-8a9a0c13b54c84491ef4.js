(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[450],{5319:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return s}});var a=n(2122),d=n(9756),r=(n(5007),n(4983)),m=n(9536),l=["components"],i={},p={_frontmatter:i},o=m.Z;function s(e){var t=e.components,n=(0,d.Z)(e,l);return(0,r.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"get-started"},"Get Started"),(0,r.mdx)("p",null,"So you've just created a new template for App Builder and want to make it available for other developers to discover and use. You can add, remove, or update a template from Template Registry by using either its ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder-template-registry/guides/github/index.md"},"Github repository"),", the ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder-template-registry/guides/cli/index.md"},"Adobe I/O CLI"),", or the Template Registry ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder-template-registry/guides/api/index.md"},"API"),". For your template to be eligible to be listed in Template Registry, it must pass the following requirements."),(0,r.mdx)("h2",{id:"requirements"},"Requirements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Template must be an NPM package published to the ",(0,r.mdx)("a",{parentName:"li",href:"https://npmjs.com/"},"NPM registry"),". "),(0,r.mdx)("li",{parentName:"ul"},"Template source code must be available in a public Github repository. ")),(0,r.mdx)("h3",{id:"packagejson"},"package.json"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"description")),(0,r.mdx)("td",{parentName:"tr",align:null},"Template must have a description"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"keywords")),(0,r.mdx)("td",{parentName:"tr",align:null},"Must contain a keyword ",(0,r.mdx)("inlineCode",{parentName:"td"},"aio-app-builder-template")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,r.mdx)("h5",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "This is a description."\n  "keywords": [\n    "keyword1",\n    "keyword2",\n    "aio-app-builder-template"\n  ]\n}\n')),(0,r.mdx)("h3",{id:"installyml"},"install.yml"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"categories")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Template must have categories defined."),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"extension")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"Template might implement an extension point. One of its properties must be ",(0,r.mdx)("inlineCode",{parentName:"td"},"serviceCode"),", which will contain the extension metadata."),(0,r.mdx)("td",{parentName:"tr",align:null},"No")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"apis")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"List the APIs required to be added to all Workspaces in the App Builder Project, if they don't exist. Each API object must contain ",(0,r.mdx)("inlineCode",{parentName:"td"},"code")," as one of its properties, this is the sdk code of the service."),(0,r.mdx)("td",{parentName:"tr",align:null},"No")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"event")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"This will list the event configuration for the template. The event template code that contains this specification may read this to configure itself. The object can have two properties: ",(0,r.mdx)("inlineCode",{parentName:"td"},"consumer")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"provider"),"."),(0,r.mdx)("td",{parentName:"tr",align:null},"No")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"runtime")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether to add Runtime to App Builder application or not. Defaults to ",(0,r.mdx)("inlineCode",{parentName:"td"},"false"),"."),(0,r.mdx)("td",{parentName:"tr",align:null},"No")))),(0,r.mdx)("h5",{id:"example-1"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"categories:\n  - ui\n  - code\nservices:\n  - code: AnalyticsSDK\n    credentials: OAuth\n  - code: CampaignStandard\nextension:\n  serviceCode: dx/excshell/1\nruntime: true\nevent:\n  consumer:\n    type: some-type\n    provider:\n       - event-type-1\n       - event-type-2\n  provider:\n    name: provider-name\n    description: provider-description\n    event-types:\n       - event-type-1\n       - event-type-2\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-8a9a0c13b54c84491ef4.js.map