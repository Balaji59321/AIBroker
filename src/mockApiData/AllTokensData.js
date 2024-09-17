export const filterMapper = {
    tokenName: "name",
    value: "details.code",
    holdings: "holders.amount",
    sentiment: "sentiment",
    watchList: "details.watchListCount"
}

const tokenData = [
    {
      id: 1,
      name: "Bitcoin",
      type: "Coin",
      currency: "$",
      details: {
        code: "BTC",
        value: 29025.99,
        variationLevel: "-2.39",
        watchListCount: 3994278,
        low: 26910.2,
        high: 31481.6,
        icon: "https://dribbble.com"
      },
      marketCap: {
        currMarket: {
          Cap: 561.87,
          currencyDen: "B",
          variationLevel: "-9.17%",
        },
        last24HrTrend: {
          volume: 30.92,
          currencyDen: "B",
        },
      },
      volume: {
        value: 30.92,
        currencyDen: "B",
        variationLevel: "+19.23",
        decentralizedVol: "30.92",
        decentralizedVolDen: "B",
        centralizedVol: "21.79",
        centralizedVolDen: "M",
      },
      ciruculatingSupply: {
        value: 19.36,
        currencyDen: "M",
        variationLevel: "92%",
        maxSupply: 21.0,
        maxSupplyDen: "M",
        totalSupply: 19.36,
        totalSupplyDen: "M",
      },
      social: {
        following: {
          discord: "91.3K",
          twitter: "91.3K",
          discordVariation: "+2.35",
          twitterVariation: "+2.35",
        },
        interactions: {
          discord: "12K",
          twitter: "10K",
          discordVariation: "+0.35",
          twitterVariation: "+0.35",
        },
      },
      holders: {
        amount: 4397229,
        variation: "-0.0004",
      },
      statistics: [2, 3, 1.5, 3.2, 2.8, 4.5, 3.9],
      sentiment: "Fear",
      sentimentValue: 20,
    },
    {
      id: 2,
      name: "Ethereum",
      type: "Coin",
      currency: "$",
      details: {
        code: "ETH",
        value: 1887.93,
        variationLevel: "-1.41",
        watchListCount: 2787321,
        low: 1792.88,
        high: 1835.55,
        icon: "https://medium.com",
      },
      marketCap: {
        currMarket: {
          Cap: 218.81,
          currencyDen: "B",
          variationLevel: "-9.17%",
        },
        last24HrTrend: {
          volume: 3.98,
          currencyDen: "B",
        },
      },
      volume: {
        value: 15.08,
        currencyDen: "B",
        variationLevel: "+19.23",
        decentralizedVol: "30.92",
        decentralizedVolDen: "B",
        centralizedVol: "21.79",
        centralizedVolDen: "M",
      },
      ciruculatingSupply: {
        value: 120.4,
        currencyDen: "M",
        variationLevel: "92%",
        maxSupply: 31.48,
        maxSupplyDen: "M",
        totalSupply: 19.36,
        totalSupplyDen: "M",
      },
      social: {
        following: {
          discord: "85.3K",
          twitter: "85.3K",
          discordVariation: "+2.35",
          twitterVariation: "-1.35",
        },
        interactions: {
          discord: "8K",
          twitter: "8K",
          discordVariation: "+0.35",
          twitterVariation: "+0.35",
        },
      },
      holders: {
        amount: 2789332,
        variation: "+1.205",
      },
      statistics: [2, 5, 4, 3.5, 6.8, 2.5, 3.9],
      sentiment: "Extreme Greed",
      sentimentValue: 90,
    },
    {
      id: 3,
      name: "Tether",
      type: "Coin",
      currency: "$",
      details: {
        code: "USDT",
        value: 1,
        variationLevel: "-0.04",
        watchListCount: 1774123,
        low: 0.9998,
        high: 1,
        icon: "https://soundcloud.com",
      },
      marketCap: {
        currMarket: {
          Cap: 81.61,
          currencyDen: "B",
          variationLevel: "-9.17%",
        },
        last24HrTrend: {
          volume: 1.56,
          currencyDen: "B",
        },
      },
      volume: {
        value: 42.96,
        currencyDen: "B",
        variationLevel: "+19.23",
        decentralizedVol: "30.92",
        decentralizedVolDen: "B",
        centralizedVol: "21.79",
        centralizedVolDen: "M",
      },
      ciruculatingSupply: {
        value: 81.59,
        currencyDen: "B",
        variationLevel: "92%",
        maxSupply: 31.48,
        maxSupplyDen: "M",
        totalSupply: 19.36,
        totalSupplyDen: "M",
      },
      social: {
        following: {
          discord: "1.3K",
          twitter: "1.3K",
          discordVariation: "+2.35",
          twitterVariation: "+2.35",
        },
        interactions: {
          discord: "1K",
          twitter: "1K",
          discordVariation: "-0.35",
          twitterVariation: "+0.35",
        },
      },
      holders: {
        amount: 3397229,
        variation: "+1.204",
      },
      statistics: [4.3, 4.2, 4.1, 3.9, 3.8, 4.1, 4.4],
      sentiment: "Neutral",
      sentimentValue: 50,
    },
    {
      id: 4,
      name: "BNB",
      type: "Coin",
      currency: "$",
      details: {
        code: "BNB",
        value: 308.18,
        variationLevel: "-0.79",
        watchListCount: 2694378,
        low: 308.67,
        high: 312.85,
        icon: "https://yandex.com"
      },
      marketCap: {
        currMarket: {
          Cap: 51.55,
          currencyDen: "B",
          variationLevel: "-9.17%",
        },
        last24HrTrend: {
          volume: 30.92,
          currencyDen: "B",
        },
      },
      volume: {
        value: 875.15,
        currencyDen: "M",
        variationLevel: "+19.23",
        decentralizedVol: "30.92",
        decentralizedVolDen: "B",
        centralizedVol: "21.79",
        centralizedVolDen: "M",
      },
      ciruculatingSupply: {
        value: 155.8,
        currencyDen: "M",
        variationLevel: "92%",
        maxSupply: 31.48,
        maxSupplyDen: "M",
        totalSupply: 19.36,
        totalSupplyDen: "M",
      },
      social: {
        following: {
          discord: "9.3K",
          twitter: "9.3K",
          discordVariation: "+2.35",
          twitterVariation: "+2.35",
        },
        interactions: {
          discord: "2K",
          twitter: "2K",
          discordVariation: "+0.35",
          twitterVariation: "+0.35",
        },
      },
      holders: {
        amount: 1756233,
        variation: "-0.1",
      },
      statistics: [2, 3, 3.5, 4.2, 2.8, 4.5, 3.9],
      sentiment: "Greed",
      sentimentValue: 60,
    },
  ];

export default tokenData;