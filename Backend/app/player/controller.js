const Voucher = require('../voucher/model');
const Player = require('./model');

module.exports = {
    landingpage: async(req , res) => {
        try {
            const voucher = await Voucher.find().select('_id name thumbnail category').populate('category');
            res.status(200).json({data : voucher})
        } catch (error) {
            res.status(500).json({message : "Internal Server Error"})
        }
    },
    detailpage: async(req , res) => {
        try {
            const {id} = req.params;
            const voucher = await Voucher.findOne({_id : id})
                            .populate('category')
                            .populate('nominals')
                            .populate('user' , '_id name phoneNumber')
            if(!voucher){
               return res.status(404).json({message : "Voucher Tidak Ditemukan"});
            }
            res.status(200).json({data : voucher});
        } catch (error) {
            res.status(500).json({message : "Internal Server Error"})
        }
    }
}