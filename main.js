!function () {
  var e = document.querySelector('.container'),
  t = document.querySelector('.menu'),
  n = document.querySelector('.menu-trigger'),
  i = (document.querySelector('.menu__inner--desktop'), document.querySelector('.menu__sub-inner-more-trigger')),
  o = document.querySelector('.menu__sub-inner-more'),
  d = getComputedStyle(document.body).getPropertyValue('--phoneWidth'),
  c = function () {
    return window.matchMedia(d).matches
  },
  s = function () {
    n && n.classList.toggle('hidden', !c()),
    t && t.classList.toggle('hidden', c()),
    o && o.classList.toggle('hidden', !c())
  };
  t && t.addEventListener('click', (function (e) {
    return e.stopPropagation()
  })),
  o && o.addEventListener('click', (function (e) {
    return e.stopPropagation()
  })),
  s(),
  document.body.addEventListener('click', (function () {
    c() || !o || o.classList.contains('hidden') ? c() && !t.classList.contains('hidden') && t.classList.add('hidden') : o.classList.add('hidden')
  })),
  window.addEventListener('resize', s),
  n && n.addEventListener('click', (function (e) {
    e.stopPropagation(),
    t && t.classList.toggle('hidden')
  })),
  i && i.addEventListener('click', (function (t) {
    t.stopPropagation(),
    o && o.classList.toggle('hidden'),
    o.getBoundingClientRect().right > e.getBoundingClientRect().right && (o.style.left = 'auto', o.style.right = 0)
  }))
}();
