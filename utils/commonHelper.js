module.exports={
    getMaximumUnits : (rawMaterials, unitConfig) => {
        let maxProducts = Infinity;
        for (const material in unitConfig) {
            if (rawMaterials[material] < unitConfig[material]) {
                maxProducts = 0; // If any required material is insufficient, no products can be made
                break;
            }
            const possibleUnits = Math.floor(rawMaterials[material] / unitConfig[material]);
            if (possibleUnits < maxProducts) {
                maxProducts = possibleUnits;
            }
        }
        return {
            maxUnits: maxProducts,
            remainingRawMaterials: module.exports.calculateRemainingMaterial(rawMaterials, unitConfig, maxProducts)
        }
    },

    calculateRemainingMaterial : (rawMaterials, unitConfig, maxProducts) => {
        const remainingRawMaterials = {};
        for (const material in rawMaterials) {
            remainingRawMaterials[material] = rawMaterials[material] - maxProducts * unitConfig[material];
            if(remainingRawMaterials[material]<0){
                throw new Error(`Insufficient ${material} for the given Units`)
            }
        }
        return remainingRawMaterials
    }

}