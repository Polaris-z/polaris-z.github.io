(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a460b"],{"05d4":function(t,e,a){"use strict";a.r(e);var n=a("d225"),i=a("b0b4"),r=a("308d"),c=a("6bb5"),l=a("4e2b"),s=a("9ab4"),b=a("d8c6"),d=a("13e3"),p=a("6fde"),h=a("cdb5"),o=a("18ae"),u=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"render",value:function(){var t=arguments[0];return t(h["a"],{attrs:{breadcrumb:!0}},[t(h["b"],{attrs:{title:"基础tree组件"}},[t("div",["增加 ",t("b",["nodeKey"]),"  字段用于自定义唯一标识（原组件只能使用",t("b",["key"])," 作为唯一标识 ）"]),t("div",["增加 ",t("b",["nextLevelKey"]),"  字段用于自定义需要递归的属性（原组件只能使用",t("b",["children"])," 作为唯一标识 ）"]),t("div",[" 增加",t("b",["titleRender"]),"字段,用于自定义title,可以根据函数参数 动态渲染title "]),t("div",[" 增加",t("b",["iconRender"]),"字段,用于自定义icon,可以根据函数参数 动态渲染icon "])]),t(d["a"],{attrs:{showIcon:!0,treeData:f,nodeKey:"path",nextLevelKey:"son",titleRender:function(e){return t("span",[" ",e.title," ",t(p["a"],{attrs:{name:"boy"}})," "])},iconRender:function(e){switch(e.path){case"0-0":return t(p["a"],{attrs:{name:"sunny"}});case"0-2":return t(p["a"],{attrs:{name:"admin"}});default:return t("a-icon",{attrs:{type:"file"}})}}}}),t(o["a"],{attrs:{name:"baseTree"}})])}}]),e}(b["d"]);u=s["a"]([Object(b["a"])({})],u),e["default"]=u;var f=[{title:"0-0",path:"0-0",son:[{title:"0-0-0",path:"0-0-0",son:[{title:"0-0-0-0",path:"0-0-0-0"},{title:"0-0-0-1",path:"0-0-0-1"},{title:"0-0-0-2",path:"0-0-0-2"}]},{title:"0-0-1",path:"0-0-1",son:[{title:"0-0-1-0",path:"0-0-1-0"},{title:"0-0-1-1",path:"0-0-1-1"},{title:"0-0-1-2",path:"0-0-1-2"}]},{title:"0-0-2",path:"0-0-2"}]},{title:"0-1",path:"0-1",son:[{title:"0-1-0-0",path:"0-1-0-0"},{title:"0-1-0-1",path:"0-1-0-1"},{title:"0-1-0-2",path:"0-1-0-2"}]},{title:"0-2",path:"0-2"}]}}]);