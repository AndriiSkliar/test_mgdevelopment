import{j as e}from"./index-7a198ce9.js";const g=[{title:"Plumbing",description:["Install / Replace a Toilet","Install / Replace a Faucet","Fix a Leaking","Install / Replace a Sink","Repair Under Sink Plumbing"],color:"green"},{title:"Drywall & painting",description:["Install Drywall","Patch and Paint Drywall","Paint a Wall / Trim","Paint or Stain A Fence","Paint a Cabinet Door"],color:"blue"},{title:"Furniture assembly",description:["Assemble Fitness Equipment","Assemble - Custom Request","Assemble a TV Stand","Assemble Pet Furniture","Assemble a Bar Cabinet"],color:"yellow"},{title:"Electrical",description:["Install / Replace a Ceiling Fan","Replace Switch & Outlet Faceplate","Upgrade to a Video Doorbell","Install / Replace an Bathroom Exhaust Fan"],color:"red"},{title:"Doors & windows",description:["Install / Replace New Door","Install / Replace a Screen Door","Install / Replace a Window Screen","Repair a Door Frame"],color:"green"},{title:"Hanging & mounting",description:["Mount a TV","Remove a TV Mount from Wall","Mount and Hang a Projector Screen","Hang a Bathroom Fixture"],color:"blue"},{title:"Appliance installation",description:["Replace an Existing Dishwasher","Replace an Existing Microwave","Replace an Existing Oven"],color:"yellow"},{title:"Smart home",description:["Install a Smart Lock","Install a Smart Home Security Camera","Mount a Baby Monitor Camera on the Wall","Install an Under Sink Water Filtration System "],color:"red"},{title:"Outdoor",description:[" Assemble an Outdoor Trampoline","Hang a Garage Shelving Unit","Install Outdoor Decorative Exterior Window Shutters","Install a Storm Door"],color:"green"}],u="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let c=(a=21)=>{let s="",r=crypto.getRandomValues(new Uint8Array(a));for(;a--;)s+=u[r[a]&63];return s};const h="_cardContainer_1vhgn_1",_="_svg_1vhgn_12",v="_title_1vhgn_17",x="_cardList_1vhgn_25",b="_cardItem_1vhgn_33",I="_cardLink_1vhgn_49",n={cardContainer:h,svg:_,title:v,cardList:x,cardItem:b,cardLink:I},S="/test_mgdevelopment/assets/sprite-dc937ca8.svg",w=({title:a,description:s,color:r,spriteImage:l})=>{let t;switch(r){case"green":t="var(--green-color)";break;case"blue":t="var(--blue-color)";break;case"yellow":t="var(--yellow-color)";break;case"red":t="var(--red-color)";break;default:t="var(--second-color)"}const d={border:`2px solid ${t}`},m={fill:`${t}`};return e.jsxs("div",{className:n.cardContainer,style:d,children:[e.jsx("svg",{className:n.svg,style:m,children:e.jsx("use",{className:n.svgIcon,href:`/test_mgdevelopment/${S}#${l}`})}),e.jsx("h2",{className:n.title,children:a}),e.jsx("ul",{className:n.cardList,children:s.map(p=>e.jsx("li",{className:n.cardItem,children:p},c()))}),e.jsx("a",{className:n.cardLink,href:"https://www.gmdev.site/en/index.html",target:"_blank",rel:"noreferrer noopener",children:"View more"})]})},j="_cardsList_1dv03_1",y="_cardsItem_1dv03_12",o={cardsList:j,cardsItem:y},R=()=>{const a=["icon-tap","icon-paint","icon-sofa","icon-electrical","icon-door","icon-picture","icon-instalation","icon-home","icon-outdoor"];return e.jsx("ul",{className:o.cardsList,children:g.map(({title:s,description:r,color:l},t)=>e.jsx("li",{className:o.cardsItem,children:e.jsx(w,{title:s,description:r,color:l,spriteImage:a[t]})},c()))})},L="_cardsSection_1jfex_1",k="_title_1jfex_7",i={cardsSection:L,title:k},C=()=>e.jsx("main",{children:e.jsxs("section",{className:i.cardsSection,children:[e.jsx("h1",{className:i.title,children:"Services"}),e.jsx(R,{})]})});export{C as default};