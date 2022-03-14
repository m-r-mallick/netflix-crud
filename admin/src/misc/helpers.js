export const fileToDataURI = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      //TODO: add condition check for no file and reject message
      reader.onload = (event) => {
         resolve(event.target.result);
      };
      reader.readAsDataURL(file);
   });

export const b64toBlob = (b64Data, contentType) => {
   var byteString = atob(b64Data.split(",")[1]);
   var ab = new ArrayBuffer(byteString.length);
   var ia = new Uint8Array(ab);

   for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
   }
   console.log(URL.createObjectURL(new Blob([ab], { type: contentType })));

   return URL.createObjectURL(new Blob([ab], { type: contentType }));
};
