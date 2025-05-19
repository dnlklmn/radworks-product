import{t as _,a as x,e as ve}from"../chunks/CMMHqqq5.js";import{i as ae}from"../chunks/CYLCNOVo.js";import{v as le,aK as Ee,x as ke,aL as ie,aM as Se,z as ce,B as y,i as de,o as ue,C as v,D as u,a4 as U,A as ne,c as i,b as re,aN as Ie,a2 as ye,aO as Ae,aP as Ge}from"../chunks/cXHjRKmv.js";import{s as K,a as Le}from"../chunks/DVgEcECH.js";import{a as se,s as we}from"../chunks/Cl600M2I.js";import{b as Re}from"../chunks/Cm_bsiDZ.js";import{i as Q,s as pe,a as m,b as $}from"../chunks/1zWo0DR5.js";import{e as me,i as be,b as Pe,h as qe}from"../chunks/C2YQscGL.js";import{p as j}from"../chunks/B4qlLWWP.js";import{p as Fe}from"../chunks/88cpOVdb.js";import"../chunks/CvODm_tE.js";const Ne=!0,Me="never";function We(){return{}}const pt=Object.freeze(Object.defineProperty({__proto__:null,load:We,prerender:Ne,trailingSlash:Me},Symbol.toStringTag,{value:"Module"}));var Oe=_('<div class="loading svelte-x2xxfw">Loading guide navigation...</div>'),Ue=_('<div class="error svelte-x2xxfw"> </div>'),je=_("<li><a> </a></li>"),Ye=_('<ul class="svelte-x2xxfw"></ul>'),ze=_('<div class="section svelte-x2xxfw"><div class="section-header-container"><button><span> </span> <span class="toggle-icon svelte-x2xxfw"> </span></button></div> <!></div>'),Be=_('<div class="navigation svelte-x2xxfw"></div>'),Ve=_('<nav class="guides-sidebar svelte-x2xxfw"><!></nav>');function He(Y,b){le(b,!1);const[p,z]=pe(),I=()=>m(E(),"$activeSection",p),D=()=>m(A(),"$activeSubSection",p),M=()=>m(Fe,"$page",p),W=()=>m(g,"$isLoading",p),f=()=>m(C,"$loadingError",p),T=()=>m(G,"$navigationStore",p),d=()=>m(L,"$expandedSections",p),q=ue();let E=j(b,"activeSection",24,()=>y("")),A=j(b,"activeSubSection",24,()=>y(""));const h=Ee();let F=j(b,"onNavigate",8,void 0);const G=y([]),C=y(null),g=y(!0),L=y({});function P(){g.set(!0);try{const t=[{title:"Getting Started",href:"#getting-started-guide",items:[{title:"Prerequisites",href:"#getting-started-guide",id:"prerequisites"},{title:"Installation Steps",href:"#getting-started-guide",id:"installation-steps"},{title:"First Steps",href:"#getting-started-guide",id:"first-steps"},{title:"Collaboration",href:"#getting-started-guide",id:"collaboration"}]},{title:"Desktop App Guide",href:"#desktop-guide",items:[{title:"Introduction",href:"#desktop-guide",id:"introduction"},{title:"Installation",href:"#desktop-guide",id:"installation"},{title:"Getting Started",href:"#desktop-guide",id:"getting-started"}]},{title:"Radicle Protocol",href:"#radicle-protocol",items:[{title:"Protocol Overview",href:"#radicle-protocol",id:"protocol-overview"},{title:"Architecture",href:"#radicle-protocol",id:"protocol-architecture"},{title:"Security Model",href:"#radicle-protocol",id:"protocol-security"}]},{title:"Radicle Network",href:"#radicle-network",items:[{title:"Network Overview",href:"#radicle-network",id:"network-overview"},{title:"Network Participants",href:"#radicle-network",id:"network-participants"},{title:"Network Interactions",href:"#radicle-network",id:"network-interactions"}]},{title:"Features",href:"#desktop-guide",items:[{title:"Repository Management",href:"#desktop-guide",id:"features"},{title:"Issue Tracking",href:"#desktop-guide",id:"features"},{title:"Code Reviews",href:"#desktop-guide",id:"features"}]},{title:"FAQ",href:"#desktop-guide",items:[{title:"Comparison with GitHub",href:"#desktop-guide",id:"faq"},{title:"Offline Usage",href:"#desktop-guide",id:"faq"},{title:"Open Source Status",href:"#desktop-guide",id:"faq"},{title:"Finding Repositories",href:"#desktop-guide",id:"faq"}]}],c={};t.forEach(n=>{c[n.title]=!0}),L.set(c),G.set(t)}catch(t){console.error("Error setting guides content:",t),t instanceof Error?C.set(t.message):C.set("An unknown error occurred")}finally{g.set(!1)}}function B(t){L.update(c=>({...c,[t]:!c[t]}))}function s(t,c,n,r){n.preventDefault(),$(E(),t.startsWith("#")?t.substring(1):t),r&&$(A(),r);const a=r?`${t}#${r}`:t;F()?F()(a,c):h("navigate",{path:a,title:c}),r&&h("scrollToSection",{sectionId:r})}ke(()=>{P()}),ie(()=>M(),()=>{de(q,M().url.pathname)}),Se(),ae();var l=Ve(),k=v(l);{var e=t=>{var c=Oe();x(t,c)},o=(t,c)=>{{var n=a=>{var w=Ue(),S=v(w);u(w),U(()=>K(S,`Error loading guide: ${f()??""}`)),x(a,w)},r=a=>{var w=Be();me(w,5,T,be,(S,R)=>{var J=ze(),X=v(J),V=v(X);let he;var Z=v(V),xe=v(Z,!0);u(Z);var ge=ne(Z,2),_e=v(ge,!0);u(ge),u(V),u(X);var Ce=ne(X,2);{var $e=N=>{var ee=Ye();me(ee,5,()=>i(R).items,be,(De,O)=>{var te=je(),H=v(te);let fe;var Te=v(H,!0);u(H),u(te),U(oe=>{we(H,"href",i(O).href),fe=se(H,1,"nav-link svelte-x2xxfw",null,fe,oe),K(Te,i(O).title)},[()=>({active:i(R).href===I()&&i(O).id===D()})],re),ve("click",H,oe=>s(i(R).href,i(O).title,oe,i(O).id||i(O).title.toLowerCase().replace(/[^a-z0-9]+/g,"-"))),x(De,te)}),u(ee),x(N,ee)};Q(Ce,N=>{d()[i(R).title]&&N($e)})}u(J),U(N=>{he=se(V,1,"section-header svelte-x2xxfw",null,he,N),we(V,"aria-expanded",d()[i(R).title]?"true":"false"),K(xe,i(R).title),K(_e,d()[i(R).title]?"−":"+")},[()=>({active:i(R).href===I()})],re),ve("click",V,N=>{s(i(R).href,i(R).title,N),B(i(R).title)}),x(S,J)}),u(w),x(a,w)};Q(t,a=>{f()?a(n):a(r,!1)},c)}};Q(k,t=>{W()?t(e):t(o,!1)})}u(l),x(Y,l),ce(),z()}var Ke=_('<div class="loading svelte-1pewey9">Loading content...</div>'),Qe=_('<div class="error svelte-1pewey9"> </div>'),Je=_('<div class="content svelte-1pewey9"><!></div>'),Xe=_('<div class="guide-content svelte-1pewey9"><!></div>');function Ze(Y,b){le(b,!1);const[p,z]=pe(),I=()=>m(f(),"$activeSection",p),D=()=>m(q,"$content",p),M=()=>m(E,"$isLoading",p),W=()=>m(A,"$loadingError",p);let f=j(b,"activeSection",24,()=>y("")),T=j(b,"activeSubSection",24,()=>y("")),d=j(b,"section",8,"");const q=y(""),E=y(!0),A=y(null);let h=ue();async function F(){E.set(!0),$(f(),d());try{let e="",o=d();o&&o.startsWith("#")&&(o=o.substring(1)),console.log("Loading content for normalized section:",o),o==="radicle-protocol"?e=`
          <div class="guide-section">
            <h1>Radicle Protocol</h1>
            
            <section id="protocol-overview">
              <h2>What is the Radicle Protocol?</h2>
              <p>The Radicle Protocol is a peer-to-peer stack for code collaboration built on Git. It enables developers to collaborate without relying on centralized platforms.</p>
              
              <p>Key aspects of the Radicle Protocol:</p>
              <ul>
                <li><strong>Git-compatible:</strong> Built on Git, extending its functionality for distributed collaboration</li>
                <li><strong>Peer-to-peer architecture:</strong> No central servers, all data is stored on your device and shared directly</li>
                <li><strong>Cryptographic identities:</strong> Uses public-key cryptography for secure, verifiable identities</li>
                <li><strong>Replication:</strong> Data gets replicated across the network for resilience and availability</li>
              </ul>
            </section>
            
            <section id="protocol-architecture">
              <h2>Protocol Architecture</h2>
              <p>The Radicle Protocol consists of several layers:</p>
              
              <h3>Storage Layer</h3>
              <p>At its core, Radicle uses Git's content-addressable storage model, extending it with:</p>
              <ul>
                <li>Signed Git references for identity verification</li>
                <li>Gossip-based replication to share repository data</li>
                <li>Merkle DAG structures for content integrity</li>
              </ul>
              
              <h3>Identity Layer</h3>
              <p>Radicle identities are:</p>
              <ul>
                <li>Based on Ed25519 cryptographic key pairs</li>
                <li>Self-sovereign - you control your identity</li>
                <li>Portable across devices</li>
                <li>Linked to Git commits and repository actions</li>
              </ul>
              
              <h3>Networking Layer</h3>
              <p>Communication in Radicle happens through:</p>
              <ul>
                <li>Direct peer connections</li>
                <li>Gossip protocols for data propagation</li>
                <li>Seed nodes for discovery and availability</li>
              </ul>
            </section>
            
            <section id="protocol-security">
              <h2>Security Model</h2>
              <p>Radicle's security is built on:</p>
              <ul>
                <li><strong>Cryptographic verification:</strong> All operations are signed and verified</li>
                <li><strong>Local-first approach:</strong> Your data remains on your device first</li>
                <li><strong>Trust through connectivity:</strong> You choose which peers to connect with</li>
                <li><strong>Content addressability:</strong> Data integrity is ensured through cryptographic hashing</li>
              </ul>
            </section>
          </div>
        `:o==="radicle-network"?e=`
          <div class="guide-section">
            <h1>Radicle Network</h1>
            
            <section id="network-overview">
              <h2>Understanding the Radicle Network</h2>
              <p>The Radicle Network is a peer-to-peer network of nodes that collectively store, validate, and share code repositories and collaboration data. Unlike centralized platforms, there is no single point of control or failure.</p>
              
              <p>The network is designed to be:</p>
              <ul>
                <li><strong>Resilient:</strong> Data is replicated across multiple nodes</li>
                <li><strong>Censorship-resistant:</strong> No central authority can remove or block content</li>
                <li><strong>Self-sovereign:</strong> Users maintain full control over their identities and data</li>
                <li><strong>Open:</strong> Anyone can join and participate in the network</li>
              </ul>
            </section>
            
            <section id="network-participants">
              <h2>Network Participants</h2>
              
              <h3>Nodes</h3>
              <p>Every Radicle Desktop user runs a node that:</p>
              <ul>
                <li>Stores their own repositories and data they're interested in</li>
                <li>Connects to other nodes to share and receive updates</li>
                <li>Verifies the integrity and authenticity of data</li>
              </ul>
              
              <h3>Seeds</h3>
              <p>Seeds are special nodes that:</p>
              <ul>
                <li>Maintain high availability</li>
                <li>Help with discovery of other peers</li>
                <li>Improve network connectivity</li>
                <li>Replicate repositories for availability</li>
              </ul>
              <p>Anyone can run a seed to support the network.</p>
            </section>
            
            <section id="network-interactions">
              <h2>Network Interactions</h2>
              <p>When using Radicle, these network interactions happen:</p>
              <ol>
                <li><strong>Publishing:</strong> When you push to Radicle, your changes are stored locally and made available to peers</li>
                <li><strong>Discovery:</strong> Other users can find your repositories through seeds or by exchanging repository IDs</li>
                <li><strong>Replication:</strong> When someone is interested in your repository, they replicate it to their node</li>
                <li><strong>Collaboration:</strong> Others can propose changes that you can review and incorporate</li>
              </ol>
              <p>All these interactions happen without a central server in between.</p>
            </section>
          </div>
        `:o==="getting-started-guide"?e=`
          <div class="guide-section">
            <h1>Getting Started with Radicle</h1>
            
            <section id="prerequisites">
              <h2>Prerequisites</h2>
              <p>Before you begin using Radicle, make sure you have:</p>
              <ul>
                <li>Git installed on your system</li>
                <li>Basic familiarity with Git commands</li>
                <li>A project you want to collaborate on</li>
              </ul>
            </section>
            
            <section id="installation-steps">
              <h2>Installation Steps</h2>
              <ol>
                <li><strong>Download Radicle Desktop:</strong>
                  <ul>
                    <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a></li>
                    <li>Download the appropriate version for your operating system</li>
                    <li>Run the installer and follow the prompts</li>
                  </ul>
                </li>
                
                <li><strong>Create Your Identity:</strong>
                  <ul>
                    <li>Launch Radicle Desktop</li>
                    <li>Follow the onboarding process to create your cryptographic identity</li>
                    <li>Set your display name and other profile information</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section id="first-steps">
              <h2>Your First Steps</h2>
              
              <h3>Creating a New Repository</h3>
              <ol>
                <li>In Radicle Desktop, click "New Repository"</li>
                <li>Choose a name and description for your repository</li>
                <li>Initialize with a README or import an existing Git repository</li>
                <li>Your repository is now available on the Radicle network</li>
              </ol>
              
              <h3>Exploring Existing Projects</h3>
              <ol>
                <li>Use the "Explore" section to discover projects</li>
                <li>Search by name or browse featured projects</li>
                <li>When you find an interesting project, click "Clone" to replicate it to your node</li>
                <li>You now have a local copy you can browse and contribute to</li>
              </ol>
            </section>
            
            <section id="collaboration">
              <h2>Collaborating with Others</h2>
              
              <h3>Sharing Your Repository</h3>
              <ol>
                <li>Find your repository's Radicle ID in its overview page</li>
                <li>Share this ID with collaborators</li>
                <li>They can use this ID to find and clone your repository</li>
              </ol>
              
              <h3>Contributing to Projects</h3>
              <ol>
                <li>Clone the repository you want to contribute to</li>
                <li>Create a branch for your changes</li>
                <li>Commit your changes locally</li>
                <li>Create a patch (similar to a pull request) in Radicle Desktop</li>
                <li>The project maintainer will be notified and can review your contribution</li>
              </ol>
            </section>
          </div>
        `:(o==="desktop-guide"||!o?console.log("Loading default desktop guide content"):console.log("Unknown section:",o,"- loading default content"),e=`
          <div id="desktop-guide" class="desktop-app-guide">
            <h1>Radicle Desktop App Guide</h1>
            
            <section id="introduction">
              <h2>Introduction to Radicle Desktop</h2>
              <p>The Radicle Desktop app provides a user-friendly interface for interacting with the Radicle network. 
              It allows you to host and sync code with others just by running the app, without relying on centralized services.</p>
              
              <p>With Radicle Desktop, you can:</p>
              <ul>
                <li>Manage repositories in a peer-to-peer network</li>
                <li>Track issues and review code</li>
                <li>Work offline and sync when connected</li>
                <li>Maintain full ownership of your data</li>
              </ul>
            </section>
            
            <section id="installation">
              <h2>Installation</h2>
              <p>To get started with Radicle Desktop:</p>
              <ol>
                <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a> to download the latest version</li>
                <li>Choose the appropriate installer for your operating system (Windows, macOS, or Linux)</li>
                <li>Run the installer and follow the on-screen instructions</li>
                <li>Launch the app once installation is complete</li>
              </ol>
            </section>
            
            <section id="getting-started">
              <h2>Getting Started</h2>
              <p>When you first open Radicle Desktop, you'll need to:</p>
              <ol>
                <li><strong>Create your identity</strong> - This is how you'll be known on the network</li>
                <li><strong>Set up your profile</strong> - Add details about yourself that will be visible to others</li>
                <li><strong>Create or import repositories</strong> - Start with your own Git repositories or clone from the network</li>
              </ol>
            </section>
            
            <section id="features">
              <h2>Key Features</h2>
              
              <h3>Repository Management</h3>
              <p>Radicle Desktop provides a complete interface for managing Git repositories:</p>
              <ul>
                <li>Create and clone repositories</li>
                <li>Browse code and commit history</li>
                <li>Manage branches and tags</li>
                <li>Connect with remote peers to share and collaborate</li>
              </ul>
              
              <h3>Issue Tracking</h3>
              <p>Track and manage issues directly within the app:</p>
              <ul>
                <li>Create and assign issues</li>
                <li>Add labels and priorities</li>
                <li>Comment and collaborate on solutions</li>
                <li>Track progress and resolution</li>
              </ul>
              
              <h3>Code Reviews</h3>
              <p>Collaborate on code changes with integrated review tools:</p>
              <ul>
                <li>Create and review patches</li>
                <li>Comment on specific lines of code</li>
                <li>Suggest changes</li>
                <li>Approve and merge contributions</li>
              </ul>
            </section>
            
            <section id="faq">
              <h2>Frequently Asked Questions</h2>
              
              <h3>How is Radicle different from GitHub or GitLab?</h3>
              <p>Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators.</p>
              
              <h3>Do I need an internet connection to use Radicle?</h3>
              <p>No, you can work completely offline. When you connect to the internet, you can sync with your peers to share updates.</p>
              
              <h3>Is Radicle Desktop open source?</h3>
              <p>Yes, Radicle Desktop is entirely open source. You can find the source code on the Radicle network itself or on GitHub.</p>
              
              <h3>How do I find other users and repositories?</h3>
              <p>Radicle provides discovery mechanisms through seeds (public nodes) and through direct sharing of repository IDs and node addresses.</p>
            </section>
          </div>
        `),q.set(e),$(f(),d())}catch(e){console.error("Error setting guide content:",e),e instanceof Error?A.set(e.message):A.set("An unknown error occurred")}finally{E.set(!1)}}function G(){i(h)&&D()&&(i(h).querySelectorAll("a").forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),console.log("Link clicked:",o.href)})}),typeof window<"u"&&setTimeout(()=>{const o=window.sessionStorage.getItem("scrollToFragment");if(o){const t=document.getElementById(o);t&&t.scrollIntoView({behavior:"smooth",block:"start"}),window.sessionStorage.removeItem("scrollToFragment")}$(f(),d()),L()},100))}function C(e){var o,t;if(i(h)&&e){console.log("Attempting to scroll to section:",e,"Current active section:",I());const c=i(h).querySelectorAll("section");console.log("Available sections:",Array.from(c).map(r=>{var a;return`${r.id} (${((a=r.querySelector("h2, h3"))==null?void 0:a.textContent)||"no heading"})`}));let n=document.getElementById(e);if(console.log("Direct ID match:",n?"found":"not found"),n||(I()==="desktop-guide"||!I())&&(e==="features"||e==="faq")&&(n=i(h).querySelector(`section#${e}`),console.log(`Looking for #${e} in desktop guide:`,n?"found":"not found")),!n){const r=i(h).querySelectorAll("h1, h2, h3, h4");console.log("Searching through",r.length,"headings");const a=e.replace(/-/g," ").toLowerCase();for(const w of Array.from(r)){const S=((o=w.textContent)==null?void 0:o.toLowerCase())||"";if(console.log(`Comparing heading: "${S}" with target: "${a}"`),S.includes(a)||a.includes(S)){n=w,console.log("Found matching heading:",S);break}}if(!n){const w=i(h).querySelectorAll("p, li, div");for(const S of Array.from(w))if((((t=S.textContent)==null?void 0:t.toLowerCase())||"").includes(a)&&S.closest("section")){n=S.closest("section"),console.log("Found by content match in section");break}}}if(!n&&D()&&D().match(new RegExp(`id=['"]${e}['"]`,"i"))&&(console.log("Found ID match in content string, trying to refresh element lookup"),setTimeout(()=>{const a=document.getElementById(e);a&&(a.scrollIntoView({behavior:"smooth",block:"start"}),$(T(),e))},100)),n)console.log("Found target element, scrolling to:",n),n.scrollIntoView({behavior:"smooth",block:"start"}),$(T(),e);else if(console.warn(`Section with ID "${e}" not found in content`),I()){const r=document.querySelector(".guide-section, .desktop-app-guide");r&&r.scrollIntoView({behavior:"smooth",block:"start"})}}}let g=null;function L(){typeof window>"u"||!i(h)||(g&&(g.disconnect(),g=null),setTimeout(()=>{$(f(),d());const e=i(h).querySelectorAll("section");if(e.length===0)return;const o={root:null,rootMargin:"0px",threshold:.3};g=new IntersectionObserver(t=>{t.forEach(c=>{if(c.isIntersecting){const n=c.target.id;$(T(),n),$(f(),d())}})},o),e.forEach(t=>{t.id&&g&&g.observe(t)})},200))}ke(()=>(F(),()=>{g&&(g.disconnect(),g=null)})),Ie(()=>{L()}),ie(()=>ye(d()),()=>{console.log("Section changed to:",d()),d()&&F()}),ie(()=>(D(),ye(d())),()=>{D()&&(setTimeout(G,0),$(f(),d()))}),Se(),ae();var P=Xe(),B=v(P);{var s=e=>{var o=Ke();x(e,o)},l=(e,o)=>{{var t=n=>{var r=Qe(),a=v(r);u(r),U(()=>K(a,`Error loading content: ${W()??""}`)),x(n,r)},c=n=>{var r=Je(),a=v(r);qe(a,D),u(r),Re(r,w=>de(h,w),()=>i(h)),x(n,r)};Q(e,n=>{W()?n(t):n(c,!1)},o)}};Q(B,e=>{M()?e(s):e(l,!1)})}u(P),x(Y,P),Pe(b,"scrollToSection",C);var k=ce({scrollToSection:C});return z(),k}var et=_('<div class="guides-container svelte-1yx5e31"><aside><!></aside> <main class="guides-content svelte-1yx5e31"><!></main></div>');function ht(Y,b){le(b,!1);const[p,z]=pe(),I=()=>m(T,"$currentTitle",p),D=()=>m(W,"$showMobileSidebar",p),M=()=>m(f,"$currentSection",p),W=Ae("showMobileSidebar"),f=y(""),T=y("Radicle Desktop App Guide"),d=y(""),q=y("");let E=ue();function A(s,l){const[k,e]=s.split("#");f.set(k.startsWith("#")?k.substring(1):k),T.set(l),e?window.sessionStorage.setItem("scrollToFragment",e):window.sessionStorage.removeItem("scrollToFragment");const o=`/guides?section=${encodeURIComponent(k)}&title=${encodeURIComponent(l)}${e?"#"+e:""}`;window.history.pushState({url:k,title:l,fragment:e},l,o)}function h(s){if(s.state){const l=s.state.url||"";f.set(l.startsWith("#")?l.substring(1):l),T.set(s.state.title||"Radicle Guide"),s.state.fragment?window.sessionStorage.setItem("scrollToFragment",s.state.fragment):window.sessionStorage.removeItem("scrollToFragment")}}function F(){const s=new URLSearchParams(window.location.search),l=s.get("section"),k=s.get("title");if(l&&f.set(l.startsWith("#")?l.substring(1):l),k&&T.set(k),window.location.hash){const e=window.location.hash.substring(1);e&&window.sessionStorage.setItem("scrollToFragment",e)}}typeof window<"u"&&(F(),window.addEventListener("popstate",h)),ae();var G=et();Le(s=>{U(()=>Ge.title=`${I()??""} | Radworks`)});var C=v(G);let g;var L=v(C);He(L,{onNavigate:A,activeSection:d,activeSubSection:q,$$events:{navigate:s=>A(s.detail.path,s.detail.title),scrollToSection:s=>{var l;return(l=i(E))==null?void 0:l.scrollToSection(s.detail.sectionId)}}}),u(C);var P=ne(C,2),B=v(P);Re(Ze(B,{get section(){return M()},activeSection:d,activeSubSection:q,$$legacy:!0}),s=>de(E,s),()=>i(E)),u(P),u(G),U(s=>g=se(C,1,"guides-sidebar svelte-1yx5e31",null,g,s),[()=>({"show-mobile":D()})],re),x(Y,G),ce(),z()}export{ht as component,pt as universal};
