<template>
  <div id="app" class="doc m-5">
    <div class="m-2">
      <div class="center white-text large bold"><a href="https://github.com/threadk1ll" class="link pink">@threadk1ll</a>'s Ethereum
        Documentation.</div>
      <p class="center white-text"><em>The keys to the castle, the lie of the land</em></p>
      <br>
      <p class="center white-text">Here holds the private work, "Hello World"s, documentation, and dark magic of the way that
        <code>ethereum dev-tools</code> are used by threadk1ll, as well as <strong class="purple">solidity</strong>.
      </p>
    </div>

    <div class="columns m-5 is-mobile is-narrow is-multiline white-text">
      <div class="column is-full boxeh m-2">
        <p class="bold title white-text">Now, what the hell is Ethereum?</p>
        <p>Ethereum is the future. It is also the home of Ether ($ETH) and solidity, a contract based programming
          language. Tools that <code>ethereum.org</code> provides to developers help advance towards the future: the
          blockchain.</p>
      </div>
      <div class="column is-full boxeh m-2">
        <div class="bold title white-text">Why are we using Solidity?</div>
        <p>Using solidity helps guarantee transactions that are 'secure' and can be managed. These transactions are also
          asynchronous, which helps avoid a clusterfuck that no development team wants. Since solidity is part of
          ethereum and supports the blockchain as well as development, it can be predicted to be extremely useful and
          helpful while moving towards blockchain/crypto development. There are rumors of using contract-based languages
          / blockchain implementation in game actions, and as <a class="pink"
                                                                 href="https://www.coinbase.com/price/ethereum">$ETH</a>
          could possibly be <strong class="purple bold"><em>to the moon</em></strong> &#x1F680;, <a
              href="https://github.com/threadk1ll" class="pink">@threadk1ll</a>'s gotta be prepared.</p>
      </div>
      <div class="column is-full boxeh m-2">
        <p class="bold title white-text">References</p>
        <p><a class="pink bold" target="_blank" href="https://sleeepy.ninja/docs/eth/sources">SOURCES, DOCUMENTATION, READING</a></p>
      </div>
      <div class="column is-full boxeh m-2">
        <p class="bold title white-text">Baby code.</p>
        <p>Of course, when jumping right into a language -- we read the documentation. After exercising the <code>Zombies</code>
          activity, <a class="pink bold" href="https://github.com/bfu4">@bfu4</a> played around with drafting
          sorts of contracts and compiling them, to understand the language flow to a more <strong class="purple"><em>in
            depth</em></strong> extent.</p>
        <p class="m-1">~ From the first sol-playground, this was written:
          <a class="pink" href="https://gist.github.com/bfu4/593a1c341fe03124a0f458bcb60bb053">(GIST - private
            sol playground)</a></p>
      </div>
      <div class="m-5 center">
        <img src="https://sleeeepyti.me/images/qcode.png" class="round-image" alt="owo" title=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class EthDocPage extends Vue { }
</script>