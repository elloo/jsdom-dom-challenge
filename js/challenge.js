document.addEventListener("DOMContentLoaded", () => {

    //*** BUTTON FUNCTIONS***/

    let countNum = 0
    let likeArray = []
    const counter = document.getElementById("counter")
    const increase = () => counter.innerText = `${countNum++}`
    const decrease = () => counter.innerText = `${countNum--}`
    
    likeList = document.getElementsByClassName("likes")[0]
    const like = () => {
        const newLikeObject = {countNum: countNum - 1, likes: 1}
        if (likeArray.some(object => object.countNum === countNum - 1)){
            const likesExist = likeArray.reduce((a, object) => (object.countNum === countNum - 1 && a.push(object), a), [])
            likesExist[0].likes += 1
        } else {
            likeArray.push(newLikeObject) 
        }

            likeList.innerHTML = ""
        const displayLikes = () => {
            likeArray.map(likeObject => {
                const isPlural = () => (likeObject.likes > 1 || likeObject.likes === 0) ? "times" : "time"
                const listItem = document.createElement("li")
                const listText = document.createTextNode(`${likeObject.countNum} has been liked ${likeObject.likes} ${isPlural()}`)
                listItem.appendChild(listText)
                likeList.appendChild(listItem)
            })
        }
        displayLikes()
    }

    const pauseBtn = document.getElementById("pause")
    const pause = () => {
        if (pauseBtn.innerText === "pause"){
            clearInterval(counterInterval)
            pauseBtn.innerText = "resume"
            addBtn.removeEventListener("click", increase)
            minusBtn.removeEventListener("click", decrease)
            likeBtn.removeEventListener("click", like)
         } else if (pauseBtn.innerText === "resume"){
            counterInterval = setInterval(increase, 1000)
            pauseBtn.innerText = "pause"
            addEvents()
         }
    }
    
    let counterInterval = setInterval(increase, 1000)
    pauseBtn.addEventListener("click", pause)

    const commentsList = document.getElementById("list")
    const newComment = document.getElementById("comment-input")
    const commentSubmit = document.getElementById("submit")
    function addComment(e){
        e.preventDefault()
        const pTag = document.createElement("p")
        let pText = document.createTextNode(newComment.value)
        pTag.appendChild(pText)
        commentsList.appendChild(pTag)
        newComment.value = ""
    }
    commentSubmit.addEventListener("click", addComment)
    
    /*** HELPER FUNCTIONS ***/
    
    const addBtn = document.getElementById("plus")
    const minusBtn = document.getElementById("minus")
    const likeBtn = document.getElementById("heart")
    const addEvents = () => {
        addBtn.addEventListener("click", increase)
        minusBtn.addEventListener("click", decrease)
        likeBtn.addEventListener("click", like)
    }
    addEvents()

})