AFRAME.registerComponent("coin",{
    init:function(){
        for(var i=1; i<=20; i++){
            var id = `ring${i}`

            var posX = (Math.random()*300+(-100))
            var posY = 1
            var posZ = (Math.random()*30+(-10))

            var position = {x:posX,y:posY,z:posZ}

            this.makeCoins(id,position)
        }
    },
    makeCoins:function(id,position){
        var terrainEl = document.querySelector("#island-entity")
        var coinEl = document.createElement("a-entity")

        coinEl.setAttribute("id",id)
        coinEl.setAttribute("position",position)
        coinEl.setAttribute("material",{color:"yellow"})
        coinEl.setAttribute("geometry",{primitive:"torus",radius:3})
        coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})

        terrainEl.appendChild(coinEl);
    }
})