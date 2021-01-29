<template>
  <div>
    <link rel="stylesheet" href="/styles.css"/>
    <div class="title center large white-text force-center">Some fantastic Ethereum documentation to refer to.</div>
    <div class="columns m-5 is-multiline is-mobile">
      <div class="column m-2 boxeh is-full white-text">
        <p>When picking up a new language, documentation is key. Documentation is key, in general, however, in this stance, it is <strong class="purple bold"><em>VITAL</em></strong>.
          The documentation provided here helps explain smart-contracts, decentralized apps, and Ethereum in the context of application, use, and examples, in multiple languages.</p>
        <p>Naturally, it's easier to supply documentation on one page, where it is easy to grab. That's where <code>this file (SOURCES.md)</code> comes in.</p>
      </div>
      <div class="column m-2 boxeh is-full">
        <div class="title bold white-text">Getting Started</div>
        <ul>
          <li><a class="pink" href="https://ethereum.org/en/developers/">&#x229A; Ethereum Developer Page</a></li>
        </ul>
      </div>
      <div class="column m-2 boxeh is-full">
        <div class="title bold white-text">Activities</div>
        <ul>
          <li><a class="pink" href="https://ethernaut.openzeppelin.com/level/0x4E73b858fD5D7A5fc1c3455061dE52a53F35d966">&#x229A; Ethernaut</a></li>
          <li><a class="pink" href="https://cryptozombies.io/en/solidity">&#x229A; CryptoZombies</a></li>
        </ul>
      </div>
      <div class="column m-2 boxeh is-full">
        <div class="title bold med white-text">The Ethereum Virtual Machine</div>
        <ul>
          <li><a class="pink" href="https://www.ethervm.io/">&#x229A; OpCodes</a></li>
          <li><a class="pink" href="https://www.ethervm.io/decompile">&#x229A; Solidity Decompiler</a></li>
          <li><a class="pink" href="https://www.ethervm.io/decompile/0xbcda9e0658f4eecf56a0bd099e6dbc0c91f6a8c2">&#x229A; Solidity Decompiler - Example</a></li>
          <li><a class="pink" href="https://docs.soliditylang.org/en/develop/assembly.html">&#x229A; Inline Assembly in Solidity</a></li>
        </ul>
      </div>
      <div class="column m-2 boxeh is-full">
        <div class="title bold white-text">Solidity</div>
        <div class="columns is-multiline is-mobile">
          <div class="column m-3 boxeh1 white-text">
            <h2>Documentation</h2>
            <ul>
              <li><a class="pink" href="https://docs.soliditylang.org/en/develop/index.html">&#x229A; Solidity Docs</a></li>
              <li><a class="pink" href="https://kauri.io/#">&#x229A; Kauri Docs - A Great Read</a></li>
              <li><a class="pink" href="https://docs.soliditylang.org/en/develop/layout-of-source-files.html">&#x229A; Syntax, Style, Layout</a></li>
              <li><a class="pink" href="https://docs.soliditylang.org/en/develop/layout-of-source-files.html#importing-other-source-files">&#x229A; Imports</a></li>
              <li><a class="pink" href="https://docs.soliditylang.org/en/develop/contracts.html#inheritance">&#x229A; Inheritance</a></li>
              <li><a class="red" href="https://docs.soliditylang.org/en/develop/assembly.html">❤️ Inline Assembly</a></li>
            </ul>
          </div>
          <div class="column m-3 boxeh1 white-text">
            <h2>Development</h2>
            <ul>
              <li><a class="pink" href="https://consensys.net/quorum/developers/">&#x229A; JAVA - Client Reference Page: Quorum, HomePage</a></li>
              <li><a class="pink" href="https://besu.hyperledger.org/en/stable/">&#x229A; JAVA - Client I: Besu</a></li>
              <li><a class="pink" href="https://ethereum.org/en/developers/docs/programming-languages/java/#getting-started-with-smart-contracts-and-solidity">&#x229A; JAVA - Smart Contracts and Solidity</a></li>
              <li><a class="pink" href="https://kauri.io/#collections/Eventeum/using-eventeum-to-build-a-java-smart-contract-dat/">&#x229A; JAVA - Eventeum to build a Smart Contract</a></li>
            </ul>
          </div>
          <div class="column m-3 boxeh1 white-text">
            <h2>Compiler</h2>
            <ul>
              <li><a class="pink" href="https://github.com/RainBlock/evmc-js">&#x229A; evmc bindings for node.js</a></li>
            </ul>
          </div>
          <div class="column m-3 boxeh1 white-text">
            <h2>Questions and References</h2>
            <ul>
              <li><a class="pink" href="https://ethereum.stackexchange.com/questions/42122/declarationerror-identifier-not-found-or-not-unique">&#x229A; Declaration Error - Identifier not found/unique</a></li>
              <li><a class="pink" href="https://ethereum.stackexchange.com/questions/49951/compare-structs-and-arrays-with-keccak256-in-order-to-save-gas">&#x229A; Using keccak256 to Save Gas</a></li>
              <li><a class="red" href="https://keccak.team/keccak_specs_summary.html">❤️ keccak256 - The Algorithm and Story</a></li>
              <li><a class="pink" href="https://github.com/RainBlock/ethereum-block">&#x229A; Ethereum Block Decoder</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column m-2 boxeh is-full white-text">
        <div class="title bold white-text">Some final notes.</div>
        <p>Ethereum and its respective smart contract language, <a class="pink" href="https://github.com/ethereum/solidity">solidity</a>, works across multiple platforms and languages. Our strong-suit is obviously java and the web languages, so <code>web3.js</code>, <code>java</code>, and any <code>node</code> implementations would be optimal. We are not <strong class="purple bold"><em>constrained</em></strong> to these languages, however, and are able to use others. However, using node to manage solidity development would be efficient, ideal, and portable, and because of that, is the first priority. Other implementations can occur, but management would work the most clean-ly with node.</p>
      </div>
      <div class="column m-2 boxeh is-full">
        <div class="title bold white-text">node packages</div>
        <ul>
          <li><a class="pink" href="https://www.npmjs.com/package/solidity">&#x229A; solidity</a></li>
          <li><a class="pink" href="https://www.npmjs.com/package/solhint">&#x229A; solidity code linter (solhint)</a></li>
          <li><a class="pink" href="https://www.npmjs.com/search?q=solidity">&#x229A; all solidity tagged packages</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default class Sources extends Vue { }
</script>

<style scoped>

</style>