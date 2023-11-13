
let c = document.querySelector('canvas');
let $ = c.getContext('2d');


let col = function(x, y, r, g, b)
{
    $.fillStyle = "rgba(" + r + ", "+ g +", "+ b +" )";
    $.fillRect(x,y,1,1);
}

let R = function(x,y,t){
    return (Math.floor(192+64*Math.cos((x*x - y*y) / 300 + t)));
}

let G = function(x,y,t)
{
    return ( Math.floor( 192 + 64*Math.sin( (x*x*Math.cos(t/4) + y*y*Math.sin(t/3)) / 300) ) )
}

let B = function(x, y, t){
    return (Math.floor(192+64*Math.sin( 5 *Math.sin(t/9) + ((x - 100) * (x-100) + (y-100) * (y-100)) / 1100)))
}

let t = 0

let run = function()
{
    for(x = 0; x <= 35; x++)
    {
        for(y = 0; y <= 35; y++)
        {
            col(x,y, R(x,y, t), G(x,y,t), B(x,y,t))
        }
    }

    t = t + 0.080;
    window.requestAnimationFrame(run)
}

run()


var typed = new Typed(".first-text", { strings: ["I'm Dinesh", "I'm a front-end Devloper", "I'm a Programmer!"], typeSpeed:150, backSpeed:150, loop:true, smartBackspace: true})


// intersection observer for projects section


// const observer_timeline = new IntersectionObserver(entries => 
//     {
//         entries.forEach(entry =>{
//             if(entry.isIntersecting)
//             {
//                 if(entry.target.classList.contains("projects-timeline"))
//                 {
//                     entry.target.className = "projects-timeline animation-downwards"
//                     console.log(entry)
//                 }
//                 else{
//                     entry.target.classList.add("time-line-container-animation")
//                 }

//             }
//             else
//             {
//                 if(entry.target.classList.contains("projects-timeline"))
//                 {
//                     entry.target.className = "projects-timeline"
//                     console.log(entry)
//                 }
//                 else{
//                     entry.target.classList.remove("time-line-container-animation")
//                 }

//             }
//         })
//     })

// const id = document.querySelector(".projects-timeline");
// observer_timeline.observe(id);


// const timeline_container_ids = document.querySelectorAll(".timeline-container");

// timeline_container_ids.forEach( (id) =>
//     {
//         observer_timeline.observe(id);
//     }
// )




