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

[Avalanche](https://avax.network) birlikte çalışabilir, oldukça ölçeklenebilir tek bir ekosistemde [merkezi olmayan uygulamalar](https://support.avalabs.org/en/articles/4587146-what-is-a-decentralized-application-dapp) ve kurumsal [blokzincirler](http://support.avalabs.org/en/articles/4064677-what-is-a-blockchain) oluşturmak için açık kaynaklı bir platformdur. Avalanche, saniyede 4.500'den fazla işlem gerçekleştiren ve işlemleri anında onaylayan ilk akıllı sözleşme platformudur. Ethereum geliştiricileri, Avalanche Solidity desteklediği için hızlıca geliştirme yapmaya başlayabilirler.

Avalanche ve diğer merkeziyetsiz ağlar arasındaki temel fark konsensüs prokokolüdür. Zamanla insanlar blokzincirlerin yavaş olduğu ve ölçeklenemeyeceği konusunda yanlış bir düşünceye kapıldılar. Avalanche protokolü, merkeziyetsizlikten ödün vermeden sağlam güvenlik garantileri, hızlı işlem sonlandırma ve yüksek verim elde etmek için konsensüs'de yeni bir yaklaşım kullanır. 

## AVAX

AVAX, Avalanche ağının yerel token'ıdır. İşlem ücretlerini ödemek, staking ile platformun güvenliğini sağlamak ve Avalanche üzerinde oluşturulan birden çok alt ağ arasında temel bir hesap birimi olarak kullanmak için kullanılan arzı sabit, sınırlı bir varlıktır. `1 nAVAX'ın karşılığı 0.000000001 AVAX'tır`.

## Avalanche Konsensüs Protokolü

![Konsensüs Karşılaştırması](.gitbook/assets/consensus-comparison.png)

Avalanche ailesindeki protokoller, tekrarlanan alt örneklemeli oylama yoluyla çalışır. [Doğrulayıcı](http://support.avalabs.org/en/articles/4064704-what-is-a-blockchain-validator) bir [işlemin](http://support.avalabs.org/en/articles/4587384-what-is-a-transaction) kabul edilip edilmeyeceğini belirlerken, işlemin kabul edilmesi veya reddedilmesi gerektiğini düşündükleri küçük, rastgele bir doğrulayıcı alt kümesine sorar. Sorgulanan doğrulayıcı işlemin geçersiz olduğunu düşünürse, işlemi zaten reddetmişse veya çakışan bir işlemi tercih ederse, işlemin reddedilmesi gerektiğini düşündüğü yanıtını verir. Aksi takdirde işlemin kabul edilmesi gerektiğini düşündüğünü söyler.

Örneklenen doğrulayıcıların yeterince büyük bir bölümü \(_alfa_ $$α$$\) işlemin kabul edilmesi gerektiğini düşündüklerini söylerse, doğrulayıcı işlemi kabul etmeyi tercih eder. Yani ileride işlem ile ilgili sorgulandığında işlemin kabul edilmesi gerektiğini düşündüğü cevabını verecektir. Benzer şekilde, doğrulayıcıların yeterince büyük bir kısmı işlemin reddedilmesi gerektiğini düşündükleri yanıtını verirse, doğrulayıcı işlemi reddetmeyi tercih edecektir.

Doğrulayıcı, sorgulanan doğrulayıcıların _alfa_ kadarı aynı şekilde yanıt verene kadar (kabul etme veya reddetme) _beta_ $$β$$ ardışık turlar kadar bu örnekleme sürecini tekrarlar.

İşlemin çakışmadığı sıradan bir durumda, işlem sonlandırma çok hızlı gerçekleşir. Çakışmalar olduğunda dürüst doğrulayıcılar, çakışan işlemlerin etrafında hızla kümelenir ve tüm doğru doğrulayıcılar bu işlemi tercih edene kadar olumlu bir geri bildirim döngüsüne girer. Bu, çakışmayan işlemlerin kabul edilmesine ve çakışan işlemlerin reddedilmesine yol açar.

![Avalanche Konsensüs Nasıl Çalışır](.gitbook/assets/howavalancheconsensusworks.png)

Herhangi bir dürüst doğrulayıcı bir işlemi kabul ederse veya reddederse, tüm dürüst doğrulayıcıların bu işlemi kabul edeceği veya reddedeceği garanti edilir \(sistem parametrelerine bağlı olarak yüksek olasılıkla\).

[whitepaper](https://arxiv.org/pdf/1906.08936.pdf)'ı okuyarak Avalanche konsensüs protokolünün daha teknik bileşenlerini öğrenin.

## Snowman Konsensüs Protokolü

Snowman, zincir için optimize edilmiş bir fikir birliği protokolüdür; yüksek verimli, tamamen sıralı işlemler ve akıllı sözleşmeler için harikadır. Snowman is powered by the [Avalanche consensus protocol](./#avalanche-consensus-protocol). Both [P-Chain](learn/platform-overview/#platform-chain-p-chain) and [C-Chain](learn/platform-overview/#contract-chain-c-chain) implement the Snowman consensus protocol.

## Ana Özellikler

### Hız

Cornell bilgisayar bilimcilerinden oluşan bir ekip tarafından geliştirilen yeni bir fikir birliği protokolü kullanır ve işlemleri 1 saniyenin altında kalıcı olarak onaylayabilir.

### Ölçeklenebilirlik

Capable of 4,500 transactions per second–an order of magnitude greater than existing blockchains.

### Güvenlik

Diğer ağların %51 standardının çok üzerinde daha güçlü güvenlik garantileri sağlar.

### Esneklik

Neredeyse her türlü keyfi mantığı içeren özel blok zincirleri ve merkeziyetsiz uygulamaları kolayca oluşturun.

### Sürdürülebilirlik

Proof-of-work algoritması yerine enerji verimliliği çok daha iyi olan proof-of-stake konsensus algoritmasını kullanır. 

### Akıllı Sözleşme Desteği

Solidity akıllı sözleşmeleri oluşturabilmeyi sağlar ve Remix, Metamask, Truffle vb. en sevdiğiniz Ethereum araçlarının destekler. 

### Özel ve Genel Blokzincirleri

Kendi genel veya özel blok zincirlerinizi oluşturun.

### Finans için Tasarlandı

Karmaşık, özel kural kümeleriyle dijital akıllı varlıkları kolayca oluşturmak ve ticaretini yapmak için çok uygundur.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMzY0Mjc2NzMsMTY2MjM5Nzk3LC0yNT
g3MDYxODUsLTE0ODk5NzQ2NzcsNzg3OTQ1NTQ1LDIwMDc2MjE1
NjIsNTIzNTEyNjIyLC0xNDc1NTU2Mzc2LC02MzY5NzI1NCwxNj
E1MzM5MjIwLC0xNTM3MDEyNjEsMTQ3Mzk1Nzc0MCwxMDE3MDYw
Njc3LDQ1MDU0ODY4MywtODg5NTY3MjJdfQ==
-->