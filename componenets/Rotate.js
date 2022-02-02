AFRAME.registerComponent("island-rotation",{
    schema:{
        speed_rotation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "ArrowRight"){
                if(this.data.speed_rotation < 1){
                    this.data.speed_rotation += 0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if(this.data.speed_rotation > -1){
                    this.data.speed_rotation -= 0.01
                }
            }
        })
    },
    tick:function(){
        var map_rotation = this.el.getAttribute("rotation")
        map_rotation.y = this.data.speed_rotation+map_rotation.y
        this.el.setAttribute("rotation",{x:map_rotation.x,y:map_rotation.y,z:map_rotation.z})
        window.addEventListener("keydown", (e)=>{
            if(e.key === "space"){
                map_rotation.y = 0
                this.data.speed_rotation = 0
            }
        })
    }
})

AFRAME.registerComponent("flight-rotation",{
    schema:{
        speed_rotation:{type:"number",default:0},
        ascent:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speed_rotation = this.el.getAttribute("rotation")
            this.data.ascent = this.el.getAttribute("position")

            var plane_rotation = this.data.speed_rotation

            if(e.key === "ArrowRight"){
                plane_rotation.y += 0.5
                this.el.setAttribute("rotation",plane_rotation)
            }
            if(e.key === "ArrowLeft"){
                plane_rotation.y -= 0.5
                this.el.setAttribute("rotation",plane_rotation)
            }
        })
    }
})