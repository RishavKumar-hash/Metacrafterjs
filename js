class NFT {
    constructor(name, country, eyeColor, job) {
        this.name = name;
        this.country = country;
        this.eyeColor = eyeColor;
        this.job = job;
    }
}

class NFTManager {
    constructor() {
        this.nfts = [];
    }

    mintNFT(name, country, eyeColor, job) {
        const newNFT = new NFT(name, country, eyeColor, job);
        this.nfts.push(newNFT);
        console.log(`Minted: ${name}`);
    }

    listNFTs() {
        this.nfts.forEach((nft, index) => {
            console.log(`\nId: ${index + 1}`);
            console.log(`Name: ${nft.name}`);
            console.log(`Country: ${nft.country}`);
            console.log(`Eye Color: ${nft.eyeColor}`);
            console.log(`Job: ${nft.job}`);
        });
        console.log("\n");
    }

    getTotalSupply() {
        return this.nfts.length;
    }
}

const nftManager = new NFTManager();

nftManager.mintNFT("Rishav", "India", "Brown", "Software Engineer");
nftManager.mintNFT("Priya", "India", "Black", "Doctor");
nftManager.mintNFT("Raj", "India", "Green", "Artist");

nftManager.listNFTs();

console.log("Total NFTs Minted: " + nftManager.getTotalSupply());
