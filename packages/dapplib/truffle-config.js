require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain clutch grace indoor flower gas'; 
let testAccounts = [
"0xe78b756158c529e817427ebeb0b17626ff5d9c51c2082feb2259fa707eae9aa5",
"0x53a5284df48f19ffee30605211a20e84d2cfd18aa39621d69b26f2cb2513d325",
"0x92a0d77daddc34b44af78e216fe118b1c86fc0c55bac5c97ba96e79f9d6beef5",
"0x0179035a715be01835b85954b14c8f1100427b2f5d567dc72e32bacf112c3fc9",
"0x63a55a8f3780b4a11876225f578205e3ac37121453c400f70b9c952d4336745e",
"0xefbdaab5fdbea5a4367e39e3cf5c53c7e029a0359477c69f0ec79742b25a109e",
"0xedef7a0f2b8c79f3b83c5225d14749a6122d00f7ed8feffc066994d4a999d87b",
"0x9c8f9c83ff002b791026f44f5a1141518d3f2aa6b8423d0d7b831fd46626ccd3",
"0xbd33c3656963713865c16bef4ff030ce514b25c2236b1087055a533d9194709f",
"0x0e4a12545b1289b30829a6df8133a78eb698c00d6bfd7dab108359b371ebde4b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


