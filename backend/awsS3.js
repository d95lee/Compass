const { S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require ("@aws-sdk/lib-storage");
const multer = require("multer");
const NAME_OF_BUCKET = "mern-travel"; // <-- Use your bucket name here



const singleFileUpload = async ({ file, isPublic = false }) => {
    const { originalname, buffer } = file;
    const path = require("path");
  
    // Set the name of the file in your S3 bucket to the date in ms plus the
    // extension name.
    const Key = new Date().getTime().toString() + path.extname(originalname);
    const params = {
      Bucket: NAME_OF_BUCKET,
      Key: isPublic ? `public/${Key}` : Key,
      Body: buffer
    };
    const client = new S3Client({});
  
    try {
      const parallelUploadS3 = new Upload({ client, params });
      parallelUploadS3.on("httpUploadProgress", (progress) =>
        console.log(progress)
      );
      const result = await parallelUploadS3.done();
  
      // Return the link if public. If private, return the name of the file in your
      // S3 bucket as the key in your database for subsequent retrieval.
      return isPublic ? result.Location : result.Key;
    } catch (err) {
      console.log(err);
    }
  };


  const multipleFilesUpload = async ({files, isPublic = false}) => {
    return await Promise.all(
      files.map((file) => {
        return singleFileUpload({file, isPublic});
      })
    );
  };

  const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, "");
    },
  });
  
  const singleMulterUpload = (nameOfKey) =>
    multer({ storage: storage }).single(nameOfKey);
  const multipleMulterUpload = (nameOfKey) =>
    multer({ storage: storage }).array(nameOfKey);
  

  module.exports = {
  singleFileUpload,
  multipleFilesUpload,
  singleMulterUpload,
  multipleMulterUpload
};