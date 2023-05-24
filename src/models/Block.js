class Block {
    // 1. 完成构造函数及其参数
    /* 构造函数需要包含

    */
    constructor(blockChain, previousHash,index,hash) {      
        this.blockChain = blockChain;
        this.previousHash = previousHash;
        this.index=index
        this.hash=hash.toString()
        Block.prototype.hash=hash.toString()
        blockChain.addBlock(this)
    }

}

export default Block
