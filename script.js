// extra 1
    let twitter = document.getElementsByClassName("list-unstyled");
    twitter = twitter[1].childNodes[3];
    twitter.innerHTML = "";

// extra 2

    let read = document.querySelector("a.font-weight-bold");
    let read2 = document.querySelectorAll("a.stretched-link");
    let father = document.querySelectorAll("div.col-md-6");

    read.onclick = function () {
        father[0].remove()
    }
    read2[0].onclick = function () {
        father[1].remove()
    }
    read2[1].onclick = function () {
        father[2].remove()
    }

// extra 3

    let namePost = document.querySelectorAll("p.blog-post-meta a");

    namePost[0].addEventListener("mouseover", ()=>{
        alert(namePost[0].innerText)
    })

    namePost[1].addEventListener("mouseover", ()=>{
        alert(namePost[1].innerText)
    })

    namePost[2].addEventListener("mouseover", ()=>{
        alert(namePost[2].innerText)
    })
    
    // console.log(namePost[2].innerText)


  