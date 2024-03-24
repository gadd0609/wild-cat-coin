export default function buy (){
  const info = [
    {
      title: '1. Step: Download Metamask',
      info: 'Download the official Metamask extension for Google Chrome from metamask.io and follow the steps to create an account. Don’t forget to save your recovery phrase.',
      imageUrl:'/public/MetaMask_Fox.svg.png',
    },
    {
      title: '2. Step: Purchase BNB on Exchange',
      info: 'Buy some BNB on an exchange like Binance. You will need BNB to buy $WILDCATS and pay for the gas. Once you bought BNB you can withdraw to you wallet.',
      imageUrl:'/public/bnb-bnb-logo.png',
    },
    {
      title: '3. Step: Buy $WILDCATS',
      info: 'You can now use your BNB to purchase $WILDCATS from Pancakeswap.',
      imageUrl:
        '/public/CatCoin.png',
    }
  ]

    return{
        info
    }
}