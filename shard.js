const { ShardingManager } = require('discord.js');
const ayarlar = require('./config.json');

const manager = new ShardingManager('./index.js', {
    shardCount: 'auto',
    token: ayarlar.token
});

// Sunucu oluşturma ve proje aktivitesi sağlama.
const express = require('express');
const app = express();
const port = 3000;

// Web sunucu
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında yürütülüyor.`);
});

manager.spawn();

manager.on('shardCreate', shard => {
    console.log(`Shard ${shard.id} başarıyla başlatıldı.`);
});
