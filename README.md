---
description: >-
  Avalanche üzerinde limitlere takılmadan uygulamalar geliştirin.  Avalanche üzerinde çalışan geliştiriciler 
  kolaylıkla güçlü, emniyetli, ve güvenli uygulamalar oluşturabilir.
---

# Geliştirici Dokümantasyonu

{% tabs %}
{% tab title="Ethereum'dan mı geliyorsunuz?" %}
{% page-ref page="build/tutorials/smart-contracts/deploy-a-smart-contract-on-avalanche-using-remix-and-metamask.md" %}

{% page-ref page="build/tutorials/smart-contracts/using-truffle-with-the-avalanche-c-chain.md" %}
{% endtab %}

{% tab title="Avalanche Cüzdan" %}
{% page-ref page="build/tutorials/nodes-and-staking/staking-avax-by-validating-or-delegating-with-the-avalanche-wallet.md" %}

{% page-ref page="build/tutorials/platform/transfer-avax-between-x-chain-and-p-chain.md" %}

{% page-ref page="build/tutorials/platform/transfer-avax-between-x-chain-and-c-chain.md" %}
{% endtab %}

{% tab title="Staking" %}
{% page-ref page="build/get-started.md" %}

{% page-ref page="build/tutorials/nodes-and-staking/" %}
{% endtab %}

{% tab title="İleri seviye" %}
{% page-ref page="build/tutorials/platform/create-a-subnet.md" %}

{% page-ref page="build/tutorials/platform/create-a-new-blockchain.md" %}

{% page-ref page="build/tutorials/smart-digital-assets/create-a-fix-cap-asset.md" %}

{% page-ref page="build/tutorials/smart-digital-assets/creating-a-variable-cap-asset.md" %}

{% page-ref page="build/tutorials/smart-digital-assets/creating-a-nft-part-1.md" %}
{% endtab %}
{% endtabs %}

## Avalanche

[Avalanche](https://avax.network) is an open-source platform for launching [decentralized applications](https://support.avalabs.org/en/articles/4587146-what-is-a-decentralized-application-dapp) and enterprise [blockchain](http://support.avalabs.org/en/articles/4064677-what-is-a-blockchain) deployments in one interoperable, highly scalable ecosystem. Avalanche is the first smart contracts platform that processes 4,500+ transactions/second and instantly confirms transactions. Ethereum developers can quickly build on Avalanche as Solidity works out-of-the-box.

A key difference between Avalanche and other decentralized networks is the consensus protocol. Over time, people have come to a false understanding that blockchains have to be slow and not scalable. The Avalanche protocol employs a novel approach to consensus to achieve its strong safety guarantees, quick finality, and high-throughput, without compromising decentralization.

## AVAX

AVAX is the native token of Avalanche. It’s a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche. `1 nAVAX` is equal to `0.000000001 AVAX`.

## Avalanche Konsensüs Protokolü

![Consensus Comparison](.gitbook/assets/consensus-comparison.png)

Protocols in the Avalanche family operate through repeated sub-sampled voting. When a [validator](http://support.avalabs.org/en/articles/4064704-what-is-a-blockchain-validator) is determining whether a [transaction](http://support.avalabs.org/en/articles/4587384-what-is-a-transaction) should be accepted or rejected, it asks a small, random subset of validators whether they think the transaction should be accepted or rejected. If the queried validator thinks the transaction is invalid, has already rejected the transaction, or prefers a conflicting transaction, it replies that it thinks the transaction should be rejected. Otherwise, it replies that it thinks the transaction should be accepted.

If a sufficiently large portion \(_alpha_ $$α$$\) of the validators sampled reply that they think the transaction should be accepted, the validator prefers to accept the transaction. That is, when it is queried about the transaction in the future, it will reply that it thinks the transaction should be accepted. Similarly, the validator will prefer to reject the transaction if a sufficiently large portion of the validators replies that they think the transaction should be rejected.

The validator repeats this sampling process until _alpha_ of the validators queried reply the same way \(accept or reject\) for _beta_ $$β$$ consecutive rounds.

In the common case when a transaction has no conflicts, finalization happens very quickly. When conflicts exist, honest validators quickly cluster around conflicting transactions, entering a positive feedback loop until all correct validators prefer that transaction. This leads to the acceptance of non-conflicting transactions and the rejection of conflicting transactions.

![How Avalanche Consensus Works](.gitbook/assets/howavalancheconsensusworks.png)

It is guaranteed \(with high probability based on system parameters\) that if any honest validator accepts or rejects a transaction, all honest validators will accept or reject that transaction.

Learn more technical components of the Avalanche consensus protocol by reading the [whitepaper](https://arxiv.org/pdf/1906.08936.pdf).

## Snowman Consensus Protocol

Snowman is a chain-optimized consensus protocol–high-throughput, totally-ordered, and great for smart contracts. Snowman is powered by the [Avalanche consensus protocol](./#avalanche-consensus-protocol). Both [P-Chain](learn/platform-overview/#platform-chain-p-chain) and [C-Chain](learn/platform-overview/#contract-chain-c-chain) implement the Snowman consensus protocol.

## Ana Özellikler

### Hız

Uses a novel consensus protocol, developed by a team of Cornell computer scientists, and is able to permanently confirm transactions in under 1 second.

### Ölçeklenebilirlik

Capable of 4,500 transactions per second–an order of magnitude greater than existing blockchains.

### Güvenlik

Ensures stronger security guarantees well-above the 51% standard of other networks.

### Esneklik

Easily create custom blockchains and decentralized apps that contain almost any arbitrary logic.

### Sürdürülebilirlik

Uses energy-efficient proof-of-stake consensus algorithm rather than proof-of-work.

### Akıllı Sözleşme Desteği

Supports the creation of Solidity smart contracts and your favorite Ethereum tools like Remix, Metamask, Truffle, and more.

### Private and Public Blockchains

Create your own public or private blockchains.

### Designed for Finance

Native support for easily creating and trading digital smart assets with complex, custom rulesets.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ3Mzk1Nzc0MCwxMDE3MDYwNjc3LDQ1MD
U0ODY4MywtODg5NTY3MjJdfQ==
-->