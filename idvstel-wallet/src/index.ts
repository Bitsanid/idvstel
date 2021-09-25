import "module-alias/register";
export * from "./components";

interface StellarAccount {
    publicKey: string;
    keystore: string;
  }

  @Component({
    tag: 'stellar-wallet',
    styleUrl: 'wallet.scss',
    shadow: true
  })
  export class Wallet {
    @State() account: StellarAccount
    @State() prompter: Prompter = {show: false}
    @State() error: any = null
  
    ...
  }