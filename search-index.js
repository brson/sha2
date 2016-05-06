var searchIndex = {};
searchIndex["sha2"] = {"doc":"","items":[[0,"buffer","sha2","",null,null],[3,"RefReadBuffer","sha2::buffer","",null,null],[3,"OwnedReadBuffer","","",null,null],[3,"RefWriteBuffer","","",null,null],[3,"BorrowedWriteBuffer","","",null,null],[3,"OwnedWriteBuffer","","",null,null],[4,"BufferResult","","",null,null],[13,"BufferUnderflow","","",0,null],[13,"BufferOverflow","","",0,null],[8,"ReadBuffer","","",null,null],[10,"is_empty","","",1,{"inputs":[{"name":"readbuffer"}],"output":{"name":"bool"}}],[10,"is_full","","",1,{"inputs":[{"name":"readbuffer"}],"output":{"name":"bool"}}],[10,"remaining","","",1,{"inputs":[{"name":"readbuffer"}],"output":{"name":"usize"}}],[10,"capacity","","",1,{"inputs":[{"name":"readbuffer"}],"output":{"name":"usize"}}],[11,"position","","",1,{"inputs":[{"name":"readbuffer"}],"output":{"name":"usize"}}],[10,"rewind","","",1,{"inputs":[{"name":"readbuffer"},{"name":"usize"}],"output":null}],[10,"truncate","","",1,{"inputs":[{"name":"readbuffer"},{"name":"usize"}],"output":null}],[10,"reset","","",1,{"inputs":[{"name":"readbuffer"}],"output":null}],[10,"peek_next","","",1,null],[11,"peek_remaining","","",1,null],[10,"take_next","","",1,null],[11,"take_remaining","","",1,null],[11,"push_to","","",1,{"inputs":[{"name":"readbuffer"},{"name":"w"}],"output":null}],[8,"WriteBuffer","","",null,null],[10,"is_empty","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"bool"}}],[10,"is_full","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"bool"}}],[10,"remaining","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"usize"}}],[10,"capacity","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"usize"}}],[11,"position","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"usize"}}],[10,"rewind","","",2,{"inputs":[{"name":"writebuffer"},{"name":"usize"}],"output":null}],[10,"reset","","",2,{"inputs":[{"name":"writebuffer"}],"output":null}],[10,"peek_read_buffer","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"refreadbuffer"}}],[10,"take_next","","",2,null],[11,"take_remaining","","",2,null],[10,"take_read_buffer","","",2,{"inputs":[{"name":"writebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"clone","","",0,{"inputs":[{"name":"bufferresult"}],"output":{"name":"bufferresult"}}],[11,"new","","",3,null],[11,"is_empty","","",3,{"inputs":[{"name":"refreadbuffer"}],"output":{"name":"bool"}}],[11,"is_full","","",3,{"inputs":[{"name":"refreadbuffer"}],"output":{"name":"bool"}}],[11,"remaining","","",3,{"inputs":[{"name":"refreadbuffer"}],"output":{"name":"usize"}}],[11,"capacity","","",3,{"inputs":[{"name":"refreadbuffer"}],"output":{"name":"usize"}}],[11,"rewind","","",3,{"inputs":[{"name":"refreadbuffer"},{"name":"usize"}],"output":null}],[11,"truncate","","",3,{"inputs":[{"name":"refreadbuffer"},{"name":"usize"}],"output":null}],[11,"reset","","",3,{"inputs":[{"name":"refreadbuffer"}],"output":null}],[11,"peek_next","","",3,null],[11,"take_next","","",3,null],[11,"new","","",4,{"inputs":[{"name":"vec"}],"output":{"name":"ownedreadbuffer"}}],[11,"new_with_len","","",4,{"inputs":[{"name":"vec"},{"name":"usize"}],"output":{"name":"ownedreadbuffer"}}],[11,"into_write_buffer","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"ownedwritebuffer"}}],[11,"borrow_write_buffer","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"borrowedwritebuffer"}}],[11,"is_empty","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"bool"}}],[11,"is_full","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"bool"}}],[11,"remaining","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"usize"}}],[11,"capacity","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":{"name":"usize"}}],[11,"rewind","","",4,{"inputs":[{"name":"ownedreadbuffer"},{"name":"usize"}],"output":null}],[11,"truncate","","",4,{"inputs":[{"name":"ownedreadbuffer"},{"name":"usize"}],"output":null}],[11,"reset","","",4,{"inputs":[{"name":"ownedreadbuffer"}],"output":null}],[11,"peek_next","","",4,null],[11,"take_next","","",4,null],[11,"new","","",5,null],[11,"is_empty","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"bool"}}],[11,"is_full","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"bool"}}],[11,"remaining","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"usize"}}],[11,"capacity","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"usize"}}],[11,"rewind","","",5,{"inputs":[{"name":"refwritebuffer"},{"name":"usize"}],"output":null}],[11,"reset","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":null}],[11,"peek_read_buffer","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"take_next","","",5,null],[11,"take_read_buffer","","",5,{"inputs":[{"name":"refwritebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"is_empty","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"bool"}}],[11,"is_full","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"bool"}}],[11,"remaining","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"usize"}}],[11,"capacity","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"usize"}}],[11,"rewind","","",6,{"inputs":[{"name":"borrowedwritebuffer"},{"name":"usize"}],"output":null}],[11,"reset","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":null}],[11,"peek_read_buffer","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"take_next","","",6,null],[11,"take_read_buffer","","",6,{"inputs":[{"name":"borrowedwritebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"new","","",7,{"inputs":[{"name":"vec"}],"output":{"name":"ownedwritebuffer"}}],[11,"into_read_buffer","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"ownedreadbuffer"}}],[11,"is_empty","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"bool"}}],[11,"is_full","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"bool"}}],[11,"remaining","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"usize"}}],[11,"capacity","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"usize"}}],[11,"rewind","","",7,{"inputs":[{"name":"ownedwritebuffer"},{"name":"usize"}],"output":null}],[11,"reset","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":null}],[11,"peek_read_buffer","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"refreadbuffer"}}],[11,"take_next","","",7,null],[11,"take_read_buffer","","",7,{"inputs":[{"name":"ownedwritebuffer"}],"output":{"name":"refreadbuffer"}}],[0,"digest","sha2","",null,null],[8,"Digest","sha2::digest","The Digest trait specifies an interface common to digest functions, such as SHA-1 and the SHA-2\nfamily of digest functions.",null,null],[10,"input","","Provide message data.",8,null],[10,"result","","Retrieve the digest result. This method may be called multiple times.",8,null],[10,"reset","","Reset the digest. This method must be called after result() and before supplying more\ndata.",8,{"inputs":[{"name":"digest"}],"output":null}],[10,"output_bits","","Get the output size in bits.",8,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[11,"output_bytes","","Get the output size in bytes.",8,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[10,"block_size","","Get the block size in bytes.",8,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[11,"input_str","","Convenience function that feeds a string into a digest.",8,{"inputs":[{"name":"digest"},{"name":"str"}],"output":null}],[11,"result_str","","Convenience function that retrieves the result of a digest as a\nString in hexadecimal format.",8,{"inputs":[{"name":"digest"}],"output":{"name":"string"}}],[0,"sha2","sha2","An implementation of the SHA-2 cryptographic hash algorithms.",null,null],[3,"Sha512","sha2::sha2","The SHA-512 hash algorithm with the SHA-512 initial hash value.",null,null],[3,"Sha384","","The SHA-512 hash algorithm with the SHA-384 initial hash value. The result is truncated to 384 bits.",null,null],[3,"Sha512Trunc256","","The SHA-512 hash algorithm with the SHA-512/256 initial hash value. The result is truncated to 256 bits.",null,null],[3,"Sha512Trunc224","","The SHA-512 hash algorithm with the SHA-512/224 initial hash value. The result is truncated to 224 bits.",null,null],[3,"Sha256","","The SHA-256 hash algorithm with the SHA-256 initial hash value.",null,null],[3,"Sha224","","The SHA-256 hash algorithm with the SHA-224 initial hash value. The result is truncated to 224 bits.",null,null],[5,"sha256_schedule_x4","","Performs 4 rounds of the SHA-256 message schedule update.",null,{"inputs":[{"name":"u32x4"},{"name":"u32x4"},{"name":"u32x4"},{"name":"u32x4"}],"output":{"name":"u32x4"}}],[5,"sha256_digest_round_x2","","Emulates `llvm.x86.sha256rnds2` intrinsic.",null,{"inputs":[{"name":"u32x4"},{"name":"u32x4"},{"name":"u32x4"}],"output":{"name":"u32x4"}}],[5,"sha256_digest_block_u32","","Process a block with the SHA-256 algorithm.",null,null],[5,"sha256_digest_block","","Process a block with the SHA-256 algorithm. (See more...)",null,null],[5,"sha512_schedule_x2","","Performs 2 rounds of the SHA-512 message schedule update.",null,{"inputs":[{"name":"u64x2"},{"name":"u64x2"},{"name":"u64x2"},{"name":"u64x2"}],"output":{"name":"u64x2"}}],[5,"sha512_digest_round","","Performs one round of the SHA-512 message block digest.",null,{"inputs":[{"name":"u64x2"},{"name":"u64x2"},{"name":"u64x2"},{"name":"u64x2"},{"name":"u64"}],"output":{"name":"u64x2"}}],[5,"sha512_digest_block_u64","","Process a block with the SHA-512 algorithm.",null,null],[5,"sha512_digest_block","","Process a block with the SHA-512 algorithm. (See more...)",null,null],[17,"K64","","Constants necessary for SHA-512 family of digests.",null,null],[17,"K64X2","","Constants necessary for SHA-512 family of digests.",null,null],[17,"K32","","Constants necessary for SHA-256 family of digests.",null,null],[17,"K32X4","","Constants necessary for SHA-256 family of digests.",null,null],[11,"new","","Construct an new instance of a SHA-512 digest.",9,{"inputs":[],"output":{"name":"sha512"}}],[11,"input","","",9,null],[11,"result","","",9,null],[11,"reset","","",9,{"inputs":[{"name":"sha512"}],"output":null}],[11,"output_bits","","",9,{"inputs":[{"name":"sha512"}],"output":{"name":"usize"}}],[11,"block_size","","",9,{"inputs":[{"name":"sha512"}],"output":{"name":"usize"}}],[11,"new","","Construct an new instance of a SHA-384 digest.",10,{"inputs":[],"output":{"name":"sha384"}}],[11,"input","","",10,null],[11,"result","","",10,null],[11,"reset","","",10,{"inputs":[{"name":"sha384"}],"output":null}],[11,"output_bits","","",10,{"inputs":[{"name":"sha384"}],"output":{"name":"usize"}}],[11,"block_size","","",10,{"inputs":[{"name":"sha384"}],"output":{"name":"usize"}}],[11,"new","","Construct an new instance of a SHA-512/256 digest.",11,{"inputs":[],"output":{"name":"sha512trunc256"}}],[11,"input","","",11,null],[11,"result","","",11,null],[11,"reset","","",11,{"inputs":[{"name":"sha512trunc256"}],"output":null}],[11,"output_bits","","",11,{"inputs":[{"name":"sha512trunc256"}],"output":{"name":"usize"}}],[11,"block_size","","",11,{"inputs":[{"name":"sha512trunc256"}],"output":{"name":"usize"}}],[11,"new","","Construct an new instance of a SHA-512/224 digest.",12,{"inputs":[],"output":{"name":"sha512trunc224"}}],[11,"input","","",12,null],[11,"result","","",12,null],[11,"reset","","",12,{"inputs":[{"name":"sha512trunc224"}],"output":null}],[11,"output_bits","","",12,{"inputs":[{"name":"sha512trunc224"}],"output":{"name":"usize"}}],[11,"block_size","","",12,{"inputs":[{"name":"sha512trunc224"}],"output":{"name":"usize"}}],[11,"clone","","",13,{"inputs":[{"name":"sha256"}],"output":{"name":"sha256"}}],[11,"new","","Construct an new instance of a SHA-256 digest.",13,{"inputs":[],"output":{"name":"sha256"}}],[11,"input","","",13,null],[11,"result","","",13,null],[11,"reset","","",13,{"inputs":[{"name":"sha256"}],"output":null}],[11,"output_bits","","",13,{"inputs":[{"name":"sha256"}],"output":{"name":"usize"}}],[11,"block_size","","",13,{"inputs":[{"name":"sha256"}],"output":{"name":"usize"}}],[11,"clone","","",14,{"inputs":[{"name":"sha224"}],"output":{"name":"sha224"}}],[11,"new","","Construct an new instance of a SHA-224 digest.",14,{"inputs":[],"output":{"name":"sha224"}}],[11,"input","","",14,null],[11,"result","","",14,null],[11,"reset","","",14,{"inputs":[{"name":"sha224"}],"output":null}],[11,"output_bits","","",14,{"inputs":[{"name":"sha224"}],"output":{"name":"usize"}}],[11,"block_size","","",14,{"inputs":[{"name":"sha224"}],"output":{"name":"usize"}}],[0,"symmetriccipher","sha2","",null,null],[4,"SymmetricCipherError","sha2::symmetriccipher","",null,null],[13,"InvalidLength","","",15,null],[13,"InvalidPadding","","",15,null],[8,"BlockEncryptor","","",null,null],[10,"block_size","","",16,{"inputs":[{"name":"blockencryptor"}],"output":{"name":"usize"}}],[10,"encrypt_block","","",16,null],[8,"BlockEncryptorX8","","",null,null],[10,"block_size","","",17,{"inputs":[{"name":"blockencryptorx8"}],"output":{"name":"usize"}}],[10,"encrypt_block_x8","","",17,null],[8,"BlockDecryptor","","",null,null],[10,"block_size","","",18,{"inputs":[{"name":"blockdecryptor"}],"output":{"name":"usize"}}],[10,"decrypt_block","","",18,null],[8,"BlockDecryptorX8","","",null,null],[10,"block_size","","",19,{"inputs":[{"name":"blockdecryptorx8"}],"output":{"name":"usize"}}],[10,"decrypt_block_x8","","",19,null],[8,"Encryptor","","",null,null],[10,"encrypt","","",20,{"inputs":[{"name":"encryptor"},{"name":"refreadbuffer"},{"name":"refwritebuffer"},{"name":"bool"}],"output":{"name":"result"}}],[8,"Decryptor","","",null,null],[10,"decrypt","","",21,{"inputs":[{"name":"decryptor"},{"name":"refreadbuffer"},{"name":"refwritebuffer"},{"name":"bool"}],"output":{"name":"result"}}],[8,"SynchronousStreamCipher","","",null,null],[10,"process","","",22,null],[11,"clone","","",15,{"inputs":[{"name":"symmetricciphererror"}],"output":{"name":"symmetricciphererror"}}],[11,"fmt","","",15,{"inputs":[{"name":"symmetricciphererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"process","alloc::boxed","",23,null],[11,"encrypt","","",23,{"inputs":[{"name":"box"},{"name":"refreadbuffer"},{"name":"refwritebuffer"},{"name":"bool"}],"output":{"name":"result"}}],[11,"decrypt","","",23,{"inputs":[{"name":"box"},{"name":"refreadbuffer"},{"name":"refwritebuffer"},{"name":"bool"}],"output":{"name":"result"}}]],"paths":[[4,"BufferResult"],[8,"ReadBuffer"],[8,"WriteBuffer"],[3,"RefReadBuffer"],[3,"OwnedReadBuffer"],[3,"RefWriteBuffer"],[3,"BorrowedWriteBuffer"],[3,"OwnedWriteBuffer"],[8,"Digest"],[3,"Sha512"],[3,"Sha384"],[3,"Sha512Trunc256"],[3,"Sha512Trunc224"],[3,"Sha256"],[3,"Sha224"],[4,"SymmetricCipherError"],[8,"BlockEncryptor"],[8,"BlockEncryptorX8"],[8,"BlockDecryptor"],[8,"BlockDecryptorX8"],[8,"Encryptor"],[8,"Decryptor"],[8,"SynchronousStreamCipher"],[3,"Box"]]};
initSearch(searchIndex);
