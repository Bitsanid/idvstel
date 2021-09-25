import { Component, h } from "@stencil/core";
import * as StellarSdk from "stellar-sdk";

@Component({
  tag: 'idvstel-wallet',
  styleUrl: 'idvstel-wallet.scss',
  shadow: true,
})
export class IdvstelWallet {

  render() {
    return [
      <h1>
        {!!StellarSdk
          ? "The StellarSdk is ready to rock 🤘"
          : "Uh oh, the StellarSdk is missing 😱"}
      </h1>
    ];
  }
}
