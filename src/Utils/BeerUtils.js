
    /**
     *Checks if a beer has lactose as an ingredient
     *
     * @param {*} beer - beer to check
     * @return {*} true if has lactose as an ingredient, false otherwise
     * @memberof BeerUtils
     */
    export function hasLactose(beer){

        if(!beer || !beer.method || !beer.method.twist){return false;};  

        const twist = beer.method.twist.toLowerCase();
        const lactoseCheck = "lactose";

        if(twist.includes(lactoseCheck)){
            return true;
        }

        else{return false;}
        
    }

    /**
     *Checks if a beer includes a hop which was dry hopped
     *
     * @param {*} beer - beer to check
     * @return {*} true if includes a dry hop, false otherwise
     * @memberof BeerUtils
     */
    export function isDryHopped(beer){

        if(!beer || !beer.ingredients || !beer.ingredients.hops){return false;}

        const hops = beer.ingredients.hops;
        const dryHopCheck = "dry hop";

        const isDryHopped = hops.find((hop) => {
            return hop.add.toLowerCase().includes(dryHopCheck)
        });
        
        if(isDryHopped){
            return true;
        }

        else{return false;}
    }


