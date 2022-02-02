AFRAME.registerComponent("game-col",{
    init:function(){
        var dur = 120
        var timerE1 = document.querySelector("#timer")
        this.start_timer(dur,timerE1)
    },
    start_timer:function(dur,timerE1){
        var minutes,seconds

        setInterval(() => {
            if(dur >= 0){
                minutes = parseInt(dur/60)
                seconds = parseInt(dur%60)
                
                if(minutes<10){
                    minutes = "0"+minutes
                }
                if(seconds<10){
                    seconds = "0"+seconds
                }
                timerE1.setAttribute("text",{value:minutes+":"+seconds})
                dur -= 1
            }
        }, 1000);
    }
})