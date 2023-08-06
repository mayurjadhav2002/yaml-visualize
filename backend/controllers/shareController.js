const ShareID = require("../Models/shareModel")
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 8 });


// Generate Sharable Key
const generator = async (req, res) => {
    try {
        const original_url = req.body.original_url;
        // Check if the url is already shorten or not
        const urlExists = await ShareID.findOne({ origin_url: original_url });
        if (urlExists) {
            // If URL is shorten, send the shorten url data
            res.status(200).send({ succes: true, res: urlExists })
        }else{
            // If not then short url
            const share_link = new ShareID({
                origin_url: original_url,
                shortID: await uid()
            })
            const result = await share_link.save()
            if (result) {
                res.status(200).send({ succes: true, res: result })
            } else {
                res.status(400).send({ success: false, msg: "Some error Occured" })
            }
        }
        
    } catch (error) {
        res.status(500).send({ succes: false, msg: "Internal Error Occured" })
    }


}



// Getting Original URL from Short URL 
const get_url = async(req, res)=>{
    try {
        const short_id = req.query.short_id;
        const data = await ShareID.findOne({shortID: short_id})
        if(data){
            res.status(200).send({ succes: true, data: data })
        } else {
            res.status(400).send({ success: false, msg: "No Data found" })
        }
    } catch (error) {
        res.status(500).send({ succes: false, msg: "Internal Error Occured" })

    }
}

module.exports = {generator, get_url}