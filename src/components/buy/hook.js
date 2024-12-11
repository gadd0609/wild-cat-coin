export default function buy (){
  const info = [
    {
      title: '1. Step: Create a Wallet',
      info: 'download phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.',
      imageUrl:'https://i.pinimg.com/originals/27/b5/1d/27b51dbb41902c10c87c90e706b1ab86.png',
    },
    {
      title: '2. Step: Get Some SOL',
      info: 'have SOL in your wallet to switch to $WILD. If you don’t have any SOL, you can buy directly on phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.',
      imageUrl:'https://cryptologos.cc/logos/solana-sol-logo.png',
    },
    {
      title: '3. Step: Go pump.fun',
      info: 'Connect to pump.fun. Go to pump.fun/swap in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $SOL token address into pump.fun, select WildCatCoin, and confirm. When Phantom prompts you for a wallet signature, sign.',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1778364768933511168/Z4l25TVt_400x400.jpg',
    },
    {
      title: '4. Step: Switch SOL for $WILD',
      info: 'switch SOL for $WILD. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.',
      imageUrl:
        'https://cryptologos.cc/logos/solana-sol-logo.png'
    }
  ]

    return{
        info
    }
}