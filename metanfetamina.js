primerpaso = false;

mp.events.add("playerCommand", (command) => {
    const args = command.split(/[ ]+/);
    const commandName = args[0];      
    segundopaso = false;

    if(commandName === "fabricarmeta"){

        //  if(primerpaso === false){
            
            comenzarFabricarMeta(primerpaso);
            
            //mp.events.call('fabricarMeta');


            // mp.events.call("fabricarmeta");

        // }else{
            mp.gui.chat.push("!{255,0,0} Ya estás fabricando meta!");
        //  }
    
    }

    if(commandName === "mezclar"){
            mezclar(args[1], args[2]);

    }

});


mp.events.add('render', () => {
    
});


function comenzarFabricarMeta(primerpaso){
    
    mp.gui.chat.colors = true;
    mp.gui.chat.push("!{255, 0, 0}Comienzas a fabricar meta");

    // Array falso de testing para crear la receta, vendría a ser el inventario.
    arrayDeinventario = ["EFEDRINA", "ALCOHOL", "FOSFORO"];
    efedrina = false;
    alcohol  = false;
    fosforo = false;
    
    var arrayReceta = [];
    
    i = 0;
    arrayDeinventario.forEach(element => {		
       	
        if(arrayDeinventario[i] === "EFEDRINA"){
        
            efedrina = true;
            arrayReceta[0] = arrayDeinventario[i];

        }
                
        i++;
    });

    x = 0;
    if(efedrina === true){
        arrayDeinventario.forEach(element => {				
            if(arrayDeinventario[x] === "ALCOHOL"){
                alcohol = true;
                arrayReceta[1] = arrayDeinventario[x];
            }		
            x++;
        });
    }

    r = 0;
    arrayDeinventario.forEach(element => {				
        if(arrayDeinventario[r] === "FOSFORO"){
            fosforo = true;
            arrayReceta[1] = arrayDeinventario[r];

        }		
        r++;
    });

    //arrayReceta = String.prototype.toUpperCase(arrayReceta).split(",");
 
    if(fosforo == true | alcohol == true | efedrina == true){

        mp.gui.chat.push("Reunes todos los ingredientes en la mesa y comienzas a cocinar metanfetamina");

        efPos = new mp.Vector3(1011.9, -3193.8, -39.127246);
        

        let ef = mp.objects.new(652625140, efPos, {
            rotation: new mp.Vector3(0, 0, 0),
            alpha: 255,
            dimension: mp.players.local.dimension
            }); 

            alcoholPos = new mp.Vector3(1012.5, -3193.8, -39.127246);
    
        let al = mp.objects.new(1341472387, alcoholPos, {
            rotation: new mp.Vector3(0, 0, 0),
            alpha: 255,
            dimension: mp.players.local.dimension
            });
                    
        
        primerpaso = true;


        return primerpaso;

    }else{

        mp.gui.chat.push(arrayReceta[0]);
        mp.gui.chat.push("¿No sabes los ingredientes?, Esto es peligroso, mejor dejalo ahora...");
        primerpaso = false;
        return primerpaso;
        
    }



};

   
function mezclar(comp1, comp2){  
    //mp.gui.chat.push(comp1.toUpperCase());
    if((comp1.toUpperCase() === "EFEDRINA") && (comp2.toUpperCase() === "ALCOHOL") || (comp1.toUpperCase() === "ALCOHOL") && (comp2.toUpperCase() === "EFEDRINA")) {

        mp.gui.chat.push("!{255, 255, 0}Comienzas a disolver la Efedrina en el Alcohol...");

            setTimeout(() => {

                bowlPos = new mp.Vector3(1011.8, -3194.38, -39.127246);
                let bowl = mp.objects.new(4086586163, bowlPos, {
                    rotation: new mp.Vector3(0, 0, 0),
                    alpha: 255,
                    dimension: mp.players.local.dimension
                    }); 
    
                    mp.gui.chat.push("!{255, 255, 0}Consigues una mezcla amarillenta...");
                    primeramezcla = true;
    
                }, 6000);

    }else{
        if(comp1.toUpperCase() === "FOSFORO" && comp2.toUpperCase() === "ALCOHOL"){
            mp.gui.chat.push("!{255, 255, 0}Consigues una mezcla granate...");
        }else{
            mp.game.fire.addSpecfxExplosion(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 28, 5, 4, true, false, 5);
        }
    }

}


