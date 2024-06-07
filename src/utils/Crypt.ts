let encryptionKey: CryptoKey;

async function setEncryptionKey(value: any) {
    encryptionKey = value;
}

async function initEncryptionKey() {
    if (!encryptionKey) {
        encryptionKey = await crypto.subtle.generateKey(
            {
                name: "AES-GCM",
                length: 256, // 选择256位密钥长度
            },
            true, // 可以导出密钥（仅用于测试，生产中通常不需要）
            ["encrypt", "decrypt"] // 密钥用途
        );
    }
}

// 使用AES-GCM加密数据
async function encryptData(data: string): Promise<{ciphertext: ArrayBuffer, iv: ArrayBuffer}> {
    let iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12)); // 生成随机初始化向量
    let ciphertext = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv,
        },
        encryptionKey,
        new TextEncoder().encode(data)
    );
    return { ciphertext, iv };
}

export {setEncryptionKey, initEncryptionKey, encryptData}
