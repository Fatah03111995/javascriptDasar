const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });


const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

//dibawah ini yang langkah membuat object composition
const personalEnterprise = (from, message, store) => {
    const self = {from, message,store}; //attr from sama seperti this.from = from
    const personalEnterpriseBehaviours = self => ({
        createCatalogue : () => console.log(`catalogue has created, ${self.store}`)
    }) //method
    return Object.assign(self, canSendMessage(self), checkIsValidPhone(self), personalEnterpriseBehaviours(self)) //memasukkan methode dan langsung di assign
} //tidak melakukan extends ke canSendMessage, dan juga checkIsValidPhone

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
console.log(pe1);
pe1.createCatalogue(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih
