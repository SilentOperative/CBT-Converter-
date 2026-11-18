const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdfjs-DD34LWy9.js","assets/rolldown-runtime-8BhlS34s.js","assets/html2pdf-CZNyQr2M.js"])))=>i.map(i=>d[i]);
import{r as e}from"./pdfjs-DD34LWy9.js";import{t}from"./yaml-DVyIVJMa.js";function n(e,t,n){return fetch(`${e}/chat/completions`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${t}`},body:JSON.stringify(n)}).then(async e=>{if(!e.ok){let t=await e.text();throw Error(`${e.status} ${t.slice(0,500)}`)}return(await e.json()).choices?.[0]?.message?.content??``})}function r(e,t){let n=e.modelParams?.[t];return{contextWindow:n?.contextWindow??e.contextWindow??131072,maxTokens:n?.maxTokens??e.maxTokens??6e3}}var i=`rpdf2cbt-custom-providers-v2`;function a(){try{let e=(t.parse(`# ── Preconfigured AI providers ────────────────────────────────────────────
# This file ships to every user. Edit it here on GitHub → commit → all users
# get the update on next deploy. No app code changes needed.
#
# Fields:
#   id            unique slug
#   name          display name
#   priority      1 = default provider, 2+ = fallback order
#   endpoint      OpenAI-compatible base URL (no trailing slash)
#   response      "openai-completions" (POST /chat/completions)
#                 | "openai-responses"  (POST /responses — OpenAI Responses API)
#   envKey        Vercel env variable name holding the SECRET key (server-side only).
#                 Blank client key + envKey set → request routes via /api/agent/chat proxy.
#   contextWindow provider-level FALLBACK context window (tokens)
#   maxTokens     provider-level FALLBACK max output tokens
#   models        list in PRIORITY order — first entry is the default pick.
#
# CONTEXT WINDOW & MAX TOKENS ARE PER MODEL.
# A plain string model inherits the provider fallbacks. For exact control,
# write the model as a map instead:
#
#   models:
#     - llama-3.3-70b-versatile              # inherits fallbacks
#     - id: openai/gpt-oss-120b
#       contextWindow: 131072
#       maxTokens: 65536
#
# PROVIDER-level "priority" (explicit number):
#   priority: 1  → DEFAULT provider (used first)
#   priority: 2+ → fallback order when ALL models of a higher-priority
#                  provider fail (429/5xx exhausted).
#
# MODELS within a provider: TOP-TO-BOTTOM list order.
#   1st model  → default model of that provider
#   next model → next fallback (same provider)
#
# Users can additionally add their own private providers from the browser
# (Extract → AI Agent → Settings). Those live only in their localStorage.

version: 2

providers:
  - id: groq
    name: Groq
    priority: 6
    endpoint: https://api.groq.com/openai/v1/chat/completions
    response: openai-completions
    envKey: GROQ_API_KEY
    docsUrl: https://console.groq.com/docs/models
    models:
      - id: openai/gpt-oss-120b
        contextWindow: 131072
        maxTokens: 65536
      - id: openai/gpt-oss-20b
        contextWindow: 131072
        maxTokens: 65536
      - id: groq/compound
        contextWindow: 131072
        maxTokens: 8192
      - id: groq/compound-mini
        contextWindow: 131072
        maxTokens: 8192

  - id: mistral
    name: Mistral
    priority: 4
    endpoint: https://api.mistral.ai/v1
    response: openai-completions
    envKey: MISTRAL_API_KEY
    docsUrl: https://docs.mistral.ai/models
    contextWindow: 131072
    maxTokens: 8192
    models:
      - id: labs-leanstral-1-5-1
        contextWindow: 256000
        maxTokens: 128000
      - id: mistral-medium-2508
        contextWindow: 256000
      - id: ministral-14b-2512
        contextWindow: 256000

  - id: nvidia
    name: NVIDIA NIM
    priority: 5
    endpoint: https://integrate.api.nvidia.com/v1
    response: openai-completions
    envKey: NVIDIA_API_KEY
    docsUrl: https://build.nvidia.com/explore
    models:
      - id: meta/llama-3.3-70b-instruct
        contextWindow: 131072
        maxTokens: 16384
      - meta/llama-3.1-8b-instruct
      - id: deepseek-ai/deepseek-r1
        contextWindow: 163840
        maxTokens: 16384

  - id: poolside
    name: Poolside AI
    priority: 3
    endpoint: https://inference.poolside.ai/v1
    response: openai-completions
    envKey: POOLSIDE_API_KEY
    docsUrl: https://docs.poolside.ai/
    models:
      - id: poolside/laguna-s-2.1
        contextWindow: 1000000
        maxTokens: 32000
      - id: poolside/laguna-xs-2.1
        contextWindow: 256000
        maxTokens: 32000

  - id: agnes
    name: Agnes AI
    priority: 2
    endpoint: https://apihub.agnes-ai.com/v1/chat/completions
    response: openai-completions
    envKey: AGNES_API_KEY
    docsUrl: https://docs.agnes-ai.com/
    models:
      - id: agnes-3.0-flash
        contextWindow: 512000
        maxTokens: 64000
      - id: agnes-2.5-flash
        contextWindow: 512000
        maxTokens: 32000
      - id: agnes-2.0-flash
        contextWindow: 512000
        maxTokens: 32000  

  - id: atria_internlm
    name: Internlm
    priority: 1
    endpoint: https://api.atria-asi.ai/v1
    response: openai-completions
    envKey: ATRIA_API_KEY
    docsUrl: https://api.atria-asi.ai/docs
    models:
      - id: Atria-Dawn-Preview
        contextWindow: 256000
        maxTokens: 64000
    
  - id: opencode_zen
    name: OpenCode Zen
    priority: 7
    endpoint: https://opencode.ai/zen/v1
    response: openai-completions
    envKey: OPENCODE_CUSTOM_API_KEY
    docsUrl: https://docs.opencode.ai/
    models:
      - id: nemotron-3-ultra-free
        contextWindow: 1000000
        maxTokens: 128000
      - id: big-pickle
        contextWindow: 128000
        maxTokens: 32000
      - id: nemotron-3.5-lightning-free
        contextWindow: 1000000
        maxTokens: 128000  
`).providers||[]).map(e=>{let t=[],n={};for(let r of e.models||[]){if(typeof r==`string`){t.push(r);continue}r&&r.id&&(t.push(r.id),(r.contextWindow!=null||r.maxTokens!=null)&&(n[r.id]={contextWindow:r.contextWindow,maxTokens:r.maxTokens}))}return{id:e.id,name:e.name,priority:e.priority??999,baseUrl:e.endpoint.replace(/\/+$/,``),response:e.response||`openai-completions`,envKey:e.envKey||``,docsUrl:e.docsUrl,contextWindow:e.contextWindow,maxTokens:e.maxTokens,models:t,modelParams:Object.keys(n).length?n:void 0,model:t[0]||``,isPreset:!0}});return e.sort((e,t)=>(e.priority??999)-(t.priority??999)),e}catch{return[]}}var o=a();function s(e){let t=e.trim().replace(/\/+$/,``);return t=t.replace(/\/chat\/completions$/,``),t}function c(){let e=[];try{e=JSON.parse(localStorage.getItem(i)||`[]`),Array.isArray(e)||(e=[])}catch{e=[]}return[...o,...e]}function l(e){localStorage.setItem(i,JSON.stringify(e.filter(e=>!e.isPreset)))}function u(e){if(e.isPreset)return;let t=c().filter(e=>!e.isPreset),n=t.findIndex(t=>t.id===e.id);n>=0?t[n]=e:t.push(e),l(t)}function d(e){l(c().filter(t=>!t.isPreset&&t.id!==e))}async function f(e,t){let n={},r=(t||``).trim();r&&(n.Authorization=`Bearer ${r}`);let i=await fetch(`${s(e)}/models`,{headers:n});if(!i.ok)throw Error(`${i.status} ${(await i.text()).slice(0,200)}`);let a=await i.json();return(a.data?.map(e=>e.id).filter(Boolean)||a.models?.map(e=>e.name||e.id).filter(Boolean)||[]).sort()}async function p(){try{let e=await fetch(`/api/agent/status`);return e.ok&&(await e.json()).envKeys||{}}catch{return{}}}var m=`rpdf2cbt-health-cache`,h=864e5;async function g(e=!1){try{if(!e){let e=localStorage.getItem(m);if(e){let t=JSON.parse(e);if(t?.ts&&Date.now()-t.ts<h&&t.data)return Date.now()-t.ts>432e5&&Object.values(t.data).some(e=>e.hasKey&&!e.ok)&&setTimeout(()=>{g(!0)},1e4),t.data}}}catch{}for(let e=1;e<=3;e++)try{let t=await fetch(`/api/agent/health`);if(!t.ok)throw Error(String(t.status));let n=(await t.json()).health||{};try{localStorage.setItem(m,JSON.stringify({ts:Date.now(),data:n}))}catch{}if(Object.values(n).some(e=>e.hasKey&&!e.ok&&!/429|rate/i.test(e.error||``))&&e<3){await new Promise(t=>setTimeout(t,e===1?2e3:5e3));continue}return n}catch{e<3&&await new Promise(t=>setTimeout(t,e===1?2e3:5e3))}try{let e=localStorage.getItem(m);if(e){let t=JSON.parse(e);if(t?.data)return t.data}}catch{}return{}}async function _(e,t){let i=(e.apiKey||``).trim(),a=r(e,t.model),o={model:t.model,messages:t.messages,temperature:t.temperature??.2,max_tokens:t.maxTokens??a.maxTokens,response_format:t.responseFormat??{type:`json_object`}};if(e.isPreset&&!i){let t=await fetch(`/api/agent/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({endpoint:e.baseUrl,response:e.response,envKey:e.envKey,...o})});if(!t.ok)throw Error(`${t.status} ${(await t.text()).slice(0,400)}`);let n=await t.json();return n.content??n.output_text??n.choices?.[0]?.message?.content??``}return n(s(e.baseUrl),i,o)}var v=null;async function y(){if(v)return v;let t=await e(()=>import(`./pdfjs-DD34LWy9.js`).then(e=>e.n),__vite__mapDeps([0,1,2])),n=(await e(async()=>{let{default:e}=await import(`./pdfjs-DD34LWy9.js`).then(e=>e.t);return{default:e}},__vite__mapDeps([0,1,2]))).default;return typeof window<`u`&&(t.GlobalWorkerOptions.workerSrc=n),v=t,t}function b(e){return e.reduce((e,t)=>e+t.replace(/\s/g,``).length,0)<Math.max(120,e.length*40)}async function x(){try{let e=await c(),t=e.find(e=>e.id===`mistral`);if(t?.apiKey?.trim())return t.apiKey.trim();let n=e.find(e=>e.isPreset&&e.baseUrl?.includes(`mistral`)&&e.apiKey?.trim());if(n?.apiKey?.trim())return n.apiKey.trim()}catch{}return null}async function S(e,t){let n=new FormData;n.append(`purpose`,`ocr`),n.append(`file`,e,e.name||`paper.pdf`);let r=await fetch(`https://api.mistral.ai/v1/files`,{method:`POST`,headers:{Authorization:`Bearer ${t}`},body:n});if(!r.ok){let e=await r.text().catch(()=>``);throw Error(`Mistral upload failed: ${r.status} ${e.slice(0,300)}`)}let{id:i}=await r.json(),a=await fetch(`https://api.mistral.ai/v1/files/${i}/url`,{headers:{Authorization:`Bearer ${t}`}});if(!a.ok){let e=await a.text().catch(()=>``);throw Error(`Mistral URL fetch failed: ${a.status} ${e.slice(0,300)}`)}let{url:o}=await a.json();return o}async function C(e,t){let n=await fetch(`https://api.mistral.ai/v1/ocr`,{method:`POST`,headers:{Authorization:`Bearer ${t}`,"Content-Type":`application/json`},body:JSON.stringify({model:`mistral-ocr-latest`,document:{type:`document_url`,document_name:`paper.pdf`,document_url:e}})});if(!n.ok){let e=await n.text().catch(()=>``);throw Error(`Mistral OCR failed: ${n.status} ${e.slice(0,300)}`)}return((await n.json()).pages||[]).sort((e,t)=>e.index-t.index).map(e=>(e.markdown||``).replace(/!\[[^\]]*\]\([^)]*\)/g,``).trim())}async function w(e){let t=await fetch(`/api/agent/ocr`,{method:`POST`,headers:{"Content-Type":`application/pdf`},body:e});if(!t.ok){let e=await t.text().catch(()=>``);throw Error(`OCR proxy failed: ${t.status} ${e.slice(0,300)}`)}let n=await t.json();if(!n.pages?.length)throw Error(`OCR returned no pages`);return n.pages}async function T(e){let t=await x();if(t)try{return await C(await S(e,t),t)}catch(t){let n=t instanceof Error?t.message:String(t);if(/failed to fetch|network|cors/i.test(n))return console.warn(`Direct Mistral OCR failed (CORS/network), falling back to proxy:`,n),w(e);throw t}try{return await w(e)}catch(e){let t=e instanceof Error?e.message:String(e);throw t.includes(`401`)||t.includes(`Missing MISTRAL_API_KEY`)?Error(`OCR needs a Mistral API key. Add one in AI Agent → Settings, or use the GEM paste path (no key needed).`):e}}async function E(e){if(!e||e.byteLength===0)throw Error(`PDF buffer is empty (detached or never loaded) — re-upload the PDF in Extract`);let t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),await(await y()).getDocument({data:t}).promise}async function D(e,t,n=1.5){let r=await e.getPage(t),i=r.getViewport({scale:n}),a=document.createElement(`canvas`);a.width=i.width,a.height=i.height;let o=a.getContext(`2d`);return await r.render({canvasContext:o,viewport:i}).promise,a}async function O(e){let t=await E(e);try{let e=[];for(let n=1;n<=t.numPages;n++){let r=(await(await t.getPage(n)).getTextContent()).items.map(e=>e.str).join(` `).replace(/[ \t]{2,}/g,` `).trim();e.push(r)}return e}finally{t.destroy()}}export{T as a,p as c,r as d,c as f,b as i,g as l,u as m,E as n,_ as o,s as p,D as r,d as s,O as t,f as u};