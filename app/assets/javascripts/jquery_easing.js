#
# * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
# *
# * Uses the built in easing capabilities added In jQuery 1.1
# * to offer multiple easing options
# *
# * TERMS OF USE - jQuery Easing
# *
# * Open source under the BSD License.
# *
# * Copyright c 2008 George McGinley Smith
# * All rights reserved.
# *
# * Redistribution and use in source and binary forms, with or without modification,
# * are permitted provided that the following conditions are met:
# *
# * Redistributions of source code must retain the above copyright notice, this list of
# * conditions and the following disclaimer.
# * Redistributions in binary form must reproduce the above copyright notice, this list
# * of conditions and the following disclaimer in the documentation and/or other materials
# * provided with the distribution.
# *
# * Neither the name of the author nor the names of contributors may be used to endorse
# * or promote products derived from this software without specific prior written permission.
# *
# * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
# *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
# *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
# *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
# * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
# *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
# * OF THE POSSIBILITY OF SUCH DAMAGE.
# *
#

# t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"] = jQuery.easing["swing"]
jQuery.extend jQuery.easing,
  def: "easeOutQuad"
  swing: (x, t, b, c, d) ->

    #alert(jQuery.easing.default);
    jQuery.easing[jQuery.easing.def] x, t, b, c, d

  easeInQuad: (x, t, b, c, d) ->
    c * (t /= d) * t + b

  easeOutQuad: (x, t, b, c, d) ->
    -c * (t /= d) * (t - 2) + b

  easeInOutQuad: (x, t, b, c, d) ->
    return c / 2 * t * t + b  if (t /= d / 2) < 1
    -c / 2 * ((--t) * (t - 2) - 1) + b

  easeInCubic: (x, t, b, c, d) ->
    c * (t /= d) * t * t + b

  easeOutCubic: (x, t, b, c, d) ->
    c * ((t = t / d - 1) * t * t + 1) + b

  easeInOutCubic: (x, t, b, c, d) ->
    return c / 2 * t * t * t + b  if (t /= d / 2) < 1
    c / 2 * ((t -= 2) * t * t + 2) + b

  easeInQuart: (x, t, b, c, d) ->
    c * (t /= d) * t * t * t + b

  easeOutQuart: (x, t, b, c, d) ->
    -c * ((t = t / d - 1) * t * t * t - 1) + b

  easeInOutQuart: (x, t, b, c, d) ->
    return c / 2 * t * t * t * t + b  if (t /= d / 2) < 1
    -c / 2 * ((t -= 2) * t * t * t - 2) + b

  easeInQuint: (x, t, b, c, d) ->
    c * (t /= d) * t * t * t * t + b

  easeOutQuint: (x, t, b, c, d) ->
    c * ((t = t / d - 1) * t * t * t * t + 1) + b

  easeInOutQuint: (x, t, b, c, d) ->
    return c / 2 * t * t * t * t * t + b  if (t /= d / 2) < 1
    c / 2 * ((t -= 2) * t * t * t * t + 2) + b

  easeInSine: (x, t, b, c, d) ->
    -c * Math.cos(t / d * (Math.PI / 2)) + c + b

  easeOutSine: (x, t, b, c, d) ->
    c * Math.sin(t / d * (Math.PI / 2)) + b

  easeInOutSine: (x, t, b, c, d) ->
    -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b

  easeInExpo: (x, t, b, c, d) ->
    (if (t is 0) then b else c * Math.pow(2, 10 * (t / d - 1)) + b)

  easeOutExpo: (x, t, b, c, d) ->
    (if (t is d) then b + c else c * (-Math.pow(2, -10 * t / d) + 1) + b)

  easeInOutExpo: (x, t, b, c, d) ->
    return b  if t is 0
    return b + c  if t is d
    return c / 2 * Math.pow(2, 10 * (t - 1)) + b  if (t /= d / 2) < 1
    c / 2 * (-Math.pow(2, -10 * --t) + 2) + b

  easeInCirc: (x, t, b, c, d) ->
    -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b

  easeOutCirc: (x, t, b, c, d) ->
    c * Math.sqrt(1 - (t = t / d - 1) * t) + b

  easeInOutCirc: (x, t, b, c, d) ->
    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b  if (t /= d / 2) < 1
    c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b

  easeInElastic: (x, t, b, c, d) ->
    s = 1.70158
    p = 0
    a = c
    return b  if t is 0
    return b + c  if (t /= d) is 1
    p = d * .3  unless p
    if a < Math.abs(c)
      a = c
      s = p / 4
    else
      s = p / (2 * Math.PI) * Math.asin(c / a)
    -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b

  easeOutElastic: (x, t, b, c, d) ->
    s = 1.70158
    p = 0
    a = c
    return b  if t is 0
    return b + c  if (t /= d) is 1
    p = d * .3  unless p
    if a < Math.abs(c)
      a = c
      s = p / 4
    else
      s = p / (2 * Math.PI) * Math.asin(c / a)
    a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b

  easeInOutElastic: (x, t, b, c, d) ->
    s = 1.70158
    p = 0
    a = c
    return b  if t is 0
    return b + c  if (t /= d / 2) is 2
    p = d * (.3 * 1.5)  unless p
    if a < Math.abs(c)
      a = c
      s = p / 4
    else
      s = p / (2 * Math.PI) * Math.asin(c / a)
    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b  if t < 1
    a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b

  easeInBack: (x, t, b, c, d, s) ->
    s = 1.70158  if s is `undefined`
    c * (t /= d) * t * ((s + 1) * t - s) + b

  easeOutBack: (x, t, b, c, d, s) ->
    s = 1.70158  if s is `undefined`
    c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b

  easeInOutBack: (x, t, b, c, d, s) ->
    s = 1.70158  if s is `undefined`
    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b  if (t /= d / 2) < 1
    c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b

  easeInBounce: (x, t, b, c, d) ->
    c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b

  easeOutBounce: (x, t, b, c, d) ->
    if (t /= d) < (1 / 2.75)
      c * (7.5625 * t * t) + b
    else if t < (2 / 2.75)
      c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
    else if t < (2.5 / 2.75)
      c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
    else
      c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b

  easeInOutBounce: (x, t, b, c, d) ->
    return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b  if t < d / 2
    jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b


#
# *
# * TERMS OF USE - EASING EQUATIONS
# *
# * Open source under the BSD License.
# *
# * Copyright c 2001 Robert Penner
# * All rights reserved.
# *
# * Redistribution and use in source and binary forms, with or without modification,
# * are permitted provided that the following conditions are met:
# *
# * Redistributions of source code must retain the above copyright notice, this list of
# * conditions and the following disclaimer.
# * Redistributions in binary form must reproduce the above copyright notice, this list
# * of conditions and the following disclaimer in the documentation and/or other materials
# * provided with the distribution.
# *
# * Neither the name of the author nor the names of contributors may be used to endorse
# * or promote products derived from this software without specific prior written permission.
# *
# * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
# *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
# *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
# *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
# * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
# *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
# * OF THE POSSIBILITY OF SUCH DAMAGE.
# *
#