# Gauge Component for React
A library that provides basic gauge styles and widgets to create gauges efficiently for React projects.

![screen shot](https://raw.githubusercontent.com/JenHsuan/react-gauge-component/master/demo/screen-shot.gif)

## Installation and usage
The easiest way to use react-ui-gauge-component is to install it from npm.

```s
npm i react-ui-gauge-component
```

Then use it in your app

```javascript
import React, { Fragment } from 'react';
import withGauge, { HeartBeat, Needle } from 'react-ui-gauge-component';

const defaultTitleColor = "black";
const defaultValueColor = "black";

const Gauge1 = withGauge({
    WrappedComponent: Needle({value:data[0], min: 0, max: 100}),
    fields: [{title: "Label 1", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor}]
});

const Gauge2 = withGauge({
    WrappedComponent: HeartBeat,
    colorArray: ["#eb001e", "#000", "#3aff20", "#53a5fd", "#aaaaaa"],
    fields: [
        {title: "Label 1", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 2", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor}]
});

const Gauge3 = withGauge({
    WrappedComponent: HeartBeat,
    fields: [
        {title: "Label 1", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 2", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 3", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor}]
});

const Gauge4 = withGauge({
    WrappedComponent: HeartBeat,
    fields: [
        {title: "Label 1", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 2", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 3", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor},
        {title: "Label 4", value: "100", titleColor: defaultTitleColor, valueColor: defaultValueColor}]
});

const DashboardExample = () => {
    return (
        <Fragment>
            <Gauge1/>
            <Gauge2/>
            <Gauge3/>
            <Gauge4/>
        <Fragment/>
    )
}

export default DashboardExample;

```

* [Example for using react-ui-gauge-component with Redux](https://github.com/JenHsuan/example-react-ui-gauge-component/blob/master/components/DashboardExample.js)

## Props
### withGauge
* WrappedComponent -  Put a react component as a widget to compose a new gauge. The default widget is the heartbeat icon.
* colorArray - Put an array of color for the gauge border.

```javascript
colorArray: ["#eb001e", "#f35120", "#3aff20", "#53a5fd", "#aaaaaa"]
```

* fields - Put an array of key, value pairs for the gauge's contents.

```javascript
fields: [
        {title: "Gauge 1", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Gauge 2", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Gauge 3", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Gauge 4", value: "100", titleColor: "black", valueColor: "black"}]
```

### Needle
* value: defult value is zero
* min: defult value is zero
* max: defult value is 100

## License
MIT Licensed. Copyright (c) Jen-Hsuan Hsieh 2021.

## About
* [Author](https://jenhsuan.github.io/ALayman/profile.html)
* [100DaysOfCode](https://dev.to/jenhsuan)
* [Medium](https://medium.com/a-layman)

## Links
* [Change log](https://github.com/JenHsuan/react-gauge-component/blob/master/changelog.md)

## Refernces
* [[Guide] 發佈 npm 套件 - 從手動到自動（0）：專案與套件建置篇](https://pjchender.github.io/2020/02/02/guide-%E7%99%BC%E4%BD%88-npm-%E5%A5%97%E4%BB%B6-%E5%BE%9E%E6%89%8B%E5%8B%95%E5%88%B0%E8%87%AA%E5%8B%95%EF%BC%880%EF%BC%89%EF%BC%9A%E5%B0%88%E6%A1%88%E8%88%87%E5%A5%97%E4%BB%B6%E5%BB%BA%E7%BD%AE%E7%AF%87/)
* [發佈 npm 套件 - 從手動到自動（2）：手動 publish 篇](https://pjchender.blogspot.com/2020/02/guide-npm-2.html)
* [React.js编译](https://chenshenhai.github.io/rollupjs-note/note/chapter04/01.html)
* [如何使用Rollup打包样式文件并添加LiveReload](https://www.w3cplus.com/javascript/learn-rollup-css.html)
* [Babel helpers are bundled into the output file](https://github.com/rollup/rollup-plugin-babel/issues/322)
* [rollup使用过程中遇到的各种问题](https://xudany.github.io/rollup/2019/08/13/rollup%E4%BD%BF%E7%94%A8%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E5%90%84%E7%A7%8D%E9%97%AE%E9%A2%98/)
* [rollup打包js的注意點-haorooms部落格分享](https://www.itread01.com/content/1542163957.html)
* [The complete guide to publishing a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/)
* [How does React decide to re-render a component?](https://lucybain.com/blog/2017/react-js-when-to-rerender/)