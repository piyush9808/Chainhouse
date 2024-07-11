import formidable from "formidable";
import fs from "fs";
import FormData from "form-data";

import { NextResponse } from "next/server";
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file) => {
 
  try {
    const stream = fs.createReadStream(file[0].filepath);
    const options = {
      pinataMetadata: {
        name: file[0].originalFilename,
      },
    };
   
    const response = await pinata.pinFileToIPFS(stream, options);
    fs.unlinkSync(file[0].filepath);

    return response;
  } catch (error) {
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    var form = formidable({})
   return new Promise((resolve, rejects) => {
    form.parse(req, async (err, fields, files) => {
        if(err){
            console.log(err);
            rejects(NextResponse.error(err));
            return ;
        }

        try{
            const response  = await saveFile(files.file);
            const {IpfsHash} = response;
            resolve(res.send(IpfsHash));
        }catch (e){
            console.log(e);
            rejects(NextResponse.error(e));
        }
    })
   })
  } else if (req.method === "GET") {
    try {
      const response = await pinata.pinList(
        { pinataJWTKey: process.env.PINATA_JWT },
        {
          pageLimit: 1,
        }
      );
      res.json(response.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
  }
}
