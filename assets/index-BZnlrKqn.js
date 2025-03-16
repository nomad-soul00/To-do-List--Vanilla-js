(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const E=document.getElementById("sidebarbtn"),f=document.getElementById("default-sidebar"),D=document.querySelector(".daily-btn"),L=document.querySelector(".monthly-btn"),T=document.querySelector(".yearly-btn"),q=document.querySelectorAll(".header-title"),S=document.querySelectorAll(".addtaskButton"),m=document.querySelector(".task-container"),y=document.querySelector(".dailyarrayitemnumber"),k=document.querySelector(".yearlyarrayitemnumber"),x=document.querySelector(".monthlyarrayitemnumber");E.addEventListener("click",()=>{f.classList.toggle("-translate-x-full")});m.addEventListener("click",()=>{f.classList.contains("-translate-x-full")||f.classList.add("-translate-x-full")});L.addEventListener("click",()=>{a("Monthly"),d()});T.addEventListener("click",()=>{a("Yearly"),d()});function a(e){q.forEach(l=>{l.innerHTML=e})}function d(){S.forEach(e=>{e.classList.remove("hidden"),e.classList.add("inline-block")})}const p=localStorage.getItem("DailyTasks")?JSON.parse(localStorage.getItem("DailyTasks")):[],g=localStorage.getItem("MonthlyTasks")?JSON.parse(localStorage.getItem("MonthlyTasks")):[],v=localStorage.getItem("YearlyTasks")?JSON.parse(localStorage.getItem("YearlyTasks")):[];window.onload=function(){y.innerHTML=p.length,x.innerHTML=g.length,k.innerHTML=v.length};D.addEventListener("click",()=>{a("Daily"),d(),u(p,"DailyTasks"),b(p,"DailyTasks")});L.addEventListener("click",()=>{a("Monthly"),d(),u(g,"MonthlyTasks"),b(g,"MonthlyTasks")});T.addEventListener("click",()=>{a("Yearly"),d(),u(v,"YearlyTasks"),b(v,"YearlyTasks")});function b(e,l){S.forEach(c=>{c.removeEventListener("click",c._taskListener),c._taskListener=()=>{if(document.querySelector(".task-template"))return;const i=document.createElement("div");i.classList.add("task-template","w-[250px]","h-[200px]","rounded-[8px]","bg-[#98a5b1c4]","flex","flex-col","relative","overflow-hidden","max-sm550:w-[100%]","max-sm550:h-[150px]"),i.innerHTML=`
             <div class="text grow p-4 flex flex-col text-black gap-1.5 font-[900] text-[1.2em] font-[Poppins]">
                         <input type="text" name="task-title" id="taskTitle" placeholder="Task Title"
                             class="border px-1 rounded-lg border-white bg-white ">

                         <textarea
                             class="subtitle text-[0.6em] font-[300] text-black border border-white rounded-lg h-[70%] bg-white px-1 resize-none overflow-auto"
                             name="taskDesc" id="taskDescription" placeholder="Task Description"></textarea>
                     </div>
                     <div
                         class="icons flex justify-center items-center w-[250px] rounded-b-[8px] rounded-tl-[0px] overflow-hidden bg-white max-sm550:w-[100%]">
                         <!-- save-button -->
                         <a id="addSaveBtn" class="btn" href="#">
                             <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" x="0" width="100" y="0" fill="green" height="100"
                                 viewBox="0 0 640 512">
                                 <path
                                     d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                             </svg>
                         </a>
                         <!-- delete-button -->
                         <a class="btn" id="addDeleteButton" href="#">
                             <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" x="0" width="100" y="0" height="100" fill="red"
                                 viewBox="0 0 448 512">
                                 <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round"
                                     d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                             </svg>
                         </a>
                     </div>
         `,m.appendChild(i),document.querySelector("#addSaveBtn").addEventListener("click",t=>{const s=i.querySelector("#taskTitle").value.trim(),n=i.querySelector("#taskDescription").value.trim();if(!s||!n){alert("Please fill in all fields.");return}const r=e.findIndex(o=>o.title===s);r!==-1?e[r].description=n:e.push({title:s,description:n}),localStorage.setItem(l,JSON.stringify(e)),u(e,l),l==="DailyTasks"?y.innerHTML=e.length:l==="MonthlyTasks"?x.innerHTML=e.length:l==="YearlyTasks"&&(k.innerHTML=e.length),i.remove()}),document.querySelector("#addDeleteButton").addEventListener("click",()=>{i.remove()})},c.addEventListener("click",c._taskListener)})}function u(e,l){m.innerHTML="",e.forEach((t,s)=>{const n=` <div
                    class="card w-[250px] h-[200px] rounded-[8px] flex flex-col relative overflow-hidden max-sm550:w-[100%] max-sm550:h-[150px] border border-white" style="background-color: #2d4061">
                    <div class="text grow p-4 flex flex-col text-white gap-1.5 font-[900] text-[1.2em] font-[Poppins]">
                        <input type="text" name="task-title" id="taskTitle" disabled placeholder="Task Title" value ="${t.title}"
                            class=" px-1 rounded-lg ">

                        <textarea
                            class="subtitle text-[0.6em] font-[300] text-white rounded-lg h-[70%] px-1 resize-none overflow-auto"
                            name="taskDesc" disabled id="taskDescription" placeholder="Task Description">${t.description}</textarea>
                    </div>
                    <div
                        class="icons flex justify-center items-center w-[250px] rounded-b-[8px] rounded-tl-[0px] overflow-hidden bg-white max-sm550:w-[100%]">

                        <!-- save-button -->
                        <a class="btn save-btn" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" x="0" width="100" y="0"
                                fill="green" height="100" viewBox="0 0 640 512">
                                <path
                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                            </svg>
                        </a>
                        <!-- delete-button -->
                        <a class="btn deleteBtn" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" x="0" width="100" y="0"
                                height="100" fill="red" viewBox="0 0 448 512">
                                <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round"
                                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                            </svg>
                        </a>
                        <!-- edit button -->
                        <a class="btn edit-btns" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon edit-btn" x="0" width="100" y="0"
                                height="100" viewBox="0 0 512 512">
                                <path
                                    d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                            </svg>
                        </a>
                    </div>
                </div>
      `;m.innerHTML+=n}),document.querySelectorAll(".deleteBtn").forEach((t,s)=>{t.addEventListener("click",n=>{n.preventDefault(),e.splice(s,1),localStorage.setItem(l,JSON.stringify(e)),u(e,l),l==="DailyTasks"?y.innerHTML=e.length:l==="MonthlyTasks"?x.innerHTML=e.length:l==="YearlyTasks"&&(k.innerHTML=e.length)})}),document.querySelectorAll(".edit-btns").forEach((t,s)=>{t.addEventListener("click",n=>{n.preventDefault();const r=n.target.closest(".card");if(r){const o=r.querySelector("#taskTitle"),w=r.querySelector("#taskDescription");o.removeAttribute("disabled"),w.removeAttribute("disabled"),o.focus(),B(e,l),r.addEventListener("click",h=>h.stopPropagation()),document.addEventListener("click",function h(M){r.contains(M.target)||(o.setAttribute("disabled",!0),w.setAttribute("disabled",!0),document.removeEventListener("click",h))},!0)}})})}function B(e,l){document.querySelectorAll(".save-btn").forEach((i,t)=>{i.addEventListener("click",s=>{s.preventDefault();const n=s.target.closest(".card");if(!n)return;const r=n.querySelector("#taskTitle").value,o=n.querySelector("#taskDescription").value;e[t].title=r,e[t].description=o,localStorage.setItem(l,JSON.stringify(e)),n.querySelector("#taskTitle").setAttribute("disabled",!0),n.querySelector("#taskDescription").setAttribute("disabled",!0)})})}
