(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fe5f"],{b61f:function(t,e,a){"use strict";a.r(e);var n=a("d225"),i=a("b0b4"),r=a("308d"),d=a("6bb5"),c=a("4e2b"),p=a("9ab4"),o=a("2409"),l=a("d8c6"),s=a("cdb5"),u=a("18ae"),b=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(i["a"])(e,[{key:"typeRender",value:function(t){var e=this.$createElement;return e("span",{style:"color:rgb(196, 29, 127)"},[" ",t])}},{key:"render",value:function(){var t=arguments[0];return t(s["a"],{attrs:{breadcrumb:!0}},[t(s["b"],{attrs:{title:"基础列表"}},["对antd官方Table进行hack,使通用属性传递更方便。"]),t(o["a"],{attrs:{pagination:!1,align:"center",tooptip:35,dataSource:f,columns:[{title:"参数",dataIndex:"field"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type",customRender:this.typeRender},{title:"默认值",dataIndex:"default"}]}}),t(u["a"],{attrs:{name:"baseTable"}})])}}]),e}(l["d"]);b=p["a"]([Object(l["a"])({})],b),e["default"]=b;var f=[{field:"algin",description:"对齐方式",type:"left | right | center",default:"left"},{field:"tooptip",description:"隐藏超出( tooptip规定字数)文字，tooptip显示",type:"number",default:"-"},{field:"rowKey",description:"每一行的key,自动设置自增key,不再用手动设置",type:"string| ()=>string|number",default:"k=0 ; ()=> k++"},{field:"其他",description:"除上述字段外其他props",type:"同官方一致",default:"-"}]}}]);