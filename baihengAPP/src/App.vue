<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

// 做移动设备的适应
;(function(doc, win) {
  var _rootFontSize = window._rootFontSize || 100;

  // 默认不支持缩放
  var _remMetaScalable =
    typeof window._remMetaScalable === "undefined"
      ? false
      : !!window._remMetaScalable;

  var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    // 只针对IOS设备
    dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
    // 计算缩放比
    scale = 1 / dpr,
    // 检测支持的"缩放"事件
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
  docEl.dataset.dpr = dpr;

  // 被iframe引用时，禁止缩放
  dpr = window.top === window.self ? dpr : 1;

  var metaEl = doc.createElement("meta");
  metaEl.name = "viewport";
  var metaElContent = "width=device-width, ";

  // 支持缩放
  if (_remMetaScalable) {
    metaElContent += "initial-scale=" + scale;
  } else {
    metaElContent +=
      "initial-scale=" +
      scale +
      ",maximum-scale=" +
      scale +
      ", minimum-scale=" +
      scale +
      ", user-scalable=no";
  }
  metaEl.content = metaElContent;
  docEl.firstElementChild.appendChild(metaEl);

  // 缩放/旋转设备检测函数
  var recalc = function() {
    var width = docEl.clientWidth;
    docEl.style.fontSize = _rootFontSize * (width / 750) + "px";
  };
  recalc();

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);
</script>

<style lang="less" scoped>
#app,ul,li {
  height: 100%;
  width: 100%;
  background: #efeff4;
  list-style: none;
}
</style>

