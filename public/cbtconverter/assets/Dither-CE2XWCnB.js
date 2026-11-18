import{G as e,O as t,P as n,W as r,et as i,nt as a,q as o}from"./lucide-DqonddNo.js";import{a as s,i as c,n as l,r as u,t as d}from"./ogl-0KO8yaHw.js";var f=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,p=`
precision highp float;

uniform float time;
uniform vec2 resolution;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform float colorNum;
uniform float pixelSize;

varying vec2 vUv;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 8;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p - fbm(p + fbm(p2)));
}

float getBayerValue(int x, int y) {
  if (y == 0) {
    if (x == 0) return 0.0/64.0;
    if (x == 1) return 48.0/64.0;
    if (x == 2) return 12.0/64.0;
    if (x == 3) return 60.0/64.0;
    if (x == 4) return 3.0/64.0;
    if (x == 5) return 51.0/64.0;
    if (x == 6) return 15.0/64.0;
    if (x == 7) return 63.0/64.0;
  } else if (y == 1) {
    if (x == 0) return 32.0/64.0;
    if (x == 1) return 16.0/64.0;
    if (x == 2) return 44.0/64.0;
    if (x == 3) return 28.0/64.0;
    if (x == 4) return 35.0/64.0;
    if (x == 5) return 19.0/64.0;
    if (x == 6) return 47.0/64.0;
    if (x == 7) return 31.0/64.0;
  } else if (y == 2) {
    if (x == 0) return 8.0/64.0;
    if (x == 1) return 56.0/64.0;
    if (x == 2) return 4.0/64.0;
    if (x == 3) return 52.0/64.0;
    if (x == 4) return 11.0/64.0;
    if (x == 5) return 59.0/64.0;
    if (x == 6) return 7.0/64.0;
    if (x == 7) return 55.0/64.0;
  } else if (y == 3) {
    if (x == 0) return 40.0/64.0;
    if (x == 1) return 24.0/64.0;
    if (x == 2) return 36.0/64.0;
    if (x == 3) return 20.0/64.0;
    if (x == 4) return 43.0/64.0;
    if (x == 5) return 27.0/64.0;
    if (x == 6) return 39.0/64.0;
    if (x == 7) return 23.0/64.0;
  } else if (y == 4) {
    if (x == 0) return 2.0/64.0;
    if (x == 1) return 50.0/64.0;
    if (x == 2) return 14.0/64.0;
    if (x == 3) return 62.0/64.0;
    if (x == 4) return 1.0/64.0;
    if (x == 5) return 49.0/64.0;
    if (x == 6) return 13.0/64.0;
    if (x == 7) return 61.0/64.0;
  } else if (y == 5) {
    if (x == 0) return 34.0/64.0;
    if (x == 1) return 18.0/64.0;
    if (x == 2) return 46.0/64.0;
    if (x == 3) return 30.0/64.0;
    if (x == 4) return 33.0/64.0;
    if (x == 5) return 17.0/64.0;
    if (x == 6) return 45.0/64.0;
    if (x == 7) return 29.0/64.0;
  } else if (y == 6) {
    if (x == 0) return 10.0/64.0;
    if (x == 1) return 58.0/64.0;
    if (x == 2) return 6.0/64.0;
    if (x == 3) return 54.0/64.0;
    if (x == 4) return 9.0/64.0;
    if (x == 5) return 57.0/64.0;
    if (x == 6) return 5.0/64.0;
    if (x == 7) return 53.0/64.0;
  } else if (y == 7) {
    if (x == 0) return 42.0/64.0;
    if (x == 1) return 26.0/64.0;
    if (x == 2) return 38.0/64.0;
    if (x == 3) return 22.0/64.0;
    if (x == 4) return 41.0/64.0;
    if (x == 5) return 25.0/64.0;
    if (x == 6) return 37.0/64.0;
    if (x == 7) return 21.0/64.0;
  }
  return 0.0;
}

vec3 dither(vec2 uv, vec3 color) {
  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = getBayerValue(x, y) - 0.25;
  float step = 1.0 / (colorNum - 1.0);
  color += threshold * step;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 centeredUv = uv - 0.5;
  centeredUv.x *= resolution.x / resolution.y;
  
  float f = pattern(centeredUv);
  
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(centeredUv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.5 * effect;
  }
  
  vec3 col = mix(vec3(0.0), waveColor, f);
  col = dither(uv, col);
  
  gl_FragColor = vec4(col, 1.0);
}
`,m=n({__name:`Dither`,props:{waveSpeed:{default:.05},waveFrequency:{default:3},waveAmplitude:{default:.3},waveColor:{default:()=>[.5,.5,.5]},colorNum:{default:4},pixelSize:{default:2},disableAnimation:{type:Boolean,default:!1},enableMouseInteraction:{type:Boolean,default:!0},mouseRadius:{default:1}},setup(n){let m=n,h=i(`containerRef`),g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=[0,0],w=[0,0],T=()=>{if(!h.value||!g||!v)return;let{clientWidth:e,clientHeight:t}=h.value;g.setSize(e,t),v.uniforms.resolution.value[0]=e,v.uniforms.resolution.value[1]=t},E=e=>{if(!h.value||!_)return;let t=h.value.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;w=[n*_.canvas.width,r*_.canvas.height]},D=e=>{if(v&&g&&y){if(m.enableMouseInteraction){let e=.05;C[0]+=e*(w[0]-C[0]),C[1]+=e*(w[1]-C[1]),v.uniforms.mousePos.value[0]=C[0],v.uniforms.mousePos.value[1]=C[1]}else _&&(v.uniforms.mousePos.value[0]=_.canvas.width/2,v.uniforms.mousePos.value[1]=_.canvas.height/2);m.disableAnimation||(v.uniforms.time.value=e*.001),g.render({scene:y}),b=requestAnimationFrame(D)}},O=e=>{e&&b===null?b=requestAnimationFrame(D):!e&&b!==null&&(cancelAnimationFrame(b),b=null)},k=()=>{if(!h.value)return;A();let e=h.value;g=new c({alpha:!0}),_=g.gl,_.clearColor(0,0,0,0),_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA);let t=new d(_);v=new s(_,{vertex:f,fragment:p,uniforms:{time:{value:0},resolution:{value:new Float32Array([_.canvas.width,_.canvas.height])},waveSpeed:{value:m.waveSpeed},waveFrequency:{value:m.waveFrequency},waveAmplitude:{value:m.waveAmplitude},waveColor:{value:new l(...m.waveColor)},mousePos:{value:new Float32Array([_.canvas.width/2,_.canvas.height/2])},enableMouseInteraction:{value:+!!m.enableMouseInteraction},mouseRadius:{value:m.mouseRadius},colorNum:{value:m.colorNum},pixelSize:{value:m.pixelSize}}}),y=new u(_,{geometry:t,program:v});let n=_.canvas;n.style.width=`100%`,n.style.height=`100%`,n.style.display=`block`,e.appendChild(n),x&&x.disconnect(),x=new ResizeObserver(()=>T()),x.observe(e),m.enableMouseInteraction&&window.addEventListener(`mousemove`,E),T(),S&&S.disconnect(),S=new IntersectionObserver(e=>O(e[0].isIntersecting)),S.observe(e)},A=()=>{if(b&&(cancelAnimationFrame(b),b=null),x&&(x.disconnect(),x=null),S&&(S.disconnect(),S=null),h.value){let e=h.value.querySelector(`canvas`);e&&h.value.removeChild(e)}_&&_.getExtension(`WEBGL_lose_context`)?.loseContext(),g=null,_=null,v=null,y=null,C=[0,0],w=[0,0]};return r(()=>{k()}),e(()=>{A()}),a(()=>m,()=>{k()},{deep:!0}),(e,n)=>(o(),t(`div`,{ref_key:`containerRef`,ref:h,class:`w-full h-full absolute top-0 left-0`},null,512))}});export{m as default};