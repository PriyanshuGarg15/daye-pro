const config = require("../config/config");
const { calculateRemainingMaterial, getMaximumUnits } = require("../utils/commonHelper");
const { validateandThrowException } = require("../utils/validator");

class ProductController {
    constructor() {
        this.regularTamponConfig = config.tamponConf.regular
        this.superTamponConfig = config.tamponConf.super
        this.rawMaterialConfig= config.rawMaterial
    }

    // Create Max Tampons
    createTampons = (req, res) => {
        try {
            validateandThrowException('TamponProduction', req.body)
            let tamponConfig= (req.path =='/super')? this.superTamponConfig: this.regularTamponConfig
            res.send(getMaximumUnits(req.body, tamponConfig))
        }
        catch (e) {
            res.status(400).json({
                success: false,
                message: e.message
            })
        }
    }
    
    //Create by Unit and Type
    createTamponsUnit = (req, res) => {
        try {
            validateandThrowException('TamponByUnit', req.body)
            let qtyRequired= req.body.units
            let productType= req.body.type
            let unitConfig= (productType=='super')? this.superTamponConfig: this.regularTamponConfig
            let remainingRawMaterials= calculateRemainingMaterial(this.rawMaterialConfig, unitConfig, qtyRequired)
            res.send({
                Units: qtyRequired,
                remainingRawMaterials: remainingRawMaterials
            })
        }
        catch (e) {
            res.status(400).json({
                success: false,
                message: e.message
            })
        }
    }


    

}

module.exports = new ProductController()
