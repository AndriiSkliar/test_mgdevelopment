import{j as e}from"./index-c011730a.js";const g=[{title:"Plumbing",description:["Install / Replace a Toilet","Install / Replace a Faucet","Fix a Leaking","Install / Replace a Sink","Repair Under Sink Plumbing"],color:"green"},{title:"Drywall & painting",description:["Install Drywall","Patch and Paint Drywall","Paint a Wall / Trim","Paint or Stain A Fence","Paint a Cabinet Door"],color:"blue"},{title:"Furniture assembly",description:["Assemble Fitness Equipment","Assemble - Custom Request","Assemble a TV Stand","Assemble Pet Furniture","Assemble a Bar Cabinet"],color:"yellow"},{title:"Electrical",description:["Install / Replace a Ceiling Fan","Replace Switch & Outlet Faceplate","Upgrade to a Video Doorbell","Install / Replace an Bathroom Exhaust Fan"],color:"red"},{title:"Doors & windows",description:["Install / Replace New Door","Install / Replace a Screen Door","Install / Replace a Window Screen","Repair a Door Frame"],color:"green"},{title:"Hanging & mounting",description:["Mount a TV","Remove a TV Mount from Wall","Mount and Hang a Projector Screen","Hang a Bathroom Fixture"],color:"blue"},{title:"Appliance installation",description:["Replace an Existing Dishwasher","Replace an Existing Microwave","Replace an Existing Oven"],color:"yellow"},{title:"Smart home",description:["Install a Smart Lock","Install a Smart Home Security Camera","Mount a Baby Monitor Camera on the Wall","Install an Under Sink Water Filtration System "],color:"red"},{title:"Outdoor",description:[" Assemble an Outdoor Trampoline","Hang a Garage Shelving Unit","Install Outdoor Decorative Exterior Window Shutters","Install a Storm Door"],color:"green"}],u="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let i=(t=21)=>{let s="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)s+=u[n[t]&63];return s};const h="_cardContainer_kgc94_1",_="_svg_kgc94_12",x="_title_kgc94_17",b="_cardList_kgc94_25",I="_cardItem_kgc94_33",v="_cardLink_kgc94_49",r={cardContainer:h,svg:_,title:x,cardList:b,cardItem:I,cardLink:v},S="/test_mgdevelopment/assets/sprite-261e7fae.svg",w=({title:t,description:s,color:n,spriteImage:l})=>{let a;switch(n){case"green":a="var(--green-color)";break;case"blue":a="var(--blue-color)";break;case"yellow":a="var(--yellow-color)";break;case"red":a="var(--red-color)";break;default:a="var(--second-color)"}const d={border:`2px solid ${a}`},m={fill:`${a}`};return e.jsxs("div",{className:r.cardContainer,style:d,children:[e.jsx("svg",{className:r.svg,style:m,children:e.jsx("use",{className:r.svgIcon,href:`${S}#${l}`})}),e.jsx("h2",{className:r.title,children:t}),e.jsx("ul",{className:r.cardList,children:s.map(p=>e.jsx("li",{className:r.cardItem,children:p},i()))}),e.jsx("a",{className:r.cardLink,href:"https://www.gmdev.site/en/index.html",target:"_blank",rel:"noreferrer noopener",children:"View more"})]})},k="_cardsList_1dv03_1",j="_cardsItem_1dv03_12",c={cardsList:k,cardsItem:j},y=()=>{const t=["icon-tap","icon-paint","icon-sofa","icon-electrical","icon-door","icon-picture","icon-instalation","icon-home","icon-outdoor"];return e.jsx("ul",{className:c.cardsList,children:g.map(({title:s,description:n,color:l},a)=>e.jsx("li",{className:c.cardsItem,children:e.jsx(w,{title:s,description:n,color:l,spriteImage:t[a]})},i()))})},R="_cardsSection_1jfex_1",L="_title_1jfex_7",o={cardsSection:R,title:L},f=()=>e.jsx("main",{children:e.jsxs("section",{className:o.cardsSection,children:[e.jsx("h1",{className:o.title,children:"Services"}),e.jsx(y,{})]})});export{f as default};