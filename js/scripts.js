// Gráfico de líneas para Overview
const ctxOverview = document.getElementById('overview_chart').getContext('2d');
const overviewChart = new Chart(ctxOverview, {
    type: 'line',
    data: {
        labels: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01'], // Ejemplo de fechas
        datasets: [{
            label: 'Overview',
            data: [100, 200, 150, 300, 250], // Ejemplo de datos
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});

// Gráfico de velas para Stocks
const ctxStocks = document.getElementById('stocks_chart').getContext('2d');
const stocksChart = new Chart(ctxStocks, {
    type: 'candlestick',
    data: {
        datasets: [{
            label: 'Stock Prices',
            data: [
                {t: '2024-01-01', o: 100, h: 120, l: 90, c: 110},
                {t: '2024-02-01', o: 110, h: 130, l: 100, c: 120},
                {t: '2024-03-01', o: 120, h: 140, l: 110, c: 130},
                {t: '2024-04-01', o: 130, h: 150, l: 120, c: 140},
                {t: '2024-05-01', o: 140, h: 160, l: 130, c: 150}
            ]
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price'
                }
            }
        }
    }
});

// Gráfico de barras para Crypto
const ctxCrypto = document.getElementById('crypto_chart').getContext('2d');
const cryptoChart = new Chart(ctxCrypto, {
    type: 'bar',
    data: {
        labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano'],
        datasets: [{
            label: 'Crypto Volume',
            data: [500, 400, 300, 200, 100],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Cryptocurrency'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Volume'
                }
            }
        }
    }
});

// Gráfico de dispersión para NFTs
const ctxNFTs = document.getElementById('nfts_chart').getContext('2d');
const nftsChart = new Chart(ctxNFTs, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'NFT Prices vs Rarity',
            data: [
                {x: 10, y: 1},
                {x: 15, y: 2},
                {x: 8, y: 3},
                {x: 12, y: 4},
                {x: 20, y: 5}
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)'
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Price'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Rarity'
                }
            }
        }
    }
});
