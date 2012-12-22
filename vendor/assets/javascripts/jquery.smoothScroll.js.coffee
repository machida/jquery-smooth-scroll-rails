###
jQuery SmoothScroll Plugin
Required: jQuery(http://jquery.com/)
License: MIT
Update: 2012/12/06
Version: 1.1
Original Author: yuu.creatorish
Customized: machida
URL: http://creatorish.com
PluginURL: http://creatorish.com/lab/5393
###

jQuery.fn.smoothScroll = (op) ->
  clickHandler = (e) ->
    e.preventDefault()
    e.stopPropagation()
    h = jQuery(this).attr("href")
    t = jQuery(h)
    t = d  if t.length is 0
    scrolling = true
    if c
      s.attr
        st: c.scrollTop()
        sl: c.scrollLeft()

    else
      s.attr
        st: w.scrollTop()
        sl: w.scrollLeft()

    option.start s.attr("sl"), s.attr("st")
    o = t.offset()
    if c
      o = t.position()
      o.top = c.get(0).scrollHeight - c.innerHeight()  if o.top > c.get(0).scrollHeight - c.innerHeight()
    s.stop(true).animate
      st: o.top
      sl: o.left
    ,
      duration: option.duration
      easing: option.easing
      step: stepHandler
      complete: completeHandler

  completeHandler = ->
    scrolling = false
    scroll @sl, @st
    option.complete @sl, @st
  stepHandler = ->
    scroll @sl, @st
    option.step @sl, @st
  scroll = (x, y) ->
    if c
      c.scrollLeft x
      c.scrollTop y
    else
      window.scrollTo x, y
  stopQueue = ->
    if scrolling
      option.canceled s.attr("sl"), s.attr("st")
      scrolling = false
      s.stop true
  scrollTo = (x, y) ->
    scrolling = true
    if c
      s.attr
        st: c.scrollTop()
        sl: c.scrollLeft()

    else
      s.attr
        st: w.scrollTop()
        sl: w.scrollLeft()

    option.start s.attr("sl"), s.attr("st")
    o =
      top: y
      left: x

    if c
      o.top = c.get(0).scrollHeight - c.innerHeight()  if o.top > c.get(0).scrollHeight - c.innerHeight()
      o.left = c.get(0).scrollWidth - c.innerWidth()  if o.left > c.get(0).scrollWidth - c.innerWidth()
    else
      o.top = document.body.scrollHeight - window.innerHeight  if o.top > document.body.scrollHeight - window.innerHeight
      o.left = document.body.scrollWidth - window.innerWidth  if o.left > document.body.scrollWidth - window.innerWidth
    s.stop(true).animate
      st: o.top
      sl: o.left
    ,
      duration: option.duration
      easing: option.easing
      step: stepHandler
      complete: completeHandler

  scrollToElement = (selector) ->
    o = jQuery(selector).offset()
    o = jQuery(selector).position()  if c
    scrollTo o.left, o.top
  option =
    easing: "swing"
    duration: 500
    cancel: true
    target: null
    start: (x, y) ->

    step: (x, y) ->

    canceled: (x, y) ->

    complete: (x, y) ->

  jQuery.extend option, op
  scrolling = false
  w = jQuery(window)
  d = jQuery(document.body)
  s = jQuery(
    st: 0
    sl: 0
    v: 0
  )
  c = undefined
  if option.target
    c = jQuery(option.target)
    c.wrapInner "<div style='position: relative'></div>"  unless c.children().length is 1
  if option.cancel
    if "ontouchend" of document
      if c
        c.unbind "touchstart", stopQueue
        c.bind "touchstart", stopQueue
      else
        d.unbind "touchstart", stopQueue
        d.bind "touchstart", stopQueue
    else
      if c
        c.bind "DOMMouseScroll mousewheel", stopQueue
        c.unbind "mousedown", stopQueue
        c.bind "mousedown", stopQueue
      else
        w.bind "DOMMouseScroll mousewheel", stopQueue
        d.unbind "mousedown", stopQueue
        d.bind "mousedown", stopQueue
  jQuery.each this, ->
    jQuery(this).unbind "click", clickHandler
    jQuery(this).bind "click", clickHandler

  scroll: scrollTo
  scrollToElement: scrollToElement
  stop: stopQueue